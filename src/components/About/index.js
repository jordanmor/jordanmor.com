import React from 'react';
import Technologies from '../common/technologies';
import Card from './card';
import Footer from '../footer';
import { SVGs } from '../../assets/svgs';

const About = () => {
  const svgArray = [];
  for (let prop in SVGs ) {
    svgArray.push(prop);
  }

  const websiteTechnologies = [ "React", "JavaScript", "CSS3", "HTML5", "CSS Grid & Flexbox", "Responsive Web Design"];

  return ( 
    <div className="page">
      <main className="about-wrapper">
        <div className="about">

          <Card />

          <Technologies 
            technologies={svgArray}
            title="Skills"
          />

          <Technologies 
            technologies={websiteTechnologies}
            title="Technologies Used"
            span="to Build This Website"
          />        
          
        </div>
        <Footer />
      </main>
    </div>
   );
}
 
export default About;