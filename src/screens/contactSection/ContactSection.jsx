import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactSection.css";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9trz3xm",
        "template_8e3w4hm",
        form.current,
        "user_CxGl7Lj58Wsr1WAUmOuCS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <h1 id="title">CONTACT ME</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label for="nameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              className="form-control"
              id="nameInput"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label for="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="from_email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="messageInput" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="messageInput"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" value="Send" className="btn btn-primary mb-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
