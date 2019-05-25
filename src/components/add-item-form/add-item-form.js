import React, { Component } from "react";

import "./add-item-form.css";

class AddItemForm extends Component {
  state = {
    input: ``,
  }

  onChange = ({ target }) => {
    this.setState({
      input: target.value.toUpperCase(),
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { input } = this.state;
    if (input) {
      const { onAdd } = this.props;
      onAdd(input);
      this.setState({
        input: ``,
      });
    }
  }

  render() {
    const { input } = this.state;
    return (
      <form className="add-item-form d-flex" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={this.onChange}
          placeholder="What needs to be done?"
          value={input}
        />
        <button
          type="submit"
          className="btn btn-primary"
        >Add</button>
      </form>
    );
  }
}

export default AddItemForm;
