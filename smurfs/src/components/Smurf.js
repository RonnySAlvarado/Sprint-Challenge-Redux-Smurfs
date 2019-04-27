import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

class Smurf extends React.Component {
  deleteSmurfHandler = event => {
    event.preventDefault();
    this.props.deleteSmurf(this.props.id);
  };

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.age}</h2>
        <h2>{this.props.height}</h2>
        <button onClick={this.deleteSmurfHandler}>Remove</button>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
