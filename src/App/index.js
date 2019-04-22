import React, { Component } from "react";
import "antd/dist/antd.css";
import CitiesContainer from "components/CitiesContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitiesContainer />
      </div>
    );
  }
}

export default App;
