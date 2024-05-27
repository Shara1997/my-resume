import React from "react";
import "./App.css";
import { IoIosPhonePortrait, IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

function App() {
  return (
    <div id="main-container">
      <div className="resume-container">
        <div className="heading-component">
          <h1 className="name">SHARA RAJ</h1>
          <div className="job-title">Front-End Developer</div>
          <div className="line-divider"></div>
        </div>
        <div className="body-component">
          <div className="leftside-container">
            <div className="contact-details ">
              <h2 className="section-heading">Contact Details</h2>
              <div className="leftside-line"></div>
              <div className="contact-mode">
                <div className="phone">
                  <span className="icon">
                    <IoIosPhonePortrait />
                  </span>
                  <p>+91-8590647439</p>
                </div>
                <div className="mail">
                  <span className="icon">
                    <IoIosMail />
                  </span>
                  <p>
                    <a href="mailto:shararaj1997@gmail.com">
                      shararaj1997@gmail.com
                    </a>
                  </p>
                </div>
                <div className="linkedin">
                  <span className="icon">
                    <FaLinkedin />
                  </span>
                  <p>
                    <a href="www.linkedin.com/in/shara-raj">
                      www.linkedin.com/in/shara-raj
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="skills-details">
              <h2 className="section-heading">Skills</h2>
              <div className="leftside-line"></div>
              <ul className="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Bootstrap</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="education-details">
              <h2 className="section-heading">Education</h2>
              <div className="leftside-line"></div>
              <div className="education">
                <h5>BTech in Computer Science</h5>
                <h4>College of Engineering Vadakara</h4>
                <p id="date">2016-2020</p>
              </div>
            </div>
          </div>
          <div className="rightside-container">
            <div className="about ">
              <h2 className="section-heading">About</h2>
              <div className="rightside-line"></div>
              <p className="details">
                Devoted and enthusiastic front-end developer. Eager to create
                intuitive and visually appealing user experiences by utilizing
                my creative proficiency in front-end development, all the while
                maintaining and growing my technical skill set and making a
                valuable contribution to a dynamic team-driven environment.
              </p>
            </div>
            <div className="work-experience">
              <h2 className="section-heading">Work Experience</h2>
              <div className="rightside-line"></div>
              <h4>Munarch Enterprises LLP</h4>
              <p id="work-date">December 2021- June 2023</p>
              <p>Key responsibilities:</p>
              <p>
                <ul className="list">
                  <li className="details">
                    Conducting in-depth research and analysis on various topics,
                    ensuring the accuracy and reliability of the content
                    produced.
                  </li>
                  <li className="details">
                    Verifying the accuracy, credibility, and validity of the
                    gathered content and data.
                  </li>
                  <li>
                    Collaborating with the content development team to
                    understand content requirements and objectives.
                  </li>
                  <li className="details">
                    Keeping up-to-date with industry trends, best practices, and
                    emerging technologies in the field of content research.
                  </li>
                </ul>
              </p>
            </div>
            <div className="achievements">
              <h2 className="section-heading">Achievements</h2>
              <div className="rightside-line"></div>
              <ul className="list">
                <li className="details">
                  Meta Front-End Developer Professional Certification in 2023
                </li>
                <li className="details">
                  Technical Support Fundamentals authorized by Google
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
