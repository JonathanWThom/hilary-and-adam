import React from "react";
import "./Ceremony.css";

const Ceremony = (props) => {
  return(
    <div className="ceremony text-align-center">
      <h3>Ceremony - July 17, 2021 at 4:30 pm</h3>
      <h3>Lone Elk Lodge</h3>
      <section className="map__container">
        <iframe
          title="Map to Lone Elk Lodge"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2StxAomOaFMRZ4gj-vFx9wo&key=AIzaSyAZFvNwSQZiqtBmIO6CGR4AMJ5I_JEexVU"
          allowFullScreen>
        </iframe>
      </section>
      <br />
      <br />
      <h3>Reception - 6:30 pm</h3>
      <h3>The Summit Mountain Lodge</h3>
      <section className="map__container">
        <iframe
          title="Map to The Summit Mountain Lodge"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJ2StxAomOaFMRZ4gj-vFx9wo&destination=place_id:ChIJPb-TCOiGaFMRUw84e-bRBFg&key=AIzaSyAZFvNwSQZiqtBmIO6CGR4AMJ5I_JEexVU"
          allowFullScreen>
        </iframe>
      </section>
    </div>
  )
}

export default Ceremony;
