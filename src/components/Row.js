import React from "react";
import moment from "moment"; 

function Row(props) {
    return (
        <tr className= "listgroup">
        <td><img src = {props.img}></img></td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phoneNum}</td>
        <td>{moment(props.dob).format("MM/DD/YYYY")}</td>
      </tr>
    )
  }
  
  export default Row;
  