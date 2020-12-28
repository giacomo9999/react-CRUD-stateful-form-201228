import React, { Component } from "react";
import InputPanel from "./InputPanel";

class App extends Component {
  state = {
    fruits: [
      { id: 1, name: "apple", color: "red" },
      { id: 2, name: "banana", color: "yellow" },
      { id: 3, name: "orange", color: "orange" },
    ],
    inputPanelOpen: false,
  };

  toggleInputPanel = () => {
    this.setState({ inputPanelOpen: !this.state.inputPanelOpen });
    console.log("Toggling input panel...", this.state);
  };

  handleSubmit = (fruit) => {
    this.setState({ fruits: [...this.state.fruits, fruit] });
    console.log("Handling submit...", fruit);
  };

  addfruitHandler = () => {
    console.log("Adding Fruit...");
  };

  editfruitHandler = (id) => {
    console.log("Editing Fruit...", id);
  };

  updateFruitHandler = (id) => {
    console.log("Updating fruit...", id);
  };

  deletefruitHandler = (id) => {
    const adjFruits = this.state.fruits.filter((fruit) => fruit.id !== id);
    this.setState({ fruits: adjFruits });
    console.log("Deleting Fruit...", id);
  };

  render() {
    const fruitsTable = this.state.fruits.map((fruit) => (
      <tr key={fruit.id}>
        <td>{fruit.id}</td>
        <td>{fruit.name}</td>
        <td>{fruit.color}</td>
        <td>
          <button onClick={() => this.editfruitHandler(fruit.id)}>Edit</button>
        </td>
        <td>
          <button onClick={() => this.deletefruitHandler(fruit.id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="container-outer">
        <h1>APP</h1>
        <div className="container-inner">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>{fruitsTable}</tbody>
          </table>
        </div>
        <div className="container-inner">
          {this.state.inputPanelOpen ? (
            <InputPanel
              id={-999}
              name={"New Fruit"}
              color={"New Color"}
              cancel={this.toggleInputPanel}
              submitData={this.handleSubmit}
            />
          ) : (
            <button onClick={this.toggleInputPanel}>Add A Fruit</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
