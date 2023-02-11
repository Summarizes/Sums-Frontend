import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Nav, NavItem, NavLink } from "reactstrap";

const Navbar = () => {
  return (
    <Nav className="nav py-3 px-3 justify-between">
      <img
        className="w-48"
        src="https://cdn.discordapp.com/attachments/1073664493210579044/1073872324027240488/Sums_logo.png"
      />
      <NavItem>
        <NavLink></NavLink>
        <Button>
          <img
            className="w-8 mr-8"
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          />
        </Button>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
