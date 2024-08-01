import React, { useState, useEffect, useRef } from "react";
import "./heroSection.css";
import ContactUs from "../../../components/ContactUs/ContactUs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const events = [
    {
      title: "Event 1",
      description:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      title: "Event 2",
      description:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      title: "Event 3",
      description:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      image: "https://picsum.photos/id/237/200/300",
    },
    // Add more events as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${
          currentIndex * 100
        }%)`;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const goToSlide = (index) => {
    const newIndex = (index + events.length) % events.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
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
          <button className="readMore_button">Read More</button>
        </div>
      </div>

      <div className="previous_event_container">
        <h1>PREVIOUS EVENTS</h1>

        <div className="events_slider_container">
          <button className="nav_button prev_button" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>

          <div className="events_slider" ref={sliderRef}>
            <div
              className="events"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {events.map((event, index) => (
                <div className="event" key={index}>
                  <div className="event_image_container">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="event_description">
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                    <button className="event_button">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="nav_button next_button" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="dots_container">
          {events.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <ContactUs />
    </div>
  );
};

export default HeroSection;
