import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "./Movie.css";
import MovieList from "./MovieList";

// https://yts.mx/api#list_movies

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
  }, [genre, page]);
  return (
    <>
      <div className="movies">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => (
            <MovieList
              key={movie.id}
              id={movie.id}
              poster={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              runtime={movie.runtime}
              rating={movie.rating}
              genre={genre}
              page={page}
            />
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
