import React from "react";

 function MissionVision() {
  const mission = {
    title: "MISSION STATEMENT",
    text:
      "To revolutionize the esports landscape by fostering a highly competitive, inclusive, and community-driven gaming environment. We are committed to discovering, nurturing, and elevating talent while creating opportunities for gamers, content creators, and esports professionals to thrive.",
    img: "/images/t-codsection.png",
  };

  const vision = {
    title: "Vision Statement",
    text:
      "To become a globally recognized powerhouse in esports, setting the standard for competitive excellence, innovation, and community engagement. We aim to build an ecosystem where gamers, creators, and industry professionals can thrive and innovate.",
    img: "/images/t-throphys.png",
  };

  return (
    <section className="mv-section">
      <div className="mv-inner">
        <article className="mv-card mv-card--image-left">
          <div className="mv-media">
            <img src={mission.img} alt="mission" />
          </div>
          <div className="mv-content">
            <h3>{mission.title}</h3>
            <p>{mission.text}</p>
          </div>
        </article>

        <article className="mv-card mv-card--image-right">
          <div className="mv-content">
            <h3>{vision.title}</h3>
            <p>{vision.text}</p>
          </div>
          <div className="mv-media">
            <img src={vision.img} alt="vision" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default MissionVision;