import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchReviewsById(movieId);
      setMovieReviews(data);
    };
    getReviews();
  }, [movieId]);

  if (!movieReviews.length) {
    return <h2>No reviews available for this film.</h2>;
  }

  return (
    <div className={s.reviewContainer}>
      <ul className={s.reviewList}>
        {movieReviews?.map((review) => (
          <li className={s.reviewItem} key={review.id}>
            <h3 className={s.reviewAuthor}>{review.author}</h3>
            <p className={s.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
