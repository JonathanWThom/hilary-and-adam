import React from "react";
import Slider from "react-slick";
import activities from "./activities.js";
import "./Activities.css";

export default class Activities extends React.Component {
  getActivities = () => {
    return activities.map(activity => {
      return (
        <div>
          <img className="activities__image" src={activity.imageUrl} alt={activity.name}/>
          <div>
            <h3>
              <a href={activity.website}>
                {activity.name}
              </a>
            </h3>
            <p>
              {activity.notes}
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
