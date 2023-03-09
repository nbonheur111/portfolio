import React from 'react'
import workoutracker from '../../../images/workoutracker.png'
import store from '../../../images/store.png'
import space from '../../../images/space.png'
import './index.css'

const Projects = () => {

  return (
    <div>
      <h1>Projects</h1>
      <p className='intro'>
      Welcome to my projects page! Here, you can find examples of the work I've done as a 
      software engineer. These projects range from small applications to large-scale systems, 
      showcasing my ability to work with a variety of technologies and solve complex problems. 
      I'm passionate about using technology to create innovative solutions, and I'm excited to 
      share my projects with you. Feel free to take a look and let me know if you have any 
      questions or feedback!
      </p>
      <ul className='photos'>
            <li>
              <a href='https://github.com/nbonheur111/workout_tracker' target="_blank" rel="noopener noreferrer" >
              <img src={workoutracker} alt="Workout tracker app" />
              </a>
              <div className="description">
                <h2>Workout Tracker</h2>
                <p>This is a project I created to help people track their workouts and 
                  progress over time. The innovative Workout Tracker app not only logs your
                   workouts and monitors your progress, but also motivates you to achieve 
                   your fitness goals. Gain insights and optimize your routine for maximum 
                   results, taking control of your fitness journey.
                </p>
            </div>

            </li>
        <li>
        <a href='https://github.com/nbonheur111/mongo_review' target="_blank" rel="noopener noreferrer">
        <img src={store} alt="Online Store app" />
        </a>
          <div className="description">
                <h2>Online Store</h2>
                <p>The online store is a full CRUD application built with vanilla JavaScript, 
                  CSS, and HTML. It allows users to buy and sell used technology devices. 
                  The app utilizes MongoDB, Express, Node.js, and other technologies to 
                  provide a seamless experience for users.
                </p>
          </div>
        

        </li>
        <li>
          <a href='https://github.com/nbonheur111/MOD1' target="_blank" rel="noopener noreferrer">
          <img src={space} alt="Space Battle" />
        </a>
         <div className="description">
                <h2>Space Battle</h2>
                <p>The fitst game that I ever build with html, CSS and JavaScript.
                </p>
          </div>
      
        </li>
      </ul>

      

    </div>
  )
}

export default Projects