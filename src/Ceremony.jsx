import React from "react";
import "./Ceremony.css";

const Ceremony = (props) => {
  return(
    <div className="ceremony text-align-center">
      <h3>July 22, 2020 at 3 pm</h3>
      <h3>Glacier Park Lodge</h3>
      <section className="map__container">
        <iframe
          title="Map to Glacier Park Lodge"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8b6sx1ZAZlMRYtFBx5_LVOs&key=AIzaSyAZFvNwSQZiqtBmIO6CGR4AMJ5I_JEexVU"
          allowFullScreen>
        </iframe>
      </section>
    </div>
  )
}

export default Ceremony;
