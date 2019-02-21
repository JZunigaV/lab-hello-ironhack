import React, { Component } from "react";
import "./App.css";


import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* componente con nav bar y titulo */}
        <Nav/>
        
        </div>
    );
  }
}

export default App;
