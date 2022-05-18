import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <>
    <h1>Directors Page</h1>
    {directors.map((director)=>{
    return(
      <div key={director.name}>
        {director.name}
        <ul>
          <li>{director.movies}</li>
        </ul>
      </div>
    )
  })}
  </>
  
  )
}

export default Directors;
