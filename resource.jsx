import React from 'react';
import { Link } from 'react-router-dom';
import './resource.css';

const Resources = () => {
  return (
    <div className="resources-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <h2>Diabetic Retinopathy Resources</h2>
        </div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/visualization">Visualization</Link></li>
          <li><Link to="/login">Login/Signup</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <section className="resources-section">
        <h2>Useful Resources for Diabetic Retinopathy</h2>
        <p>
          Below are some important resources and links for understanding diabetic retinopathy, prevention, and datasets used in research and development.
        </p>

        <h3>Medical Guidelines and Information</h3>
        <ul>
          <li>
            <a href="https://www.diabetes.org/diabetes/complications/eye-complications" target="_blank" rel="noopener noreferrer">
              American Diabetes Association - Eye Complications
            </a>
          </li>
          <li>
            <a href="https://www.idf.org/aboutdiabetes/what-is-diabetes/complications/diabetic-retinopathy.html" target="_blank" rel="noopener noreferrer">
              International Diabetes Federation - Diabetic Retinopathy
            </a>
          </li>
          <li>
            <a href="https://www.aao.org/eye-health/diseases/what-is-diabetic-retinopathy" target="_blank" rel="noopener noreferrer">
              American Academy of Ophthalmology - What is Diabetic Retinopathy?
            </a>
          </li>
        </ul>

        <h3>Research Papers and Studies</h3>
        <ul>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/31241297/" target="_blank" rel="noopener noreferrer">
              PubMed - Advances in Diabetic Retinopathy Screening
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5795351/" target="_blank" rel="noopener noreferrer">
              NCBI - Automated Diabetic Retinopathy Detection: A Review
            </a>
          </li>
        </ul>

        <h3>Diabetic Retinopathy Datasets</h3>
        <p>
          Explore datasets related to diabetic retinopathy used for machine learning and research purposes.
        </p>
        <ul>
          <li>
            <a href="https://www.kaggle.com/c/diabetic-retinopathy-detection" target="_blank" rel="noopener noreferrer">
              Kaggle - Diabetic Retinopathy Detection Dataset
            </a>
          </li>
          <li>
            <a href="https://www.kaggle.com/sovitrath/diabetic-retinopathy-eda-and-preprocessing" target="_blank" rel="noopener noreferrer">
              Kaggle - Diabetic Retinopathy EDA and Preprocessing
            </a>
          </li>
        </ul>

        <h3>Tools for Early Detection</h3>
        <p>
          Early detection tools and services can help prevent vision loss due to diabetic retinopathy. Here are some tools used by medical professionals:
        </p>
        <ul>
          <li>
            <a href="https://www.eyepacs.org/" target="_blank" rel="noopener noreferrer">
              EyePACS - Diabetic Retinopathy Screening
            </a>
          </li>
          <li>
            <a href="https://retina-ai.com/" target="_blank" rel="noopener noreferrer">
              RETINA-AI Health - AI-Powered Screening Tools
            </a>
          </li>
        </ul>

        <h3>Additional Reading</h3>
        <p>Expand your knowledge about diabetic retinopathy through the following articles and blogs:</p>
        <ul>
          <li>
            <a href="https://www.joslin.org/patient-care/diabetes-complications/eye-care/diabetic-retinopathy" target="_blank" rel="noopener noreferrer">
              Joslin Diabetes Center - Diabetic Retinopathy
            </a>
          </li>
          <li>
            <a href="https://www.webmd.com/diabetes/ss/slideshow-diabetes-eye-problems" target="_blank" rel="noopener noreferrer">
              WebMD - Eye Problems with Diabetes
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We provide tools and resources for early detection of diabetic retinopathy through AI and machine learning technologies.</p>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@drdetection.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Vision Road, EyeCity, USA</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Diabetic Retinopathy Resources. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Resources;
