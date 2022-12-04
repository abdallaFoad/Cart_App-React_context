import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/Blog-Logo.png";
import "../style/Navbar.css";
import { FaShoppingCart } from 'react-icons/fa';
import { useShopping } from "../context/ShoppingContext";

const NavbarComponent = () => {
  const { cardItems, cardQuantity } = useShopping();
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="mb-3"
      style={{ backgroundColor: "#F1F1F1" }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logoImg} alt="logo" style={{ maxWidth: "50%" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/" as={NavLink}>
              Products
            </Nav.Link>
            <Nav.Link to="/box" as={NavLink} className="shop">
              <div className="par">
                {<FaShoppingCart />}
                <div className="num">{cardQuantity}</div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
