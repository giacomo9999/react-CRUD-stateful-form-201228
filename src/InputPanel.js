import React, { Component } from "react";

class InputPanel extends Component {
  render() {
    return (
      <div className="container-inner">
        <h1>Input Panel Here</h1>
        <button onClick={this.props.cancel}>Cancel</button>
      </div>
    );
  }
}

export default InputPanel;
