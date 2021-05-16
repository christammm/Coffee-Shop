import React from 'react'
import {Navbar , NavDropdown, Nav, Container} from 'react-bootstrap'
 //React Bootstrap Linking is different, you need to import LinkContainer.
 //and replace all a's with LinkContainer. LinkContainer is more appropriate with React-bootstrap.
import {LinkContainer} from 'react-router-bootstrap';
/** React header component */
const Header = () => {
    return (
        <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand to="/">Coffee Shop</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link ><i class="fas fa-shopping-cart"></i></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link >
                  <i class="fas fa-user"></i>
              </Nav.Link>
            </LinkContainer>
            
          </Nav>
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </header>
    )
}

export default Header
