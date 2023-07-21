import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [countdown, setCountdown] = useState(60); // Set the initial countdown time in seconds

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear the interval when the component is unmounted or countdown reaches 0
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    // Handle actions when the countdown reaches 0
    if (countdown === 0) {
      // Do something here when the countdown reaches 0 (e.g., display a message)
      console.log('Countdown finished!');
    }
  }, [countdown]);

  // Function to format the countdown in HH:MM:SS
  const formatCountdown = () => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div
      style={{
        position: 'relative',
      }}
      className="container mt-5 "
    >
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div
            style={{
              backgroundColor: 'transparent',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)', // Safari support
              border: 'none',
              boxShadow: 'none', // Remove any box shadow that might be added by Bootstrap
              textAlign: 'center',
            }}
            className="card text-center"
          >
            <div className="card-body">
              <h5 className="card-title text-white">Auctions End in:</h5>
              <div className="display-3 text-white">{formatCountdown()}</div>
              <div className='d-flex text-white justify-content-between'>
                <p>Hours:</p> 
                <p>Minutes:</p>
                <p>Seconds:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Timer;


