import React from 'react';

function Ongoing() {
  const videoData = [
    {
      src: "/images/done.png",
      caption: "LOCKED IN & ZONED OUT - JUST ME VS. THE GAME.",
      subcap: "Pc games included",
    },
    {
      src: "/images/dtwo.png",
      caption: "E-Sports Pubg Mobile",
      subcap: "Pc games included",
    },
    {
      src: "/images/dthree.png",
      caption: "NO MERCY",
      subcap: "Board games included",
    },
    {
      src: "/images/dlsast.png",
      caption: "GOOD GAMES SETUP",
      subcap: "Pc games included",
    },
    {
      src: "/images/dfour.png",
      caption: "REAL LIFE EXPERIENCE",
      subcap: "Live gaming",
    },
    {
      src: "/images/blog1.png",
      caption: "REAL LIFE EXPERIENCE",
      subcap: "Live gaming",
    },
    {
      src: "/images/blog2.png",
      caption: "REAL LIFE EXPERIENCE",
      subcap: "Live gaming",
    },
  ];

  const getCardWidth = () => {
    if (window.innerWidth <= 480) return '85%';
    if (window.innerWidth <= 768) return '45%';
    return '30%';
  };

  return (
    <div style={{ padding: '10px' }}>
  <div
    style={{
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
      gap: '20px',
      paddingBottom: '10px',
    }}
  >
    {videoData.map((video, index) => (
      <div
        key={index}
        style={{
          flex: '0 0 auto',
          width: '200px',
          borderRadius: '15px',
          backgroundColor: 'black',
          overflow: 'hidden',
          fontSize: '11px',
          color: '#fff',
          minWidth: '200px',
        }}
      >
        <img
          src={video.src}
          alt={video.caption}
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
        />

        <div style={{ padding: '8px' }}>
          <progress
            value="40"
            max="100"
            style={{
              width: '100%',
              height: '3px',
              marginBottom: '6px',
              backgroundColor: '#ddd',
              borderRadius: '2px',
            }}
          ></progress>

          <br />
          <img
            src="/images/wwlogo.png"
            alt="logo"
            style={{ width: '15px', marginBottom: '4px' }}
          />
          <div style={{ margin: '6px 0' }}>XG</div>

          <div>{video.caption}</div>
          <div style={{ fontSize: '10px', opacity: 0.6 }}>{video.subcap}</div>

          <hr style={{ margin: '8px 0' }} />
        </div>

        <div
          style={{
            backgroundColor: '#22251e',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            padding: '10px',
            fontSize: '10px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ opacity: 0.6 }}>Prize pool</div>
          <div>Cash</div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Ongoing;
