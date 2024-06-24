import React from 'react';
import { FaUser, FaMapMarkerAlt, FaShoppingBasket, FaCalendarAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-block purple">
        <div className="feature-header">
          <FaUser className="feature-icon" />
          <strong>People</strong>
        </div>
        <div className="feature-content">
          Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator.
          <button className="feature-button purple">Connect</button>
        </div>
      </div>

      <div className="feature-block green">
        <div className="feature-header">
          <FaMapMarkerAlt className="feature-icon" />
          <strong>Place</strong>
        </div>
        <div className="feature-content">
          Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through hobbycue.
          <button className="feature-button green">Meet up</button>
        </div>
      </div>

      <div className="feature-block red">
        <div className="feature-header">
          <FaShoppingBasket className="feature-icon" />
          <strong>Product</strong>
        </div>
        <div className="feature-content">
          Find equipment or supplies required for your hobby. Buy, rent, or borrow from shops, online stores, or from community members.
          <button className="feature-button red">Get it</button>
        </div>
      </div>

      <div className="feature-block blue">
        <div className="feature-header">
          <FaCalendarAlt className="feature-icon" />
          <strong>Program</strong>
        </div>
        <div className="feature-content">
          Find events, meetups, and workshops related to your hobby. Register or buy tickets online.
          <button className="feature-button blue">Attend</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
