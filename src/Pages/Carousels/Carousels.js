import React from "react";
import Carousel from "react-multi-carousel";
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';



function Carousels({ data, className ,mainCarousel, gap}) {
debugger
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <Carousel 
    responsive={responsive}
    >
      {data.map((value, i) => {
        return (
          <div className={`flex flex-row justify-start ${gap} m-1`} key={i}>
            <div>
              <img src={value.img} alt="img" className={`${className}`} />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Carousels;
