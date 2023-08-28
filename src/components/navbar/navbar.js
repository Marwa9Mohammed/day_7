import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Amira",
      title: "Developer",
    };
  }

  render() {
    return (
      <Container>
      <Navbar expand="xxl" className="xxl-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"style={{fontSize:'30px'}}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home"style={{fontSize:'20px'}}>Home</Nav.Link> */}
              {/* <Nav.Link href="#link"style={{fontSize:'20px'}}>Link</Nav.Link> */}
              <NavLink to="/" className="nav-link active">Home</NavLink>
              <NavLink to="/products" className="nav-link ">Products</NavLink>
              <NavLink to="/contactus " className="nav-link ">Contact Us</NavLink>
              <NavLink to="/aboutus" className="nav-link ">About us</NavLink>
              <NavLink to="/join" className="nav-link ">Join</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    );
  }
}

export default Header;