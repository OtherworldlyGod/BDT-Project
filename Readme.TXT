# Diabetic Retinopathy Detection Model

A web-based application to detect diabetic retinopathy using deep learning. The project is built on the MERN (MongoDB, Express, React, Node.js) stack, with React + Vite for the frontend. This tool allows users to register, upload retinal images, and visualize predictions.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- **User Registration**: Users can create an account and log in to upload retinal images for analysis.
- **Detection Model**: Integration of a machine learning model for detecting diabetic retinopathy.
- **Visualization**: Visual representation of predictions, highlighting areas of interest.
- **History Tracking**: Saves past predictions for each user.
- **Responsive Design**: Accessible on multiple device types.

## Tech Stack

- **Frontend**: React with Vite, TailwindCSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Model**: TensorFlow/Keras for deep learning model (API served for predictions)

## Installation

### Prerequisites

- Node.js and npm
- MongoDB
- Python (for the machine learning model API, if applicable)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/diabetic-retinopathy-detection.git
   cd diabetic-retinopathy-detection
2. Install frontend dependencies:

bash
Copy code
cd frontend
npm install

  3.Install backend dependencies:

bash
Copy code
cd ../backend
npm install
4.Set up environment variables: Create a .env file in both the frontend and backend directories with the following variables:

Frontend (.env)
arduino
Copy code
VITE_APP_API_URL=http://localhost:5000
Backend (.env)
makefile
Copy code
PORT=5000
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-jwt-secret
5.Run the backend server:

bash
Copy code
cd backend
npm start
6.Run the frontend:

bash
Copy code
cd ../frontend
npm run dev


Usage
Register/Login: Go to the website's home page, register a new account, or log in.
Upload Image: Navigate to the image upload page and submit a retinal image.
View Results: After processing, view the results along with visualizations.
History: Check the history section for previously processed images and their results.

Structure:
├── backend
│   ├── controllers     # Contains business logic for routes
│   ├── models          # Mongoose models for MongoDB collections
│   ├── routes          # Express routes
│   ├── middleware      # Authentication and validation middlewares
│   └── server.js       # Entry point for backend server
│
├── frontend
│   ├── public          # Public assets and index.html
│   ├── src
│   │   ├── components  # Reusable UI components
│   │   ├── pages       # Page components (Home, Register, Visualization, etc.)
│   │   ├── services    # API call logic
│   │   ├── App.jsx     # Main app component
│   └── vite.config.js  # Vite configuration
│
└── README.md
