import React, { Component } from "react";

import "./add-item-form.css";

class AddItemForm extends Component {
  onClick = () => {
    const { onAdd } = this.props;
    onAdd();
  };

  render() {
    return (
      <div className="add-item-form">
        <button
          type="button"
          className="btn btn-primary btn-block add-item-btn"
          onClick={this.onClick}
        >
          Add Item
        </button>
      </div>
    );
  }
}

export default AddItemForm;
