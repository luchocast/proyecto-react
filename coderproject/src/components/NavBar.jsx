import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "./CartWidget"; 

export const NavBar = () => {

    return(
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      
      <Container className='m-6' id='navBar'>
        <Navbar.Brand href="#home">Lucho Cast Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Comunidad</Nav.Link>
            <Nav.Link href="#pricing">Coaching</Nav.Link>
            <NavDropdown title="Cursos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Productividad Maestra</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Disciplina Monje
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Journaling</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contacto</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Mi historia
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <CartWidget />

      </Container>

    </Navbar>
    
    </>);


};