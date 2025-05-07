import React from "react";

const Contact = () => {
  return (
    <div className="page">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-text">Jangan ragu untuk menghubungi kami dengan mengisi formulir di bawah ini atau melalui email.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;