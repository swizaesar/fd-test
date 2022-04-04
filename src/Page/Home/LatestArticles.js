import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CardArticle from "../../Components/Card/CardArticle";

const LatestArticles = ({ product }) => {
    return (
        <div className="section-articles">
            <Container>
                <div className="section-articles__title">
                    <h3 className="title">Latest Articles</h3>
                    <div className="sub-title">
                        <span>So you can make better purchase decision</span>
                        <a href="#" className="see-more">
                            See More <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <Row>
                    {product &&
                        product.map((item, key) => {
                            return (
                                <Col sm={4} key={key}>
                                    <CardArticle item={item} />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </div>
    );
};
export default LatestArticles;
