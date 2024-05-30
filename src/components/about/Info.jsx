import React from 'react'

const Info = () => {
  return (
      <div className="about__info grid">
          <div className="about__box">
              <h3 className="about__title">Bachelor Of Engineering</h3>
              <span className="about__subtitle">
                    Branch: Computer Science and Engineering<br />
                    CGPA: 8.7<br/>
                    Saranathan College of Engineering, Trichy.
                  </span>
          </div>
          <div className="about__box">
                <h3 className="about__title">Seconday School</h3>
                <span className="about__subtitle">X : Percentage - 89%<br/>
                XII : Percentage - 84%<br/>
                Lakshmi Matriculaiton Hr. Sec. School, Manapparai.<br/>
                </span>
            </div>
    </div>
  )
}

export default Info