import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <>
  <h1>Actors Page</h1>
  {actors.map(actors=>{
    return (
    <div key={actors.name}>
      {actors.name}
      <ul>
        <li>{actors.movies}</li>
      </ul>
    </div>)
  })}
  </>)
}

export default Actors;
