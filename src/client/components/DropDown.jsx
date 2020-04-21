import React, { Component } from "react";
import "../../styles/styles.css";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      selection: "All"
    };
  }

  render() {
    return (
      <label className="filterLabel" htmlFor={this.props.label}>
        {this.props.label}:{"   "}
        <select
          className="dropDown"
          id={`DropDown-${this.state.label}`}
          value={this.state.selection}
          onChange={e => {
            this.setState({ selection: e.target.value });
            if (this.props.onSelection !== undefined) {
              this.props.onSelection(e.target.value);
            }
          }}
        >
          <option>All</option>
          {this.props.data.map(el => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </label>
    );
  }
}

export default DropDown;
