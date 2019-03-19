import React from 'react';
import axios from 'axios';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container,Button, Modal  } from "react-bootstrap";
import  DatePicker from './DatePicker';
import './Details.css';
import Image from 'react-bootstrap/Image'
import location from './img/location.png';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';




class Details extends React.Component {

    constructor(props, context){
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.apiURL = `http://localhost:3004/restaurants/${this.props.match.params.id}`;
        this.state = {
            show: false,
            rest: {},
            coord: [0, 0]
        };
    }

    async componentDidMount(){
        const resp = await  axios.get(this.apiURL);
        const coord = [resp.data.location_long, resp.data.location_lat];

        this.setState({ rest: resp.data, coord});
    }
 
    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }


    render(){
        const jumboStyle = {
            backgroundRepeat: 'no-repeat',
            backgroundPosition : 'center',
            backgroundSize: 'cover',
            padding: '150px 0 120px 0',
            marginBottom : '70px',
            backgroundImage: `url(${this.state.rest.banner})`            
        }


        return(
            
            <>
            
                <Navbar />
                <Jumbotron fluid  style={jumboStyle} >
                    <Container >
                        <div className="jumbo-div">
                            <div className="jumbo-elements">
                                <h1 className="font-weight-bold ">{this.state.rest.name}</h1>
                                <h5 className="text-white">Hours: {this.state.rest.schedule}   &nbsp;&nbsp;&nbsp;   Phone: {this.state.rest.contact}</h5>
                            </div>
                        </div>
                    </Container>
                </Jumbotron>
                <div className=" content-margins">
                    <h2 className="font-weight-bold text-info">Book a table online</h2>
                    <p>Send a book request and {this.state.rest.name} will confirm it right away. </p>
                </div>
                <div className=" content-margins book-div text-muted reserve-div p-3">
                     <p> Book a table online </p>
                    <Button className=" mb-2 reserve-bttn" variant="primary" onClick={this.handleShow}>
                    Book
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select details for: {this.state.rest.name}</Modal.Title>
                    </Modal.Header>
                    <DatePicker />
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
                    </Modal>

                </div>

                <hr className="ml-2"/>

                <div className="content-margins">
                    <h2 className="font-weight-bold text-info">Here are a few words about {this.state.rest.name}</h2>
                    <div className="clearfix rest-description">
                        <Image className="card-image float-right" src={this.state.rest.image}  />
                        {this.state.rest.description} 
                    </div>
                </div>

                <hr className="ml-2"/>
                


                <div className="mb-5 content-margins">
                    <div className="d-block mb-2 map-text">
                    <h4 className="font-weight-bolder  d-inline mr-5 text-info">{this.state.rest.name} </h4>
                     <p className="inline-block d-inline float-right"><Image style={{ width: '40px', heigth: '40px' }} src={location} /> {this.state.rest.address}</p>
                    </div>
                    
                    <LeafletMap
                            center={this.state.coord}
                            zoom={6}
                            maxZoom={10}
                            attributionControl={true}
                            zoomControl={true}
                            doubleClickZoom={true}
                            scrollWheelZoom={true}
                            dragging={true}
                            animate={true}
                            easeLinearity={0.35}
                        >
                            <TileLayer
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                            />
                            <Marker position={this.state.coord}>
                            <Popup>
                                Popup for any custom information.
                            </Popup>
                            </Marker>
                        </LeafletMap>

                 </div>

                 <Footer />

            </>
        );

    }
}


export default Details;