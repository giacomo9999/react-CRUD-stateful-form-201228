import React, { Component } from "react";

class InputPanel extends Component {
  state = { id: this.props.id, name: this.props.name, color: this.props.color };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = () => {
    this.props.submitData(this.state);
  };

  render() {
    return (
      <div className="container-inner">
        <h1>{this.props.headline}</h1>
        <form className="h-form">
          <label className="h-label">
            Name
            <input
              className="h-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className="h-label">
            Color
            <input
              className="h-input"
              type="text"
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </label>
          {/* Alternate approach using "input" element: */}
          {/* <input className="h-btn" type="button" onClick={this.submitForm} value="Submit" /> */}
          {/* I STILL don't really get the difference between "button" and "input" submits. */}
        </form>
        <button onClick={this.submitForm}>Submit</button>
        <button onClick={this.props.cancel}>Cancel</button>
      </div>
    );
  }
}

export default InputPanel;
