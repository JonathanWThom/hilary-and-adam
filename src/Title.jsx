import React from "react";
import { HOME } from "./Constants";
import "./Title.css";

const Title = (props) => {
  const { setPage } = props;

  return(
    <div className="title">
      <h1 className="clickable" onClick={() => setPage(HOME)}>Hilary &amp; Adam</h1>
      <h3>July 17, 2021 - East Glacier Park, MT</h3>
    </div>
  )
}

export default Title;
