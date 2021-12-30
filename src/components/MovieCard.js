import { Card, Col, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import StarRating from "./StarRating";
const MovieCard = ({ movie }) => {
  return (
    <Col md={6} lg={4}>
      <Card bg="light" style={{ width: "20 rem" }}>
        <Card.Text>
          <StarRating rating={movie.rating} />
        </Card.Text>
        <Card.Img className="imgsz" variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title as="h6">{movie.title}{movie.year}</Card.Title>
          
          <Card.Text>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{movie.description}</Tooltip>}
            >
              <Button variant="danger">Description</Button>
            </OverlayTrigger>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
