import React from "react";
import Slider from "react-slick/lib/slider";
import { Col, Container, Row } from "reactstrap";
import CardProduct from "../../Components/Card/CardProduct";
import { trendingProduct } from "../../Utils/Helpers";

const Trending = ({ product }) => {
    const settings = {
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
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
                            {trendingProduct.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <div className="card-slider">
                                            <CardProduct
                                                border={false}
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
    const { style, onClick } = props;
    return (
        <i
            style={{ ...style }}
            onClick={onClick}
            className="fas fa-angle-right"
        ></i>
    );
};

const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
        <i
            style={{ ...style }}
            onClick={onClick}
            className="fas fa-angle-left"
        ></i>
    );
};
export default Trending;
