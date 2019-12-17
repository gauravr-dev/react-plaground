import React from "react";
import Link from 'redux-first-router-link';

const navLink = {
  backgroundColor: "blue",
  padding: "1rem 2rem",
  margin: "1rem",
  color: "white"
};

function About() {
  return (
    <div>
      <h2>Projects Timeline</h2>
      <p>I am a nested route!</p>
      <Link style={navLink} to={{ type: 'PROJECTS' }}>Back to projects</Link>
    </div>
  );
}

export default About;
