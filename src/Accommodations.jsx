import React from "react";
import hotels from "./hotels.js";

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
    <div className="text-align-center top-margin">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Website</th>
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
