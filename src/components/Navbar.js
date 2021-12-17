import React, { Component } from "react";
import "./Navbar.css";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }
  toggle = () => {
    // Function only does stuff when the screen width is to the point where the toggle icon is visible. This function is added to links as well as the toggle icon so that the dropdown closes after a link is clicked
    if (window.innerWidth < 992) {
      document.querySelector(".navbar-nav").classList.toggle("open");
    }
  };

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "not-top") {
          this.setState({ status: "not-top" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <nav
        className={
          this.state.status === "top"
            ? "navbar navbar-expand-lg navbar-light bg-light fixed-top"
            : "navbar navbar-expand-lg navbar-light bg-light fixed-top scrolled "
        }
      >
        <div className="container-fluid">
          <a
            className={
              this.state.status === "top"
                ? "navbar-brand brand-top"
                : "navbar-brand brand-scrolled"
            }
            href="#"
          >
            gobillion
            <img
              className="logo-nav"
              src={
                this.state.status === "top"
                  ? "images/logo.svg"
                  : "images/orange-logo.svg"
              }
              alt="logo-nav"
            ></img>
          </a>
          <button
            className="navbar-toggler toggle"
            type="button"
            onClick={this.toggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse " id="navbarResponsive">
            <ul className="navbar-nav ml-auto links">
              <li className="nav-item  ">
                <a
                  className={
                    this.state.status === "top"
                      ? "nav-link link-top"
                      : "nav-link link-scrolled "
                  }
                  href="https://play.google.com/store/apps/details?id=com.gobillion.android.commerce"
                  onClick={this.toggle}
                >
                  <span>
                    {/* <img src="images/d6.png" width="10"></img> */}
                  </span>
                  <span> </span>
                  Download App
                </a>
              </li>
              <li className="nav-item  ">
                <a
                  className={
                    this.state.status === "top"
                      ? "nav-link link-top"
                      : "nav-link link-scrolled "
                  }
                  href="https://gobillion.wixsite.com/campus"
                  onClick={this.toggle}
                >
                  Influencers
                </a>
              </li>
              <li className="nav-item  ">
                <a
                  className={
                    this.state.status === "top"
                      ? "nav-link link-top"
                      : "nav-link link-scrolled "
                  }
                  href="#aboutus"
                  onClick={this.toggle}
                >
                  {" "}
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    this.state.status === "top"
                      ? "nav-link link-top"
                      : "nav-link link-scrolled "
                  }
                  href="#explore"
                  onClick={this.toggle}
                >
                  {" "}
                  Team Buy
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className={
                    this.state.status === "top"
                      ? "nav-link link-top"
                      : "nav-link link-scrolled "
                  }
                  href="#supplier"
                  onClick={this.toggle}
                >
                  {" "}
                  Become a Supplier
                </a>
              </li>
              <li className="nav-item"> */}
              {/* <a
                  className={
                    this.state.status === "top"
                      ? "nav-link link-top"
                      : "nav-link link-scrolled "
                  }
                  href="#"
                  onClick={this.toggle}
                >
                  {" "}
                  Supplier Login
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className={
                    this.state.status === "top"
                      ? "nav-link link-top"
                      : "nav-link link-scrolled "
                  }
                  href="#have-a-query"
                  onClick={this.toggle}
                >
                  {" "}
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
