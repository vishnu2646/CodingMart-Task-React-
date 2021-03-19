import React, { Component } from 'react'
import k1 from "../images/k1.jpg";
import k2 from "../images/k2.jpg";
import Budget from './Budget';

export default class KidSpace extends Component {
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
                        <img src={k1} alt="kids1" width="50%"/>
                        <img src={k2} alt="kids2" width="50%"/>
                    </div>
                </div>
                <br/> 
                <Budget/>
            </>
        )
    }
}
