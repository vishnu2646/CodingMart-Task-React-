import React, { Component } from 'react'
import i1 from '../images/i1.jpg';
import i2 from '../images/i2.jpg';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';
import i5 from '../images/i5.jpg';
import i6 from '../images/i6.jpg';
import Fasion from './Fasion';

export default class FavroitBrand extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="mt-3 ml-5">
                        <br/>
                        <h4 className="text-banner-title">iconic Brands</h4>
                        <h4 className="text-banner-subtitle"></h4>
                    </div>
                    <br/>
                    <div className="images mt-5">
                        <img src={i1} alt="brand1" className="img1Style"/>
                        <img src={i2} alt="brand1" className="img1Style"/>
                        <img src={i3} alt="brand1" className="img1Style"/>
                        <img src={i4} alt="brand1" className="img1Style"/>
                        <img src={i5} alt="brand1" className="img1Style"/>
                        <img src={i6} alt="brand1" className="img1Style"/>
                    </div>
                </div>
                <br/>
                <Fasion/>
            </>
        )
    }
}


