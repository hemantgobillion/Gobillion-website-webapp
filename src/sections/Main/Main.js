import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  state = {};
  render() {
    const imgstyle = {
      height: "54px",
      margin: "15px",
      width: "250px",
    };
    return (
      <div className="jumbotron jumbotron-main big-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <a
                href="https://www.producthunt.com/posts/gobillion-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gobillion-2"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=307023&theme=light"
                  style={imgstyle}
                  alt="Gobillion - Making ecommerce social for the next 400M
                  customers in India | Product Hunt"
                ></img>
              </a>
              <div className="col-md-7 col-sm-12 py-md-5 pb-sm-0 for-786-992-main">
                <p className="head-para">
                  Welcome to Gobillion.
                  <p className="head-para-tag">
                    We are serving customers in Guwahati, India.
                  </p>
                </p>
              </div>

              <div class="btn-div-one">
                {/* <a href="https://shop.gobillion.co/" class="btn shop-button">Shop Now</a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.gobillion.android.commerce"
                  class="btn dow-button"
                >
                  <span>
                    <img src="images/d6.png" width="25"></img>
                  </span>
                  <span> </span>
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
