import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        DEEPRAJ
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#expirence">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/deepraj.majalikar" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/_vicenzo__" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/deeprajm35" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vicenzo. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
