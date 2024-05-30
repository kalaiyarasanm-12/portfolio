import React, { useEffect, useState} from 'react';
import { projectData } from './Data';
import { projectsNav } from './Data';
import ProjectItems from './ProjectItems';

const Project = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectData);
        }
        else {
            const newProjects = projectData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);
    
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };
    return (
        <div>
      <div className="project__filters">
          {projectsNav.map((item, index) => { 
              return (
                  <span onClick={(e) => { handleClick(e, index) }}
                      className={`${active===index ?'active-project' :'' } project__item` }
                   key={index}>
                      {item.name}
                  </span>
              );
          })}
      </div>
      <div className="project__container container grid">
              {
                    projects.map((item) => { 
                        return <ProjectItems item={item } key={item.id} />
                    })
              }
            </div>
            </div>
    );
}

export default Project