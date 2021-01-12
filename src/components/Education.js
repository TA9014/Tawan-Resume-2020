import React from 'react'
import './Education.css'
function Education() {
    return (
        <div className='education-container'>
            <section className='education-content-container' id='education'>
                <div className='education-card1'>
                    <h1>Education</h1>
                </div>
                <div className='education-card1'>
                    <h1 className='academic-year'>2020</h1>
                    <h3 className='education-institute'>Codecamp Thailand (camp#7)</h3>
                    <h3 className='education-institute'>Certificate</h3>
                    <p className='education-detail'>
                        HTML, CSS, Java Script, React Js, Express Js
                    </p>
                </div>
                <div className='education-card1'>
                    <h1 className='academic-year'>2017-2019</h1>
                    <h3 className='education-institute'>Chanapatana International Design Institute</h3>
                    <h3 className='education-institute'>Diploma</h3>
                    <p className='education-detail'>
                        Interior & Product Design
                    </p>
                </div>
                <div className='education-card1'>
                    <h1 className='academic-year'>2006-2010</h1>
                    <h3 className='education-institute'>Chulalongkorn University</h3>
                    <h3 className='education-institute'>Bachelor's degree</h3>
                    <h3 className='education-institute'>2nd class honors</h3>
                    <p className='education-detail'>
                        Bachelor of Business Administration (BBA) International Program
                    </p>
                </div>
            </section>
            <section className='education-content-container' id='internship'>
                <div className='education-card1'>
                    <h1>Internship, Seminar, and Courses</h1>
                </div>
                <div className='education-card1'>
                    <h1 className='academic-year'>2016</h1>
                    <h3 className='education-institute'>ATED 315</h3>
                    <p className='education-detail'>
                        Business Strategy, Marketing Plan, Accounting, Financing
                    </p>
                </div>
                <div className='education-card1'>
                    <h1 className='academic-year'>2009</h1>
                    <h3 className='education-institute'>Access & Associates Communication Agency</h3>
                    <p className='education-detail'>
                        Inturnship, Graphic Design, Creative
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Education
