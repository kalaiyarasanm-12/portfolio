import React, { useState,useEffect } from 'react'
import './certifications.css'

const Certifications = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="certification section" id="certifications">
          <h2 className="section__title">Certifications</h2>

          <div className="certification__container container grid">
              <div className="certification__content">
                  <div>
                      <i className="bx bxs-coin-stack style='color:#ffffff' certification__icon"></i>
                      <h3 className="certification__title">Full Stack Development</h3>
                  </div>

                  <span className="certification__button" onClick={()=>toggleTab(1)}>View More
            <i className='bx bx-right-arrow-alt certification__button-icon'></i></span>
          
          <div className={ toggleState===1?"certification__model activate-model" : "certification__model" }>
            <div className="certification__model-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times certification__model-close"></i>
              <h3 className="certification__model-title">Full Stack Development</h3>
              <p className="certification__model-description">
                Development using MERN Stack
              </p>
                <ul className="certification__model-services grid">
                  <li className="certification__model-service">
                    <i className="uil uil-check-circle certification__model-icon"></i>
                    <p className="certification__model-info">
                      Course offered by Inlustro Learning Private Ltd in 2022.
                    </p>
                </li>
                <li className="certification__model-service">
                    <i className="uil uil-check-circle certification__model-icon"></i>
                    <p className="certification__model-info">
                    This course helps to understand MongoDB, Express, React and Node.js
                  </p>
                </li>
                </ul>
            </div>
          </div>
        </div>
        
        <div className="certification__content">
                  <div>
                      <i className='bx bx-window certification__icon'></i>
                      <h3 className="certification__title">Web Developer Bootcamp</h3>
                  </div>

                  <span className="certification__button" onClick={()=>toggleTab(2)}>View More
            <i className='bx bx-right-arrow-alt certification__button-icon'></i></span>
          
          <div className={ toggleState===2?"certification__model activate-model" : "certification__model" }>
            <div className="certification__model-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times certification__model-close"></i>
              <h3 className="certification__model-title">Web Developer Bootcamp</h3>
              <p className="certification__model-description">
                Online Course
              </p>
                <ul className="certification__model-services grid">
                <li className="certification__model-service">
                    <i className="uil uil-check-circle certification__model-icon"></i>
                    <p className="certification__model-info">
                    Completed this course through Udemy in 2022
                    </p>
                </li>
                
                <li className="certification__model-service">
                    <i className="uil uil-check-circle certification__model-icon"></i>
                    <p className="certification__model-info">
                      This course helps to understand HTML, CSS, NodeJS, MongoDB,etc...
                    </p>
                </li>
                </ul>
            </div>
          </div>
        </div>
        
        <div className="certification__content">
                  <div>
                      <i className='bx bx-window certification__icon'></i>
                      <h3 className="certification__title">Getting Started with MongoDB Atlas</h3>
                  </div>

                  <span className="certification__button" onClick={()=>toggleTab(3)}>View More
            <i className='bx bx-right-arrow-alt certification__button-icon'></i></span>
          
          <div className={ toggleState===3?"certification__model activate-model" : "certification__model" }>
            <div className="certification__model-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times certification__model-close"></i>
              <h3 className="certification__model-title">Getting Started with MongoDB Atlas</h3>
              <p className="certification__model-description">
                Online Course
              </p>
                <ul className="certification__model-services grid">
                <li className="certification__model-service">
                    <i className="uil uil-check-circle certification__model-icon"></i>
                    <p className="certification__model-info">
                    Completed this course through MongoDB Website 2023
                    </p>
                </li>
                
                <li className="certification__model-service">
                    <i className="uil uil-check-circle certification__model-icon"></i>
                    <p className="certification__model-info">
                      Comprehensive course on MongoDB Atlas, a fully-managed cloud database service for MongoDB.
                    </p>
                </li>
                </ul>
            </div>
          </div>
        </div>


         <div className="certification__content">
          <div>
            <i class="uil uil-monitor-heart-rate certification__icon"></i>
                      <h3 className="certification__title">Machine Learning A-Z™: AI, Python & R</h3>
                  </div>

                  <span className="certification__button" onClick={()=>toggleTab(4)}>View More
            <i className='bx bx-right-arrow-alt certification__button-icon'></i></span>
          
          <div className={ toggleState===4?"certification__model activate-model" : "certification__model" }>
            <div className="certification__model-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times certification__model-close"></i>
              <h3 className="certification__model-title">Machine Learning A-Z™: AI, Python & R</h3>
              <p className="certification__model-description">
                Onilne Course
              </p>
                <ul className="certification__model-services grid">
                  <li className="certification__model-service">
                    <i className="uil uil-check-circle certification__model-icon"></i>
                    <p className="certification__model-info">
                      Complete this course through Udemy in 2022
                    </p>
                </li>
                <li className="certification__model-service">
                    <i className="uil uil-check-circle certification__model-icon"></i>
                    <p className="certification__model-info">
                      Learned many Machine Learning models and to make accurate predictions
                    </p>
                </li>
                <li className="certification__model-service">
                    <i className="uil uil-check-circle certification__model-icon"></i>
                    <p className="certification__model-info">
                      Understand specific topics like Reinforcement Learning, NLP and Deep Learning.
                    </p>
                </li>
                </ul>
            </div>
          </div>
        </div>
          </div>
    </section>
  )
}

export default Certifications