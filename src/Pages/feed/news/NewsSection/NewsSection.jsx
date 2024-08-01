import React from "react";
import './newsSection.css';

const NewsSection = () => {
    return (
        <div className="newsSection">
            <div className="newsContainer">
                <h1>Announcements</h1>
            </div>
            <div className="volunteerCallContainer">
                <div className='applyNowButton_container_news'>
                    <button>
                       Apply Now
                    </button>
                </div>
            </div>
            <div className="newsContainer2"></div>
        
        </div>
    );
    };

export default NewsSection;