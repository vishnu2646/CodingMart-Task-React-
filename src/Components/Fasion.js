import React, { Component } from 'react'
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.jpg';
import f4 from '../images/f4.jpg';
import f5 from '../images/f5.jpg';
import f6 from '../images/f6.jpg';
import f7 from '../images/f7.jpg';
import f8 from '../images/f8.jpg';
import f9 from '../images/f9.jpg';
import f10 from '../images/f10.jpg';
import Explore from './Explore';
import { Card,Accordion,Carousel,ListGroup } from 'react-bootstrap';
import { FiChevronRight } from 'react-icons/fi'
import f11 from '../images/brands.PNG';
import infants from "../images/infants.PNG";
import w1 from "../images/watch.PNG";
import if2 from '../images/infantbrands.PNG';
import t1 from '../images/trands.PNG';
import trc1 from '../images/trc1.PNG';
import trc2 from '../images/trc2.PNG';
import trc3 from '../images/trc3.PNG';
import trc4 from '../images/trc4.PNG';
import trc5 from '../images/trc5.PNG';

export default class Fasion extends Component {
    render() {
        return (
            <>
                <div className="fasion-web">
                    <div className="ml-5">
                        <h4 className="text-banner-title">fashion & essentials</h4>
                    </div>
                    <div className="fasion-images mt-5">
                        <img src={f1} alt="fasion1" width="300" />
                        <img src={f2} alt="fasion1" width="300"/>
                        <img src={f3} alt="fasion1" width="300"/>
                        <img src={f4} alt="fasion1" width="300"/>
                        <img src={f5} alt="fasion1" width="300"/>
                        <img src={f6} alt="fasion1" width="300"/>
                        <img src={f7} alt="fasion1" width="300"/>
                        <img src={f8} alt="fasion1" width="300"/>
                        <img src={f9} alt="fasion1" width="300"/>
                        <img src={f10} alt="fasion1" width="300"/>
                    </div>
                </div>
                <div className="fasion-mobile">
                    <img src={infants} width="100%" alt="boys"/>
                    <div>
                    <Accordion >
                        <Card style={accordationStyle}>
                            <Card.Header style={{background:"#fff"}}>
                                <Accordion.Toggle  eventKey="0" style={{background:"none",border:0}}>
                                    Infant Boys's (0-2 Years) <FiChevronRight />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ListGroup>
                                        <ListGroup.Item>Rompers</ListGroup.Item>
                                        <ListGroup.Item>Clothing Sets</ListGroup.Item>
                                        <ListGroup.Item>Top Wear</ListGroup.Item>
                                        <ListGroup.Item>Bottom Wear</ListGroup.Item>
                                        <ListGroup.Item>Ethnic Wear</ListGroup.Item>
                                        <ListGroup.Item>Winter Wear</ListGroup.Item>
                                        <ListGroup.Item>Essentials</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={accordationStyle}>
                            <Card.Header style={{background:"#fff"}}>
                                <Accordion.Toggle  eventKey="1" style={{background:"none",border:0}}>
                                    Infant Girls's (0-2 Years) <FiChevronRight/>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ListGroup>
                                        <ListGroup.Item style={{borderRight:0}}>Rompers</ListGroup.Item>
                                        <ListGroup.Item>Clothing Sets</ListGroup.Item>
                                        <ListGroup.Item>Top Wear</ListGroup.Item>
                                        <ListGroup.Item>Bottom Wear</ListGroup.Item>
                                        <ListGroup.Item>Ethnic Wear</ListGroup.Item>
                                        <ListGroup.Item>Winter Wear</ListGroup.Item>
                                        <ListGroup.Item>Essentials</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="watch">
                        <img src={w1} alt="watch out for" width="100%" />
                    </div>
                    <div className="icon-brand-mobile">
                        <p>image Slider</p>
                    </div>
                    <img src={f11} alt="brands" width="100%"/>
                    <div className="bt-1" style={{borderTop:"1px solid #e75480"}}>
                        <img src={if2} alt="brands2bag" width="100%"/>
                    </div>
                    <div>
                        <img src={t1} alt="trands" width="100%"/>
                    </div>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={trc1} alt="First slide" width="100" height="500"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={trc2} alt="Second slide" width="100" height="500"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={trc3} alt="Third slide" width="100" height="500"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={trc4} alt="Third slide" width="100" height="500"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={trc5} alt="Third slide" width="100" height="500"/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <Explore/>
            </>
        )
    }
}

const accordationStyle={
    borderRadius:0,
    borderTop:0,
    borderBottom:2,
    boederRight:0,
    boederLeft:0,
}