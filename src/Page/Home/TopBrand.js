import React from "react";
import { Col, Container, Row } from "reactstrap";
import { topBrandsLogo } from "../../Utils/Helpers";

const TopBrand = () => {
    return (
        <div className="section-brand">
            <Container>
                <div className="section-articles__title">
                    <h3 className="title"> Top Brand</h3>
                    <div className="sub-title">
                        <span>Wee all know and love</span>
                        <a href="#" className="see-more">
                            See More <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="section-brand__content">
                    <Row className="align-items-center">
                        {topBrandsLogo.map((logo, key) => {
                            return (
                                <Col key={key}>
                                    <img
                                        width={75}
                                        src={logo.img}
                                        alt={logo.img}
                                        className="img-fluid img-brand"
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </div>
                <div className="section-brand__bottom">
                    <h4>
                        Female Daily - Find everything you want to know about
                        beauty on Female Daily
                    </h4>
                    <p>
                        Product Reviews, Tips & Trick, Expert and Consumer
                        Options, Beauty Tutorials, Discussions, Beauty
                        Workshops, anything! <br />
                        We are to be your friendly solution to all things
                        beauty, inside and out!
                    </p>
                </div>
            </Container>
        </div>
    );
};
export default TopBrand;
