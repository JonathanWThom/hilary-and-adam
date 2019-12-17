import React from "react";
import "./Navigation.css";
import {
  ACCOMMODATIONS,
  ACTIVITIES,
  CEREMONY,
  HOME,
  PHOTOS,
  REGISTRY,
  RSVP,
} from "./Constants"

const Navigation = (props) => {
  const className = (pageToCheck) => {
    if (props.page === pageToCheck) {
      return "nav-link active-nav";
    }

    return "nav-link";
  }

  const { setPage, page } = props;

  return(
    <React.Fragment>
      <div className="nav__main">
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
      </div>

      <div className="nav__mobile">
        <select value={page} onChange={e => setPage(e.target.value)}>
          <option value={HOME}>Home</option>
          <option value={CEREMONY}>Ceremony &amp; Reception</option>
          <option value={RSVP}>RSVP</option>
          <option value={ACCOMMODATIONS}>Accomodations</option>
          <option value={ACTIVITIES}>Activities</option>
          <option value={REGISTRY}>Registry</option>
          <option value={PHOTOS}>Gallery</option>
        </select>
      </div>
    </React.Fragment>
  )
}

export default Navigation;
