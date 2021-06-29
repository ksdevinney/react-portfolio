import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div>
      <h1>Contact Me</h1>
      <h3>Contact</h3>
      <ul>
        <li><a href="." target="_blank">Website: You are here</a></li>
        <li><a href="mailto:katie@devinney.org">katie@devinney.org</a></li>
        <li><a href="https://www.linkedin.com/in/katie-devinney-3616091b9/" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/ksdevinney" target="_blank">GitHub</a></li>
      </ul>
      {/* <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} /> */}
    </div>
  );
}

export default Contact;
