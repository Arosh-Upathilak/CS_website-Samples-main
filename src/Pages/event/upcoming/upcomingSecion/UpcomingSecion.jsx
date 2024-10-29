import React, { useState, useEffect } from "react";
import "./upcomingSecion.css";

const UpcomingSection = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Update the current date every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Format date parts
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = currentDate.toLocaleString('default', { month: 'short' }).toUpperCase();
    const year = currentDate.getFullYear();

    return (
        <div className="eventSection">
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
        </div>
    );
};

export default UpcomingSection;
