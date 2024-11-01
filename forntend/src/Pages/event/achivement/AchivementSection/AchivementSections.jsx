import React from "react";
import './achivementSection.css';

const AchivementSections = () => {
    
        return (
            <div className="achivement">
            <div className="awards_mainContainer">
            <h1 className="awards_text">Awards</h1>
                <div className="awards_container">
                    <div className="awards_container2">
                        <div className="awardsPhotos_container">
                            <h3>Photos</h3>
                        </div>
                        <h3 className="awardTitle_text">Award title</h3>
                        <div className="description_container">
                            <h3 className="description_text">Description</h3>
                        </div>
                    </div>

                    <div className="awards_container2">
                        <div className="awardsPhotos_container">
                            <h3>Photos</h3>
                        </div>
                        <h3 className="awardTitle_text">Award title</h3>
                        <div className="description_container">
                            <h3 className="description_text">Description</h3>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="grants_mainContainer"></div>
            <h1 className="awards_text">Grants & Funds</h1>
            <div className="grants_container1">
                <div className="grants_container2"></div>
                <div className="grants_container2"></div>
            </div>
            </div>
        );
        };

export default AchivementSections;