import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  return (
    <Navbar className="NavBar">
      <Link to="/"> Home </Link>
      <h1 className="me-auto ms-1">
        <Link to="/lounges"> Lounges </Link>
      </h1>
      <Button className="justify-content-end me-4 " variant="outline-dark">
        <Link to="/lounges/new">Add A Lounge</Link>
      </Button>
    </Navbar>
  );
}