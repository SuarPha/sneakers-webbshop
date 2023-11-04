import React, { useContext } from "react";
import { CartContext } from "../components/context/CartContext";
import Layout from "../components/shared/Layout";
import CartItem from "./cart-items";
import TotalPrice from "./total";
import "./checkOut.css";

const Checkout = () => {
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } =
    useContext(CartContext);
  const funcs = { increase, decrease, removeProduct };

  return (
    <Layout>
      <>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart"> Your Cart is empty</div>
        ) : (
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItem {...item} key={item.id} {...funcs} />
                ))}
              </div>
              <TotalPrice itemCount={itemCount} total={total} clearCart={clearCart} />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default Checkout;
