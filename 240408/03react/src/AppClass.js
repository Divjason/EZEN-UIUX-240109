import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increase}>클릭!</button>
      </div>
    );
  }
}
