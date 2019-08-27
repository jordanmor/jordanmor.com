import React from 'react';
import SocialIcons from '../common/socialIcons';
import profileImg from '../../assets/img/jordan-profile-pic.jpg';

const Card = () => {
  return ( 
    <div className="card">
      <div className="container">
        <div>
          <h1>About Me</h1>
          <img src={profileImg} alt="Jordan Mor" />
          <div className="description">
            <h2>Jordan Mor</h2>
            <p className="lead">Full Stack <span>Software Developer</span></p>
            <p className="main-text">Hi! I'm a software developer who loves building web-based applications. 
              Whether building a RESTful backend service with Java, Spring Boot and an SQL database, or Node.js, Express and MongoDB, or a frontend with
              React or Angular, or even using a templating engine like Thymeleaf or Pug, I'm up to the challenge! I'm a self-motivated, lifelong learner committed to constantly improving my skills and staying current on developments and trends in the industry.</p>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
   );
}
 
export default Card;