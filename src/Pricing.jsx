import React from "react";
import "./Pricing.css";
const Pricing = () => {
  return (
    <div id="pricing" className="prc">
      <div className="prc-1">
        <div className="prc-dt">
          <div className="p-month">
            <h1>Free</h1>
            <p>Per Month</p>
          </div>
          <div className="opt">
            <p>>> Online Space : 500MB</p>
            <p>>> Bandwidth : 1.5GB</p>
            <p>>> Support : Yes</p>
            <p>>> Hidden Fees : No</p>
          </div>
          <div className="prc-bt">
            <button> Choose Plan >></button>
          </div>
        </div>
      </div>

      <div className="prc-2">
        <div className="prc-dt">
          <div className="p-month">
            <h1>600$</h1>
            <p>Per Month</p>
          </div>
          <div className="opt">
            <p>>> Online Space : 500MB</p>
            <p>>> Bandwidth : 1.5GB</p>
            <p>>> Support : Yes</p>
            <p>>> Hidden Fees : No</p>
          </div>
          <div className="prc-bt">
            <button> Choose Plan >></button>
          </div>
        </div>
      </div>

      <div className="prc-3">
        <div className="prc-dt">
          <div className="p-month">
            <h1>299$</h1>
            <p>Per Month</p>
          </div>
          <div className="opt">
            <p>>> Online Space : 500MB</p>
            <p>>> Bandwidth : 1.5GB</p>
            <p>>> Support : Yes</p>
            <p>>> Hidden Fees : No</p>
          </div>
          <div className="prc-bt">
            <button> Choose Plan >></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
