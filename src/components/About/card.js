import React from 'react';
import profileImg from '../../assets/img/jordan-profile-pic.jpg';

const Card = () => {
  return ( 
    <div className="card">
      <div className="container">
        <h1>About Me</h1>
        <img src={profileImg} alt="Jordan Mor" />
        <div className="description">
          <h2>Jordan Mor</h2>
          <p className="lead">Front-end developer <span>with additonal back-end skills</span></p>
          <p className="main-text">Hi! I'm a software developer who loves building web-based applications. I'm currently concentrating on using the MERN (MongoDB, Express, React, Node.js) stack, though I have experience building web apps with SQL databases as well. I'm also currently trying to incorporate CSS Grid & Flexbox into most of my projects, though I'm also comfortable using CSS frameworks such as Bootstrap. I'm a self-motivated, lifelong learner committed to constantly improving my skills and staying current on developments and trends in the industry.</p>
        </div>
      </div>
    </div>
   );
}
 
export default Card;