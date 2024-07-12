import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon}  alt=''className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomarrow's Leaders Today</h2>
            <p>Welcome to our esteemed institution, where we are dedicated to cultivating a vibrant community of learners and leaders. Established with a proud tradition of academic excellence, innovation, and inclusivity, we offer a diverse array of programs designed to challenge and inspire students, preparing them for successful careers and meaningful lives.</p>
            <p>We believe that education extends beyond the classroom. Our campus is a hub of activity and engagement, providing students with numerous opportunities for personal and professional growth. From state-of-the-art facilities to a wide range of extracurricular activities, we ensure that our students have the resources and support they need to thrive.</p>
            <p>Our dedicated faculty and staff are committed to fostering an environment that encourages intellectual curiosity, critical thinking, and a sense of community. We are proud of our rich heritage and excited about the future as we continue to innovate and adapt to meet the needs of our students and the broader world. Join us and become part of a community that values knowledge, discovery, and the power of education to transform lives.</p>
        </div>

    </div>
  )
}

export default About