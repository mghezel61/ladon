import logo from "./logo.svg";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Main />

        <Footer />
      </div>
    );
  }
}

export default App;
