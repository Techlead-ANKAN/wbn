import React from 'react';
import './Safari.css'; // Assuming you have styles separated here
import girImg from '../../../public/GIR.png';
import tadobaImg from '../../../public/3.png';

const Safari = () => {
  return (
    <section className="safari-section">
      <h1 className="safari-title">UPCOMING SAFARIS</h1>

      <div className="safari-card">
        <img src={girImg} alt="Jim Corbett National Park Safari View" />
        <div className="safari-overlay-top">Jim Corbett National Park</div>
        <div className="safari-overlay-bottom">
          A mesmerising landscape and an unforgettable experience
        </div>
        <div className="safari-overlay-details">
          <div><strong>Dates of Tour:</strong> 10th – 13th August 2025</div>
          <div><strong>Number of Days:</strong> 4 Days / 3 Nights</div>
          <div><strong>Price:</strong> Rs-10,999</div>
        </div>
        <a href="/safari-details" className="know-more-btn">Know More</a>
      </div>

      <div className="safari-card">
        <img src={tadobaImg} alt="Tadoba Safari View" />
        <div className="safari-overlay-top">Tadoba - TATR</div>
        <div className="safari-overlay-bottom">The Forest That Never Disappoints</div>
        <div className="safari-overlay-details">
          <div><strong>Dates of Tour:</strong> 5th – 8th September 2025</div>
          <div><strong>Number of Days:</strong> 4 Days / 3 Nights</div>
          <div><strong>Price:</strong> Rs-10,999</div>
        </div>
        <a href="/safari-tadoba" className="know-more-btn">Know More</a>
      </div>
    </section>
  );
};

export default Safari;
