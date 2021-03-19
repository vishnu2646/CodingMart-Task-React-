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
import IconBrand from './IconBrands'

export default class FavroitBrand extends Component {
    render() {
        return (
            <>
                <div className="mt-5">
                    <br/>
                    <div className="mt-3 ml-5">
                        <h4 className="text-banner-title">Favourite Brands</h4>
                        <h4 className="text-banner-subtitle"></h4>
                    </div>
                    <br/>
                    <div className="images">
                        <img src={b1} alt="brand1" style={imgStyle}/>
                        <img src={b2} alt="brand1" style={imgStyle}/>
                        <img src={b3} alt="brand1" style={imgStyle}/>
                        <img src={b4} alt="brand1" style={imgStyle}/>
                        <img src={b5} alt="brand1" style={imgStyle}/>
                        <img src={b6} alt="brand1" style={imgStyle}/>
                        <img src={b7} alt="brand1" style={imgStyle}/>
                        <img src={b8} alt="brand1" style={imgStyle}/>
                        <img src={b9} alt="brand1" style={imgStyle}/>
                    </div>
                </div>
                <br/>
                <IconBrand/>
            </>
        )
    }
}

const imgStyle={
    width:168
}