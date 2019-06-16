import React from "react";
import {
  ACCOMMODATIONS,
  ACTIVITIES,
  CEREMONY,
  PHOTOS,
  REGISTRY,
  RSVP
} from "./Constants"

const Navigation = (props) => {
 const { setPage } = props;

  return(
    <React.Fragment>
      <button onClick={() => setPage(CEREMONY)}>Ceremony</button>
      <button onClick={() => setPage(RSVP)}>RSVP</button>
      <button onClick={() => setPage(ACCOMMODATIONS)}>Accomodations</button>
      <button onClick={() => setPage(ACTIVITIES)}>Activities</button>
      <button onClick={() => setPage(REGISTRY)}>Registry</button>
      <button onClick={() => setPage(PHOTOS)}>Gallery</button>
    </React.Fragment>
  )
}

export default Navigation;
