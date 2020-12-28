import React, { Component } from "react";

class InputPanel extends Component {
  state = { id: this.props.id, name: this.props.name, color: this.props.color };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("handling change...", this.state);
  };

  submitForm = () => {
    this.props.submitData(this.state);
  };

  render() {
    return (
      <div className="container-inner">
        <h1>Add A Fruit</h1>
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

          <input className="h-btn" type="button" onClick={this.submitForm} value="Submit" />
        </form>
        <button onClick={this.props.cancel}>Cancel</button>
      </div>
    );
  }
}

export default InputPanel;
