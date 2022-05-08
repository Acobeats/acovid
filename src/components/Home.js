import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Offcanvas,
  Button,
  Image,
} from "react-bootstrap";
import logo from "../acopics/logo.png";
import pic1 from "../acopics/pic1.jpg";
import pic2 from "../acopics/pic2.jpg";
import pic3 from "../acopics/pic3.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-div">
      <Navbar sticky="top" variant="dark" expand={false} className="My-navbar">
        <Navbar.Brand>
          <Link to="/" className="brandLink">
            <span to="/" className="title">
              Acobeats
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
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/store" className="nav-link">
                Store
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <Container className="home-body">
        <Image src={pic1}/>
        <Image src={pic2}/>
        <Image src={pic3}/>
      </Container>
    </div>
  );
};
export default Home;
