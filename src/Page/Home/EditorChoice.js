import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardProduct from "../../Components/Card/CardProduct";
import SkeletonLoading from "../../Components/Skeleton";

const EditorChoice = ({ product }) => {
    return (
        <div className="section section-choice">
            <Container>
                <div className="section-choice__header">
                    <h4>Editor's choice</h4>
                    <span>Curated with love</span>
                </div>
                <Row>
                    {product
                        ? product.map((item, key) => {
                              return (
                                  <Col key={key}>
                                      <CardProduct useUser={true} item={item} />
                                  </Col>
                              );
                          })
                        : [...Array(5)].map((el, i) => {
                              return (
                                  <Col key={i}>
                                      <SkeletonLoading
                                          height={"250px"}
                                          style={{ marginBottom: 15 }}
                                      />
                                  </Col>
                              );
                          })}
                </Row>
            </Container>
        </div>
    );
};
export default EditorChoice;
