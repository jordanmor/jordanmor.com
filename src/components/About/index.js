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

  return ( 
    <div className="page">
      <main className="about-wrapper">
        <div className="about">

          <Card />

          <Technologies 
            technologies={svgArray}
            title="Skills"
          />
          
        </div>
        <Footer />
      </main>
    </div>
   );
}
 
export default About;