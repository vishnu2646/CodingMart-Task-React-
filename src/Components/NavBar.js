import React,{useState} from 'react'
import { Navbar,Nav,Form,FormControl,NavDropdown,Badge,Button } from 'react-bootstrap';
import logo from "../images/logo.png";
import Carosel from './Carosel';
import { FaSearch, FaCartPlus } from 'react-icons/fa';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
    setShow(!show);
    }
    const hideDropdown = e => {
    setShow(false);
    }
        return (
            <div>
                <Navbar expand="lg" className="desktop fixed-top">
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ml-5">
                            <Nav.Link href="#home" style={linkStyle}>MEN</Nav.Link>
                            <Nav.Link href="#link" style={linkStyle}>WOMEN</Nav.Link>
                            <Nav.Link href="#link" style={linkStyle}>KIDS</Nav.Link>
                            <Nav.Link href="#link" style={linkStyle}>HOME & LIVING</Nav.Link>
                            <Nav.Link href="#link" style={linkStyle}>OFFERS</Nav.Link>
                            {/* <NavDropdown title="Dropdown" className="dropdown-menu w-100" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            <Form inline className="ml-5">
                                <a className="desktop-submit"><span><FaSearch/></span></a>
                                <FormControl type="text" placeholder="Search for products, brands and more" className="mr-sm-2 desktop-searchBar"/>
                            </Form>
                        </Nav>
                        <NavDropdown title="Profile" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                            <h5>Welcome</h5>
                            <p>To access account and manage orders</p>
                            <Button variant="outline-danger">LOGIN/SIGN UP</Button>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Orders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Wishlist</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gift Cards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Myntra Insider<Badge variant="danger"/></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Myntra Cridet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Coupons</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Saved Cards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">Saved Address</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link" style={linkStyle}>Wishlist</Nav.Link>
                        <Nav.Link href="#link" style={linkStyle}><span><FaCartPlus style={{color:"black"}}/></span> Bag</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
                <Carosel />
            </div>
        )
    }

const linkStyle={
    color:"black",
    fontWeight:600,
    fontSize:15
}

export default NavBar