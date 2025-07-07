import React from 'react'
import {Link} from 'react-router-dom'



function Submerch() {
    return (
        <div className="container py-4">
            <div className=" imgd row justify-content-center align-items-center">
                {/* First image - smaller */}
               <div className="col-5 d-flex justify-content-center">
            <Link to="/shop">
                    <img src="/images/Frame 40.png" alt="Merch 1" className="img-small img-fluid" />
            </Link > 
                </div>

                {/* Second image - bigger */}
              <div className="col-7 d-flex justify-content-center">
              
               <Link to="/shop">
                <img src="/images/Frame 1363.png" alt="Merch 2" className="img-large img-fluid" />
               </Link>      
                </div>
            </div>
        </div>
    );
}

export default Submerch