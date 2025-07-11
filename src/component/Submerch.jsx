import React from 'react'
import {Link} from 'react-router-dom'



function Submerch() {
    return (
        <div className="x">
            <div className="y">
                {/* First image - smaller */}
               <div className="">
            <Link to="/shop">
                    <img src="/images/Frame 40.png" alt="Merch 1" className="imgl img-small img-fluid" />
            </Link > 
                </div>

                {/* Second image - bigger */}
              <div className="">
              
               <Link to="/shop">
                <img src="/images/Frame 1363.png" alt="Merch 2" className="imgl img-large img-fluid" />
               </Link>      
                </div>
            </div>
        </div>
    );
}

export default Submerch