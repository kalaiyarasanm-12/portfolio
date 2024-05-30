import React from 'react'
import './skills.css'

const Programming = () => {
  return (
      <div className="skills__content">
          
          <h3 className="skills__title">Programming Languages</h3>
          <div className="skills__box">
              <div className="skills__group">
                  <div className="skills__data">
                      <i class='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">Java</h3>
                          <span className="skills__level">Proficient</span>
                      </div>
                  </div>
                </div>
              <div className="skills__group">
                  <div className="skills__data">
                      <i class='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">Python</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                  </div>
                
              </div>  
          </div>

<br></br>
          <h3 className="skills__title">Database</h3>
          <div className="skills__box">
              <div className="skills__group">
                  <div className="skills__data">
                      <i class='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">MongoDB</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                  </div>
              </div>  
              <div className='skills__group'>
                   <div className="skills__data">
                      <i class='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">MySQL</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                  </div>
              </div>
          </div>

           <br></br>
          {/* <h3 className="skills__title">Design</h3>
          <div className="skills__box">
              <div className="skills__group">
                  <div className="skills__data">
                      <i class='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">Canva</h3>
                          
                      </div>
                  </div>
                  </div>
                  <div className="skills__group">
                  <div className="skills__data">
                      <i class='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">Figma</h3>
                          
                      </div>
                  </div>
                  </div>
              
          </div> */}
          
        <h3 className="skills__title">Frontend Development</h3>
          <div className="skills__box">
              <div className="skills__group">
                  <div className="skills__data">
                      <i class='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">HTML</h3>
                          <span className="skills__level">Advanced</span>
                      </div>
                  </div>

                  <div className="skills__data">
                      <i class='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">JavaScript</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                  </div>
              </div>
              <div className="skills__group">
                  <div className="skills__data">
                      <i class='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">CSS</h3>
                          <span className="skills__level">Advanced</span>
                      </div>
                  </div>
              </div>
              
          </div>
        </div>
  )
}

export default Programming