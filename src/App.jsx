import React from "react";
import "./App.css";
import {
  ACCOMMODATIONS,
  ACTIVITIES,
  CEREMONY,
  PHOTOS,
  REGISTRY,
  RSVP,
} from "./Constants";
import Accommodations from "./Accommodations";
import Activities from "./Activities";
import Ceremony from "./Ceremony";
import Home from "./Home";
import Navigation from "./Navigation";
import Photos from "./Photos";
import Registry from "./Registry";
import Rsvp from "./Rsvp";
import Title from "./Title";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      formComplete: false,
    };
  }

  getPage = () => {
    const { page } = this.state;
    switch(page) {
      case CEREMONY:
        return <Ceremony />;
      case RSVP:
        return(
          <Rsvp
            formComplete={this.state.formComplete}
            setFormComplete={this.setFormComplete}
          />
        )
      case ACCOMMODATIONS:
        return <Accommodations />;
      case ACTIVITIES:
        return <Activities />;
      case REGISTRY:
        return <Registry />;
      case PHOTOS:
        return <Photos />;
      default:
        return <Home />;
    }
  }

  setPage = (page) => {
    this.setState({page: page})
  }

  setFormComplete = () => {
    this.setState({formComplete: true})
  }

  render() {
    const { page } = this.state;

    return (
      <React.Fragment>
        <header className="header">
          <Title setPage={this.setPage} />
          <nav>
            <Navigation page={page} setPage={this.setPage}/>
          </nav>
        </header>
        <section>
          { this.getPage() }
        </section>
      </React.Fragment>
    );
  }
};
