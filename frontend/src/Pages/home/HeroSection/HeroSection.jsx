import React, { useState, useEffect } from "react";
import "./heroSection.css";
import ContactUs from "../../../components/ContactUs/ContactUs";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getAllPosts } from "../../../services/PostService"; 

const HeroSection = () => {
  const [posts, setPosts] = useState([]);  
  const [currentIndex, setCurrentIndex] = useState(0);  

  const fetchPosts = async () => {
    const response = await getAllPosts();  
    if (response.error) {
      console.error(response.error);  
    } else {
      const today = new Date().toISOString().split('T')[0];

      const futurePosts = response.filter(post => post.eventDate > today);

      setPosts(futurePosts); 
    }
  };

  useEffect(() => {
    fetchPosts();  

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);  
    }, 5000);
    
    return () => clearInterval(interval);  
  }, [posts.length]);  

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="home_event">
        <div className="home_event_image">
          {posts.length > 0 && (
            <Link to={posts[currentIndex]?.link || "#"} target="_blank" rel="noopener noreferrer">
              {posts[currentIndex]?.imageData && (
                <img
                  src={`data:image/jpeg;base64,${posts[currentIndex]?.imageData}`}
                  alt={posts[currentIndex]?.title}
                  style={{ width: "200%", height: "90%" }}
                  className="post-image"
                />
              )}
            </Link>
          )}

          <button className="arrow left-arrow" onClick={goToPrevSlide}>
            <FaArrowLeft />
          </button>

          <button className="arrow right-arrow" onClick={goToNextSlide}>
            <FaArrowRight />
          </button>

          <div className="dots-container">
            {posts.map((_, index) => (
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
