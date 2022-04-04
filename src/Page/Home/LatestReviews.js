import React from "react";
import Slider from "react-slick/lib/slider";
import { Col, Container, Row } from "reactstrap";
import CardReview from "../../Components/Card/CardReview";
const LatestReviews = ({ product = [] }) => {
    const settings = {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="section-reviews">
            <Container>
                <Row>
                    <Col sm={8}>
                        <div className="section-reviews__title">
                            <h3 className="title">Latest Reviews</h3>
                            <div className="sub-title">
                                <span>
                                    So you can make better purchase decision
                                </span>
                                <a href="#" className="see-more">
                                    See More{" "}
                                    <i className="fas fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <Slider {...settings}>
                            {product &&
                                product.map((item, key) => {
                                    return (
                                        <div key={key}>
                                            <div className="card-slider">
                                                <CardReview item={item} />
                                            </div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </Col>
                    <Col sm={4}>
                        <div className="mr-2">
                            MR 2 <br />
                            300x250
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <i
            style={{ ...style }}
            onClick={onClick}
            className="fas fa-angle-right"
        ></i>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <i
            style={{ ...style }}
            onClick={onClick}
            className="fas fa-angle-left"
        ></i>
    );
};
export default LatestReviews;
