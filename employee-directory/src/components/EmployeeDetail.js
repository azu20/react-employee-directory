import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <ul className="list-group list-group-horizontal-sm">
      <li class="list-group-item"><img alt={props.name} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }} /></li>
      <li class="list-group-item"> {props.name.first} {props.name.last}</li>
      <li class="list-group-item"> {props.phone}</li>
      <li class="list-group-item"> {props.email}</li> 
      </ul>
    </div>
  );
}

export default EmployeeDetail;
