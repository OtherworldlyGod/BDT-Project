import React from 'react';
import { Link } from 'react-router-dom';
import './Visualization.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Visualization = () => {
    // Outcome Distribution (Bar Chart)
    const outcomeDistributionData = {
        labels: ['Non-Diabetic', 'Diabetic'],
        datasets: [
            {
                label: 'Number of Patients',
                data: [500, 268],
                backgroundColor: ['#004d40', '#b71c1c'],
            },
        ],
    };

    // Custom Box Plot for Glucose Levels (using Bar chart with error bars)
    const glucoseData = {
        labels: ['Non-Diabetic', 'Diabetic'],
        datasets: [
            {
                label: 'Glucose Levels',
                data: [107, 140], // median values
                backgroundColor: ['#004d40', '#b71c1c'],
                borderColor: '#000',
                borderWidth: 1,
                error: {
                    min: [93, 119], // Q1 values
                    max: [125, 167], // Q3 values
                },
            },
        ],
    };

    return (
        <div className="visualization-container">
            {/* Header */}
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

            {/* Outcome Distribution */}
            <section className="chart-section">
                <h2>Outcome Distribution</h2>
                <Bar data={outcomeDistributionData} />
            </section>

            {/* Glucose Levels */}
            <section className="chart-section">
                <h2>Glucose Levels</h2>
                <Bar data={glucoseData} />
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We develop tools for early detection of diabetic retinopathy, aiming to reduce vision loss globally with AI-driven technology.</p>
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

export default Visualization;
