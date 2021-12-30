import MovieCard from "./MovieCard";

import { Container, Row } from "react-bootstrap";
const MovieList = ({ movies, searchtitle, rating }) => {
  return (
    <Container>
      <Row className="g-4">
        {rating !== 0 && searchtitle === ""
          ? movies
              .filter((movie) => movie.rating >= rating)
              .map((movie) => (
                <MovieCard key={Math.random()} movie={movie} rating={rating} />
              ))
          : rating === 0 && searchtitle !== ""
          ? movies
              .filter((movie) =>
                movie.title
                  .toLowerCase()
                  .includes(searchtitle.toLowerCase().trim())
              )
              .map((movie) => (
                <MovieCard key={Math.random()} movie={movie} rating={rating} />
              ))
          : rating !== 0 && searchtitle !== ""
          ? movies
              .filter(
                (movie) =>
                  movie.title
                    .toLowerCase()
                    .includes(searchtitle.toLowerCase().trim()) &&
                  movie.rating >= rating
              )
              .map((movie) => (
                <MovieCard key={Math.random()} movie={movie} rating={rating} />
              ))
          : movies.map((movie) => (
              <MovieCard key={Math.random()} movie={movie} rating={rating} />
            ))}
      </Row>
    </Container>
  );
};

export default MovieList;
