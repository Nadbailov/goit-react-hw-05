import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovieList } from "../../services/api";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      const data = await fetchMovieList();
      setMovieList(data);
    };
    getMovieList();
  }, []);

  return (
    <div className={s.popularMoviesContainer}>
      <h2 className={s.title}>Today's Popular Movies</h2>
      <MovieList movieList={movieList} />
    </div>
  );
};

export default HomePage;
