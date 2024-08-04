import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div id="portfolio" className="ptf">
      <div className="dt">
        <div>
          <img
            src="
            https://themesdesign.in/xolcy/layout/images/counter-img-1.png"
          ></img>
          <h1>2570+</h1>
          <p>Projects Done</p>
        </div>
        <div>
          <img src="https://themesdesign.in/xolcy/layout/images/counter-img-2.png"></img>
          <h1>300+</h1>
          <p>Awards Win</p>
        </div>
        <div>
          <img src="https://themesdesign.in/xolcy/layout/images/counter-img-3.png"></img>
          <h1>4500+</h1>
          <p>Happy Client</p>
        </div>
        <div>
          <img src="https://themesdesign.in/xolcy/layout/images/counter-img-4.png"></img>
          <h1>270+</h1>
          <p>Country</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
