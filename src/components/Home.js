import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Offcanvas,
  Button,
  Image,
} from "react-bootstrap";
import logo from "../logo.png";
import video from "../parallax.mp4";
import parallax from "../parallax.gif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-div">
      <Navbar sticky="top" variant="dark" expand={false} className="My-navbar">
        <Navbar.Brand>
          <Link to="/" className="brandLink">
            <span to="/" className="title">
              ACO BEATS
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Link to="/home" className="nav-link">
                Home
              </Link>
              <Link to="/" className="nav-link">
                Landing
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <Container className="home-body">
        <Image src={parallax} width="400" />
      </Container>
    </div>
  );
};
export default Home;
