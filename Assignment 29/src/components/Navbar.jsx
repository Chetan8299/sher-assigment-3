import React from "react";
import "./navbar.css"
import Button from "./Button";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Horizon Courts</div>
      <ul className="nav-items">
        <li>About Us</li>
        <li>Services</li>
        <li>Coaches</li>
        <li>Events</li>
        <li>Contacts</li>
      </ul>
      <Button content="Book now" showIcon={true} />
    </nav>
  );
};

export default Navbar;
