import React from "react";
import { CardBody } from "reactstrap";
import Rating from "../Rating";
import { CardProductStyle } from "./style";
import userDummy from "../Assets/Images/user-icon.jpg";
const CardProduct = ({ item, useUser = false }) => {
    return (
        <CardProductStyle>
            {useUser && (
                <div className="product-user">
                    <img
                        src={userDummy}
                        alt=""
                        className="img-fluid product-user__image"
                    />
                    <div>
                        <div className="product-user__name">{item.editor}</div>
                        <div className="product-user__position">
                            {item.role}
                        </div>
                    </div>
                </div>
            )}
            <CardBody>
                <div className="product-image">
                    <img
                        src={item.product.image.replace("https", "http")}
                        alt={item.product.name}
                        className="img-fluid img-product"
                    />
                </div>
                <div className="product-rating">
                    <Rating rating={item.product.rating} />
                </div>
                <h5 className="product-name">{item.product.name}</h5>
                <p className="product-desc">{item.product.description}</p>
            </CardBody>
        </CardProductStyle>
    );
};
export default CardProduct;
