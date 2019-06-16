import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


export default class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", coming: "yes", howMany: 0, notes: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...this.state })
    })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, coming, howMany, notes } = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="rsvp" value="contact" />
        <p>
          <label>Name (as it appears on invitation)
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>Can you make it? </label>
          <input
            type="radio"
            id="yes"
            name="coming"
            value="yes"
            checked={coming === "yes"}
            onChange={this.handleChange}
          />
          <label>Yes</label>
          <input
            type="radio"
            id="no"
            name="coming"
            value="no"
            checked={coming === "no"}
            onChange={this.handleChange}
          />
          <label>No</label>
        </p>
        <p>
          <label>How many in your party?
            <input
              type="number"
              name="howMany"
              value={howMany}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>Any extra notes (food allergies, etc)
            <textarea
              name="notes"
              value={notes}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}
