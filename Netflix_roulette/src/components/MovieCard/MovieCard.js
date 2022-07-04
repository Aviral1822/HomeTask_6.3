import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import { useDispatch, useSelector } from "react-redux";
import {fetchAsyncMovieOrShowDetail,getSelectedMovieOrShow,removeSelectedMovieOrShow,} from "../../features/movies/movieSlice";

const MovieCard = (props) => {
  const { data } = props;
  const mydata = useSelector(getSelectedMovieOrShow);
  console.log("hello brother")
  console.log(data)
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
              <p>{data.Genre}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
