import React from "react";
import { useState, useEffect,useRef } from "react";
import "./eventSection.css";

const EventSection = () => {

     const events = [
    { title: "Event 1", description: "Description for event 1" },
    { title: "Event 2", description: "Description for event 2" },
    { title: "Event 3", description: "Description for event 3" },
    { title: "Event 4", description: "Description for event 4" },
    { title: "Event 5", description: "Description for event 5" },
    { title: "Event 6", description: "Description for event 6" },
    { title: "Event 7", description: "Description for event 7" },
  ];
  
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [eventsPerPage, setEventsPerPage] = useState(2);
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
    
  

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(timer); 
    }, []);

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = currentDate.toLocaleString('default', { month: 'short' }).toUpperCase();
    const year = currentDate.getFullYear();

    return (
    <div className="eventSection">

        <div className="eventContainer">

        <div className='applyNowButton_container_event'>
          <button>
            Apply Now
          </button>
          </div>

       
        </div>

        <div className="upcomingEventsContainer">
            <h1>Upcoming Events</h1>

              <div className="eventDetailsContainer">
                <div className="dateContainer">
                        <div className="datePart">{month}</div>
                        <div className="datePart">{day}</div>
                        <div className="datePart">{year}</div>
                </div>
                <div className="eventNameContainer"></div>
              </div>

        </div>

        <div className="previousEventsContainer">
            <h1>Previous Events</h1>

            <div className='previousEventsDetailsContainer' ref={sliderRef}>

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
            {Array.from({ length: Math.ceil(events.length / 2) }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === Math.floor(currentIndex / eventsPerPage) ? 'active' : ''}`}
                onClick={() => goToSlide(index * eventsPerPage)}
              ></span>
            ))}
          </div>

        </div>


        </div>

    </div>
    )};
export default EventSection;