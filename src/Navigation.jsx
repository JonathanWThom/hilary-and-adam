import React from "react";
import {
  ACCOMMODATIONS,
  ACTIVITIES,
  CEREMONY,
  GALLERY,
  REGISTRY
} from "./Constants"

const Navigation = (props) => {
 const { setPage } = props;

  return(
    <React.Fragment>
      <button onClick={() => setPage(CEREMONY)}>Ceremony</button>
      <button onClick={() => setPage(ACCOMMODATIONS)}>Accomodations</button>
      <button onClick={() => setPage(ACTIVITIES)}>Activities</button>
      <button onClick={() => setPage(REGISTRY)}>Registry</button>
      <button onClick={() => setPage(GALLERY)}>Gallery</button>
    </React.Fragment>
  )
}

export default Navigation;
