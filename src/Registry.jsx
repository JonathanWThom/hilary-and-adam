import React from "react";
import registries from "./registries.js";
import "./Registry.css";

const Registry = (props) => {
  return(
    <div className="registry">
      {
        registries.map(registry => {
          return(
            <div className="registry__item" key={registry.name}>
              <h1>
                <a href={registry.url}>
                  <img className="registry__image" alt={registry.name} src={registry.src}></img>
                </a>
              </h1>
            </div>
          )
        })
      }
    </div>

  )
}

export default Registry;
