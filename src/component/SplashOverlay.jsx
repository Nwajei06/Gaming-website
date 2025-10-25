// src/component/SplashOverlay.jsx
import React, { useEffect, useState } from "react";
import mantis from "/images/maskut.png"; 

const SplashOverlay = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);
  const [typedText, setTypedText] = useState("");
  const message = "Welcome to XtremeGang Esport"; 

  useEffect(() => {
    // Typing effect
    let i = 0;
    const typingSpeed = 100; 
    const typeInterval = setInterval(() => {
      if (i < message.length) {
        setTypedText((prev) => prev + message[i]);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const hideTimer = setTimeout(() => setHide(true), 12000);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transition: "opacity 0.6s ease",
        opacity: fadeOut ? 0 : 1,
        color: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={mantis}
        alt="Welcome Mantis"
        style={{
          width: "220px",
          animation: "wave 2s infinite ease-in-out",
          marginBottom: "20px",
        }}
      />
      <h2
        style={{
          fontSize: "1.8rem",
          letterSpacing: "1px",
          whiteSpace: "pre",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {typedText}
        <span className="cursor">|</span>
      </h2>
    </div>
  );
};

export default SplashOverlay;
