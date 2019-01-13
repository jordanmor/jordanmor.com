import React from 'react';
import { SVGs } from '../../assets/svgs';

const About = () => {
  const svgArray = [];
  for (let prop in SVGs ) {
    svgArray.push({name: prop, svg: SVGs[prop]});
  }

  return ( 
    <div className="page">
      <main>
        <h1>About Me</h1>
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