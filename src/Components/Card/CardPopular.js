import React from "react";
import { CardBody } from "reactstrap";
import { CardPopularStyle } from "./style";
import userDummy from "../Assets/Images/user-dummy.png";

const CardPopular = () => {
    return (
        <CardPopularStyle>
            <CardBody>
                <img src={userDummy} alt="" className="img-fluid" />
                <h5 className="title">Embrace the Curl</h5>
                <div>
                    <div className="icon-action">
                        <div>
                            <i className="fas fa-user"></i> -
                        </div>
                        <div>
                            <i className="fas fa-list"></i> -
                        </div>
                        <div>
                            <i className="far fa-comment-alt"></i> -
                        </div>
                    </div>
                    <div className="desc  ">
                        May our curls pop and never stop!
                    </div>
                </div>
            </CardBody>
        </CardPopularStyle>
    );
};
export default CardPopular;
