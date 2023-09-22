import "./FilmList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Film from "./Film";
import Loading from "./Loading";

const FilmList = ({ value }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  //api key
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getFilms = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${value}`
        );

        if (res.status === 200) {
          if (res.data.Search) {
            setFilms(res.data.Search);
            setError("");
          } else {
            setError(res.data.Error);
          }
        } else {
          throw new Error(`Failed to fetch data with status: ${res.status}`);
        }
      } catch (err) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getFilms();
  }, [value]);

  return (
    <div className="movies-list">
      {error && <h2>{error}</h2>}
      {loading && <Loading />}
      {!error && films.map((film) => <Film key={film.imdbID} data={film} />)}
    </div>
  );
};

FilmList.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default FilmList;
