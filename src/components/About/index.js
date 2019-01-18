import React from 'react';
import Technologies from '../common/technologies';
import Card from './card';
import { SVGs } from '../../assets/svgs';

const About = () => {
  const svgArray = [];
  for (let prop in SVGs ) {
    svgArray.push(prop);
  }

  return ( 
    <div className="page">
      <main className="wrapper">
        <div className="about">

          <Card />

          <Technologies 
            technologies={svgArray}
            title="Skills"
          />
          
        </div>
      </main>
    </div>
   );
}
 
export default About;