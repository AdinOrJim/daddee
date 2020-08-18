import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Navbara = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">DJokes</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navbara;