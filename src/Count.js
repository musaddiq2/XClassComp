import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  handleDecrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>Count: {count}</p>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Count;