/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { Component } from "react";
// import Search from "./components/Search/index";
// import List from "./components/List/index";
import Searchs from "./components/Searchs/index";
import Listl from "./components/Listl/index";
class App extends Component {
  // state = { users: [] };
  // updateState = stateObj => {
    // this.setState(stateObj);
    // console.log(stateObj)
  // };
  render() {
    return (
      <div>
        {/*<Search updateState={this.updateState} />*/}
        {/*<List {...this.state} />*/}
        <Searchs/>
        <Listl/>
      </div>
    );
  }
}

export default App;
