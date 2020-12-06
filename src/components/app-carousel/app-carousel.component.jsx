import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousel/slide1.jpg";
import Slide2 from "../../assets/img/carousel/slide2.jpg";
import Slide3 from "../../assets/img/carousel/slide3.jpg";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./app-carousel.style.css";


const AppCarousel = () => {
    return (
      <div id="home">
        <Carousel controls={false} indicators interval={10000} pause={false}>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <ScrollDown />
      </div>
    );
  };
  
  export default AppCarousel;