import React from "react";
import "./Home.css";

import main from "./images/main.jpg";

const Home = (props) => {
  return(
    <div className="top-margin">
      <img className="image" src={main} alt="Hilary and Adam" />
    </div>
  )
}

export default Home;
