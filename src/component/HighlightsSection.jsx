import React from "react";

export default function HighlightsSection() {
  const cards = [
    {
      id: "legends-text",
      type: "text",
      title: (
        <>
          We create <span className="text-green">Legends.</span>
        </>
      ),
      text:
        "XG scouted and developed many of the pros who are now recognised among the greatest esports players in Nigeria. We're constantly advancing our abilities to find and build the legends of tomorrow.",
    },
    {
      id: "legends-img",
      type: "image",
      img: "/images/t-throphys.png",
      alt: "hands holding phone gaming",
    },
    {
      id: "trophy-img",
      type: "image",
      img: "/images/t-codsection.png",
      alt: "trophy",
    },
    {
      id: "merch-text",
      type: "text",
      title: (
        <>
          We Create <span className="text-green">Merch.</span>
        </>
      ),
      text:
        "At XG, we don't just build gear, we build your advantage. Every click, kit, and component is designed with precision — made for pro gamers, streamers, and everyday legends alike.",
    },
  ];

  return (
    <section className="hs-section">
      <div className="hs-inner">
        {/* Newsletter / Join box */}
        <div className="hs-join">
          <div className="hs-join-left">
            <div className="hs-join-title">JOIN THE GANG</div>
            <div className="hs-join-sub">
              Sign up to our newsletter so you never miss out on product drops,
              news and exclusive offers.
            </div>
          </div>

          <form className="hs-join-form" onSubmit={(e) => e.preventDefault()}>
            <input
              className="hs-input"
              type="email"
              placeholder="Your email address"
              aria-label="email"
            />
            <button type="submit" className="hs-btn">
              Sign up
            </button>
          </form>
        </div>

        {/* 2x2 grid */}
        <div className="hs-grid">
          {cards.map((c) =>
            c.type === "text" ? (
              <div key={c.id} className="hs-card hs-card--text">
                <h3 className="hs-card-title">{c.title}</h3>
                <p className="hs-card-body">{c.text}</p>
              </div>
            ) : (
              <div key={c.id} className="hs-card hs-card--media">
                <img src={c.img} alt={c.alt || ""} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
