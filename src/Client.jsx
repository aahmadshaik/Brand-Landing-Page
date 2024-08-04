import React from "react";
import "./Client.css";

const Client = () => {
  return (
    <div className="clt-cnt">
      <div className="client">
        <h1 id="client">What Client Says</h1>
        <p>
          It is a long established fact that create category leading brand
          experiences a reader will be distracted by the readable content of a
          page when looking at its layout.
        </p>
      </div>

      <div className="cst">
        <div className="cst-1">
          <div className="icon-client">
            <i className="material-icons">chat_bubble</i>
          </div>
          <div className="txt-clt">
            <h3>Ebony Downe</h3>
            <span className="dst">
              <p>CEO, Founder</p>
            </span>
            <p>
              Our task must be to free ourselves by widening our circle of
              compassion to embrace all living creatures Integer varius lacus
              non magna tempor congue natuasre the whole its beauty.
            </p>
          </div>
        </div>
        <div className="cst-2">
          <div className="icon-client">
            <i className="material-icons">chat_bubble</i>
          </div>
          <div className="txt-clt">
            <h3>Sophie Gant</h3>
            <span className="dst">
              <p>Web Developer</p>
            </span>
            <p>
              I've learned that people will forget what you said, people will
              forget what you did, but people will never aliquam in nunc quis
              tincidunt forget how you vestibulum egestas them feel.
            </p>
          </div>
        </div>

        <div className="cst-3">
          <div className="icon-client">
            <i className="material-icons">chat_bubble</i>
          </div>
          <div className="txt-clt">
            <h3>Ruben reed</h3>
            <span className="dst">
              <p>Web Designer</p>
            </span>
            <p>
              Those must scelerisque pretium dolor, sit amet vehicula be to free
              ourselves by widening our circle of compassion to embrace all
              living creatures and the whole of quis consectetur nunc sit amet
              semper justo. nature and its beauty.
            </p>
          </div>
        </div>
        <div className="cst-4 ">
          <div className="icon-client">
            <i className="material-icons">chat_bubble</i>
          </div>
          <div className="txt-clt">
            <h3>Jordan Dakin</h3>
            <span className="dst">
              <p>Web Designer</p>
            </span>
            <p>
              I feel confident imposing change on myself. It's a lot more fun
              progressing than looking back. That's why scelerisque pretium
              dolor, sit amet vehicula erat pelleque need throw curve balls.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
