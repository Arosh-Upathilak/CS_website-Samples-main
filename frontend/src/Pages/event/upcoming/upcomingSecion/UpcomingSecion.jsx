import React, { useState, useEffect } from "react";
import "./upcomingSecion.css";
import { getAllPosts } from "../../../../services/PostService";  // Importing your API function
import { Link } from "react-router-dom";

const UpcomingSection = () => {
  const [events, setEvents] = useState([]);  // State to store filtered events

  // Fetch events and filter them
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getAllPosts();  // Fetching all posts/events from backend
      if (response.error) {
        console.error(response.error);
      } else {
        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];

        // Filter events where eventDate is greater than or equal to today's date
        const futureEvents = response.filter(post => post.eventDate >= today);
        setEvents(futureEvents);  // Set filtered events to state
      }
    };
    fetchEvents();  // Fetch events when component mounts
  }, []);

  return (
    <div className="eventSection">
      <div className="upcomingEventsContainer">
        <h1>Upcoming Events</h1>
        <div className="eventDetailsContainer">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index} className="eventRow">
                <div className="eventImageContainer">
                  {/* Date displayed at the top left */}
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
            <p>No upcoming events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSection;
