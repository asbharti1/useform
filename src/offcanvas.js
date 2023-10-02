import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi'; // Replace with your desired icon from react-icons
import { ProgressBar } from "react-bootstrap";

const  OffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle = () => {
    setShowPopup((prevState) => !prevState);
  };

  useEffect(() => {
    const progressBarInterval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : prevProgress
      );
    }, 1000);

    if (progress === 100) {
      clearInterval(progressBarInterval);
      setTimeout(() => {
        window.alert("Migration applied Successfully.");
      }, 500);
    }

    return () => clearInterval(progressBarInterval);
  }, [progress]);

  return (
    <>
    <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
      <div className="offcanvas-content">
        <div className="header">
          <button className="toggle-button" onClick={() => setShowPopup(true)}>
            <FiMenu />
          </button>
        </div>
        <div className="progress-bar-container">
          <ProgressBar
            now={progress}
            label={`${progress}% `} 
         // Replace this with the actual progress percentage you want to display
            filledbackground="linear-gradient(to right, #fefb72, #f0bb31)"
          />
          
        </div>
        {/* Add your off-canvas content here */}
      </div>
    </div>
    </>
  );
};

export default OffCanvas;
