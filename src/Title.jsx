import React from "react";
import { HOME } from "./Constants";

const Title = (props) => {
  const { setPage } = props;

  return(
    <React.Fragment>
      <h1 className="clickable" onClick={() => setPage(HOME)}>Hilary and Adam</h1>
      <h3>July 22, 2022 - East Glacier Park, Montana</h3>
    </React.Fragment>
  )
}

export default Title;
