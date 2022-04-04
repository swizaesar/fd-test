import React from "react";
import { Input } from "reactstrap";
import Button from "../Button";
import Logo from "../Assets/Images/logo.png";
const HeaderTop = () => {
    return (
        <div className="header-top">
            <button className="header-top__btn">
                <i className="fas fa-bars"></i>
            </button>
            <img
                src={Logo}
                alt="Female Daily"
                className="img-fluid header-top__logo"
            />
            <div className="header-top__form">
                <Input
                    placeholder="Search product, article, topics, brands, etc"
                    className="header-top__form-input"
                />
                <i className="fas fa-search"></i>
            </div>
            <Button color="primary" className="btn-login">
                <i className="far fa-user-circle"></i> Login / Signup
            </Button>
        </div>
    );
};
export default HeaderTop;
