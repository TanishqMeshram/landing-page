import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('signin'); // State to manage active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="hero-container">
      {/* Left Side (60%) */}
      <div className="left-side">
        <div className="text-container">
          <h1 className="heading">
            <i>Explore your <span className="hobby">hobby</span> or <span className="passion">passion</span></i>
          </h1>
          <p className="slogan">
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers,
            classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or
            performing arts, sports, games, gardening, model making, cooking indoor or outdoor activities...
          </p>
          <p className="slogan">
            If you are an expert or a seller, you can add your listing and promote yourself, your studies, products,
            services, or events. Hop on your hobbyhorse and enjoy your ride.
          </p>
        </div>
        <div className="image-container">
          <img src="first.png" alt="Hero Image" className="image" />
          <img src="second.png" alt="Hero Image" className="image" />
        </div>
      </div>

      {/* Right Side (40%) */}
      <div className="right-side-auth">
        <div className="login-signup-container-auth">
          {/* Signin/Login switching options */}
          <div className="tab-buttons">
            <button
              className={`button ${activeTab === 'signin' ? 'active' : ''}`}
              onClick={() => handleTabClick('signin')}
            >
              Sign In
            </button>
            <button
              className={`button ${activeTab === 'signup' ? 'active' : ''}`}
              onClick={() => handleTabClick('signup')}
            >
              Sign Up
            </button>
          </div>
          {/* Login/Signup options */}
          <div className="login-signup-box-auth">
            <div className="switch-options-auth">
              <button className="button">
                <FaGoogle className="icon" /> Continue with Google
              </button>
              <button className="button">
                <FaFacebook className="icon" /> Continue with Facebook
              </button>
            </div>
            {/* Horizontal rule with text */}
            <hr className="divider" />
            <p className="connect-text">or connect with</p>
            {/* Email and password form */}
            <form className="form-auth">
              <input className="input" type="email" placeholder="Email" />
              <input className="input" type="password" placeholder="Password" />
              <p className="terms">
                By continuing you agree to our <strong>Terms of service</strong> and <strong>Privacy policy</strong>
              </p>
              <button className="submit-button" type="submit">
                Agree and Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;