import React, { Component } from "react";
import "./Explore.css";

class Explore extends Component {
  state = {};
  render() {
    return (
      <div className="Explore" id="explore">
        <div className="container">
          <div className="row about-us padding-x">
            <div className="col-12">
              <h1 className="display-4">
                Explore Team Buying{" "}
                <img
                  className="base-dot"
                  src="images/about-design.png"
                  alt="base-dot"
                ></img>
              </h1>
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12">
              <p className="lead para-head-space ">
                Gobillon pioneers the "Team Buy" model, where customers can form
                teams of close friends and family to buy online together,
                building trust through community engagement and save on your
                daily needs!
              </p>
            </div>
          </div>
          <div className="row pagebreak-1 justify-content-center">
            <div className="col-3 ">
              <div className="underline-page"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
