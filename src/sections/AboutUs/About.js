import React, { Component } from "react";
import "./About.css";

class About extends Component {
  state = {};
  render() {
    const imgstyle = {
      height: "109px",
      width: "100px",
    };
    return (
      <div className="AboutUs" id="aboutus">
        <div className="container">
          <div className="row about-us padding">
            <div className="col-12">
              <h1 className="display-4">
                About Us{" "}
                <img
                  className="base-dot"
                  src="images/about-design.png"
                  alt="base-dot"
                ></img>
              </h1>
              
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12">
              <p className="lead para-head-space">
                In the real world, shopping is meant to be an “interactive and
                fun” experience and purchases are regularly influenced by
                friends and family. In India, the retail sector is mostly
                unorganized and people have a social trust deficit with
                e-commerce.
              </p>
              <p className="lead para-space">
                At Gobillion, we aspire to emulate the real-world shopping
                experience to an online one – making it fun, engaging and
                building trust in the customers.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row infographics text-center">
            <div className="col-xs-12 col-sm-12 col-md-4 infographic-style">
              <img
                src="images/about-1.svg"
                style={imgstyle}
                alt="market-size"
              ></img>
              <h5>Market size</h5>
              <p className="infografic-style-p">
                400 million customers across Tier 1-4 cities and towns in India
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 infographic-style">
              <img
                src="images/about-3.svg"
                style={imgstyle}
                alt="social community"
              ></img>
              <h5>Social Community </h5>
              <p className="infografic-style-p">
                Is important in building trust and making people buy online
                together specially in high involvement and trust deficit
                categories
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 infographic-style">
              <img
                src="images/about-2.svg"
                style={imgstyle}
                alt="Focus Category"
              ></img>
              <h5>Focus Categories</h5>
              <p className="infografic-style-p">
                Have a fun and safe experience shopping online including daily
                essentials, home decor and apparel
              </p>
            </div>
          </div>
          <div className="row pagebreak justify-content-center">
            <div className="col-3 ">
              <div className="underline-page"></div>
            </div>
          </div>
        </div>
      </div>
      
      
    );
  }
}

export default About;
