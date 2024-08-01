import React from "react";
import "./heroSection.css";
import ContactUs from "../../../components/ContactUs/ContactUs";
import { Link } from "react-router-dom";


const HeroSection = () => {

  return (
    <div>
      <div className="heroSection_mainContainer">
        <div className="text_container">
          <h1 className="lato-bold">
            Empower Your Future in Tech: Welcome to the IEEE Computer Society
            Student Branch University of Jaffna!
          </h1>
        </div>
      </div>

      <div className="aboutUs_container">
        <div className="aboutUs_text">
          <h1>
            ABOUT <br /> US
          </h1>
        </div>

        <div className="aboutUs_description">
          <h1>Empowering Future Leaders in Computer Science and Engineering</h1>
          <p>
            The IEEE Computer Society Student Branch at the University of Jaffna
            empowers students by providing resources, workshops, and seminars.
            This fosters innovation, collaboration, and professional growth in
            computer science and engineering, preparing students to become
            industry leaders.
          </p>
          <Link to=''><button className="readMore_button">Read More</button></Link>
        </div>
      </div>

      <div className="previous_event_container">
        <h1>PREVIOUS EVENTS</h1>
        
        
      </div>

      <ContactUs />
    </div>
  );
};

export default HeroSection;
