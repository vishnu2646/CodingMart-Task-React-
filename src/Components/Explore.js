import React, { Component } from 'react'
import e1 from "../images/e1.jpg";
import e2 from "../images/e2.jpg";
import e3 from "../images/e3.jpg";
import e4 from "../images/e4.jpg";
import e5 from "../images/e5.jpg";
import e6 from "../images/e6.jpg";
import KidSpace from './KidSpace';

export default class Explore extends Component {
    render() {
        return (
            <>
               <div>
                    <div className="mt-1 ml-5">
                        <br/>
                        <h4 className="text-banner-title">Explore More</h4>
                        <h4 className="text-banner-subtitle"></h4>
                    </div>
                    <br/>
                    <div className="images mt-2">
                        <img src={e1} alt="explore1" width="50%"/>
                        <img src={e2} alt="explore2" width="50%"/>
                        <img src={e3} alt="explore3" width="50%"/>
                        <img src={e4} alt="explore4" width="50%"/>
                        <img src={e5} alt="explore5" width="50%"/>
                        <img src={e6} alt="explore6" width="50%"/>
                    </div>
                </div>
                <br/>   
                <KidSpace/>
            </>
        )
    }
}
