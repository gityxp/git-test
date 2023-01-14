import React, { Component } from "react";
import Header from "./pages/Header/index";
import Item from "./pages/Item/index";
import Footer from "./pages/Footer/index";
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Item />
        <Footer />
      </div>
    );
  }
}

export default App;
