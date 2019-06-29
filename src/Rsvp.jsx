import React from "react";
import "./Form.css";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      coming: "yes",
      howMany: "",
      notes: "",
      formComplete: false,
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...this.state })
    })
    .then(() => this.handleSuccess())
    .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSuccess = () => {
    const { setFormComplete } = this.props;
    setFormComplete();
  }

  render() {
    const { name, coming, howMany, notes } = this.state;
    const { formComplete } = this.props;

    if (formComplete) {
      return(
        <h3 className="rsvp__response text-align-center">
          Thank you for your response! If you made a mistake, you can always refresh and resubmit.
        </h3>
      )
    } else {
      return(
        <form className="form form__rsvp" onSubmit={this.handleSubmit}>
          <fieldset>
            <input type="hidden" name="rsvp" value="contact" />
            <div>
              <label>Name (as it appears on invitation)
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <div><strong>Can you make it?</strong></div>
              <div className="form__rsvp--radio-label">
                <label className="display-inline">Yes
                  <input
                    type="radio"
                    id="yes"
                    name="coming"
                    value="yes"
                    checked={coming === "yes"}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <label className="display-inline">No
                  <input
                    type="radio"
                    id="no"
                    name="coming"
                    value="no"
                    checked={coming === "no"}
                    onChange={this.handleChange}
                    required
                  />
                </label>
              </div>

          </div>
            <div>
              <label>How many in your party?
                <input
                  type="number"
                  name="howMany"
                  value={howMany}
                  onChange={this.handleChange}
                  min="0"
                  step="1"
                  required
                />
              </label>
            </div>
            <div>
              <label>Any extra notes (food allergies, etc.)
                <textarea
                  name="notes"
                  value={notes}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <button type="submit">Save</button>
            </div>
          </fieldset>
        </form>
      )
    }
  }
}
