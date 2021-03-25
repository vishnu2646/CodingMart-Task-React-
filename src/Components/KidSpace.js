import React, { Component } from 'react'
import k1 from "../images/k1.jpg";
import k2 from "../images/k2.jpg";
import Budget from './Budget';
import f11 from '../images/brands.PNG';
import l1 from '../images/last.PNG';

export default class KidSpace extends Component {
    render() {
        return (
            <>
                <div className="kid-space-web">
                    <div className="ml-5">
                        <br/>
                        <h4 className="text-banner-title">the kids space</h4>
                    </div>
                    <br/>
                    <div className="images mt-2">
                        <img src={k1} alt="kids1" width="50%"/>
                        <img src={k2} alt="kids2" width="50%"/>
                    </div>
                </div>
                <div className="kid-space-mobile">
                    <img src={f11} alt="brands" width="100%"/>
                    <img src={l1} alt="last" width="100%"/>
                </div>
                <Budget />
            </>
        )
    }
}
