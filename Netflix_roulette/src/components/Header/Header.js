import React, {  useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import {useDispatch} from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";


const Header = () => {
  {/*const movies = useSelector(getAllMovies);
const shows = useSelector(getAllShows);*/}

  const dispatch=useDispatch();
  useState();

  const[term,setTerm]=useState("");

  const submitHandler= (e)=>{

    e.preventDefault();
   
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("");
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">netflix<span className=" logo-inner">roulette</span>
        </div>
      </Link>
      <div className="search-cont">
        <h1>FIND YOUR MOVIE</h1>
       {/* <h1>{count}</h1>*/}
        
      <div className ="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search Movies" onChange={(e)=>setTerm(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="search-filter">
        <h3>SEARCH BY</h3>
      <button type="submit" className="butt1">Title</button>
      </div>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  
  );
};

export default Header;
