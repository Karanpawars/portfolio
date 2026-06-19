import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./_navbar.scss";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container className="navbar-container">
        <Navbar.Brand href="#home">
          <span className="logo-text text-white fw-bold">
            Karan Pawar
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link href="#about" className="nav-link text-white">
              About
            </Nav.Link>

            <Nav.Link href="#experience" className="nav-link text-white">
              Experience
            </Nav.Link>

            <Nav.Link href="#projects" className="nav-link text-white">
              Projects
            </Nav.Link>

            <Nav.Link href="#services" className="nav-link text-white">
              Services
            </Nav.Link>

            <Nav.Link href="#contact" className="nav-link text-white">
              Contact
            </Nav.Link>

            <Button className="resume-btn ms-lg-5">
              Resume
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;