import React from 'react';
import './committeeSection.css';
import commitymember from '../../../../assests/images/sample_member.webp';

const CommitteeSection = () => {
  return (
    <div className="committee">
      <h1>Committee (2024/2025)</h1>
      <div className="committee__container">
        <div className="committee_member">
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

export default CommitteeSection;
