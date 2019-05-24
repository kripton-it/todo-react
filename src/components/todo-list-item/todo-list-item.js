import React, { Component } from "react";

import "./todo-list-item.css";

class TodoListItem extends Component {
  state = {
    done: false,
  }

  onLabelClick = () => {
    const { done } = this.state;
    this.setState({
      done: !done,
    });
  }

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    const labelClassName = `todo-list-item${done ? ` done` : ``}`;

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    return (
      <span className={labelClassName}>
        <span
          className='todo-list-item-label'
          style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
