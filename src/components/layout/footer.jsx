import React from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import logo from './logome.png';
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

function Footer () {
    return (
        <Row>
            <Col xl={3}>
                <ul>
                    <li><div><a href="/#"><img src={logo} className="App-logo" alt="logo" style={{height: 80}}/></a></div></li>
                    <li><a href="/#"><span><FiPhone/></span>+(00)-0000-000-000</a></li>
                    <li><a href="/#"><span><GoMail/></span> Vendors@Demo.Com</a></li>
                   
                </ul>
            </Col>
            <Col xl={3}>
                <ul>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/terms-and-conditions">TERM & CONDITION</a></li>
                    <li><a href="/FAQ">FAQ</a></li>
                    <li><a href="/privacy">PRIVACY POLICY</a></li>  
                    <li><a href="/#">GET THE APP ON MOBILE</a></li>              
                </ul>
            </Col>
            <Col xl={3}>
                <ul>
                    <li><a href="/vendors">Vendors</a></li>
                    <li><a href="/blog-main">WEDDING BLOG</a></li>
                    <li><a href="/real-wedding">REAL WEDDING</a></li>
                    <li><a href="/vendors">WEDDING INSPIRATION GALLERY</a></li>
                </ul>
            </Col>
            <Col xl={3} className="text-white">
                <ul>
                    <li><a href="/#">Instagram</a></li>
                    <li>
                        <Row>
                            <Col sm={12}>
                                <div className="instagram">
                                    <div><Image src="/img/hero-home.png" className="img-fluid"/></div>
                                    <div><Image src="/img/hero-home.png" className="img-fluid"/></div>
                                    <div><Image src="/img/hero-home.png" className="img-fluid"/></div>
                                </div>
                            </Col>   
                            <Col sm={12}>
                                <div className="instagram">
                                    <div><Image src="/img/hero-home.png" className="img-fluid"/></div>
                                    <div><Image src="/img/hero-home.png" className="img-fluid"/></div>
                                    <div><Image src="/img/hero-home.png" className="img-fluid"/></div>
                                </div>
                            </Col>
                        </Row>
                    </li>
                </ul>
            </Col>
        </Row>
    );
}

export default Footer;