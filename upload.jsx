import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './upload.css';
import { jsPDF } from 'jspdf';

const Upload = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        patientName: '',
        phoneNo: '',
        leftEyeImage: null,
        rightEyeImage: null,
    });

    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [drStage, setDrStage] = useState(null); // State to store the DR stage

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('patientId', formData.patientId);
        data.append('patientName', formData.patientName);
        data.append('phoneNo', formData.phoneNo);
        data.append('leftEyeImage', formData.leftEyeImage);
        data.append('rightEyeImage', formData.rightEyeImage);
    
        try {
            // Simulate backend response with a random DR stage level (1-5)
            const randomDrStage = Math.floor(Math.random() * 5) + 1; // Generates a random integer from 1 to 5
    
            setUploadSuccess(true);
            setDrStage(randomDrStage); // Set the randomly generated DR stage level
            console.log('Mock upload successful. Random DR Stage:', randomDrStage);
    
            // Generate report with the mocked DR stage
            generateReport(randomDrStage);
        } catch (error) {
            console.error('Error uploading data:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (event) => {
        const { name, files } = event.target;
        if (files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        }
    };

    const generateReport = (drStage) => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text('Diabetic Retinopathy Detection Report', 10, 10);

        doc.setFontSize(12);
        doc.text(`Patient ID: ${formData.patientId}`, 10, 30);
        doc.text(`Patient Name: ${formData.patientName}`, 10, 40);
        doc.text(`Phone Number: ${formData.phoneNo}`, 10, 50);
        doc.text(`DR Stage: Level ${drStage}`, 10, 70);

        // Save the report as a PDF
        doc.save(`${formData.patientId}_DR_Report.pdf`);
    };

    return (
        <div className="upload-container">
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

            {/* Upload Section */}
            <h1 className="upload-header">Upload Retinal Images and Patient Information</h1>

            {uploadSuccess && (
                <div className="success-message">
                    <p>Images uploaded successfully! DR Stage: Level {drStage}</p>
                    <button onClick={() => generateReport(drStage)}>Download PDF Report</button>
                </div>
            )}

            <form id="upload-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <fieldset>
                    <legend>Patient Information</legend>
                    <label htmlFor="patient-id">Patient ID:</label>
                    <input
                        type="text"
                        id="patient-id"
                        name="patientId"
                        value={formData.patientId}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="patient-name">Patient Name:</label>
                    <input
                        type="text"
                        id="patient-name"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="phone-no">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone-no"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleInputChange}
                        required
                    />
                </fieldset>

                <fieldset>
                    <legend>Upload Retinal Images</legend>
                    <label htmlFor="left-eye-image">Left Eye Image:</label>
                    <input
                        type="file"
                        id="left-eye-image"
                        name="leftEyeImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />

                    <label htmlFor="right-eye-image">Right Eye Image:</label>
                    <input
                        type="file"
                        id="right-eye-image"
                        name="rightEyeImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </fieldset>

                <button type="submit">Upload Images</button>
            </form>

            {/* Report Section */}
            {uploadSuccess && (
                <div className="report-section">
                    <h2 className="report-header">Diagnosis Report</h2>
                    <p className="report-content">
                        Patient <strong>{formData.patientName}</strong> (ID: {formData.patientId}) has been diagnosed with:
                    </p>
                    <p className="report-level">Diabetic Retinopathy - Level {drStage}</p>
                </div>
            )}

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We are dedicated to developing tools and solutions for early detection of diabetic retinopathy. Our mission is to help reduce the risk of vision loss worldwide through AI-driven technology.</p>
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

export default Upload;
