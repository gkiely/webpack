import React, { Component } from 'react';
import Counter from './Counter';


var colors = {
  primary: "#777",
  secondary:  "orange"
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