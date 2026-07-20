import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./_navbar.scss";

const Header = () => {
  return (
    <>
    <div className="top-strip">
      <div className="container">
        🚀 Trusted Website Development Services • Fast • Responsive • SEO Optimized
      </div>
    </div>
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container className="navbar-container">
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Karan Pawar" className="hero-image rounded img-fluid"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link as={NavLink} to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/process" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Process
            </Nav.Link>

            <Nav.Link as={NavLink} to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Projects
            </Nav.Link>

            <Nav.Link as={NavLink} to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Blog
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Contact
            </Nav.Link>

            <a href="https://wa.me/917045894361" target="_blank" rel="noopener noreferrer" role="button" className="chat-button text-center">
              Let's Talk
            </a>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;