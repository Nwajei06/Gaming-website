import React from 'react'



function Submerch() {
    return (
        <div className="container py-4">
            <div className=" imgd row justify-content-center align-items-center">
                {/* First image - smaller */}
                <div className="col-5 d-flex justify-content-center">
                    <img src="/images/Frame 40.png" alt="Merch 1" className="img-small img-fluid" />
                </div>

                {/* Second image - bigger */}
                <div className="col-7 d-flex justify-content-center">
                    <img src="/images/Frame 1363.png" alt="Merch 2" className="img-large img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Submerch