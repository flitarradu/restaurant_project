import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import './home.css';


class Testimonials extends React.Component {
    render() {
      return (
        <div className="pb-2 mb-5">
            <div class="page-header text-center  ">
                <h1 className="text-bold cards-title">SEE WHAT OTHERS SAY ABOUT US</h1>      
            </div>
            <div className="card-columns container three-testimonials ">
                <Card1 />
                <Card2 />
                <Card3 />            
            </div>
        </div>
      );
    }
}

export default Testimonials;