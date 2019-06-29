import React from "react";
import hotels from "./hotels.js";
import "./Accommodations.css";

const Accommodations = (props) => {
  const tableBody = () => {
    return hotels.map(hotel => {
      return (
        <tr key={hotel.name}>
          <td>
            <a href={hotel.website}>
              {hotel.name}
            </a>
          </td>
          <td>{hotel.cost}</td>
          <td>{hotel.notes}</td>
        </tr>
      )
    })
  }

  return(
    <div className="accommodations text-align-center top-margin">
      <table className="accommodations__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          { tableBody() }
        </tbody>
      </table>
    </div>
  )
}

export default Accommodations;
