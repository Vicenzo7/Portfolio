import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SiDiscord } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  // function called when clicked on submit
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4b25zvq",
        "template_k072dvj",
        form.current,
        "60FDsbgBfVvhP0-E-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //to clear the fields
    e.target.reset();
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
            <h5>deeprajm35@gmail.com</h5>
            <a href="mailto:deeprajm35@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <SiDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>Vicenzo#7067</h5>
            <a
              href="https://discord.com/channels/@Vicenzo#7067"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>8668221572</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8668221572"
              target="_blank"
            >
              Send a message
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
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
