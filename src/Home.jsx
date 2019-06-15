import React from "react";
import "./Home.css";

import main from "./images/main.jpg";

const Home = (props) => {
  return(
    <React.Fragment>
      <img className="image" src={main} alt="Hilary and Adam" />;
    </React.Fragment>
  )
}

export default Home;
