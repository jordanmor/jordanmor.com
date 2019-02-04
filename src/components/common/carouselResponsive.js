import React from 'react';
import MediaQuery from 'react-responsive';
import { Carousel } from 'react-responsive-carousel';



const CarouselResponsive = ({ images, description}) => (
  <React.Fragment>
    <MediaQuery maxWidth={740}>
      <Carousel className="carousel-container carousel-mobile" showThumbs={false} showStatus={false} autoPlay interval={5000} infiniteLoop={true} >
        {images.map((image, index) => (
          <div key={index} >
            <img 
              src={`${process.env.PUBLIC_URL}${image.match(/\/images\/.+\/project/g)[0]}-mobile-${index + 1}.png` } 
              alt={description} />
          </div>
        ))}
      </Carousel>
    </MediaQuery>
    <MediaQuery minWidth={741}>
      <Carousel className="carousel-container carousel-desktop" showThumbs={false} showStatus={false} autoPlay interval={5000} infiniteLoop={true} >
        {images.map((image, index) => (
          <div key={index} >
            <img 
              src={process.env.PUBLIC_URL + image}
              alt={description} />
          </div>
        ))}
      </Carousel>
    </MediaQuery>
  </React.Fragment>
);

export default CarouselResponsive;