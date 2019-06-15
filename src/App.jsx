import React from "react";
import "./App.css";
import {
  ACCOMMODATIONS,
  ACTIVITIES,
  CEREMONY,
  GALLERY,
  HOME,
  REGISTRY
} from "./Constants"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: "home" };
  }

  render() {
    const { page } = this.state;

    return (
      <React.Fragment>
        <header>
          <h1 className="clickable" onClick={() => this.setState({page: HOME})}>Hilary and Adam</h1>
          <h3>July 22, 2022 - East Glacier, MT</h3>
          <nav>
            <button onClick={() => this.setState({page: CEREMONY})}>Ceremony</button>
            <button onClick={() => this.setState({page: ACCOMMODATIONS})}>Accomodations</button>
            <button onClick={() => this.setState({page: ACTIVITIES})}>Activities</button>
            <button onClick={() => this.setState({page: REGISTRY})}>Registry</button>
            <button onClick={() => this.setState({page: GALLERY})}>Gallery</button>
          </nav>
        </header>
        <section>
          { page }
        </section>
      </React.Fragment>
    );
  }
};
