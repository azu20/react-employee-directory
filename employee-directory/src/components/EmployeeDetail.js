import React from "react";

function EmployeeDetail(props) {
  return (

    <div heading="employees-list">
      <ul className="list-group list-group-horizontal-xl">
        <li className="list-group-item"><img alt={props.name} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }}/> </li>
        <li className="list-group-item"> {props.name}</li>
        <li className="list-group-item"> {props.email}</li>
        <li className="list-group-item"> {props.cell}</li>
        <li className="list-group-item"> {props.dob}</li>
      </ul>
    </div>
  );
}

export default EmployeeDetail;
