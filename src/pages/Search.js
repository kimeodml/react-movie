import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Search() {
  const { search, page } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMoives = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year&query_term=${search}&page=${page}&limit=15`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMoives();
  }, [search, page]);

  return (
    <div>
      <div className="movies">
        {loading ? (
          <Loading />
        ) : (
          movies.map((a) => (
            <div key={a.id} className="movie">
              <img src={a.medium_cover_image} alt={a.title} />
              <h2>
                <Link to={`/movie/detail/${a.id}`}>{a.title}</Link>
              </h2>
              <p>
                {a.rating}점 | {a.year}년 | {a.runtime}분
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
