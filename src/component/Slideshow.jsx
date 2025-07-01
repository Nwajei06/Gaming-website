// Slideshow.js
import React, { useState, useEffect } from 'react';

const images = [
   "/images/war.png",
  "/images/fifa.png",
   "/images/chess.png",
  "/images/shadow.png"
  
];

function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      ...styles.wrapper,
      backgroundImage: `url(${images[index]})`,
    }}>
      <div style={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              ...styles.dot,
              backgroundColor: index === i ? "#fff" : "#777"
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
 wrapper: {
  width: '100%',
  height: '100%',
  minHeight: '250px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '15px',
  position: 'relative',
  marginBottom: '20px',
  transition: 'background-image 0.5s ease-in-out',
}
,
  dots: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px'
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#777',
    cursor: 'pointer'
  }
};

export default Slideshow;
