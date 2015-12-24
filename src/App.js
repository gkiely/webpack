import React, { Component } from 'react';
import Counter from './Counter';

//import 'stylesheets/modules/container'

var colors = {
  primary: "#777",
  secondary:  "orange",
  // secondary: "red"
};


class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} color={colors.primary} />
        <Counter increment={2} color={colors.secondary} />
        <input/>
      </div>
    );
  }
}


export default App;