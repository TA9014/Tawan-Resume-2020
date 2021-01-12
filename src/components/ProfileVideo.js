import React from 'react'
import profileClip from '../img/Sequence-01.mp4'
import './ProfileVideo.css'

function ProfileVideo() {
    return (
        <div className='clip-container'>
            <video src={profileClip} autoPlay loop muted className='video-profile'></video>
            <div className='profile-container'>
                <h1 className='profile-head'>Tawan Prathomboon</h1>
                <p className='profile-body'>
                    I worked as a general manager at Buranapanit. I was resposible for accounting, finacing and marketing.
                    I also took care of the business development to find new market and market segment. I decied to level up my
                    skills with interior design, product design and programming. It is crucial to have many sets of skills.
                    With variety of skills in different fields, I can analyse and solve the problems from many perspective and
                    allow more choices for the solutions. I also experinced in communicating in English since I was exchange student
                    when I was in high school, attended international programs and worked with expats.
            </p>
            </div>
        </div>
    )
}

export default ProfileVideo
