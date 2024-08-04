import React from "react";
import "./Features.css";
function Features() {
  return (
    <div className="f-cont">
      <div className="f-image">
        <img
          alt=""
          src="https://themesdesign.in/xolcy/layout/images/feature.jpg"
        ></img>
        <div className="hide-on-mobile">
          <div className="d-box">
            <h3 className="use">200+ Users</h3>
            <i className="material-icons">group</i>
          </div>
        </div>
      </div>

      <div className="f-info">
        <h3 id="features">Features</h3>
        <h1>Modern & Powerful Interface</h1>
        <p>
          In an ideal world this website wouldn’t exist, a client would
          acknowledge the importance design starts.
        </p>
        <p className="mt">
          <span className="pt">Strategy Solution</span>
        </p>
        <p className="mt">
          <span className="pt">Easy to Customize</span>
        </p>
        <button>Learn More >></button>
      </div>
    </div>
  );
}

export default Features;
