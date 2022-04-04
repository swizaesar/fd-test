import React from "react";
import { Col, Container, Row } from "reactstrap";
import Style from "./style";
import AppStore from "../Assets/Images/app-store.png";
import GooglePlayStore from "../Assets/Images/google-playstore.png";
import { navFooter } from "../../Utils/Helpers";
import Facebook from "../Assets/Images/facebook-icon.webp";
import Twitter from "../Assets/Images/twitter-icon.webp";
import Instagram from "../Assets/Images/Instagram_icon.webp";
import Youtube from "../Assets/Images/youtube-icon.png";
import Logo from "../Assets/Images/logo.png";

const Footer = () => {
    return (
        <Style>
            <Container>
                <Row>
                    {navFooter.map((item, key) => {
                        return (
                            <Col sm={3} key={key}>
                                <ul className="footer-nav">
                                    {item.nav.map((nav, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className="footer-nav__list"
                                            >
                                                <a
                                                    className="footer-nav__list-item"
                                                    href={nav.url}
                                                >
                                                    {nav.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Col>
                        );
                    })}
                    <Col sm={3}>
                        <h6 className="footer-text">Download Our Mobile App</h6>
                        <div className="footer-download">
                            <a href="#" className="footer-download__app">
                                <img
                                    src={AppStore}
                                    alt="App Store"
                                    className="img-fluid"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={GooglePlayStore}
                                    alt="Google Play Store"
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <div>
                            <img
                                src={Logo}
                                alt="Female Daily"
                                className="img-fluid img-logo"
                            />
                            <div className="copyright">
                                Copyright &copy; 2015 - 2017 Female Daily
                                Network All rights reserved
                            </div>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <ul className="footer-sosmed">
                            <li className="footer-sosmed__list">
                                <a
                                    href="#"
                                    className="footer-sosmed__list-item"
                                >
                                    <img
                                        src={Facebook}
                                        alt="facebook"
                                        className="img-fluid"
                                    />
                                </a>
                            </li>
                            <li className="footer-sosmed__list">
                                <a
                                    href="#"
                                    className="footer-sosmed__list-item"
                                >
                                    <img
                                        src={Twitter}
                                        alt="twitter"
                                        className="img-fluid"
                                    />
                                </a>
                            </li>
                            <li className="footer-sosmed__list">
                                <a
                                    href="#"
                                    className="footer-sosmed__list-item"
                                >
                                    <img
                                        src={Instagram}
                                        alt="instagram"
                                        className="img-fluid"
                                    />
                                </a>
                            </li>
                            <li className="footer-sosmed__list">
                                <a
                                    href="#"
                                    className="footer-sosmed__list-item"
                                >
                                    <img
                                        src={Youtube}
                                        alt="youtube"
                                        className="img-fluid"
                                    />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Style>
    );
};
export default Footer;
