import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import "./MovieDetail.css";

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
          <div className="detail_text1">
            <img src={movie.medium_cover_image} alt={movie.title} />
            <div className="detail_text2">
              <h2 className="detail_title">
                <a
                  href={`${movie.url}`}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movie.title}
                </a>
              </h2>
              <p>{movie.rating}점</p>
              <p>{movie.year}년</p>
              <p>{movie.runtime}분</p>
            </div>
          </div>
          <p className="detail_description">{movie.description_intro}</p>
        </div>
      )}
    </div>
  );
}
export default MovieDetail;
