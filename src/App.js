/*import React from 'react';

import logo from './logo.svg';

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

export default App;
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "redux-first-router-link";
import Dashboard from "./pages/dashboard";


const mapStateToProps = state => {
  return {
    location: state.location
  };
};

class App extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  render() {
    return (
      <div>
        <h1>Redux First Router Demo</h1>
        <p>Open your redux dev tools to see the route actions</p>
        <div style={{ display: "flex" }}>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
