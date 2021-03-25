import React, { Component } from 'react';
import { Carousel,Row,Card,Col,Container } from 'react-bootstrap';
import c2 from '../images/c2.jpg'
import c1 from '../images/c1.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/card1.jpg'
import c5 from '../images/card2.jpg'
import c6 from '../images/card3.jpg'
import cr1 from '../images/cr1.jpg';
import cr2 from '../images/cr2.PNG';
import FavroitBrand from './FavroitBrand';

export default class Carosel extends Component {
    render() {
        return (
            <div className="abs" style={{cursor:"pointer"}}>
                <div className="carousel-web">
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
                </div>
                <div className="carousel-mobile mt-5">
                    <Container>
                        <Row>
                            <Col>
                                <Card style={{ width: '80px',height:'2px' }}>
                                    <Card.Img variant="top" src={c4} />
                                    <Card.Title className="text-center" style={{fontSize:12}}>GIRLS</Card.Title>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '80px',height:'2px' }}>
                                    <Card.Img variant="top" src={c5} />
                                    <Card.Title className="text-center" style={{fontSize:12}}>BOYS</Card.Title>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '80px',height:'2px' }}>
                                    <Card.Img variant="top" src={c6} />
                                    <Card.Title className="text-center" style={{fontSize:12}}>INFANTS</Card.Title>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <div className="mt-5 py-4 m-4">
                        <h4 >The kids corner</h4>
                        <Carousel style={{marginTop:"5%"}}>
                            <Carousel.Item>
                                <img className="d-block" src={cr1} alt="First slide" width="100%" height="100%"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block" src={cr2} alt="First slide" width="100%" height="100%"/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <FavroitBrand/>
            </div>
            
        )
    }
}
