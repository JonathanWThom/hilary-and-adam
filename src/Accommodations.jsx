import React from "react";

const Accommodations = (props) => {
  return(
    <div className="text-align-center top-margin">
      <table>
        <thead>
          <th>Name</th>
          <th>Website</th>
          <th>Notes</th>
        </thead>
        <tbody>
          <tr>
            <td>Glacier Park Lodge</td>
            <td>
              <a href="https://www.glacierparkcollection.com/lodging/glacier-park-lodge/">
                https://www.glacierparkcollection.com/lodging/glacier-park-lodge/
              </a>
            </td>
            <td>There is a group rate - contact Laura or Hilary Syvertson for details.</td>
          </tr>
          <tr>
            <td>Motel 6 Glacier</td>
            <td>
              <a href="https://www.motel6.com/#/home">
                https://www.motel6.com/#/home
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>A Van Down by the River</td>
            <td>
              <a href="https://www.youtube.com/watch?v=Xv2VIEY9-A8">
                https://www.youtube.com/watch?v=Xv2VIEY9-A8
              </a>
            </td>
            <td>Extra notes go here</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Accommodations;
