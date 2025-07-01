import React from 'react'

function Videos() {
  return (
    <div>
         <div className="video-container">
                <div className="videoone">
                    <div id='sub' className="subv1"><video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="video-banner"
                    >
                        <source src="/videos/videoone.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="caption">
                            <span className="progress"> <progress value="40" max="100"></progress> </span>
                            <br /><br />
                            <img src="/images/wwlogo.png" alt="" />XG <br /> <br />

                            LOCKED IN & ZONED OUT - JUST ME VS. THE GAME.
                            <p className="sub-cap">Pc games included</p>


                            <hr />
                        </p> <br />
                        <div className="grey"><span className="prize"> Prize pool</span><sapn className="cash">Cash</sapn> </div>

                    </div>
                    <div id='sub' className="subv2">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="video-banner"
                        >
                            <source src="/videos/videofive.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="caption">
                            <span className="progress"> <progress value="40" max="100"></progress> </span>
                            <br /><br />
                            <img src="/images/wwlogo.png" alt="" />XG <br /> <br />

                          E-Sports Pubg Mobile
                            <p className="sub-cap">Pc games included</p>


                            <hr />
                        </p> <br />
                        <div className="grey"><span className="prize"> Prize pool</span><sapn className="cash">Cash</sapn> </div>
                    </div>
                    <div id='sub' className="subv3">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="video-banner"
                        >
                            <source src="/videos/videothree.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="caption">
                             <span className="progress"> <progress value="40" max="100"></progress> </span>
                            <br /><br />
                            <img src="/images/wwlogo.png" alt="" />XG <br /> <br />

                            NO MERCY
                            <p className="sub-cap">Board games included</p>


                            <hr />
                        </p> <br />
                        <div className="grey"><span className="prize"> Prize pool</span><sapn className="cash">Cash</sapn> </div>
                    </div>
                </div> </div>
    </div>
  )
}

export default Videos