import React, { useRef } from "react";
import "../styles/ContactMe.css";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nrnd8tc",
        "template_yib486l",
        form.current,
        "rG4YgY7CuYZlN1Tmn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactme-container">
      <h1 id="ContactMe">Contact Me</h1>
      <div className="contactme">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input type="text" placeholder="Your Name..." name="from_name" />
          </div>
          <div>
            <input type="text" placeholder="Your Email..." name="email" />
          </div>
          <div>
            <textarea
              cols="30"
              rows="8"
              placeholder="Message..."
              name="message"
            ></textarea>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
