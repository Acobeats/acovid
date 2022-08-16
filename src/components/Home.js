import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Carousel
} from "react-bootstrap";
// import logo from "../acopics/logo.png";
import pic1 from "../acopics/pic1.jpg";
import pic2 from "../acopics/pic2.jpg";
import pic3 from "../acopics/pic3.jpg";
import { Link } from "react-router-dom";
import '../Styles/HomePhotos.css';
import '../App.css';


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
   
 <Carousel className="carouselSize" >
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>AcoBeats</h4>
          <p>Acobeats en su salseta</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h4>AcoBeats</h4>
          <p>Acobeats en su salseta</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h4>AcoBeats</h4>
          <p>Acobeats en su salseta</p>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel>
   
  <div className="spotifySize" >
    <iframe  
    src="https://open.spotify.com/embed/playlist/2IvzE1oLOXC6pHYApcxrh0?utm_source=generator"  width="100%" height="190px">   
   
    </iframe>
  </div>
    </div>
  );
};
export default Home;
