import React from "react";
import Slider from "react-slick";
import thingsToDo from "./thingsToDo.js";
import "./Activities.css";

export default class Activities extends React.Component {
  getActivities = () => {
    return thingsToDo.map(thing => {
      return (
        <div key={thing.name} className="activities__image-container">
          <img className="activities__image" src={thing.src} alt={thing.name}/>
          <div className="activities__image-content">
            <h3>
              <a href={thing.website}>
                {thing.name}
              </a>
            </h3>
            <p>
              {thing.notes}
            </p>
          </div>
        </div>
      )
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider className="activities top-margin text-align-center" {...settings}>
        { this.getActivities() }
      </Slider>
    );
  }
}
