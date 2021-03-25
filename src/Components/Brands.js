import React, { useState } from 'react'
import b1 from "../images/br1.jpg"
import b2 from "../images/br2.jpg"
import b3 from "../images/br3.jpg"
import b4 from "../images/br4.jpg"
import b5 from "../images/br5.jpg"
import b6 from "../images/br6.jpg"
import Footer from './Footer'

const Brands = ({title}) => {
    const [showFooterElement,setShowFooter] = useState(false)
    return (
        <>
            <div className="brands-web">
                <div className="mt-1 ml-5">
                    <br/>
                    <h4 className="text-banner-title">{title}</h4>
                    {/* <h4 className="text-banner-subtitle"></h4> */}
                </div>
                <br/>
                <div className="images mt-2">
                    <img src={b1} alt="brand1" width="250"/>
                    <img src={b2} alt="brand1" width="250"/>
                    <img src={b3} alt="brand1" width="250"/>
                    <img src={b4} alt="brand1" width="250"/>
                    <img src={b5} alt="brand1" width="250"/>
                    <img src={b6} alt="brand1" width="250"/>
                </div>
            </div>
            <br/> 
            <Footer onShow={()=>setShowFooter(!showFooterElement)} showFooter={showFooterElement}/> 
        </>
    )
}
export default Brands