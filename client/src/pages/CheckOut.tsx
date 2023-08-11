import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Style.css";
// import Header from "../components/Header";
import { Navbar } from "../components/Navbar";
// import Header from "../components/Header";
// btn btn-primary btn-block mb-4
// row g-3

const CheckOut = () => {
  <div>
    <Navbar />
  </div>;
  return (
    <div className="checkout-container">
      <div className="container col-md-6 col-sm-12 br-2 rounded">
        <div className="row g-3">
          <div className="col-4 order-md-last">
            <h4 className="d-flex justify-content-between align-item-center">
              <span className="text-muted">Your Cart</span>
              {/* <span className="badge bg-secondary rounded-pill">3</span> */}
            </h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6>Product name</h6>
                  <span className="text-muted">Brief Description</span>
                </div>
                <span className="text-muted">NGN 500</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6>Second Product</h6>
                  <span className="text-muted">Brief Description</span>
                </div>
                <span className="text-muted">NGN 200</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6>Third Product</h6>
                  <span className="text-muted">Brief Description</span>
                </div>
                <span className="text-muted">NGN 600</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                {/* <div>
                  <h6 className="text-success">Promo Code</h6>
                  <span className="text-muted">Sale10</span>
                </div>
                <span className="text-muted"># 100</span> */}
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6>Total (NGN)</h6>
                </div>
                <span className="text-muted"># 1200</span>
              </li>
            </ul>
          </div>
          <div className="col-8">
            <h4 className="header-title">Address</h4>
            <form>
              <div className="row">
                <div className="col-6">
                  <label className="form-label" htmlFor="firstname">
                    First Name
                  </label>
                  <input type="text" id="firstname" className="form-control" />
                </div>
                <div className="col-6">
                  <label className="form-label" htmlFor="lastname">
                    Last name
                  </label>
                  <input type="text" id="lastname" className="form-control" />
                </div>
                <div className="col-12">
                  {/* <label className="form-label" htmlFor="username">
                    Username
                  </label> */}
                  {/* <div className="input-group">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="usrname" />
                  </div> */}
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="email">
                    Email
                    <span className="text-muted"> (Optional)</span>
                  </label>
                  <input type="text" id="email" className="form-control" />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input type="text" id="address" className="form-control" />
                </div>
                <div className="col-5">
                  <label className="form-label" htmlFor="country">
                    Country
                  </label>
                  <select className="form-select" id="country">
                    <option>Choose</option>
                    <option>Nigeria</option>
                  </select>
                </div>
                <div className="col-4">
                  <label className="form-label" htmlFor="state">
                    State
                  </label>
                  <select className="form-select" id="state">
                    <option>Choose</option>
                    <option>Lagos</option>
                    <option>Edo</option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label" htmlFor="zip">
                    Zip
                  </label>
                  <input type="text" id="zip" className="form-control" />
                </div>
              </div>
              <hr />
              <div className="form-check">
                {/* <input type="checkbox" className="form-check-input" /> */}
                {/* <label className="form-check-label">
                  Shipping address is the same as my billing address
                </label> */}
              </div>
              <hr />
              {/* <h4>Payment</h4>
              <div className="form-check">
                <input type="radio" className="form-check-input" />
                <label className="form-check-label">Credit Card</label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" />
                <label className="form-check-label">Debit Card</label>
              </div>
              <div className="row">
                <div className="col-6">
                  <label className="form-label" htmlFor="cardname">
                    Name on Card
                  </label>
                  <input type="text" id="cardname" className="form-control" />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                </div>
                <div className="col-6">
                  <label className="form-label" htmlFor="creditcard">
                    Credit Card Number
                  </label> */}
              {/* <input type="text" id="creditcard" className="form-control" />
                </div>
                <div className="col-3">
                  <label className="form-label" htmlFor="expiration">
                    Expiration
                  </label>
                  <input type="text" id="expiration" className="form-control" />
                </div>
                <div className="col-3">
                  <label className="form-label" htmlFor="cvv">
                    CVV
                  </label>
                  <input type="text" id="cvv" className="form-control" />
                </div>
              </div>
              <hr /> */}
              <div className="check-btn">
                <button type="submit" className="btn3">
                  <h4 className="checkout">Continue To Checkout</h4>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
