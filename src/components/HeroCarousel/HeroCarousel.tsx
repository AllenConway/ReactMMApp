import * as React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./HeroCarousel.module.scss";

const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectIndex, e) => {
    setIndex(selectIndex);
    setDirection(e.direction);
  };

  var myStyle = {
    height: 800,
    width: 600
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className={styles["carousel-container"]}>
          <img
            className="d-block w-100"
            src={require("../../assets/images/Cabin1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles["carousel-container"]}>
          <img
            className="d-block w-100"
            src={require("../../assets/images/Cabin2.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles["carousel-container"]}>
          <img
            className="d-block w-100"
            src={require("../../assets/images/Cabin3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
