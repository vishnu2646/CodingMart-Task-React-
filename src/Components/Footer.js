import React, { Component } from 'react'
import {Container,Row,Col,Badge} from 'react-bootstrap'
import foo1 from "../images/foo1.png";
import foo2 from "../images/foo2.png";
import original from "../images/original.png";
import ret from "../images/ret.png";
import delivery from "../images/delivery.png";
import {FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa';
import {SiYoutube} from 'react-icons/si'
import {TiSocialInstagram} from 'react-icons/ti'

export default class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#FAFBFC"}}>
                <Container>
                    <Row>
                        <Col md={2}>
                            <h6 className="mt-5">online shopping</h6>
                            <br/>
                            <li className="text-muted">Men</li>
                            <li className="text-muted">Women</li>
                            <li className="text-muted">Kids</li>
                            <li className="text-muted">Home & Living</li>
                            <li className="text-muted">Offers</li>
                            <li className="text-muted">Gift Cards</li>
                            <li className="text-muted">Myntra Insider <Badge variant="danger">New</Badge></li>
                        </Col>
                        <Col md={2}>
                            <h6 className="mt-5">usefull links</h6>
                            <br/>
                            <li className="text-muted">Contact Us</li>
                            <li className="text-muted">FAQ</li>
                            <li className="text-muted">T&C</li>
                            <li className="text-muted">Terms Of Use</li>
                            <li className="text-muted">Track Orders</li>
                            <li className="text-muted">Shipping</li>
                            <li className="text-muted">Cancellation</li>
                            <li className="text-muted">Returns</li>
                            <li className="text-muted">Whitehat</li>
                            <li className="text-muted">Blog</li>
                            <li className="text-muted">Careers</li>
                            <li className="text-muted">Privacy policy</li>
                            <li className="text-muted">Site Map</li>
                        </Col>
                        <Col md={4}>
                            <h6 className="mt-5">experience myntra app on mobile</h6>
                            <br/>
                            <img src={foo1} className="mr-2" alt="android" width="125"/>
                            <img src={foo2} alt="app store" width="120"/>
                            <h6 className="mt-3">keep in touch</h6>
                            <FaFacebookSquare style={{fontSize:20,marginRight:10}}/>
                            <FaTwitterSquare style={{fontSize:20,marginRight:10}}/>
                            <SiYoutube style={{fontSize:30,marginRight:10}}/>
                            <TiSocialInstagram style={{fontSize:25,marginRight:10}}/>
                        </Col>
                        <Col md={4} className="mt-5">
                            <img src={original} alt="original" width="50"/><span style={{fontWeight:600}}> 100% ORIGINAL <span className="text-muted" style={{fontWeight:100}}> guarantee for all products at myntra.com</span></span><p></p>
                            <img src={ret} alt="return" width="50"/><span style={{fontWeight:600}}> 100% ORIGINAL <span className="text-muted" style={{fontWeight:100}}> guarantee for all products at myntra.com</span></span><p></p>
                            <img src={delivery} alt="delivery" width="50"/><span style={{fontWeight:600}}> 100% ORIGINAL <span className="text-muted" style={{fontWeight:100}}> guarantee for all products at myntra.com</span></span><p></p>
                        </Col>
                    </Row>
                    <h6>popular Searches</h6>
                    <p className="text-muted mt-3" style={pStyle}>Girls Suits | Eyeliner | Hair Serum | Maybelline Kajal | Barbie | Ben 10 | Motu Patlu | Power Rangers | Avengers | Batman | Harry Potter | Adidas | Forever 21 | Nike | Star Wars | Captain America | Nba | Girls Jackets | Kids Jeans | Girls Sweaters | Anklet | Kids Sherwani | Girls Dresses | Girls Accessories | Boys Accessories | Kids Shoes | Girls Shoes | Boys Shoes | Boys Sweaters | Kids Jacket | Girls Lehenga Choli | Kids Shrug | Skirts | Girls Jeggings | Girls Jeans | Earrings | Mini Skirts | Lip Balm | Boys Blazers | Necklace | Girls Dresses | Boys Night Suits | Teenager Bra | Denim Dresses | Girls Capris | Kids Tshirts | Kids Sweatshirts | Kids Shorts | Baby Dresses | Saree</p>
                    <Row>
                        <Col md={6}>
                            <p>In case of any concern, <span style={{fontWeight:600,color:"blue"}}>Contact Us</span></p>
                        </Col>
                        <Col md={6}>
                            <p className="text-muted" style={{textAlign:"right"}}>© 2021 www.myntra.com. All rights reserved.</p>
                        </Col>
                    </Row>
                    <hr className="line mt-0" />
                    <h6>MYNTRA FOR KIDS: IRRESISTIBLY COOL AND COMFORTABLE</h6>
                    <p className="text-muted" style={pStyle}>It is all fun and frolic when it comes to online shopping for kids at Myntra. We bring you an exhaustive lineup of children’s dresses, accessories and footwear for all occasions. We understand the amount of care which goes into raising a child. Therefore at Myntra, we have taken all efforts to bring you top-notch local and international kids’ brands. You don’t have to step into a kids’ store anymore, or browse through several kids’ online shopping sites. You will find the best price kids’ products of the highest quality right here. You can do all your online shopping for kids at Myntra without any worries.</p>
                    <h6>MYNTRA: THE ONE-STOP KIDS’ SHOP</h6>
                    <p className="text-muted" style={pStyle}>Myntra brings you a wide range of the latest kids’ dress collection as well as accessories, footwear and more. Browse through our exhaustive collection to learn why we are a single-destination kids’ shop, where you can find everything you need for your precious one.</p>
                    <li className="list text-muted mt-2" style={liStyle}>
                        Children’s clothing – We bring you the finest collection of children’s clothing online for all occasions. Dress your children in smart printed T-shirts and tops, paired with jeans and trousers. Our trendy, summery collections include shorts and skirts of all varieties. Opt for cute children’s dresses from our kids’ store. You will find many party options from our kids’ dress collection including sequined, shimmery and other embellished versions. Keep your babies warm and comfortable in rompers and sleep wear. Your kids’ shopping should include some ethnic wear for festivals. Choose from a fine range of lehenga-cholis, kurta-pyjamas, sherwanis and more. Stock up on sweaters, jackets and sweatshirts for the winters. Track pants and tracksuits work well for training and sports.
                    </li>
                    <li className="list text-muted mt-4" style={liStyle}>
                        Children’s footwear – Your kids’ online shopping is not complete without footwear. Check out sneakers and sports shoes at Myntra for boys and girls which feature comfortable fits to keep them active through the day. Your daughters can keep their feet comfortable in beautifully crafted footwear such as Mary Janes, heels, wedges, ballerinas and woven flats. We also feature very functional footwear for boys in our kids’ shopping range such as sandals, clogs, slip-on shoes and tennis shoes. Buy colourful boots for rainy days and flip-flops for the next trip to the beach.
                    </li>
                    <li className="list text-muted mt-4" style={liStyle}>
                        Children’s accessories – Your kid’s outfit is not complete without the addition of smart accessories from our kids’ online store. School-going children would love our cool versions of school bags and backpacks. Our colourful printed sunglasses and dial watches add to their cuteness factor. Your little girls are surely going to love our collection of fancy hairbands and hair clips.
                    </li>
                    <p style={pStyle} className="text-muted mt-4">Make sure you bring home fun, printed merchandise featuring your child’s favourite characters from DC Comics and Marvel studios. They can now glide along with Spiderman, and pack a punch with Thor or the <b>Incredible</b> Hulk. They can battle the dark forces with the Justice League, flying high with Superman, geared up with Batman, and jumping around with Flash or Wonder Woman. You can check out a variety of cool kids’ T-shirts jackets, joggers, footwear, bath towels, socks, action figures and play sets in this category.</p>
                    <h6>THE MOST CONVENIENT KID’S ONLINE STORE</h6>
                    <p style={pStyle} className="text-muted">Compared with other kids’ online shopping sites, Myntra is one of the most convenient places for purchasing everything that a kid needs. With simplified browsing, selection and payment procedures, you are bound to enjoy your kids’ online shopping experience. And we are not just a kids’ store. You can buy great quality merchandise for men and women as well from the comfort of your home.</p>
                </Container> 
            </div>
        )
    }
}

const pStyle={
    fontSize:13
}

const liStyle={
    fontSize:14,
    marginLeft:30,
}