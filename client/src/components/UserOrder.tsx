
// import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/index.css";

const UserOrder = () => {
  return (
    <>
    <Header />

    <article className="orderWrapper">
    <table className="table">
      <thead>
          <th>name</th>
          <th> description</th>
          <th>Amount</th>
          <th>Quantity</th>
          <th>Date</th>
          <th>status</th>
         
      </thead>
      <tbody>
          <tr>
              <td data-label="name">Tope</td>
              <td data-label="description" style={{ wordBreak:"break-word"}}>hkkhkkhkk</td>
              <td data-label="Amount">40000</td>
              <td data-label="Quantity">50</td>
              <td data-label="Date">30/10/2020</td>
              <td data-label="Status">pending</td>
              
          </tr>
          <tr>
              <td data-label="name">Tope</td>
              <td data-label="description" style={{ wordBreak:"break-word"}}>eryhgh</td>
              <td data-label="Amount">40000</td>
              <td data-label="Quantity">50</td>
              <td data-label="Date">30/10/2020</td>
              <td data-label="Status">pending</td>
          </tr>
          <tr>
              <td data-label="name">Tope</td>
              <td data-label="description" style={{ wordBreak:"break-word"}}>trt</td>
              <td data-label="Amount">40000</td>
              <td data-label="Quantity">50</td>
              <td data-label="Date">30/10/2020</td>
              <td data-label="Status">pending</td>
          </tr>
          <tr>
              <td data-label="name">Tope</td>
              <td data-label="description" style={{ wordBreak:"break-word"}}>trt</td>
              <td data-label="Amount">40000</td>
              <td data-label="Quantity">50</td>
              <td data-label="Date">30/10/2020</td>
              <td data-label="Status">pending</td>
          </tr>
          <tr>
              <td data-label="name">Tope</td>
              <td data-label="description" style={{ wordBreak:"break-word"}}>trt</td>
              <td data-label="Amount">40000</td>
              <td data-label="Quantity">50</td>
              <td data-label="Date">30/10/2020</td>
              <td data-label="Status">pending</td>
          </tr>
          <tr>
              <td data-label="name">Tope</td>
              <td data-label="description" style={{ wordBreak:"break-word"}}>trt</td>
              <td data-label="Amount">40000</td>
              <td data-label="Quantity">50</td>
              <td data-label="Date">30/10/2020</td>
              <td data-label="Status">pending</td>
          </tr>
      </tbody>

   </table>
     
     
    </article>
  </>
  )
}

export default UserOrder






