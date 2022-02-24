import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "./Movie.css";

const list_pages = [1, 2, 3, 4, 5];

function Movie() {
  const { genre, page } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year&${genre}&page=${page}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
    return;
  }, [genre, page]);
  return (
    <>
      <div className="movies">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie">
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>
                {movie.rating}점 | {movie.year}년 | {movie.runtime}분
              </p>
            </div>
          ))
        )}
      </div>
      {loading ? null : (
        <div className="list_pages">
          {list_pages.map((num) => {
            return (
              <span className="list_num">
                <Link key={num} to={`/movie/${genre}/${num}`}>
                  {num}
                </Link>
              </span>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Movie;
