import React,{useState} from 'react'
import { Navbar,Nav,Form,FormControl,NavDropdown,Badge,Button,Row,Col,Container } from 'react-bootstrap';
import logo from "../images/logo.png";
import Carosel from './Carosel';
import { FaUser, FaRegHeart } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { BsPlusSquare } from 'react-icons/bs';
import { AiOutlineSearch,AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag,HiOutlineArrowLeft } from 'react-icons/hi';

const NavBar = () => {
    // profile
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
    setShow(!show);
    }
    const hideDropdown = e => {
    setShow(false);
    }
    //men dropdown
    const [show1, setmenShow] = useState(false);
    const showmenDropdown = (e)=>{
    setmenShow(!show1);
    }
    const hidemenDropdown = e => {
    setmenShow(false);
    }
    //women dropdown
    const [show2, setwomenShow] = useState(false);
    const showwomenDropdown = (e)=>{
    setwomenShow(!show2);
    }
    const hidewomenDropdown = e => {
    setwomenShow(false);
    }
    //kids dropdown
    const [show3, setkidShow] = useState(false);
    const showkidDropdown = (e)=>{
    setkidShow(!show3);
    }
    const hidekidDropdown = e => {
    setkidShow(false);
    }
    // Home dropdown 
    const [show4, sethomeShow] = useState(false);
    const showhomeDropdown = (e)=>{
    sethomeShow(!show4);
    }
    const hidehomeDropdown = e => {
    sethomeShow(false);
    }
    // Offer dropdown 
    const [show5, setofferShow] = useState(false);
    const showofferDropdown = (e)=>{
    setofferShow(!show5);
    }
    const hideofferDropdown = e => {
    setofferShow(false);
    }
        return (
            <div>
                <Navbar expand="lg" className="desktop fixed-top">
                    <div className="nav-brand-web">
                        <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo"/></Navbar.Brand>
                    </div>
                    <div className="nav-brand-mobile">
                        <Navbar.Brand href="#home"><HiOutlineArrowLeft/> MYNTRA</Navbar.Brand>
                    </div>
                    <div className="nav-links-web">
                        <Navbar id="basic-navbar-nav">
                            <Nav className="mr-auto ml-5">
                                <NavDropdown title="Men" id="basic-nav-dropdown" className="active" show={show1} onMouseEnter={showmenDropdown} onMouseLeave={hidemenDropdown}>
                                <div className="men-dropdown-wrapper" style={linkStyle}>
                                        <Container>
                                            <Row>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>Topwear</h6>
                                                    <NavDropdown.Item href="#action/3.1">T-Shirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Casual Shirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Formal Shirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Swearshirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sweaters</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Jackets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Blazers & Caoats</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sluts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Rain Jackets</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Indian & Festive Wear</h6>
                                                    <NavDropdown.Item href="#action/3.3">Kurtas & Kurta Sets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sherwanis</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Nehru Jackets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Dhotis</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>Bottomwear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Jeans</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Casual Trousers</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Formal Trousers</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Shorts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Track Pants & Joggers</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Innerwear & Sleepwear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Briefs & Trunks</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Boxers</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Vests</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sleepwear & Loungewear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Thermals</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>Footwear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Flats</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Casual Shoes</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Heels</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Boots</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sports Shoes & Floaters</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Sports & Active Wear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sports Accessories</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sports Equipment</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>Lingerie & Sleepwear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Bra</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Briefs</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Shapewear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sleepwear & Loungwear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Swimwear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Camisoles & Thermals</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Beauty & Personal Care</h6>
                                                    <NavDropdown.Item href="#action/3.1">Makeup</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">SkinCare</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Permium Beauty</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Lipsticks</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Fragments</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>Gadgets</h6>
                                                    <NavDropdown.Item href="#action/3.1">Smart Wearables</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Fitness Gadgets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Headphones</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Speakers</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Jewllery</h6>
                                                    <NavDropdown.Item href="#action/3.1">Fashion Jewllery</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Fine Jewllery</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Earrings</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Backpacks</h6>
                                                    <h6 style={{color:"#e75480 "}}>Handbags, Bags & Wallets</h6>
                                                    <h6 style={{color:"#e75480 "}}>Luggages & Trolleys</h6>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="Women" id="basic-nav-dropdown" className="active" show={show2} onMouseEnter={showwomenDropdown} onMouseLeave={hidewomenDropdown}>
                                    <div className="women-dropdown-wrapper" style={linkStyle}>
                                        <Container>
                                            <Row>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>indian & fusion wear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Kurtas & Sults</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Kurtis, Tunics & Tops</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Ethunic Wear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Leggings, Salwars & Churidars</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Skrits & Palazzos</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sarees</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Dress Materials</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Lehenga Cholis</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sarees</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Jackets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Dupattas & Shawls</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Belts, Scarves & More</h6>
                                                    <h6 style={{color:"#e75480 "}}>Watches & Wearables</h6>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>Western Wear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Dress</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Jumpsuits</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Tops</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Trousers & Capris</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Shorts & Skrits</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Shrugs</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sweaters & Sweatshirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Jackets & Coats</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Blazers & Waistcoats</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Plus Size</h6>
                                                    <h6 style={{color:"#e75480 "}}>Sunglasses & Frames</h6>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>Footwear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Flats</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Casual Shoes</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Heels</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Boots</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sports Shoes & Floaters</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Sports & Active </h6>
                                                    <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sports Accessories</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sports Equipment</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>Lingerie & Sleepwear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Bra</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Briefs</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Shapewear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sleepwear & Loungwear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Swimwear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Camisoles & Thermals</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Beauty & Personal </h6>
                                                    <NavDropdown.Item href="#action/3.1">Makeup</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">SkinCare</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Permium Beauty</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Lipsticks</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.5">Fragments</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#e75480 "}}>Gadgets</h6>
                                                    <NavDropdown.Item href="#action/3.1">Smart Wearables</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Fitness Gadgets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Headphones</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Speakers</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Jewllery</h6>
                                                    <NavDropdown.Item href="#action/3.1">Fashion Jewllery</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Fine Jewllery</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Earrings</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#e75480 "}}>Backpacks</h6>
                                                    <h6 style={{color:"#e75480 "}}>Handbags, Bags & Wallets</h6>
                                                    <h6 style={{color:"#e75480 "}}>Luggages & Trolleys</h6>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="Kids" id="basic-nav-dropdown" className="active" show={show3} onMouseEnter={showkidDropdown} onMouseLeave={hidekidDropdown}>
                                    <div className="kids-dropdown-wrapper" style={linkStyle}>
                                        <Container>
                                            <Row>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#f26a10"}}>Boys Clothing</h6>
                                                    <NavDropdown.Item href="#action/3.1">T-Shirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Shirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Shorts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Trousers</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Clothing Sets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Ethinic Wear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Track Pants & Pyjamas</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sarees</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Jackets, Sweater & Swearshirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Ineerwear & Sleepwear</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#f26a10 "}}>Girls Clothing</h6>
                                                    <NavDropdown.Item href="#action/3.1">Dress</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Tshirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Tops</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Clothing Sets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Ethinic Wear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Tights & Leggings</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Jeans, Sweater & Sweatshirts</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Innerwear & Sleepwear</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#f26a10"}}>Boys Footwear</h6>
                                                    <NavDropdown.Item href="#action/3.1">Sandals</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Casual Shoes</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Flip flops</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">School Shoes</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sports Shoes</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action/3.4"><h6 style={{color:"#f26a10"}}>Girls Footwear</h6></NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">Flats</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Casual Shoes</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Heels</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Flip flops</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Sandals</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">School Shoes</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#f26a10"}}>Infants</h6>
                                                    <NavDropdown.Item href="#action/3.1">Rompers & Onesies</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Clothing Sets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Tsirts & Tops</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Dresses</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Bottom Wear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Winter wear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Innerwear & Sleepwear</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Infants Accessories</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action/3.4"><h6 style={{color:"#f26a10"}}>Kids Accessories</h6></NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">Bags & Backpacks</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Watches</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Jewllery & Hair Accessories</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Eyewear</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action/3.4"><h6 style={{color:"#f26a10"}}>Home & Bath</h6></NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#f26a10"}}>Gadgets</h6>
                                                    <NavDropdown.Item href="#action/3.1">Smart Wearables</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Fitness Gadgets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Headphones</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Speakers</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action/3.4"><h6 style={{color:"#f26a10"}}>Jewllery</h6></NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">Fashion Jewllery</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Fine Jewllery</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Earrings</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action/3.4"><h6 style={{color:"#f26a10"}}>Backpacks</h6></NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4"><h6 style={{color:"#f26a10"}}>Handbags, Bags & Wallets</h6></NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4"><h6 style={{color:"#f26a10"}}>Luggages & Trolleys</h6></NavDropdown.Item>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="Home & Living" id="basic-nav-dropdown" className="active" show={show4} onMouseEnter={showhomeDropdown} onMouseLeave={hidehomeDropdown}>
                                    <div className="home-dropdown-wrapper" style={linkStyle}>
                                        <Container>
                                            <Row>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#f2c210"}}>Bed Linen & Furnishing</h6>
                                                    <NavDropdown.Item href="#action/3.1">Bedsheets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Bedding Sets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Blankets, Qulits & Dohrs</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Pillows & Pillow Covers</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Bed Covers</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{fontSize:14,color:"#f2c210"}}>Flooring</h6>
                                                    <NavDropdown.Item href="#action/3.1">Carpets</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Floor Mats & Dhurries</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Door Mats</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#f2c210"}}>Bath</h6>
                                                    <NavDropdown.Item href="#action/3.1">Bath Towels</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Hand & Face Towels</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Bench Towels</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Towels Set</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Bath Rugs</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Bath Robs</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Bathrrom Accessories</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{fontSize:14,color:"#f2c210"}}>Lamps & Lighting</h6>
                                                    <NavDropdown.Item href="#action/3.1">Floor Lamps</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Wall Lamps</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Table Lamps</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{color:"#f2c210"}}>Home Decor</h6>
                                                    <NavDropdown.Item href="#action/3.1">Plants & Planters</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Aromas & Candles</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Clocks</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Mirrors</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Wall Decor</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Wall Shelves</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Fountains</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Showpieces  & Vases</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#f2c210"}}>Cushions & Cushion Covers</h6>
                                                    <h6 style={{color:"#f2c210"}}>Cutains</h6>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#f2c210"}}>Kitchen & Table</h6>
                                                    <NavDropdown.Item href="#action/3.1">Dinnerware & Serveware</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Cups and Mugs</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Bakeware & Coolware</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Kitchen Storage & Tools</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Bar & Drinkware</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Table Covers & Furnishings</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <h6 style={{color:"#f2c210"}}>Storage</h6>
                                                    <NavDropdown.Item href="#action/3.1">Organisers</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Hooks & Holders</NavDropdown.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <h6 style={{fontSize:14,color:"#f2c210"}}>Brands</h6>
                                                    <NavDropdown.Item href="#action/3.1">Bombay Dyeing</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Spaces</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">D'Decor</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Portico New Tork</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Swayam</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Raymond Home</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Maspar</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Corelle</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Trident</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Cortina</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Story@Home</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Random</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Elementry</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">Romee</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.4">SEI by Nisha Gupta</NavDropdown.Item>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="OFFERS" id="basic-nav-dropdown" className="active" show={show5} onMouseEnter={showofferDropdown} onMouseLeave={hideofferDropdown}>
                                    <div className="offer-dropdown-wrapper" style={linkStyle}>
                                        <Container>
                                            <Row>
                                                <Col lg={3}>
                                                    <h6 style={{fontSize:14,color:"#0db7af"}}>Kurtas & Kurta Sets At Flat 60..</h6>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Shoes At Min 50%</h6>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Tshirts At Min 50%</h6>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Jeans At Min 50%</h6>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Heels & Flats Under 999</h6>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Shirts At Min 50%</h6>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Jeans At Min 50%</h6>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Tops At Min 60</h6>
                                                    
                                                </Col>
                                                <Col lg={3}>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Kidswear At Min 50%</h6>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Headphones Under 1499</h6>
                                                    <h6 style={{fontSize:14,color:"#0db7af "}}>Watches At Min 60%</h6>
                                                </Col>
                                                <Col lg={2}>

                                                </Col>
                                                <Col lg={2}>

                                                </Col>
                                                <Col lg={2}>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </NavDropdown>
                            </Nav>
                            <div>
                            <Form inline className="ml-5"> 
                                <FormControl type="text" placeholder="Search for products, brands and more" className="mr-sm-2" style={{ float:"left",lineHeight:0,position:"relative",width:550,border:0,background:"#f5f5f6",fontFamily:"FontAwesome" }}/>
                            </Form>
                            </div>
                            <div>
                            <FaUser style={{color:"black",width:19,height:19,marginLeft:26}}/>
                            <NavDropdown title="Profile" id="basic-nav-dropdown" className="active" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} style={{color:"black"}}>
                                <div className="profile-dropdown-wrapper" >
                                    <h5>Welcome</h5>
                                    <p>To access account and manage orders</p>
                                    <Button variant="outline-danger">LOGIN/SIGN UP</Button>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.1" style={linkStyle}>Orders</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" style={linkStyle}>Wishlist</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" style={linkStyle}>Gift Cards</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" style={linkStyle}>Contact Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" style={linkStyle}>Myntra Insider<Badge variant="danger"/></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" style={linkStyle}>Myntra Cridet</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5" style={linkStyle}>Coupons</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.6" style={linkStyle}>Saved Cards</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.7" style={linkStyle}>Saved Address</NavDropdown.Item>
                                </div>
                            </NavDropdown>
                            </div>
                            <div>
                                <FaRegHeart style={{color:"black",width:19,height:19,marginLeft:26}}/>
                                <Nav.Link href="#link" style={linkStyle}>Wishlist</Nav.Link>
                            </div>
                            <div>
                                <BiShoppingBag style={{color:"black",width:19,height:19,marginLeft:15}}/>
                                <Nav.Link href="#link" style={linkStyle}>Bag</Nav.Link>
                            </div>
                        </Navbar>
                    </div>
                    <div className="nav-links-mobile">
                        <Container>
                            <Row>
                                <Col>
                                    <BsPlusSquare style={iconStyle}/>
                                </Col>
                                <Col>
                                    <AiOutlineSearch style={iconStyle}/>
                                </Col>
                                <Col>
                                    <AiOutlineHeart style={iconStyle}/>
                                </Col>
                                <Col>
                                    <HiOutlineShoppingBag style={iconStyle}/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Navbar>
                <Carosel />
            </div>
        )
    }

const linkStyle={
    color:"black",
    fontSize:13
}
const iconStyle = {
    fontSize:20,
    color:"black",
}

export default NavBar