import React from "react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from "../components/icons";
import "./checkOut.css";

const CartItem = (props) => {
  const {
    title,
    imgUrl,
    price,
    quantity,
    id,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, imgUrl, price, quantity, id };

  return (
      <div className="checkout-container">
    <div className="cart-item">
      <div className="item-img">
        <img src={imgUrl} alt="product" />
      </div>
      <div className="name-price">
        <h4>{title}</h4>
        <p> $ {price}</p>
      </div>
      <div className="quantity">
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className="btns-container">
        <button className="btn-increase" onClick={() => increase(product)}>
          <PlusCircleIcon width="20px" />
        </button>
        {quantity === 1 && (
          <button className="btn-trash" onClick={() => removeProduct(product)}>
            <TrashIcon width="20px" />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn-minus" onClick={() => decrease(product)}>
            <MinusCircleIcon width="20px" />
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default CartItem;
