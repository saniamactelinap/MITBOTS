import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const start = wrapper.offsetTop;
      const end = start + wrapper.offsetHeight - window.innerHeight;

      if (scrollY >= start && scrollY <= end) {
        section.style.position = "fixed";
        section.style.top = "0";
        const progress =
          (scrollY - start) / (wrapper.offsetHeight - window.innerHeight);
        section.scrollLeft =
          progress * (section.scrollWidth - window.innerWidth);
      } else {
        section.style.position = "";
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      <section className="intro">
        <h1>Explore<span>X</span></h1>
        <p>Your gateway to unforgettable journeys and curated shopping experiences.</p>
        <div className="scroll-hint">↓ Scroll to Begin</div>
      </section>

      <div className="scroll-wrapper" ref={wrapperRef}>
        <section className="scroll-section" ref={sectionRef}>
          <div className="horizontal-content">

            <div className="panel color1">
              <div className="overlay"></div>
              <div className="content fade">
                <h2> Dream Destinations</h2>
                <p>
                  Escape to white-sand beaches, mountain trails, and charming cities across the world.
                </p>
                <button>Explore Now</button>
              </div>
            </div>

            <div className="panel color2">
              <div className="overlay"></div>
              <div className="content fade">
                <h2>Travel Gear</h2>
                <p>
                  Find premium travel accessories and essentials designed for comfort and style.
                </p>
                <button>Shop Collection</button>
              </div>
            </div>

            <div className="panel color3">
              <div className="overlay"></div>
              <div className="content fade">
                <h2>🍴 Local Experiences</h2>
                <p>
                  Discover culinary adventures, cozy cafés, and cultural highlights that locals love.
                </p>
                <button>Book Experience</button>
              </div>
            </div>

            <div className="panel color4">
              <div className="overlay"></div>
              <div className="content fade">
                <h2> Travel Smarter</h2>
                <p>
                  Personalized itineraries, insider tips, and tools to make every trip effortless.
                </p>
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="outro">
        <h2> Thank you for exploring with <span>ExploreX</span>!</h2>
      </section>
    </div>
  );
}

export default App;
