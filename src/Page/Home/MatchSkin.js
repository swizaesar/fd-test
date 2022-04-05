import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardProduct from "../../Components/Card/CardProduct";
import Button from "../../Components/Button";
import SkeletonLoading from "../../Components/Skeleton";

const MatchSkin = ({ product = [] }) => {
    return (
        <div className="section-skin">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={8}>
                        <Row className="align-items-center">
                            <Col sm={4}>
                                <h3 className="title">
                                    Looking for products that are just simply
                                    perfect <br />
                                    for you ?
                                </h3>
                                <p className="desc">
                                    Here are some products that we belive match
                                    your skin, hair, and body! Have we mentioned
                                    that they solve your concerns too ?
                                </p>
                                <div className="text-right">
                                    <Button color="primary">
                                        See My Matches
                                    </Button>
                                </div>
                            </Col>
                            <Col sm={8}>
                                <Row>
                                    {product?.length > 0
                                        ? product.map((item, key) => {
                                              return (
                                                  key < 3 && (
                                                      <Col key={key}>
                                                          <CardProduct
                                                              useUser={false}
                                                              item={item}
                                                          />
                                                      </Col>
                                                  )
                                              );
                                          })
                                        : [...Array(3)].map((el, i) => {
                                              return (
                                                  <Col key={i}>
                                                      <SkeletonLoading
                                                          height={"230px"}
                                                          style={{
                                                              marginBottom: 15,
                                                          }}
                                                      />
                                                  </Col>
                                              );
                                          })}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default MatchSkin;
