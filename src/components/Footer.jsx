import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaGooglePlus, FaYoutube, FaTelegram, FaEnvelope } from 'react-icons/fa';
// import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <img src="end.jpg" alt="Footer Image" className="footer-image" />
      
      <div className="footer-content">
        <div className="footer-column">
          <h4>Hobbycue</h4>
          <p>About us</p>
          <p>Our services</p>
          <p>Work with us</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-column">
          <h4>How Do I</h4>
          <p>Sign Up</p>
          <p>Add a listing</p>
          <p>Claims listing</p>
          <p>Post a query</p>
          <p>Add a blog post</p>
          <p>Other Queries</p>
        </div>
        <div className="footer-column">
          <h4>Quick links</h4>
          <p>Listings</p>
          <p>Blog posts</p>
          <p>Shop / Store</p>
          <p>Community</p>
        </div>
        <div className="footer-column">
          <h4>Social Media</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
            <FaGooglePlus />
            <FaYoutube />
            <FaTelegram />
            <FaEnvelope />
          </div>
          <h4 className="invite-heading">Invite Friends</h4>
          <div className="invite-section">
            <input type="email" placeholder="Enter email" className="invite-input" />
            <button className="invite-button">Invite</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© Purple Cues Private Limited</p>
      </div>
    </div>
  );
}

export default Footer;
