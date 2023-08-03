import React, { Component } from "react";

class Addmethos extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>this is class Component in addmethod function 1st</h4>
      </div>
    );
  }
}

class New_class extends Component {
  state = {};
  render() {
    return <h6>this is new class from addmethod with function 2</h6>;
  }
}

export default Addmethos;
export { New_class };
