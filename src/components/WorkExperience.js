import React from 'react'
import './WorkExperience.css'

function WorkExperience() {
    return (
        <div>
            <section className='work-container' id='work'>
                <h1 style={{ fontSize: '3rem' }}>Work Experience</h1>
                <div className='work-card'>
                    <div className='work-year'>
                        <h1>2019 - present</h1>
                    </div>
                    <div className='work-detail'>
                        <h2>Wolfpack Design Co. Ltd.</h2>
                        <p><em>Interior Design Service</em></p>

                        <h3 style={{ marginTop: '10px' }}>Designer and Technical Support</h3>
                        <ul className='work-detail-list'>
                            <li>Concept and design development focusing on space utilization and user best experience</li>
                            <li>Produce 2D and 3D graphic with Auto CAD and 3D Max</li>
                            <li>Specialize in layout and functional design</li>
                            <li>Onsite design service</li>
                        </ul>
                    </div>
                </div>
                <div className='work-card'>
                    <div className='work-year'>
                        <h1>2019 - 2020</h1>
                    </div>
                    <div className='work-detail'>
                        <h2>Chanapatana International Design Institute</h2>
                        <p><em>Design School</em></p>

                        <h3 style={{ marginTop: '10px' }}>Teaching Assistant & Operation</h3>
                        <ul className='work-detail-list'>
                            <li>A part of the institute management team. In charge of marketing events and exhibitions such as
                            Open House, Bangkok Design Week, and Design Short Course.</li>
                            <li>Cooperate with teachers from USA, Spain, Italy, Japan, Autralia, and Germany.</li>
                            <li>Partner with SCG Ico Polimer in SCG x CIDI Design Contest.</li>
                            <li>Conduct and Assist short couses.</li>
                            <li>Selected as the international scholarship student.</li>
                        </ul>
                    </div>
                </div>
                <div className='work-card'>
                    <div className='work-year'>
                        <h1>2010 - 2018</h1>
                    </div>
                    <div className='work-detail'>
                        <h2>Buranapanit</h2>
                        <p><em>Stationery Store</em></p>

                        <h3 style={{ marginTop: '10px' }}>General Manager</h3>
                        <ul className='work-detail-list'>
                            <li>Business strategy and planning to penatrate and gain market share.</li>
                            <li>Restructuring accounting and business model to increase efficiency and tax benefit for 2 entities.</li>
                            <li>Successfully manage and execute marketing campaigns, policies, artworks, and promotion</li>
                            <li>Create coporate identities and work with marketing communication.</li>
                            <li>Planning and design store renovation.</li>
                            <li>Partnership with top stationery companies</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkExperience
