import React from "react";
import { CardArticleStyle } from "./style";

const CardArticle = ({ item }) => {
    return (
        <CardArticleStyle>
            <img src={item.image} alt={item.title} className="img-fluid" />
            <div>
                <h3 className="title">{item.title}</h3>
                <div className="desc">
                    {item.author} <span>| {item.published_at}</span>
                </div>
            </div>
        </CardArticleStyle>
    );
};
export default CardArticle;
