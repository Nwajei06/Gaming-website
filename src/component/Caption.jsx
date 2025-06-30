import React from 'react'
import { Link } from  "react-router-dom"
function Caption() {
    return (
        <div className='caption-container'>
            <div className="cap-img">
                <img src="/images/cap.png" alt="" />
            </div> <br /><br />
            <div className="imgseries">
                <div className="imga1">The leading Esport organisation in Nigeria <br /><br />
                 <span className='wewin'><img src="/images/wewin.png" alt="" /></span> <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                 <button className="btnwin btn btn-light">More info</button>
                 </div>
                <div className="imga2"><img src="/images/second.png" alt="" /></div>
                <div className="imga3">We generate new Ideas and approach <br /><br />
                <span ><img src="/images/inno.png" alt="" /></span>
                </div>
            </div>

            <br /><br /><br /><br /><br />
            <div className="sh">
            <div className="frame76">
                <img src="/images/frame76.png" alt="" />
                <br /><br />
                <span>Signup to our news letter so that you can never miss out on any product,hg
                    drops, news and exclusive offers. </span>
                 
            </div>
                <div className="but">
                <button type="button" className="at btn  border-white btn-outline-light">Your email address</button>
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/signup">  <button className="btn btn-light text-dark">Sign Up</button></Link>

            </div>
            </div>
           
        </div>
    )
}

export default Caption