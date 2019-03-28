import React, { Component } from "react";
import { Carousel  } from "react-bootstrap";
import './home.css';


class CarouselCustom extends Component {
    render() {
      return (
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 mx-auto"
                src={require('./img/cover1.jpg')}
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>Only the finest restaurants</h1>
                <p> Book a table now at the finest restaurants in your area</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 mx-auto"
                src={require('./img/cover2.jpg')}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1>Very quick reply</h1>
                <p>Get a quick confirmation of your reservation</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 mx-auto"
                src={require('./img/cover3.jpg')}
                alt="Third slide"
                />

                <Carousel.Caption >
                <h1>Easy to book</h1>
                <p>Book a table with only a few steps</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel >
      );
    }
}

export default CarouselCustom;