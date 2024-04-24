import React from "react";
import { Link } from "react-router-dom";
import { Form, Navbar, Container, Nav, Button } from "react-bootstrap";
import netflix from "../img/netflix.png";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        {/* <img width={100} src="https://cromidi.cafe24.com/netflix/netflix.png" /> */}
        {/* <img width={100} src={netflix} alt="netflix" /> */}
        <div className="image"></div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/movies" className="nav-item">
              Movies
            </Link>
            <Link to="/" className="nav-item">
              TV
            </Link>
            <Link to="/" className="nav-item">
              Sports
            </Link>
            <Link to="/" className="nav-item">
              Entertainment
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
