import React from "react";
import Slider from "react-slick/lib/slider";
import { Col, Container, Row } from "reactstrap";
import CardProduct from "../../Components/Card/CardProduct";

const Trending = ({ product }) => {
    const settings = {
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="section-trending">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-trending__title">
                            <h3 className="title">Trending This Week</h3>
                            <div className="sub-title">
                                <span>
                                    See our weekly most reviewed products
                                </span>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {product &&
                                product.map((item, key) => {
                                    return (
                                        <div key={key}>
                                            <div className="card-slider">
                                                <CardProduct
                                                    useUser={false}
                                                    item={item}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                        </Slider>
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
export default Trending;
