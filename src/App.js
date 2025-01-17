import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import MyComponent from "./page/About";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Job Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/jobs">Jobs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MyComponent />} />
          {/* <Route path="/jobs" element={<Jobs />} /> */}
        </Routes>
      </Container>
    </Router>
  );
};

const Home = () => (
  <div className="p-5 mb-4 bg-light rounded-3">
    <Container className="py-5 text-center">
      <h1 className="display-4">Find Your Dream Job</h1>
      <p className="lead">
        Explore thousands of job opportunities and take the next step in your
        career.
      </p>
      <Button variant="primary" href="#jobs">
        Get Started
      </Button>
    </Container>
  </div>
);

export default App;
