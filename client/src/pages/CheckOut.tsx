import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Style.css";
// import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { PaystackButton } from "react-paystack"
import {PaystackPop} from "@paystack/inline-js" 



const CheckOut = () => {

  const navigate = useNavigate();
  const publicKey = "pk_test_7a07c22bac28de6adde6e701da1374a91b14f269"
  const amount = 10000000 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleContinueToPayment = (event: any) => {
    event.preventDefault();
      let paystack = new PaystackPop()

      paystack.newTransaction({
        email,
        amount,
        firstname,
        lastname,
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),

      })

    navigate("/payment");
  };

  // <div>
  //   <Navbar />
  // </div>;
  return (
    <div className="checkout-container">
      <div className="container col-md-6 col-sm-12 br-2 rounded">
        <div className="row g-3">
          <div className="col-4 order-md-last">
            <h4 className="d-flex justify-content-between align-item-center">
              <span className="cart-logo">Your Cart</span>
              {/* <span className="badge bg-secondary rounded-pill">3</span> */}
            </h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="cart-logo">Product name</h6>
                  <span className="text-text">Brief Description</span>
                </div>
                <span className="text-text">NGN 500</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="cart-logo">Second Product</h6>
                  <span className="text-text">Brief Description</span>
                </div>
                <span className="text-text">NGN 200</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="cart-logo">Third Product</h6>
                  <span className="text-text">Brief Description</span>
                </div>
                <span className="text-text">NGN 600</span>
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
                  <h6 className="cart-logo">Total (NGN)</h6>
                </div>
                <span className="text-text"> 1200</span>
              </li>
            </ul>
          </div>
          <div className="col-8">
            <h4 className="header-title">Address</h4>
            <form>
              <div className="row">
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="firstname">
                  First Name
                </label>
                <input type="text" id="firstname"
                  className="form-control"
                  value={firstname}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="lastname">
                  Last name
                </label>
                <input type="text" id="lastname"
                  className="form-control"
                  value={lastname}
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </div>
              <div className="col-12"></div>
              <div className="col-12">
                <label className="form-label" htmlFor="email">
                  Email
                  <span className="text-muted"> (Optional)</span>
                </label>
                <input type="text" id="email"
                  className="form-control"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="firstname">
                  Amount
                </label>
                <input type="text" id="amount"
                  className="form-control"
                  value={amount}
                 
                />
              </div>
              {/* <div className="col-12">
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
              </div> */}
              <hr />
              <div className="form-check"></div>
              <hr />

              <div className="check-btn">
                <button
                  type="button"
                  className="btn3"
                  onClick={handleContinueToPayment}
                >

                  <h4 className="checkout">Continue To Payment</h4>
                </button>
                {/* <PaystackButton className="checkout  btn3" {...componentProps} /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
