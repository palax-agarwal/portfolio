import React, { useState } from "react";
import "../Styles/Contact.css";
function Contact() {
  let [formData, setFormData] = useState({
    // name:"",
    // email:"",
    // message:"",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for your Reasponse");
    setFormData({ name: "", email: "", message: "" });
  }

  function changeHandler() {
    setFormData(...formData, [(e.formData.name = e.formData.value)]);
  }
  return (
    <div className="wrap">
      <div className="contact-wrapper">
        <h2 className="head">Contact Us</h2>
        <div className="contact-section">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.630598613126!2d78.44133607493896!3d17.562731083354628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ff8652b6823%3A0x981713dbb4b708c3!2sMalla%20Reddy%20University!5e1!3m2!1sen!2sin!4v1753937342099!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={changeHandler}
                placeholder="Enter name"
              />
              <br />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email"
              />
              <br />
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={changeHandler}
                placeholder="Enter Message"
                rows="5"
              ></textarea>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
