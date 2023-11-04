import React from "react";
import { withRouter } from "react-router-dom";
import "./checkOut.css";

const TotalPrice = ({ itemCount, total, history, clearCart }) => {
  return (
    <div className="total-container">
      <div className="total">
        <p>Total Iteems: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className="checkout">
        <button
          className="btn-checkout"
          onClick={() => history.push("/checkout")}
        >
          CHECKOUT
        </button>
        <button className="btn-clear" onClick={() => clearCart()}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default withRouter(TotalPrice);
