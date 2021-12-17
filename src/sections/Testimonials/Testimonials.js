import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import "./Testimonials.css";

class Testimonials extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  render() {
    return (
      <div className="Testimonial" id="testimonial">
        <div className="container">
          <div className="row about-us padding-testimonial">
            <div className="col-12">
              <h1 className="display-4">
                Testimonials{" "}
                <img
                  className="base-dot"
                  src="images/about-design.png"
                  alt="base-dot"
                ></img>
              </h1>
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12">
              <p className="lead para-head-space">
                We talked to our customers across India, and they are super
                excited at the possibility of driving social buying and
                community engagement through the Team Buy feature of Gobillion.
                Here are some excerpts from customers we talked to:
              </p>
            </div>
          </div>
        </div>
        <div className="container padding-5 justify-content-center">
          <OwlCarousel
            id="owl-demo"
            className="owl-theme"
            loop={true}
            items="3"
            dots={true}
            responsive={this.state.responsive}
            margin={15}
          >
            <div className="item">
              <div className="card">
                <div className="quote">
                  <img
                    src="images/quote-grey.png"
                    style={{ width: "84px" }}
                    alt="quote-grey"
                  ></img>
                </div>
                <p>
                  “I really like shopping collectively with my friends, because
                  it saves delivery charges for buying in bulk. At present, my
                  entire family loves buying in a collective order since we
                  share similar tastes. I am really excited for the Group Buy
                  feature of GoBillion!”
                </p>
                <h5>27/Service/Gurgaon</h5>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="quote">
                  <img
                    src="images/quote-blue.png"
                    style={{ width: "84px" }}
                    alt="quote-blue"
                  ></img>
                </div>
                <p>
                  I love purchasing household essentials in bulk and
                  collectively with my entire family. Group buying is fun with
                  friends. Previously I bought 4 printed t-shirts with a group
                  of friends and it was fun sporting the same printed t-shirt in
                  a group of 4.”
                </p>
                <h5>20/Student/Bihar</h5>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="quote">
                  <img
                    src="images/quote-grey.png"
                    style={{ width: "84px" }}
                    alt="quote-grey"
                  ></img>
                </div>
                <p>
                  I like the idea of Group Buy. I am really interested in group
                  buying daily groceries, home décor items and electronic
                  gadgets and appliances together with my family
                </p>
                <h5>55/Housewife/Lucknow</h5>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="quote">
                  <img
                    src="images/quote-grey.png"
                    style={{ width: "84px" }}
                    alt="qute-grey"
                  ></img>
                </div>
                <p>
                  I like the idea of Group Buy feature of GoBillion. Any kind of
                  deals or discounts is good. I look forward to group buying
                  household items, home décor items, shoes, watches, electronic
                  gadgets and accessories together with my friends.”
                </p>
                <h5>26/Student/Bihar</h5>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="quote">
                  <img
                    src="images/quote-blue.png"
                    style={{ width: "84px" }}
                    alt="quote-blue"
                  ></img>
                </div>

                <p>
                  I have previously purchased grocery together with my roommate
                  in order to avail good deals and discounts for buying in bulk.
                  I am willing to group buy daily essentials with my friends.”
                </p>
                <h5>26/Service/Pune</h5>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Testimonials;
