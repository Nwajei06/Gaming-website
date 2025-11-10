import React from 'react'

function Corevalues() {

  const nodes = [
    { 
      id: 'teamwork', 
      title: 'Teamwork', 
      desc: 'We win together, learn together, and rise together.', 
      img: '/images/t-section1.png' 
    },
    { 
      id: 'excellence', 
      title: 'Excellence', 
      desc: 'We strive for greatness through consistency and hard work.', 
      img: '/images/t-section2.png' 

    },
    { 
      id: 'community', 
      title: 'Community', 
      desc: 'We engage, uplift, and grow our community.', 
       img: '/images/t-section4.png' 

    },
    { 
      id: 'growth', 
      title: 'Growth & Development', 
      desc: 'We push boundaries and help each other level up.', 
      img: '/images/t-section5.png' 

    },
  ]

   const others = [
    { 
      id: 'passion', 
      title: 'Passion', 
      desc: "Gaming is more than just a hobby — it’s a way of life.", 
          img: '/images/t-section6.png' 

    },
    { 
      id: 'integrity', 
      title: 'Integrity', 
      desc: 'We play fair, respect our opponents, and uphold esports ethics.', 
        img: '/images/t-section7.png' 

    },
    { 
      id: 'creativity', 
      title: 'Creativity', 
      desc: 'From unique content to cutting-edge strategies, we embrace creativity and forward-thinking to stay ahead in the game.', 
         img: '/images/t-section8.png' 

    },
    { 
      id: 'family', 
      title: 'Family', 
      desc: 'We push boundaries, improve daily, and help each other level up.', 
         img: '/images/t-section9.png' 

    },
  ]



  return (
    <div>
    <div className="core-section">
      <p className="core-header">core values</p>

      <div className="core-container">
        {nodes.map((node) => (
          <div key={node.id} className="core-card">
            <img src={node.img} alt={node.title} className="core-icon" />
            <h3 className="core-title">{node.title}</h3>
            <p className="core-text">{node.desc}</p>
          </div>
        ))}
      </div>

      
    </div>
    
 <div className="core2-section">
      <div className="core2-container">
        {others.map((others) => (
          <div key={others.id} className="core2-card">
            <img src={others.img} alt={others.title} className="core2-icon" />
            <h3 className="core2-title">{others.title}</h3>
            <p className="core2-text">{others.desc}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Corevalues
