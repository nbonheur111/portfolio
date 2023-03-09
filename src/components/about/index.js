import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

const About = () => {
  return (
    <div className='main'>

      <h1>A Little Bit About Me</h1>
      <p>
      Hello! I'm Bonheur Ndayishimiye, a software engineer with a passion for solving 
      big problems with technology. I recently graduated from the Per Scholas 
      Software Engineer Bootcamp, where I gained expertise in full-stack web 
      development using technologies such as Javascript MongoDB, Express.js, React,
       and Node.js.
      </p>
      <p> 
      I have 4+ years of leadership experience, which has taught me the importance 
      of teamwork, communication, and collaboration. I have experience in building RESTful APIs 
      and have completed several projects that have given me hands-on experience in software 
      engineering and project management. Some of my projecs include
       <Link to="https://github.com/nbonheur111/MOD1" target="_blank" rel="noopener noreferrer">Space Battle</Link>, 
       <Link to="https://github.com/nbonheur111/mongo_review" target="_blank" rel="noopener noreferrer"> Online Shopping</Link>, 
       and <Link to="https://workoutracker.onrender.com" target="_blank" rel="noopener noreferrer">Workout Tracker</Link>
      

      </p>
      <p>
      I'm excited about the future of technology and am always looking for new 
      challenges and opportunities to learn and grow.

      </p>
      <div className='push'></div>

    </div>
  )
}

export default About