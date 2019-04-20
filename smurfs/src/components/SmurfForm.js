import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addSmurfHandler = event => {
    event.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(smurf);
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurfHandler}>
          <h2>Smurf's Name</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <h2>Smurf's Age</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <h2>Smurf's Height</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <br />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
