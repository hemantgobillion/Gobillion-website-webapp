import React, { Component } from "react";
import "./App.css";
import "./newcss.css";

import Navbar from "./components/Navbar";
import Main from "./sections/Main/Main";
import About from "./sections/AboutUs/About";
import Explore from "./sections/Explore/Explore";
import BecomeSupplier from "./sections/BecomeSupplier/BecomeSupplier";
import Testimonials from "./sections/Testimonials/Testimonials";
import GetInTouch from "./sections/GetInTouch/GetInTouch";
import Outreach from "./sections/Outreach/Outreach";
import ReactGA from "react-ga";

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <Main />
        <About />
        <Explore />
        {/* <BecomeSupplier /> */}
        <Testimonials />
        <GetInTouch />
        <Outreach />
      </div>
    );
  }
}

#test

export default App;
