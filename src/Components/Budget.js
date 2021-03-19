import React, { Component } from 'react'
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"
import p4 from "../images/p4.jpg"
import p5 from "../images/p5.jpg"
import p6 from "../images/p6.jpg"
import Brands from './Brands'
export default class Budget extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="mt-1 ml-5">
                        <br/>
                        <h4 className="text-banner-title">the kids space</h4>
                        <h4 className="text-banner-subtitle"></h4>
                    </div>
                    <br/>
                    <div className="images mt-2">
                        <img src={p1} alt="pay1" width="250" />
                        <img src={p2} alt="pay2" width="250"/>
                        <img src={p3} alt="pay2" width="250"/>
                        <img src={p4} alt="pay2" width="250"/>
                        <img src={p5} alt="pay2" width="250"/>
                        <img src={p6} alt="pay2" width="250"/>
                    </div>
                </div>
                <br/> 
                <Brands/>
            </>
        )
    }
}
