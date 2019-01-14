import React from 'react';
import profileImg from '../../assets/img/jordan-profile-pic.jpg';
import { SVGs } from '../../assets/svgs';

const About = () => {
  const svgArray = [];
  for (let prop in SVGs ) {
    svgArray.push({name: prop, svg: SVGs[prop]});
  }

  return ( 
    <div className="page">
      <main className="about">
        <h1>About Me</h1>
        <div className="card">
          <img src={profileImg} alt="Jordan Mor" />
          <h2>Jordan Mor</h2>
          <p className="lead">Front-end developer <span>with additonal back-end skills</span></p>
          <p className="about-text">Hi! I'm a software developer who loves building and working with RESTful APIs and web-based applications. I'm currently concentrating on using the MERN (MongoDB, Express, React, Node.js) stack, though I have experience building web apps with SQL databases as well. I'm also currently trying to incorporate CSS Grid & Flexbox into most of my projects, though I'm also comfortable using CSS frameworks such as Bootstrap. I'm a self-motivated, lifelong learner committed to constantly improving my skills and staying current on developments and trends in the industry.</p>
        </div>
        <h2>Skills</h2>
        <div className="skills">
          <ul>
            {svgArray.map((item, index) => (
              <li key={index}>
                <div className="skills-icon">
                  {item.svg}
                </div>
                <div className="skills-name">
                  <p>{item.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
   );
}
 
export default About;