import React from 'react';
import Timer from './Timer';

function Hero() {
    return (
        <div className="containe">
            <div className="framer72">
                <img src="/images/codmbout.png" alt="" srcset="" />
            </div>
            <div className="framer21">
                <img src="/images/framer.png" alt="" />
            </div>
          <div className="vs-container">
            <div className="xg-contain"><img className='imgs' src="/images/wlogo.png" alt="" srcset="" /> <span className='texts'>XG</span> </div>
            <div className="versus"><img className='imgss' src="/images/vs.png" alt="" srcset="" /></div>
            <div className="others-conntain"><img className='imgs' src="/images/orther.png" alt="" srcset="" /><span className='texts   '>OTHERS</span> </div>

          </div>
            <div className="dates">
                <Timer targetDate={new Date(Date.now() + 40 * 24 * 60 * 60 * 1000)} />
            </div>
           <button type="button" className="btn-chat btn btn-light">Join The Chat</button>
            <div className="updates">XG</div>
        </div>
    );
}

export default Hero;
