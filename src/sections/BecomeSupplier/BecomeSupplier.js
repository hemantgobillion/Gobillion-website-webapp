import React, { Component } from "react";
import "./BecomeSupplier.css";
const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const cityRegex = RegExp(/^[a-zA-Z ]*$/);
const phoneRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);

class BecomeSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information1: false,
      information2: false,
      email: null,
      mobile: null,
      city: null,
      formErrors: {
        email: "",
        mobile: "",
        city: "",
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
      case "mobile":
        formErrors.mobile = phoneRegex.test(value)
          ? ""
          : "Enter valid Mobile Number";
        break;
      case "city":
        formErrors.city = cityRegex.test(value) ? "" : "Enter valid city";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  operation1() {
    this.setState({
      information1: !this.state.information1,
    });
  }
  operation2() {
    this.setState({
      information2: !this.state.information2,
    });
  }
  operation3() {
    let inf1 = this.state.information1;
    let inf2 = this.state.information2;
    if (inf1) {
      this.setState({ information1: false });
    }
    if (inf2) {
      this.setState({ information2: false });
    }
  }
  render() {
    const { formErrors } = this.state;
    return (
      <div
        className="Supplier"
        id="supplier"
        onClick={() => {
          this.operation3();
        }}
      >
        <div className="container">
          <div className="row about-us padding-2">
            <div className="col-12">
              <h1 className="display-4">
                Become a Supplier{" "}
                <img
                  className="base-dot"
                  src="images/about-design.png"
                  alt="base-dot"
                ></img>
              </h1>
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12">
              <p className="lead para-head-space ">
                We are looking for suppliers, manufacturers, wholesalers and
                retailers to be partners in our vision to drive social commerce
                in India. Please enter your details below and our team will
                reach out to you!
              </p>
            </div>
          </div>
        </div>
        <div className="container ">
          <form className="padding-business-form">
            <div className="form-group col-lg-6 col-md-10 headlabel">
              <label htmlFor="inputBusinessName">Business Name*</label>
              <input
                type="text"
                className="form-control input-lg"
                id="businessname"
                placeholder="Enter Business Name"
              />
            </div>
            <div className="form-group col-lg-6 col-md-10 headlabel">
              <label htmlFor="inputNumber">Phone Number*</label>
              <div className="input-group">
                <span
                  className="input-group-text app-prepend"
                  id="basic-addon1"
                >
                  +91
                </span>
                <input
                  name="mobile"
                  type="tel"
                  className="form-control input-lg"
                  id="mobnumber"
                  placeholder="Enter Mobile Number"
                  onChange={this.handleChange}
                />
              </div>
              {formErrors.mobile.length > 0 && (
                <div className="errorMessage">{formErrors.mobile}</div>
              )}
            </div>
            <div className="form-group col-lg-6 col-md-10 headlabel">
              <label htmlFor="inputEmail">Email*</label>
              <input
                name="email"
                type="text"
                className="form-control input-lg"
                id="email"
                placeholder="Enter Email Address"
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="form-row padding-city headlabel">
              <div className="form-group col-lg-3 col-md-5">
                <label htmlFor="inputCity">City*</label>
                <input
                  name="city"
                  type="text"
                  className="form-control input-lg"
                  id="city"
                  placeholder="Enter City"
                  onChange={this.handleChange}
                />
                {formErrors.city.length > 0 && (
                  <span className="errorMessage">{formErrors.city}</span>
                )}
              </div>
              <div className="form-group col-lg-3 col-md-5 headlabel">
                <label htmlFor="inputState">State*</label>
                <select className="form-control input-lg" id="state">
                  <option value="Andhra Pradesh<">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chattisgarh">Chattisgarh</option>
                  <option value="Delhi">Delhi NCR</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashrta">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Sikkim">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>
            <fieldset className="form-group pad-fieldset inputlabel ">
              <div className="row">
                <legend className="col-form-label">
                  Do you have a GSTIN?*
                </legend>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gst"
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Yes
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gst"
                    />
                    <label className="form-check-label" htmlFor="no">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-group pad-fieldset inputlabel ">
              <div className="row">
                <legend className="col-form-label">Are you a?*</legend>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Manufacturer
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Distributor
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Wholeseller
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Retailer
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-group pad-fieldset inputlabel ">
              <div className="row">
                <legend className="col-form-label">
                  Which online platform do you sell on?*
                </legend>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Flipkart, Amazon, Paytm, etc
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Social Commerce Platforms (Glowroad, Meesho etc)
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Bigbasket, Grofers, Milkbasket, Swiggy
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Not selling online
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-group pad-fieldset inputlabel">
              <div className="row">
                <legend className="col-form-label">Category?*</legend>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Daily Essentials and Grocery{" "}
                      <div className="popup" onClick={() => this.operation1()}>
                        <img
                          className="info "
                          src={
                            this.state.information1
                              ? "images/vector-i-clicked.png"
                              : "images/vector-i.png"
                          }
                          onClick={() => this.operation1()}
                          style={{ cursor: "pointer" }}
                          alt="info-2"
                        ></img>
                        <div
                          className={
                            this.state.information1
                              ? "popuptext show"
                              : "popuptext"
                          }
                          id="myPopup"
                        >
                          Packed foods & staples, breakfast items and beverages,
                          personal care & beauty products, oral care, hair care,
                          body care & bath essentials, home cleaning and laundry
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Vegetables, Fruits, Dairy
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Health and Hygiene{" "}
                      <div className="popup" onClick={() => this.operation2()}>
                        <img
                          className="info"
                          src={
                            this.state.information2
                              ? "images/vector-i-clicked.png"
                              : "images/vector-i.png"
                          }
                          onClick={() => this.operation2()}
                          style={{ cursor: "pointer" }}
                          alt="info"
                        ></img>
                        <div
                          className={
                            this.state.information2
                              ? "popuptext show"
                              : "popuptext"
                          }
                          id="myPopup"
                        >
                          Hand wash and sanitizer, gloves, masks, health
                          supplements, feminine hygiene and sexual wellness
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Home Decor and Furnishings
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Women's Apparel/Women's Wear
                    </label>
                  </div>
                </div>
                <div className="col-md-5 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Men's Apparel/Men's Wear
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Cosmetics and Beauty Products
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="yes">
                      Others
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
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

export default BecomeSupplier;
