import React, { useState, useEffect } from "react";
import "./heroSection.css";
import ContactUs from "../../../components/ContactUs/ContactUs";
import { Link } from "react-router-dom";
import Image1 from "../../../assests/images/UOJCoders.jpg";
import Image2 from "../../../assests/images/image2.jpg"; 
import Image3 from "../../../assests/images/image3.jpg";
import Image4 from "../../../assests/images/image4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const HeroSection = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
  

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="home_event">
        <div className="home_event_image">
          <img src={images[currentIndex]} alt="home_event" />
          {/* Left Arrow */}
          <button className="arrow left-arrow" onClick={goToPrevSlide}>
  <FaArrowLeft />
</button>

<button className="arrow right-arrow" onClick={goToNextSlide}>
  <FaArrowRight />
</button>

          {/* Dots for each image */}
          <div className="dots-container">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="aboutUs_container">
        <div className="aboutUs_text">
          <h1>ABOUT US</h1>
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

      <ContactUs />
    </div>
  );
};

export default HeroSection;
