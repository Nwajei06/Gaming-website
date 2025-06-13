import React, { useState, useEffect } from 'react';

function Timer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: '00', hours: '00', minutes: '00' };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="timer-box">
      <div className="time-group">
        <div className="digit">{timeLeft.days}</div> 
        <div className="label">D</div>
      </div>
      <div className="time-group">
        <div className="digit">{timeLeft.hours}</div>
        <div className="label">H</div>
      </div>
      <div className="time-group">
        <div className="digit">{timeLeft.minutes}</div>
        <div className="label">M</div>
      </div>
    </div>
  );
}

export default Timer;
