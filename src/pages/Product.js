import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ProductsContext } from "../components/context/ProductsContext";
import { CartContext } from "../components/context/CartContext";
import { isInCart } from "../helpers";
import Layout from "../components/shared/Layout";
import "./product.css";

const Product = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    if (!product) {
      return push("/shop");
    }

    setProduct(product);
  }, [id, product, push, products]);

  if (!product) {
    return null;
  }

  const { imgUrl, title, price, description, storage } = product;
  const itemInCart = isInCart(product, cartItems);
  return (
    <Layout>
      <div className="Container">
        <div className="single-product-container">
          <div className="wrapper">
            <div className="product-img">
              <img src={imgUrl} alt="product" />
            </div>
            <div className="product-details">
              <div className="name-price">
                <h1>{title}</h1>
                <h2> $ {price}</h2>
                <p>In Stock {storage}</p>
              </div>
              <div className="product-description">
                <p>{description}</p>
              </div>
              <div className="add-to-cart-btns">
                {!itemInCart && (
                  <button
                    className="cart-btn"
                    onClick={() => addProduct(product)}
                  >
                    ADD TO CART
                  </button>
                )}
                {itemInCart && (
                  <button
                    className="addMore-btn"
                    onClick={() => increase(product)}
                  >
                    ADD MORE
                  </button>
                )}

                <button className="checkout-btn">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Product);
