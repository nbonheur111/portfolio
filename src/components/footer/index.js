import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import './index.css'

const Footer = () => {
  return (
    <footer>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
           
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/nbonheur111/" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/nbonheur111/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              </a>
              <a href="https://github.com/nbonheur111/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              </a>
              <p className="text-center">
              &copy; Bonheur 2023. All Rights Reserved.
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer