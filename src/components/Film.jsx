import "./Film.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { BiHeartCircle } from "react-icons/bi";

const Film = ({ data }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  let posterExist = true;
  let poster;
  if (data.Poster === "N/A") {
    posterExist = false;
    poster = "../../public/err-img.jpg";
  } else {
    poster = data.Poster;
  }

  return (
    <div className="film-container">
      <div className="title">
        <h2>{data.Title}</h2>
        <h3>Year: {data.Year}</h3>
        <button onClick={toggleLike}>
          <BiHeartCircle className={liked ? "icon like" : "icon no"} />
        </button>
      </div>
      {!posterExist && <h4>Image is not found</h4>}
      <img src={poster} alt={poster} />
    </div>
  );
};

Film.propTypes = {
  data: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
  }),
};

export default Film;
