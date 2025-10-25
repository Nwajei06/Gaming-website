import React from 'react';
import { motion } from 'framer-motion';
import Timer from './Timer';
import Side from './Side';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="overall">
      <div className="containe">

        {/* 🔹 Floating main image animation */}
        <motion.div
          className="framer72"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img src="/images/codmbout.png" alt="" />
        </motion.div>

        {/* 🔹 Glow frame fade-in */}
        <motion.div
          className="framer21"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        >
          <img src="/images/framer.png" alt="" />
        </motion.div>

        {/* 🔹 VS Battle Section */}
        <motion.div
          className="vs-container"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <div className="xg-contain">
            <motion.img
              className="imgs"
              src="/images/wlogo.png"
              alt=""
              animate={{ scale: [1, 1.1, 1], filter: ['drop-shadow(0 0 0px #00ff88)', 'drop-shadow(0 0 10px #00ff88)', 'drop-shadow(0 0 0px #00ff88)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="texts">XG</span>
          </div>

          <motion.div
            className="versus"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <img className="imgss" src="/images/vs.png" alt="" />
          </motion.div>

          <div className="others-conntain">
            <motion.img
              className="imgs"
              src="/images/orther.png"
              alt=""
              animate={{ scale: [1, 1.1, 1], filter: ['drop-shadow(0 0 0px #ff0048)', 'drop-shadow(0 0 10px #ff0048)', 'drop-shadow(0 0 0px #ff0048)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="texts">OTHERS</span>
          </div>
        </motion.div>

        {/* 🔹 Countdown Timer */}
        <motion.div
          className="dates"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Timer targetDate={new Date(Date.now() + 40 * 24 * 60 * 60 * 1000)} />
        </motion.div>

        {/* 🔹 CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Link to="/community">
            <button type="button" className="btn-chat btn btn-light">
              Join The Chat
            </button>
          </Link>
        </motion.div>

        {/* 🔹 Bottom Updates Section */}
        <motion.div
          className="updates"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
        >
          <div id="rowone" className="rowone">
            <span id="ros">
              <img className="dd" src="/images/codmbout.png" alt="" /> 
              <p className="dd">Best of 5</p>
            </span>
            <span id="ros2">
              <span className="dd">
                <img src="/images/wlogo.png" alt="" /> &nbsp; XG
              </span>
              <span>
                <Link to="/tournaments">
                  <img src="/images/orther.png" alt="" />
                </Link> &nbsp; NGC
              </span>
            </span>
          </div>

          <div className="rowone">
            <span id="ros">
              <p className="dd">Free Fire Cup Tournament 4v4</p>
            </span>
            <span id="ros2">
              <span className="dd">
                <img src="/images/wlogo.png" alt="" /> &nbsp; XG
              </span>
              <span>
                <Link to="/tournaments">
                  <img src="/images/hm1.png" alt="" />
                </Link> &nbsp; NGC
              </span>
            </span>
          </div>

          <div className="rowone">
            <span id="ros">
              <p className="dd">Chess Premiere - Best of 3</p>
            </span>
            <span id="ros2">
              <span>
                <Link to="/tournaments">
                  <img src="/images/wlogo.png" alt="" />
                </Link> &nbsp; XG
              </span>
              <span className="dd">
                <img src="/images/hm1.png" alt="" /> &nbsp; NGC
              </span>
            </span>
          </div>

          <div className="rowone">
            <span id="rose">
              <Link to="/tournaments">
                <img src="/images/nmu.png" alt="" />
              </Link>
              <p className="dd">Join our community to know what's happening</p>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="sides">
        <Side />
      </div>
    </div>
  );
}

export default Hero;
