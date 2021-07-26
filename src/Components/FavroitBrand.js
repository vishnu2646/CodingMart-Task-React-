import React, { Component } from 'react'
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";
import b5 from "../images/b5.jpg";
import b6 from "../images/b6.jpg";
import b7 from "../images/b7.jpg";
import b8 from "../images/b8.jpg";
import b9 from "../images/b9.jpg";
// import b10 from "../images/girlcartoon.PNG";
// import w1 from "../images/watch.PNG";
// import f11 from '../images/brands.PNG';
// import f12 from '../images/brands2bag.PNG';
import IconBrand from './IconBrands';
// import { Accordion,Card } from 'react-bootstrap';
// import { FiChevronRight } from 'react-icons/fi'

export default class FavroitBrand extends Component {
    render() {
        return (
            <>
                <div className="favroite-web">
                    <div className="ml-5">
                        <h4 className="text-banner-title">Favourite Brands</h4>
                        {/* <h4 className="text-banner-subtitle"></h4> */}
                    </div>
                    <br/>
                    <div className="favroite-images" style={{cursor:"pointer"}}>
                        <img src={b1} alt="brand1" className="fimg" style={imgStyle}/>
                        <img src={b2} alt="brand1" className="fimg" style={imgStyle}/>
                        <img src={b3} alt="brand1" className="fimg" style={imgStyle}/>
                        <img src={b4} alt="brand1" className="fimg" style={imgStyle}/>
                        <img src={b5} alt="brand1" className="fimg" style={imgStyle}/>
                        <img src={b6} alt="brand1" className="fimg" style={imgStyle}/>
                        <img src={b7} alt="brand1" className="fimg" style={imgStyle}/>
                        <img src={b8} alt="brand1" className="fimg" style={imgStyle}/>
                        <img src={b9} alt="brand1" className="fimg" style={imgStyle}/>
                    </div>
                </div>
                <IconBrand/>
            </>
        )
    }
}

const imgStyle={
    width:168
}

// const accordationStyle={
//     borderRadius:0,
//     borderTop:0,
//     borderBottom:2,
//     boederRight:0,
//     boederLeft:0,
// }