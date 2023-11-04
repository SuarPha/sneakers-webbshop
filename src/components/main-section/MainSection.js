import React from "react";
import { withRouter } from "react-router-dom";
import blueShoe from "../../images/blueShoe.jpg";
import "./mainSection.css";

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={blueShoe} alt="blue shoe" />
        </div>
        <div className="ms-m-description">
          <h2>Blue summer shoes</h2>
          <p>
            Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n
            sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam\n recusandae alias error harum maxime adipisci amet
            laborum
          </p>
          <button
            className="button is-blue"
            id="shop now"
            onClick={() => history.push("/product/234967")}
          >
            CLICK ME!
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);
