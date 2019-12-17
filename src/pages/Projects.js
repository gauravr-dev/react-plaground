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
      <h2>Projects</h2>
      <p>Here are my top projects: ...</p>
      <Link style={navLink} to={{ type: 'TIMELINE' }}>Projects Timeline</Link>
    </div>
  );
}

export default About;
