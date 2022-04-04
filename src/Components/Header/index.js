import React from "react";
import Style from "./style";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
    return (
        <Style id="header">
            <HeaderTop />
            <HeaderBottom />
        </Style>
    );
};
export default Header;
