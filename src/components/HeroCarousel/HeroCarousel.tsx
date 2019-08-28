import * as React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./HeroCarousel.module.scss";

const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState(null);

  const handleSelect = (selectIndex, e) => {
    setIndex(selectIndex);
    // direction does not appear to be in the API anymore for the carousel when inspecting the CarouselProps and cant be set as an attributoe on Carousel like the example
    // setDirection(e.direction);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className={styles["carousel-container"]}>
          <img
            className="d-block w-100"
            src={require("../../assets/images/Cabin1.jpg")}
            alt="Mountain View"
          />
          <Carousel.Caption>
            <h3>Mountain View</h3>
            <p>Smoky Mountain West</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles["carousel-container"]}>
          <img
            className="d-block w-100"
            src={require("../../assets/images/Cabin2.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Hillside Escape</h3>
            <p>Smoky Mountain North</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles["carousel-container"]}>
          <img
            className="d-block w-100"
            src={require("../../assets/images/Cabin3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Bear Tracks</h3>
            <p>Smoky Mountain South</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
