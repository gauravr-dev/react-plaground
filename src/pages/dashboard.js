import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "redux-first-router-link";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Profile from "./Profile";
import Timeline from "./Timeline";
import Sidebar from '../components/sidebar'

import "./dashboard.css";

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

class Dashboard extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  scenes = {
    HOME: <Home />,
    ABOUT: <About />,
    PROFILE: <Profile />,
    PROJECTS: <Projects />,
    TIMELINE: <Timeline />
  };

  render() {
    return (
      <section>
      <Sidebar />
        <nav>
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link
                to={{ type: "PROFILE", payload: { username: "demoUserName" } }}
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>

        <div>{this.scenes[this.props.location.type]}</div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
