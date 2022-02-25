import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function MovieDetail() {
  const { genre, page, id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetails();
  }, [genre, page, id]);

  return (
    <div className="details">
      {loading ? (
        <Loading />
      ) : (
        <div key={movie.id} className="movie_detail">
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>
            <a href={`${movie.url}`} target="_blank" rel="noopener noreferrer">
              {movie.title}
            </a>
          </h1>
          <p>
            {movie.rating}점 | {movie.year}년 | {movie.runtime}분
          </p>
          <p>{movie.description_intro}</p>
        </div>
      )}
    </div>
  );
}
export default MovieDetail;
