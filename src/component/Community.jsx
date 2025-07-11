import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'

function Community() {
    return (
        <div>
            <div className="com-img"><img src="/images/big.png" alt="" /></div>

            <div className="texts-all">
                <div className='classes'>All <br /><br />

                  <div className="one">   <Link
                       to="https://chat.whatsapp.com/JU7rhnZbLmkIrDdYDrC5f6"               target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"

                        style={{ color: '#25D366', fontSize: '30px' }}
                    >
                        <i className="fab fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                       <span className="gos">
                       Join our inner circle on WhatsApp  get instant updates, early access, and real-time convos!
                        </span> 
                    </Link>
                    </div>
                    <div className="one">  <Link
                        to='https://www.linkedin.com/company/xtremegangng/posts/?feedView=all'
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        className="social-icon"
                        style={{ color: '#0A66C2', fontSize: '30px', marginRight: '15px' }}
                    >
                        <i className="fab fa-linkedin"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                     <span className="gos">
                      Let’s connect and grow together follow us on LinkedIn for updates, insights, and opportunities.
                        </span>  
                    </Link>
                    </div>
                    <div className="one">   <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        className="social-icon"

                        style={{ color: '#E1306C', fontSize: '30px' }}
                    >
                        <i className="fab fa-instagram"></i> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="gos">
                        Catch the vibes, behind-the-scenes, and exclusive moments follow us on Instagram!

                        </span>
                    </Link>
                    </div>
                    <div className="one">    <Link
                        href="https://twitter.com"
                        target="_blank"
                        className="social-icon"

                        rel="noopener noreferrer"
                        style={{ color: 'white', fontSize: '30px', marginRight: '15px' }}
                    >
                        <i className="fab fa-x-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="gos">
                        Stay in the loop, join hot takes, and be part of the conversation — follow us on X!

                      </span>
                    </Link>
                    </div>
                    <div className="one">  <Link
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"

                        style={{ color: '#5865F2', fontSize: '30px', marginRight: '15px' }}
                    >
                        <i className="fab fa-discord"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="gos">
                        Hop into the action on Discord chat, chill, and connect with the community 24/7!

                        </span>
                    </Link>
                    </div>
                  

                </div>

                <div className="side-bars">
                    <img className='create   ' src="/images/create.png" alt="" /> <br /> <br />
                    <img src="/images/mantiside.png" alt="" /><br /> <br />
                    <img src="/images/codmside.png" alt="" /> <br /> <br />
                    <img src="/images/fside.png" alt="" /><br /> <br />
                    <img src="/images/mside.png" alt="" /><br /> <br />
                    <img src="/images/fcside.png" alt="" /><br /> <br />
                    <img src="/images/efside.png" alt="" /><br /> <br />
                    <img src="/images/chesside.png" alt="" /><br /> <br />
                    <img src="/images/merch.png" alt="" /><br /> <br />
                </div>



            </div>
 <br /> <br /><br /><br />
 <hr />

<Footer/>
        </div>
    )
}

export default Community