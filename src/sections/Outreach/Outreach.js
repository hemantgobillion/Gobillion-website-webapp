import React, { Component } from "react";
import "./Outreach.css";

class Outreach extends Component {
  state = {};
  render() {
    return (
      <div className="Outreach" id="contact">
        <div className="jumbotron jumbotron-contact mb-md-0">
          <div className="container">
            <div className="row  padding-4 mob-style">
              <div className="col-12">
                <h1 className="display-4">
                  Careers{" "}
                  <img
                    className="base-dot"
                    src="images/about-design.png"
                    alt="base-dot"
                  ></img>
                </h1>
              </div>
              <div className="col-lg-10 col-md-12 col-sm-12">
                <p className="lead para-head-space ">
                  If you are interested in pursuing a career in Gobillion,
                  please get in touch at
                </p>
                <h2 className="contact-at"> contact@gobillion.co</h2>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container padding-3">
            <div className="row text-light mob-style-2">
              <div className="col-md-6 outreach-pad">
                <h1>
                  gobillion{" "}
                  <img
                    className="logo-nav"
                    src="images/logo.svg"
                    alt="logo-nav"
                  ></img>
                </h1>

                <p className="lead-outreach-para">
                  Build Communities. Buy Together. Save More.
                </p>
              </div>
              <div className="col-md-6 footer-options">
                <p className="lead-outreach">Gobillion Community</p>
                <p className="lead-outreach"><a href="term.html" target="_blank">T&C</a></p>
                <p className="lead-outreach"><a href="privacy-policy.html" target="_blank">Privacy Policy</a></p>
                <p className="lead-outreach"><a href="gobillioncoinguideline.html" target="_blank">Gobillion Coins Guidelines</a></p>
                <p className="lead-outreach">Contact Us</p>
              </div>
            </div>
            <div className="row pagebreak-outreach">
              <div className="col-12">
                <div className="underline-outreach"></div>
              </div>
            </div>
            <div className="row">
              <div className=" col-md-1 col-sm-4 fb py-3">
                <a
                  href="https://www.facebook.com/gobillionapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/fb_new.png" alt="facebook"></img>
                </a>
              </div>
              <div className="  col-md-1 col-sm-4  lnk py-3">
                <a
                  href="https://www.linkedin.com/company/gobillion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/linkdin_new.png" alt="linkdin"></img>
                </a>
              </div>
              <div className=" col-md-1 col-sm-4 insta py-3">
                <a
                  href="https://instagram.com/gobillionapp?igshid=18vy12m8j77cc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/insta_new.png" alt="instagram"></img>
                </a>
              </div>
              <div className="col-md-9 col-sm-12 ml-auto py-3">
                <p className="copyright">
                  &copy;2020 Gobillion Services Pvt. Ltd. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Outreach;
