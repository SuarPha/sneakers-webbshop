import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="main-contaner">
      <section className="main is-large is-info main-image">
        <div className="main-body">
          <div className="container">
            <h1 className="main-title">Be Cool Be You</h1>
            <div className="shop-now-btn">
              <button className="button is-white" id="shop-now" >
                CLICK ME
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
