import React from "react";
import "./App.css";
import {
  ACCOMMODATIONS,
  ACTIVITIES,
  CEREMONY,
  PHOTOS,
  REGISTRY
} from "./Constants";
import Accommodations from "./Accommodations";
import Activities from "./Activities";
import Ceremony from "./Ceremony";
import Home from "./Home";
import Navigation from "./Navigation";
import Photos from "./Photos";
import Registry from "./Registry";
import Title from "./Title";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: "home" };
  }

  getPage = () => {
    const { page } = this.state;
    switch(page) {
      case CEREMONY:
        return <Ceremony />;
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

  render() {
    return (
      <React.Fragment>
        <header>
          <Title setPage={this.setPage} />
          <nav>
            <Navigation setPage={this.setPage}/>
          </nav>
        </header>
        <section>
          { this.getPage() }
        </section>
        <footer>
          The footer goes here
        </footer>
      </React.Fragment>
    );
  }
};
