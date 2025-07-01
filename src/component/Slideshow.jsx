import React from 'react';
import Timer from './Timer';
import Side from './Side';
import Slideshow from './Slideshow'; // ✅ Add this line

function Hero() {
  return (
    <div className='overall'>
      <div className="containe">

        {/* ✅ Slideshow added here */}
        <Slideshow />

        <div className="framer72">
          <img src="/images/codmbout.png" alt="" />
        </div>

        <div className="framer21">  
          <img src="/images/framer.png" alt="" />
        </div>

        <div className="vs-container">
          <div className="xg-contain">
            <img className='imgs' src="/images/wlogo.png" alt="" />
            <span className='texts'>XG</span>
          </div>

          <div className="versus">
            <img className='imgss' src="/images/vs.png" alt="" />
          </div>

          <div className="others-conntain">
            <img className='imgs' src="/images/orther.png" alt="" />
            <span className='texts'>OTHERS</span>
          </div>
        </div>

        <div className="dates">
          <Timer targetDate={new Date(Date.now() + 40 * 24 * 60 * 60 * 1000)} />
        </div>

        <button type="button" className="btn-chat btn btn-light">Join The Chat</button>

        <div className="updates">XG</div>
      </div>

      <div className="sides">
        <Side />
      </div>
    </div>
  );
}

export default Hero;
