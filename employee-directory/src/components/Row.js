import React from "react";
import ApiContainer from "./ApiContainer";

function Row(props) {
  return (
    <div>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Employee Directory</h1>
      <p class="lead">Search for an Employee to Begin</p>
    </div>
  </div>
  <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
  </div>
); 
}

export default Row;
