import React from "react";



function Row(props) {
  return (
      <div>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">Search for an Employee to Begin</p>
    </div>
    <div>
  <ul className="List titles">
     <li>Picture</li>
     <li> <h3> Name </h3> </li>
     <li>Email </li>
     <li>Cell </li>
     <li>DOB </li>
    </ul>
    </div>
  </div>
  <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
  </div>


); 
}

export default Row;
