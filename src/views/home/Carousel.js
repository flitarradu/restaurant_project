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
                src="http://www.shingobee.com/portals/0/restaurants-bg.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 mx-auto"
                src="http://www.thecoburgdublin.com/wp-content/gallery/homepage/dinner-at-the-coburg-restaurant-in-the-conrad-hotel-dublin_0.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 mx-auto"
                src="https://www.davos.ch/fileadmin/_processed_/csm_grischa_restaurant_84a21c1e47.jpg"
                alt="Third slide"
                />

                <Carousel.Caption >
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel >
      );
    }
}

export default CarouselCustom;