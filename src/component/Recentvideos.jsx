import React from 'react'
import Videos from './Videos'
import Footer from './Footer'
import Ongoing from './ongoing'

function Recentvedios() {
  return (
    <div className='recentv-containe'>
        <div className="recentv"> <br /><br />
            <h5>Recent videos</h5><br />
            <Videos/> <br /><br />
          <h2> &nbsp;&nbsp;  Upcoming Tournaments</h2>
              <Ongoing/> <hr /> <br /> 
            <Footer/>
        </div>
    </div>
  )
}

export default Recentvedios