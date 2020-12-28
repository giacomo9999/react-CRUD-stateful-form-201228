import React, { Component } from "react";
import InputPanel from "./InputPanel";

class App extends Component {
  state = {
    fruits: [
      { id: 1, name: "apple", color: "red" },
      { id: 2, name: "banana", color: "yellow" },
      { id: 3, name: "orange", color: "orange" },
    ],
    currentId: 4,
    inputPanelOpen: false,
    addOrEdit: "add",
    idToEdit: null,
    nameToEdit: "",
    colorToEdit: "",
  };

  toggleInputPanel = () => {
    this.setState({ inputPanelOpen: !this.state.inputPanelOpen });
    console.log("Toggling input panel...", this.state);
  };

  handleSubmit = (fruit) => {
    let newState = null;
    this.state.addOrEdit === "add"
      ? (newState = {
          fruits: [...this.state.fruits, fruit],
          inputPanelOpen: false,
          currentId: this.state.currentId + 1,
        })
      : (newState = {
          fruits: [
            ...this.state.fruits.filter((entry) => entry.id !== fruit.id),
            fruit,
          ],
          inputPanelOpen: false,
          idToEdit: null,
          nameToEdit: "",
          colorToEdit: "",
        });
    this.setState(newState);
    console.log("Handling submit...", fruit);
  };

  editfruitHandler = (fruit) => {
    console.log("Editing Fruit...", fruit.id);
    this.setState({
      inputPanelOpen: !this.state.inputPanelOpen,
      addOrEdit: "edit",
      idToEdit: fruit.id,
      nameToEdit: fruit.name,
      colorToEdit: fruit.color,
    });
  };

  deletefruitHandler = (id) => {
    const adjFruits = this.state.fruits.filter((fruit) => fruit.id !== id);
    this.setState({ fruits: adjFruits });
    console.log("Deleting Fruit...", id);
  };

  render() {
    let inputPanel = (
      <button onClick={this.toggleInputPanel}>Add A Fruit</button>
    );

    if (this.state.inputPanelOpen && this.state.addOrEdit === "add") {
      console.log("Configuring 'Add' Panel...");
      inputPanel = (
        <InputPanel
          headline="Add A Fruit"
          id={this.state.currentId}
          name={"New Fruit"}
          color={"New Color"}
          cancel={this.toggleInputPanel}
          submitData={this.handleSubmit}
        />
      );
    }

    if (this.state.inputPanelOpen && this.state.addOrEdit === "edit") {
      console.log("Configuring 'Edit' Panel...");
      inputPanel = (
        <InputPanel
          headline="Edit A Fruit"
          id={this.state.idToEdit}
          name={this.state.nameToEdit}
          color={this.state.colorToEdit}
          cancel={this.toggleInputPanel}
          submitData={this.handleSubmit}
        />
      );
    }

    const fruitsTable = this.state.fruits
      .sort((a, b) => a.id - b.id)
      .map((fruit) => (
        <tr key={fruit.id}>
          <td>{fruit.id}</td>
          <td>{fruit.name}</td>
          <td>{fruit.color}</td>
          <td>
            <button onClick={() => this.editfruitHandler(fruit)}>Edit</button>
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
        <h1>Fruits App</h1>
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
        <div className="container-inner">{inputPanel}</div>
      </div>
    );
  }
}

export default App;
