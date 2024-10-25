import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <h2>Diabetic Retinopathy Detection</h2>
        </div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/visualization">Visualization</Link></li>
          <li><Link to="/login">Login/Signup</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Detect Diabetic Retinopathy Early, Save Vision</h1>
        <p>Our AI-based system helps in identifying diabetic retinopathy at early stages, empowering medical professionals to take timely actions.</p>
        <button className="cta-button"><Link to="/upload">Start Detection Now</Link></button>
      </header>

      {/* Main Content */}
      <section className="about-section">
        <h2>What is Diabetic Retinopathy?</h2>
        <p>
          Diabetic Retinopathy is a complication of diabetes that affects the blood vessels in the retina. High blood sugar levels can damage the small blood vessels in the retina, leading to vision problems and, eventually, blindness.
        </p>

        <h2>Why is Diabetic Retinopathy Detection Important?</h2>
        <p>
          Early detection and treatment of diabetic retinopathy can significantly reduce the risk of severe vision loss. Through regular screenings, patients can take preventive measures and avoid the complications of untreated diabetic retinopathy.
        </p>

        <h2>Where is Diabetic Retinopathy Detection Used?</h2>
        <p>
          This detection system is utilized in hospitals, eye clinics, and diabetic care centers globally. It helps healthcare providers monitor patients with diabetes and provide timely treatment.
        </p>

        <h2>Symptoms of Diabetic Retinopathy</h2>
        <ul>
          <li>Blurred vision</li>
          <li>Dark spots or floaters</li>
          <li>Vision loss in one or both eyes</li>
          <li>Difficulty seeing colors</li>
        </ul>

        <h2>Treatment Options</h2>
        <p>
          Treatments for diabetic retinopathy include laser therapy, medication injections, and in some cases, surgery. Early detection can delay or prevent the need for these treatments.
        </p>

        <h2>Global Statistics</h2>
        <p>
          According to the International Diabetes Federation, around 93 million people worldwide have diabetic retinopathy, which accounts for approximately 35% of all diabetes cases. Early detection can prevent up to 90% of blindness caused by this condition.
        </p>

        {/* Retinal Image */}
        <div className="image-container">
          <img src="src\eye.jpeg" alt="Retinal Scan" className="retinal-image" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We are dedicated to developing tools and solutions for early detection of diabetic retinopathy. Our mission is to help reduce the risk of vision loss worldwide through AI-driven technology.</p>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/resources">Medical Guidelines</Link></li>
              <li><Link to="/resources">FAQs</Link></li>
              <li><a href="https://www.kaggle.com/c/diabetic-retinopathy-detection" target="_blank" rel="noopener noreferrer">Kaggle Competition</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@drdetection.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Vision Lane, EyeCity, USA</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Diabetic Retinopathy Detection. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
