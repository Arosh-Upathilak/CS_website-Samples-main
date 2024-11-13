import React from "react";
import './PastCommitteeSection.css';
import commitymember from '../../../../assests/images/sample_member.webp';


const PastCommitteeSection = () => {
    return (
        <div className="pastCommittee">
      <h1>Committee (2022/2023)</h1>
      <div className="past_committee__container">
        <div className="past_committee_member">
          <div className="executive_members">
            <div className="members__title">Executive Committee</div>
            <div className="members__container">
              <div className="image_card">
                <img src={commitymember} alt="man" className="image_card-img" />
                <div className="image_card-info">
                  <p>Smriti Shriniwas Mandhana</p>
                  <p>Cricket</p>
                </div>
              </div>
              <div className="image_card">
                <img src={commitymember} alt="man" className="image_card-img" />
                <div className="image_card-info">
                  <p>Smriti Shriniwas Mandhana</p>
                  <p>Cricket</p>
                </div>
              </div>
              <div className="image_card">
                <img src={commitymember} alt="man" className="image_card-img" />
                <div className="image_card-info">
                  <p>Smriti Shriniwas Mandhana</p>
                  <p>Cricket</p>
                </div>
              </div>
            </div>
          </div>
          <div className="event_members">
            <div className="members__title">Event Committee</div>
            <div className="members__container">
              <div className="image_card">
                <img src={commitymember} alt="man" className="image_card-img" />
                <div className="image_card-info">
                  <p>Smriti Shriniwas Mandhana</p>
                  <p>Cricket</p>
                </div>
              </div>
              <div className="image_card">
                <img src={commitymember} alt="man" className="image_card-img" />
                <div className="image_card-info">
                  <p>Smriti Shriniwas Mandhana</p>
                  <p>Cricket</p>
                </div>
              </div>
              <div className="image_card">
                <img src={commitymember} alt="man" className="image_card-img" />
                <div className="image_card-info">
                  <p>Smriti Shriniwas Mandhana</p>
                  <p>Cricket</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
    };

export default PastCommitteeSection;
