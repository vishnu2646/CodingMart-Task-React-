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

export default class Fasion extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="mt-3 ml-5">
                        <br/>
                        <h4 className="text-banner-title">fashion & essentials</h4>
                        <h4 className="text-banner-subtitle"></h4>
                    </div>
                    <br/>
                    <div className="images mt-5">
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
                <br/>  
                <Explore/>
            </>
        )
    }
}
