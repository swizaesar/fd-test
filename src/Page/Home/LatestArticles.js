import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardArticle from "../../Components/Card/CardArticle";
import SkeletonLoading from "../../Components/Skeleton";

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
                    {product
                        ? product.map((item, key) => {
                              return (
                                  <Col sm={4} key={key}>
                                      <CardArticle item={item} />
                                  </Col>
                              );
                          })
                        : [...Array(3)].map((el, i) => {
                              return (
                                  <Col key={i}>
                                      <SkeletonLoading
                                          height={"200px"}
                                          style={{
                                              marginBottom: 15,
                                          }}
                                      />
                                  </Col>
                              );
                          })}
                </Row>
            </Container>
        </div>
    );
};
export default LatestArticles;
