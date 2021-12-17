import React, { Component } from "react";
import "./GetInTouch.css";
const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const phoneRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
const nameRegex = RegExp(/^[a-zA-Z ]*$/);

class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      mobile: null,
      personalname: null,
      formErrors: {
        email: "",
        mobile: "",
        personalname: "",
      },
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Enter valid Email Address";
        break;
      case "personalname":
        formErrors.personalname = nameRegex.test(value)
          ? ""
          : "Name must contain only letters";
        break;
      case "mobile":
        formErrors.mobile = phoneRegex.test(value)
          ? ""
          : "Enter valid Mobile Number";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="GetInTouch" id="have-a-query">
        <div className="container">
          <div className="row about-us padding-2">
            <div className="col-12">
              <h1 className="display-4">
                Get In Touch{" "}
                <img
                  className="base-dot"
                  src="images/about-design.png"
                  alt="base-dot"
                ></img>
              </h1>
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12">
              <p className="lead para-head-space ">
                For General Enquiries, Get in Touch
              </p>
            </div>
          </div>
        </div>
        <div className="container ">
          <form className="padding-business-form">
            <fieldset className="form-group pad-fieldset  ">
              <div className="row">
                <legend className="col-form-label">Category*</legend>
              </div>
              <div className="row inputlabel ">
                <div className="col-md-5 col-lg-4  ">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="getintouch-category"
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Customer Issues
                    </label>
                  </div>
                </div>
                <div className="col-md-5 col-lg-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="getintouch-category"
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Supplier Issues
                    </label>
                  </div>
                </div>
              </div>
              <div className="row inputlabel">
                <div className="col-md-5 col-lg-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="getintouch-category"
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Business Enquiries
                    </label>
                  </div>
                </div>
                <div className="col-md-5 col-lg-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="getintouch-category"
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-group col-md-10 col-lg-6 headlabel">
              <label htmlFor="inputName">Name*</label>
              <input
                name="personalname"
                type="text"
                className="form-control input-lg"
                id="businessname"
                placeholder="Enter Your Name"
                onChange={this.handleChange}
              />
              {formErrors.personalname.length > 0 && (
                <div className="errorMessage">{formErrors.personalname}</div>
              )}
            </div>
            <div className="form-group col-md-10 col-lg-6 headlabel">
              <label htmlFor="inputNumber">Phone Number*</label>
              <div className="input-group ">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text app-prepend"
                    id="basic-addon1"
                  >
                    +91
                  </span>
                </div>
                <input
                  name="mobile"
                  type="tel"
                  className="form-control input-lg"
                  id="mobnumber"
                  placeholder="Enter Phone Number"
                  onChange={this.handleChange}
                />
              </div>
              {formErrors.mobile.length > 0 && (
                <div className="errorMessage">{formErrors.mobile}</div>
              )}
            </div>
            <div className="form-group col-md-10 col-lg-6 headlabel">
              <label htmlFor="inputEmail">Email*</label>
              <input
                name="email"
                type="text"
                className="form-control input-lg"
                id="email"
                placeholder="Enter Email ID"
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="form-group col-md-10 col-lg-6 headlabel">
              <label htmlFor="inputMessage">Enter your Message!</label>
              <textarea
                className="form-control"
                rows="5"
                id="message"
                placeholder="Enter your Message"
              ></textarea>
            </div>
            <div className="row pad-submit">
              <button
                className="btn btn-light get-app my-3 my-sm-0 col-md-6 col-sm-12"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GetInTouch;
