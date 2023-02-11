import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, NavItem, NavLink } from "reactstrap";

const Navbar = () => {
  return (
    <Nav className="nav py-1 justify-between d-flex items-center">
      <div className="d-flex items-center gap-x-5">
      <Link to={"/"}>
      <img
        className="h-8 ml-4"
        src="https://cdn.discordapp.com/attachments/1073664493210579044/1073906306114662421/Sums_logo_v2.png"
      />
      </Link>
      <NavLink href="/" className="text-white mt-2" ><h5>Home</h5></NavLink>
      </div>
      <NavItem className="d-flex items-center">
        <Link to={"/cart"} className="w-14 cart-but my-auto mr-4">
          <img
            className="w-8 mx-auto my-auto"
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          />
        </Link>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
