import React from "react";
import "./Home.css";
import main from "./images/website/Main_1--34.jpg";

const Home = (props) => {
  return(
    <div className="top-margin">
      <img className="image" src={main} alt="Hilary and Adam" />
    </div>
  )
}

export default Home;
