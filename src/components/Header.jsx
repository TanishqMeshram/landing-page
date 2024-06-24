import React from 'react';
import { Navbar, Nav, Container, InputGroup, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaGuitar, FaBookmark, FaBell, FaShoppingCart, FaSignInAlt, FaCompass, FaChevronDown, FaBars } from 'react-icons/fa';

const Header = () => (
  <Navbar bg="light" expand="lg" className="py-3 fixed-top">
    <Container>
      <img src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJ1oSBfJTmdqRIDA-g0cFKb8FFwhZcyHwpcMzk-a596zH3qy6jN~whBpS5iRacCGZhA1qbydqM~vD9Ri51TnChGVRGfyYM-OIduFL20IvHyuycgOTkNGloG~oh9UNvw7hwtdPFWEI5CjwWhGxlqV4GP9DiHM3Kca2e1eSAx6cYK1Xa-iV3rR-ghHPWcAbtJfIu8NNUcx2SiuzGZ-D2rjo6sJCyQdAYbPcO~F1az2aHX3GN6JrNt04ZKAXrGPWfOK8hqYBGSXmHAZ45zJc4VvInm75oQHJHo6sf5-ETV-ZWcsyLYCQ6jo6vrO43NyvUxpR05WMgx7UK-g0AL86Na~8A__" alt="Brand Logo" height="40" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto">
        <FaBars />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex mx-auto" style={{ maxWidth: '500px', flex: 1 }}>
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search"
              className="border-gray"
              aria-label="Search"
            />
            <Button variant="outline-purple" className="bg-purple text-white">
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#explore" className="d-flex align-items-center text-purple" id="explore">
            <FaCompass className="me-1" /> Explore <FaChevronDown className="ms-1" />
          </Nav.Link>
          <Nav.Link href="#hobbies" className="d-flex align-items-center text-purple" id="hobbies">
            <FaGuitar className="me-1" /> Hobbies <FaChevronDown className="ms-1" />
          </Nav.Link>
          <Nav.Link href="#bookmark" className="d-flex align-items-center text-purple">
            <FaBookmark className="me-1" />
          </Nav.Link>
          <Nav.Link href="#shop" className="text-purple">
            <FaShoppingCart className="me-1" />
          </Nav.Link>
          <Nav.Link href="#notifications" className="text-purple">
            <FaBell className="me-1" />
          </Nav.Link>
          <span>

          <Nav.Link href="#signin" className="button text-purple d-flex align-items-center px-3">
            <FaSignInAlt className="me-1 " /> Sign In
          </Nav.Link>
          </span>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
