import React from "react";

const Ceremony = (props) => {
  return(
    <React.Fragment>
      <h2>Ceremony & Reception</h2>
      <h3>July 22, 2020 at 3 pm</h3>
      <h3>Glacier Park Lodge</h3>
      <iframe
        title="Map to Glacier Park Lodge"
        width="600"
        height="450"
        frameBorder="0"
        style={{border: 0}}
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8b6sx1ZAZlMRYtFBx5_LVOs&key=AIzaSyAZFvNwSQZiqtBmIO6CGR4AMJ5I_JEexVU"
        allowFullScreen>
      </iframe>
    </React.Fragment>
  )
}

export default Ceremony;
