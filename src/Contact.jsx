import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-cnt">
      <div className="contact-dt">
        <h1>Contact Us</h1>
        <p>
          To achieve this, it would be necessary to have uniform grammar,
          pronunciation and more common that of the individual languages.
        </p>
      </div>
      <div className="contact-list">
        <label>Name</label>
        <input type="text" required placeholder="Your Name"></input>
        <label>Subject</label>
        <input type="text" required placeholder="Your Subject"></input>
        <label>E-mail</label>
        <input type="text" required placeholder="Your Mail"></input>
        <label>Contact</label>
        <input type="text" required placeholder="+91 00000 00000"></input>
        <label>Message</label>

        <textarea name="message"></textarea>

        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
