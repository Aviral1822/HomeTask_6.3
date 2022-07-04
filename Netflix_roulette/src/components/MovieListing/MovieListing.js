import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";
import "./MovieListing.scss";
import ErrorHandling from "../ErrorHandling";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,renderShows = "";
 
      renderMovies =movies.Response === "True" ? 
      (
        movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))) : 
      (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  {/*const renderMovieCount = ()=>{   
   if(movies!=null){
      return <Header count={movies}/>
    }
  }*/}
  
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : /*(
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    )*/
    (<ErrorHandling/>);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="mov-cont">Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2 className="show-cont">Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
