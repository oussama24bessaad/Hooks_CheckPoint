import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";

const AddMovie = ({ onAdd, handleClose }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterURL, setposterURL] = useState("");
  const [rating, setrating] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    if (!title) {
      alert("please add movie");
      return;
    }
    onAdd({ title, description, posterURL, rating });
    settitle("");
    setdescription("");
    setposterURL("");
    setrating(0);
    handleClose();
  };

  return (
    <Container>
      <Form onSubmit={handleClick}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Movie's Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Movie's Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PosterURL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Movie's poster URL"
            value={posterURL}
            onChange={(e) => setposterURL(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Movie's Rating Of 10"
            value={rating}
            onChange={(e) => setrating(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Add Movie
        </Button>
      </Form>
    </Container>
  );
};

export default AddMovie;
