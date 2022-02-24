import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const list_pages = [1, 2, 3, 4, 5];

function Movie() {
  const { genre, page } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?${genre}&page=${page}&sort_by=year`
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
    <div className="movies">
      {loading ? (
        <Loading />
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            {movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}
          </div>
        ))
      )}
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
    </div>
  );
}

export default Movie;
