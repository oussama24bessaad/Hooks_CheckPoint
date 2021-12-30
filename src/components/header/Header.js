import {
  Container,
  Nav,
  Navbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import ModalAddMovie from "../ModalAddMovie";
import StarRating from "../StarRating";
import './Header.css'


const Header = ({props, onAdd, setsearchtitle, setrating, rating }) => {

  return (
    <Navbar className="head" bg="danger" expand="lg" variant="danger">
      <Container className="head">
        <Navbar.Brand href="#"><h1 className="tuniflix">&#9733;&#9733;&#9733;TUNIFLIX&#9733;&#9733;&#9733;</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link href="#Add-Movie">
              <ModalAddMovie onAdd={onAdd} />
            </Nav.Link>
            <Nav.Link href="#Search">
              <InputGroup size="sm" className="mb-3">
                
                <FormControl
                  placeholder="search by title..."
                  onChange={(e) => setsearchtitle(e.target.value)}
                />
              </InputGroup>
            </Nav.Link>
            <Nav.Link href="#Rating">
              <StarRating setrating={setrating} rating={rating} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
