import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Navbara = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href={process.env.PUBLIC_URL + '/'}>DJokes</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href={process.env.PUBLIC_URL + '/about'}>About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navbara;