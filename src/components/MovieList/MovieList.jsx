import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movieList }) => {
  const location = useLocation();
  const defaultImage = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <div className={s.gallery}>
      <ul className={s.list}>
        {movieList?.map((movie) => (
          <li key={movie.id} className={s.item}>
            <Link to={`/movies/${movie.id.toString()}`} state={location}>
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImage}
                alt={movie.title}
                className={s.poster}
              />
              <p className={s.title}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
