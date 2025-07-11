import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  // ✅ Event is July 11, 2025 at 10:00 AM local time
  const futureDateRef = useRef(new Date('2025-07-11T10:00:00'));

  const calculateTimeLeft = () => {
    const difference = +futureDateRef.current - +new Date();
    let timeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
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
  }, []);

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
      <div className="time-group">
        <div className="digit">{timeLeft.seconds}</div>
        <div className="label">S</div>
      </div>
    </div>
  );
}

export default Timer;
