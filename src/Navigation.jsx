import React from "react";
import "./Navigation.css";
import {
  ACCOMMODATIONS,
  ACTIVITIES,
  CEREMONY,
  PHOTOS,
  REGISTRY,
  RSVP
} from "./Constants"

const Navigation = (props) => {
  const className = (pageToCheck) => {
    if (props.page === pageToCheck) {
      return "nav-link active-nav";
    }

    return "nav-link";
  }

  const { setPage } = props;

  return(
    <React.Fragment>
      <h4 className={className(CEREMONY)} onClick={() => setPage(CEREMONY)}>
        Ceremony &amp; Reception
      </h4>
      <h4 className={className(RSVP)} onClick={() => setPage(RSVP)}>
        RSVP
      </h4>
      <h4 className={className(ACCOMMODATIONS)} onClick={() => setPage(ACCOMMODATIONS)}>
        Accomodations
      </h4>
      <h4 className={className(ACTIVITIES)} onClick={() => setPage(ACTIVITIES)}>
        Activities
      </h4>
      <h4 className={className(REGISTRY)} onClick={() => setPage(REGISTRY)}>
        Registry
      </h4>
      <h4 className={className(PHOTOS)} onClick={() => setPage(PHOTOS)}>
        Gallery
      </h4>
    </React.Fragment>
  )
}

export default Navigation;
