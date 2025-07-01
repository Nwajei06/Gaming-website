import React from 'react';

function Videos() {
  const videoData = [
    {
      src: "/videos/videoone.mp4",
      caption: "LOCKED IN & ZONED OUT - JUST ME VS. THE GAME.",
      subcap: "Pc games included",
    },
    {
      src: "/videos/videofive.mp4",
      caption: "E-Sports Pubg Mobile",
      subcap: "Pc games included",
    },
    {
      src: "/videos/videothree.mp4",
      caption: "NO MERCY",
      subcap: "Board games included",
    },
    {
      src: "/videos/videotwo.mp4",
      caption: "GOOD GAMES SETUP",
      subcap: "Pc games included",
    },
    {
      src: "/videos/video12.mp4",
      caption: "REAL LIFE EXPERIENCE",
      subcap: "Live gaming",
    },
    {
      src: "/videos/videosix.mp4",
      caption: "RUTHLESS",
      subcap: "CS2",
    },
    {
      src: "/videos/videoeight.mp4",
      caption: "CONSOLE GAMING",
      subcap: "PS5",
    },
    {
      src: "/videos/viideofour.mp4",
      caption: "ALCATRAZ",
      subcap: "Call of Duty PC",
    },
  ];

  return (
    <div className="video-container">
      <div
        style={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          padding: '15px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '20px',
            minWidth: 'fit-content',
                marginLeft:'-30px'

          }}
        >
          {videoData.map((video, index) => (
            <div
              key={index}
              id="sub"
              style={{
                flex: '0 0 auto',
                width: '200px',
                borderRadius: '15px',
                backgroundColor: 'black',
                overflow: 'hidden',
                fontSize: '11px',
                color: '#fff',
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="video-banner"
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                 
                }}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

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
                }}
              >
                <div style={{ opacity: 0.6 }}>Prize pool</div>
                <div>Cash</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
