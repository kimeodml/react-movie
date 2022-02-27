import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Search() {
  const { search, genre, page } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState([]);
  const getMoives = () => {
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year&${genre}&page=${page}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMoives();
    setLoading(true);
    setAnswer([]);
    console.log(`search: ${search}`);
  }, [search]);
  useEffect(() => {
    if (movies.length === 0) return <div>찾은 결과물이 존재하지 않습니다.</div>;
    else {
      setAnswer([
        answer,
        ...movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        ),
      ]);
      console.log(movies);
    }
  }, [movies]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        answer.map((a) => (
          <div key={a.id} className="movie">
            <img src={a.medium_cover_image} alt={a.title} />
            <h2>
              <Link to={`/movie/${genre}/${page}/${a.id}`}>{a.title}</Link>
            </h2>
            <p>
              {a.rating}점 | {a.year}년 | {a.runtime}분
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Search;
