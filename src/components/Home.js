import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Card
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
      <Container className="home-body">
        <Card style={{width: '23rem'}} className="pics" bg='dark' text='light'>
          <Card.Img variant="top" src={pic1} />
          {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body> */}
        </Card>
        <Card style={{ width: '23rem' }} className="pics" bg='dark' text='light'>
          <Card.Img variant="top" src={pic2} />
          {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body> */}
        </Card>
        <Card style={{ width: '23rem'}} className="pics" bg='dark' text='light'>
          <Card.Img variant="top" src={pic3} />
          {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body> */}
        </Card>
      </Container>
    </div>
  );
};
export default Home;
