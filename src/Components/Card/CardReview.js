import React from "react";
import { CardBody } from "reactstrap";
import Rating from "../Rating";
import { CardReviewStyle } from "./style";
import userDummy from "../Assets/Images/user-icon.jpg";

const CardReview = ({ item }) => {
    return (
        <CardReviewStyle>
            <CardBody>
                <div className="card-top">
                    <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="img-fluid"
                    />
                    <div>
                        <h5 className="card-top__name">{item.product.name}</h5>
                        <span className="card-top__desc">
                            {item.product.desc}
                        </span>
                    </div>
                </div>
                <div>
                    <div className="card-top__rating">
                        <Rating rating={item.star} />
                    </div>
                    <div className="card-top__comment">
                        <span className="card-top__comment-text">
                            {item.comment}
                        </span>{" "}
                        <span className="card-top__comment-button">
                            Read More
                        </span>
                    </div>
                </div>
            </CardBody>
            {/* user review */}
            <div className="card-bottom">
                <img src={userDummy} alt="" className="img-fluid img-avatar" />
                <div className="card-bottom__user">
                    <div className="card-bottom__user-name">{item.user}</div>
                    <div className="card-bottom__user-profile">
                        {item.profile.map((value, key) => {
                            return `${value}${
                                key + 1 === item?.profile?.length - 1 ? "," : ""
                            } `;
                        })}
                    </div>
                </div>
            </div>
        </CardReviewStyle>
    );
};
export default CardReview;
