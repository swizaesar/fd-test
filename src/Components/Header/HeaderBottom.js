import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { navHeader } from "../../Utils/Helpers";
const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <Nav>
                {navHeader.map((item, key) => {
                    return (
                        <NavItem key={key}>
                            <NavLink href={item.link}>{item.name}</NavLink>
                        </NavItem>
                    );
                })}
            </Nav>
        </div>
    );
};
export default HeaderBottom;
