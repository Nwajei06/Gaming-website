import React from 'react'
import Videos from './Videos'
import Footer from './Footer'

function Recentvedios() {
  return (
    <div className='recentv-containe'>
        <div className="recentv"> <br /><br />
            <h5>Recent videos</h5><br />
            <Videos/> <br /><br /> <hr /> <br /> 
            <Footer/>
        </div>
    </div>
  )
}

export default Recentvedios