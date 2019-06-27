import React from "react";
import registries from "./registries.js";

const Registry = (props) => {
  return(
    <React.Fragment>
      {
        registries.map(registry => {
          return(
            <div key={registry.name}>
              <h1>
                <a href={registry.url}>
                  {registry.name}
                </a>
              </h1>
              <img alt={registry.name} src={registry.src}></img>
            </div>
          )
        })
      }
    </React.Fragment>

  )
}

export default Registry;
