import React from "react";
import Style from "./style";

const Rating = ({ rating = 0 }) => {
    return (
        <Style>
            {[...Array(5)].map((el, i) => (
                <i
                    key={i}
                    className={`fa fa-star ${
                        i < Math.floor(rating) ? "active" : ""
                    }`}
                ></i>
            ))}{" "}
            <span>({rating})</span>
        </Style>
    );
};
export default Rating;
