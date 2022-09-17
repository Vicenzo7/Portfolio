import React from "react";
import "./about.css";
import ME from "../../assets/mine.JPG";
import { FaAward } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { RiFolder3Fill } from "react-icons/ri";
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/*Image*/}
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        {/*Info*/}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher Open To Work</small>
            </article>

            <article className="about__card">
              <FaCertificate className="about__icon" />
              <h5>Education</h5>
              <small> Computer Science Engineer</small>
            </article>

            <article className="about__card">
              <RiFolder3Fill className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
          <p>
            I am a software engineer interested in backend applications
            development. I started web development in 2021 and acquired
            knowledge in this field over time. I want this page to be a
            "not-so-formal" description of who I am, my main skills and why I
            think I am a great software engineer and why you should hire me. For
            a more formal introduction, you can download my résumé.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
