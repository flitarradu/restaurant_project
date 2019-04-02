import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import './home.css';


class WhyComp extends Component {
    render() {
      return (
        <>


            <div className="content-margins mb-5">
                <div className="page-header text-center  ">
                    <h1 className="text-bold cards-title">WHY COOSE US?</h1>      
                </div>
                <div className="clearfix rest-description">
                    <Image className="card-image-why float-right" src={require('./img/man1.png')}  />
                    <div className="block">
                        <div className="row">
                            <div className="span4">
                            <img className="img-left"  alt="icon" src={require('./img/star1.png')}/>
                            <div className="content-heading"><h3>Experience </h3></div>
                            <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                            <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="span4">
                            <img className="img-left" alt="icon"    src={require('./img/star2.png')}/>
                            <div className="content-heading"><h3>Great services </h3></div>
                            <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                            <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </>


      );
    }
}

export default WhyComp;