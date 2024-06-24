import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaQuoteRight, FaPlay } from 'react-icons/fa';

const Testimonials = () => (
  <Container className="my-5 testimonial-container">
    <div className="testimonial-header">
      <FaQuoteRight className="testimonial-icon" />
      <h2>Testimonials</h2>
    </div>
    <Row>
      <Col md={12}>
        <p className="testimonial-text">
          In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>

        <div className='audio-profile-container'>
        <span className="audio-player">
          <FaPlay className="play-icon" />
          <div className="audio-bar">
            <div className="audio-track"></div>
            <span className="audio-length">2:45</span>
          </div>
          <div className="profile-section">
            <img src="profile.jpg" alt="Profile" className="profile-image" />
          </div>
        </span>
          <span className="profile-section">
            <img src="profile.jpg" alt="Profile" className="profile-image" />
            <span>
              <p className="profile-name">Shubha Nagarajan</p>
              <p className="profile-hobby">Classical Dancer</p>
            </span>
          </span>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Testimonials;
