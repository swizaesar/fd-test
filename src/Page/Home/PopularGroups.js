import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardPopular from "../../Components/Card/CardPopular";

const PopularGroup = () => {
    return (
        <div className="section-popular">
            <Container>
                <div className="section-popular__title">
                    <h3 className="title">Popular Groups</h3>
                    <div className="sub-title">
                        <span>Where the beauty TALK are</span>
                        <a href="/" className="see-more">
                            See More <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <Row>
                    {[...Array(4)].map((el, i) => {
                        return (
                            <Col sm={3} key={i}>
                                <CardPopular />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};
export default PopularGroup;
