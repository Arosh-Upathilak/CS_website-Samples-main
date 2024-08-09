import React from "react";
import "./heroSection.css";
import ContactUs from "../../../components/ContactUs/ContactUs";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const HeroSection = () => {
  const events = [
    { title: "Event 1", description: "Description for event 1" },
    { title: "Event 2", description: "Description for event 2" },
    { title: "Event 3", description: "Description for event 3" },
    { title: "Event 4", description: "Description for event 4" },
    { title: "Event 5", description: "Description for event 5" },
    { title: "Event 6", description: "Description for event 6" },
    { title: "Event 7", description: "Description for event 7" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [events.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

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
          <Link to="">
            <button className="readMore_button">Read More</button>
          </Link>
        </div>
      </div>

      <div className="previous_event_container_hero">
        <h1>PREVIOUS EVENTS</h1>

        <div className="slider_container">
          <button className="prev_button" onClick={goToPrevSlide}>
            &#8249;
          </button>

          <div
            className="events_hero"
            ref={sliderRef}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event, index) => (
              <div className="event_hero" key={index}>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            ))}
          </div>

          <button className="next_button" onClick={goToNextSlide}>
            &#8250;
          </button>
        </div>
      </div>

      <ContactUs />
    </div>
  );
};

export default HeroSection;
