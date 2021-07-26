import React, { Component } from 'react'
import i1 from '../images/i1.jpg';
import i2 from '../images/i2.jpg';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';
import i5 from '../images/i5.jpg';
import i6 from '../images/i6.jpg';
import Fasion from './Fasion';
import { Card,Accordion,ListGroup } from 'react-bootstrap';
import { FiChevronRight } from 'react-icons/fi'
import f11 from '../images/brands.PNG';
import f13 from '../images/brands2bag1.PNG';
import b from "../images/boys.PNG";
import w1 from "../images/watch.PNG";
import f12 from '../images/brands2bag.PNG';
import b10 from "../images/girlcartoon.PNG";

export default class FavroitBrand extends Component {
    render() {
        return (
            <>
                <div className="icon-brand-web">
                    <h4 className="text-banner-title">iconic Brands</h4>
                    <div className="icon-images mt-5" style={{cursor:"pointer"}}>
                        <img src={i1} alt="brand1" className="img1Style"/>
                        <img src={i2} alt="brand1" className="img1Style"/>
                        <img src={i3} alt="brand1" className="img1Style"/>
                        <img src={i4} alt="brand1" className="img1Style"/>
                        <img src={i5} alt="brand1" className="img1Style"/>
                        <img src={i6} alt="brand1" className="img1Style"/>
                    </div>
                </div>
                <div className="icon-brand-mobile">
                    {/* start girls brand watch */}
                    <img src={b10} width="100%" alt="girl"/>
                    <div>
                    {/* Accordation start */}
                    <Accordion>
                        <Card style={accordationStyle}>
                            <Card.Header style={{background:"#fff"}}>
                                <Accordion.Toggle style={{background:"none",border:0}} eventKey="0" >
                                    Girl's Apparel <FiChevronRight />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {/* Child Accordation */}
                                    <Accordion>
                                        <Card style={accordationStyle}>
                                            <Card.Header style={{background:"#fff"}}>
                                                <Accordion.Toggle style={{background:"none",border:0}} eventKey="0">
                                                    2-6 years <FiChevronRight />
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <ListGroup>
                                                        <ListGroup.Item>DRESSES</ListGroup.Item>
                                                        <ListGroup.Item>TOPWEAR</ListGroup.Item>
                                                        <ListGroup.Item>Sports,Skrits & Leggins</ListGroup.Item>
                                                        <ListGroup.Item>Jeans,Capri & Trousers</ListGroup.Item>
                                                        <ListGroup.Item>Ethic Wear</ListGroup.Item>
                                                        <ListGroup.Item>Clothing Sets</ListGroup.Item>
                                                        <ListGroup.Item>Essentials</ListGroup.Item>
                                                        <ListGroup.Item>Winter Wear</ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={accordationStyle}>
                                            <Card.Header style={{background:"#fff"}}>
                                                <Accordion.Toggle style={{background:"none",border:0}} eventKey="1">
                                                    6-12 years <FiChevronRight />
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <ListGroup>
                                                        <ListGroup.Item>DRESSES</ListGroup.Item>
                                                        <ListGroup.Item>TOPWEAR</ListGroup.Item>
                                                        <ListGroup.Item>Sports,Skrits & Leggins</ListGroup.Item>
                                                        <ListGroup.Item>Jeans,Capri & Trousers</ListGroup.Item>
                                                        <ListGroup.Item>Ethic Wear</ListGroup.Item>
                                                        <ListGroup.Item>Clothing Sets</ListGroup.Item>
                                                        <ListGroup.Item>Essentials</ListGroup.Item>
                                                        <ListGroup.Item>Winter Wear</ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={accordationStyle}>
                                            <Card.Header style={{background:"#fff"}}>
                                                <Accordion.Toggle style={{background:"none",border:0}} eventKey="2">
                                                    12+ years <FiChevronRight />
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <ListGroup>
                                                        <ListGroup.Item>DRESSES</ListGroup.Item>
                                                        <ListGroup.Item>TOPWEAR</ListGroup.Item>
                                                        <ListGroup.Item>Sports,Skrits & Leggins</ListGroup.Item>
                                                        <ListGroup.Item>Jeans,Capri & Trousers</ListGroup.Item>
                                                        <ListGroup.Item>Ethic Wear</ListGroup.Item>
                                                        <ListGroup.Item>Clothing Sets</ListGroup.Item>
                                                        <ListGroup.Item>Essentials</ListGroup.Item>
                                                        <ListGroup.Item>Winter Wear</ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                    {/* End of Child Accordation */}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={accordationStyle}>
                            <Card.Header style={{background:"#fff"}}>
                                <Accordion.Toggle style={{background:"none",border:0}} eventKey="1">
                                    Girl's Footwear <FiChevronRight />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ListGroup>
                                        <ListGroup.Item>Flats</ListGroup.Item>
                                        <ListGroup.Item>Casual Shoes</ListGroup.Item>
                                        <ListGroup.Item>Heels</ListGroup.Item>
                                        <ListGroup.Item>Flip Flops</ListGroup.Item>
                                        <ListGroup.Item>Sandals</ListGroup.Item>
                                        <ListGroup.Item>View All</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    {/* Accordation end for girls */}
                    </div>
                    <div className="watch">
                        <img src={w1} alt="watch out for" width="100%" />
                    </div>
                    <div className="icon-brand-mobile">
                        <p>image Slider</p>
                    </div>
                    <img src={f11} alt="brands" width="100%"/>
                    <div className="bt-1" style={{borderTop:"1px solid #e75480"}}>
                        <img src={f12} alt="brands2bag" width="100%"/>
                    </div>
                    {/* end*/}
                    <img src={b} width="100%" alt="boys"/>
                    <div>
                    <Accordion >
                        <Card style={accordationStyle}>
                            <Card.Header style={{background:"#fff"}}>
                                <Accordion.Toggle  eventKey="0" style={{background:"none",border:0}}>
                                    Boys's Apparel <FiChevronRight />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {/* Child Accordation */}
                                    <Accordion>
                                        <Card style={accordationStyle}>
                                            <Card.Header style={{background:"#fff"}}>
                                                <Accordion.Toggle style={{background:"none",border:0}} eventKey="0">
                                                    2-6 years <FiChevronRight />
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <ListGroup>
                                                        <ListGroup.Item>DRESSES</ListGroup.Item>
                                                        <ListGroup.Item>TOPWEAR</ListGroup.Item>
                                                        <ListGroup.Item>Sports,Skrits & Leggins</ListGroup.Item>
                                                        <ListGroup.Item>Jeans,Capri & Trousers</ListGroup.Item>
                                                        <ListGroup.Item>Ethic Wear</ListGroup.Item>
                                                        <ListGroup.Item>Clothing Sets</ListGroup.Item>
                                                        <ListGroup.Item>Essentials</ListGroup.Item>
                                                        <ListGroup.Item>Winter Wear</ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={accordationStyle}>
                                            <Card.Header style={{background:"#fff"}}>
                                                <Accordion.Toggle style={{background:"none",border:0}} eventKey="1">
                                                    6-12 years <FiChevronRight />
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <ListGroup>
                                                        <ListGroup.Item>DRESSES</ListGroup.Item>
                                                        <ListGroup.Item>TOPWEAR</ListGroup.Item>
                                                        <ListGroup.Item>Sports,Skrits & Leggins</ListGroup.Item>
                                                        <ListGroup.Item>Jeans,Capri & Trousers</ListGroup.Item>
                                                        <ListGroup.Item>Ethic Wear</ListGroup.Item>
                                                        <ListGroup.Item>Clothing Sets</ListGroup.Item>
                                                        <ListGroup.Item>Essentials</ListGroup.Item>
                                                        <ListGroup.Item>Winter Wear</ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={accordationStyle}>
                                            <Card.Header style={{background:"#fff"}}>
                                                <Accordion.Toggle style={{background:"none",border:0}} eventKey="2">
                                                    12+ years <FiChevronRight />
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <ListGroup>
                                                        <ListGroup.Item>DRESSES</ListGroup.Item>
                                                        <ListGroup.Item>TOPWEAR</ListGroup.Item>
                                                        <ListGroup.Item>Sports,Skrits & Leggins</ListGroup.Item>
                                                        <ListGroup.Item>Jeans,Capri & Trousers</ListGroup.Item>
                                                        <ListGroup.Item>Ethic Wear</ListGroup.Item>
                                                        <ListGroup.Item>Clothing Sets</ListGroup.Item>
                                                        <ListGroup.Item>Essentials</ListGroup.Item>
                                                        <ListGroup.Item>Winter Wear</ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                    {/* End of Child Accordation */}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={accordationStyle}>
                            <Card.Header style={{background:"#fff"}}>
                                <Accordion.Toggle  eventKey="1" style={{background:"none",border:0}}>
                                    Boys's Footwear <FiChevronRight/>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ListGroup>
                                        <ListGroup.Item>Flats</ListGroup.Item>
                                        <ListGroup.Item>Casual Shoes</ListGroup.Item>
                                        <ListGroup.Item>Heels</ListGroup.Item>
                                        <ListGroup.Item>Flip Flops</ListGroup.Item>
                                        <ListGroup.Item>Sandals</ListGroup.Item>
                                        <ListGroup.Item>View All</ListGroup.Item>
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
                        <img src={f13} alt="brands2bag" width="100%"/>
                    </div>
                </div>
                <Fasion/>
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
