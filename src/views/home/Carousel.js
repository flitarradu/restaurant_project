import React, { Component } from "react";
import { Carousel  } from "react-bootstrap";


class JumbotronCustom extends Component {
    render() {
      return (
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-75 mx-auto"
                src="http://global-citizen.com/wp-content/uploads/2017/03/gunaydin-dubai.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-75 mx-auto"
                src="https://www.lingapos.com/wp-content/uploads/2017/08/Table-layout-Linga-Pic.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-75 mx-auto"
                src="https://millworkon31st.com/wp-content/uploads/2019/02/iStock-843610508_cover.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
      );
    }
}

export default JumbotronCustom;