import React from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs, { send } from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o9wqne5",
        "template_6sde9dn",
        form.current,
        "5ITbM9EZMdGuY-ik9"
      )
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>imzohaibulhassan@gmail.com</h5>
            <a href="mailto:imzohaibulhassan@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Zohaib Ul Hassan</h5>
            <a href="https://m.me/malik.zohaibulhassan.06" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+923184090681</h5>
            <a
              href="https://api.whatsapp.com/send?phone=923184090681"
              target="_blank"
            >
              Send Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message..."
            required
          ></textarea>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
