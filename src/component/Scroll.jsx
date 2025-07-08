import React, { useState, useEffect } from 'react';

function Scroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "10px 15px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            fontSize: "18px",
            cursor: "pointer",
            zIndex: 999
          }}
          aria-label="Scroll to top"
        >
          <img id='down' src="/images/wlogo.png" alt="" />
        </button>
      )}
    </>
  );
}

export default Scroll;
