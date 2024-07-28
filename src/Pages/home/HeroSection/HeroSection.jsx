import React, { useState, useEffect, useRef } from 'react';
import './heroSection.css';
import ContactUs from '../../../components/ContactUs/ContactUs';

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
  const [eventsPerPage, setEventsPerPage] = useState(3);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = sliderRef.current.offsetWidth;
      const eventWidth = 200; 
      const perPage = Math.floor(containerWidth / eventWidth);
      setEventsPerPage(perPage);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className='heroSection_mainContainer'>
        <div className='text_container'>
          <h1 className='lato-bold'>
            Empower Your Future in Tech: Welcome to the IEEE Computer Society Student Branch University of Jaffna!
          </h1>
        </div>
      </div>

      <div className='aboutUs_container'>
        <div className='aboutUs_text'>
          <h1>ABOUT <br /> US</h1>
        </div>

        <div className='aboutUs_description'>
          <h1>_Empowering Future Leaders in Computer Science and Engineering_</h1>
          <p>The IEEE Computer Society Student Branch at the University of Jaffna empowers students by providing resources, workshops, and seminars. This fosters innovation, collaboration, and professional growth in computer science and engineering, preparing students to become industry leaders.</p>
          <button className='readMore_button'>Read More</button>
        </div>
      </div>

      <div className='previous_event_container'>

        <h1>PREVIOUS EVENTS</h1>

        <div className='events_slider' ref={sliderRef}>

          <div
            className='events'
            style={{ transform: `translateX(-${(currentIndex / eventsPerPage) * 100}%)` }}
          >
            {events.map((event, index) => (
              <div className='event' key={index}>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            ))}
          </div>

          <div className='dots_container'>
            {Array.from({ length: Math.ceil(events.length / 3) }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === Math.floor(currentIndex / eventsPerPage) ? 'active' : ''}`}
                onClick={() => goToSlide(index * eventsPerPage)}
              ></span>
            ))}
          </div>

        </div>

      </div>

      <ContactUs/>
    </div>
  );
};

export default HeroSection;
