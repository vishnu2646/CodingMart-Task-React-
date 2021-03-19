import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import c2 from '../images/c2.jpg'
import c1 from '../images/c1.jpg'
import c3 from '../images/c3.jpg'
import FavroitBrand from './FavroitBrand';

export default class Carosel extends Component {
    render() {
        return (
            <div>
                <Carousel className="leave-top">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={c1}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={c2}
                        alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={c3}
                        alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
                <FavroitBrand/>
            </div>
            
        )
    }
}
