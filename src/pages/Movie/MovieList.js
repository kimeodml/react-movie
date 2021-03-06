import { Link } from "react-router-dom";

function MovieList({ id, poster, title, year, rating, runtime }) {
  return (
    <div key={id} className="movie">
      <img src={poster} alt={title} />
      <h2>
        <Link to={`/movie/detail/${id}`}>{title}</Link>
      </h2>
      <p>
        {rating}점 | {year}년 | {runtime}분
      </p>
    </div>
  );
}

export default MovieList;
