import React from 'react';
import Timer from './Timer';
import Side from './Side';
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className='overall'>
            
            <div className="containe">

                {/* ✅ Slideshow added here */}
                 {/* <Slideshow /> */}

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

                <Link to="/community">
                <button type="button" className="btn-chat btn btn-light">Join The Chat</button>
                </Link>

                <div className="updates">
                    
                        <div id='rowone' className="rowone">
                             <span id='ros'><img className='dd'  src="/images/codmbout.png" alt="" /> <p className='dd'> Best of 5</p>
                             
                             {/* <img src="/images/wwlogo.png" alt="" /> */}
                             </span>
                             <span id='ros2'>
                               <span className='dd'><img  src="/images/wlogo.png" alt="" /> &nbsp; XG</span> 
                          <span><img src="/images/orther.png" alt="" />  &nbsp; NGC</span>   
                             </span>
                                </div>
                        <div className="rowone">
                             <span id='ros'> <p className='dd'> Free fire cup tournament 4v4</p>
                             
                             {/* <img src="/images/wwlogo.png" alt="" /> */}
                             </span>
                             <span id='ros2'>
                               <span className='dd'><img  src="/images/wlogo.png" alt="" /> &nbsp; XG</span> 
                          <span><img src="/images/hm1.png" alt="" /> NGC</span>   
                             </span>    
                        </div>
                        <div className="rowone">
                             <span id='ros'> <p className='dd'> Chess premiere - best of 3</p>
                             
                             {/* <img src="/images/wwlogo.png" alt="" /> */}
                             </span>
                             <span id='ros2'>
                               <span><img src="/images/wlogo.png" alt="" /> &nbsp; XG</span> 
                          <span className='dd'><img src="/images/hm1.png" alt="" />  &nbsp; NGC</span>   
                             </span>
                        </div>
                        <div className="rowone">
                             <span id='rose'><img  src="/images/nmu.png" alt="" />
                              <p className='dd'> Join our community to know what's happening</p>
                             
                             {/* <img src="/images/wwlogo.png" alt="" /> */}
                             </span>
                             <span id='ros2'>
                               {/* <span><img src="/images/wlogo.png" alt="" /> &nbsp; XG</span>  */}
                          {/* <span><img src="/images/orther.png" alt="" />  &nbsp; NGC</span>    */}
                             </span>
                        </div>
                    
                </div>
            </div>

            <div className="sides">
                <Side />
            </div>
        </div>
    );
}

export default Hero;
