import { useState } from "react";
import { useParams } from "react-router-dom";

const MovieTheatres = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [theatreDetails, setTheatreDetails] = useState({});

  return <div>MovieTheatres</div>;
};

export default MovieTheatres;
