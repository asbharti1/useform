import { ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect, Fragment } from "react";

const AssignProgressBar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(0);

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
    <Fragment>
    <div className="offcanvas-container" style={{ textAlign: "center", paddingTop: '10%' }}>
      <button className="btn btn-outline-primary" onClick={() => setShowPopup(true)}>Start</button>
      {showPopup && (
        <div className="offcanvas-popup">
          <span className="close-button" onClick={() => setShowPopup(false)}>
            &times;
          </span>
          <div className="content">
            <div className="progressBar">
              <ProgressBar now={progress} label={`${progress}% `} />
            </div>
            <button className="btn btn-outline-primary" onClick={handleToggle}>Toggle</button>
          </div>
        </div>
      )}
    </div>
    </Fragment>
  );
};

export default AssignProgressBar;