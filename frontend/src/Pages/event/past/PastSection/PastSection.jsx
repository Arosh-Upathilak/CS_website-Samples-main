import React, { useState, useEffect } from "react";
import "./PastSection.css";
import { getAllPosts } from "../../../../services/PostService";  
import { Link } from "react-router-dom";

const PastSection = () => {
  const [events, setEvents] = useState([]);  

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getAllPosts();  
      if (response.error) {
        console.error(response.error);
      } else {
        const today = new Date();
        const fourteenDaysAgo = new Date(today);
        fourteenDaysAgo.setDate(today.getDate() - 31);

        const formattedToday = today.toISOString().split('T')[0];
        const formattedFourteenDaysAgo = fourteenDaysAgo.toISOString().split('T')[0];

        const pastEvents = response.filter(post => 
          post.eventDate >= formattedFourteenDaysAgo && post.eventDate <= formattedToday
        );
        setEvents(pastEvents); 
      }
    };
    fetchEvents(); 
  }, []);

  return (
    <div className="eventSection">
      <div className="upcomingEventsContainer">
        <h1>Past Events</h1>
        <div className="eventDetailsContainer">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index} className="eventRow">
                <div className="eventImageContainer">
                  <h1 className="eventDate">{event.eventDate}</h1>
                  {event.imageData && (
                    <div className="imageWrapper">
                      <img
                        src={`data:image/jpeg;base64,${event.imageData}`}
                        alt={event.title}
                        className="eventImage"
                      />
                    </div>
                  )}
                </div>
                <div className="eventTextContainer">
                  <h3>Event Title: {event.title}</h3>
                  <p>Event Description: {event.description.replace(/<\/?p>/g, '')}</p> 
                  <p>Link: <Link to={event.link}>{event.link}</Link></p>
                </div>
              </div>
            ))
          ) : (
            <p>No past events found in the last 31 days.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastSection;
