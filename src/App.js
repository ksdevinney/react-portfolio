import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (<div className="App">
    <Router>
      <div className="app-html">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  </div>);
}

export default App;
