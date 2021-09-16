import React from "react";

import MovieCard from "./MovieCard";
const MovieList = (props) =>{

    return(
        <>
          <div className="card-div">{props.movies.map((movie, index)=>
          <MovieCard movie={movie}/>
           )}</div>
        </>
    )
}

export default MovieList;