import React, { useState, useEffect } from "react";

const ParallaxBus = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const points = [0, 100, 200, 300, 400, 500]; // Define y-positions for each point
  const [currentPoint, setCurrentPoint] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPos(scrollY);

    // Determine the closest point based on scroll position
    const closestPoint = points.reduce((prev, curr) =>
      Math.abs(curr - scrollY) < Math.abs(prev - scrollY) ? curr : prev
    );
    setCurrentPoint(points.indexOf(closestPoint));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      {/* Parallax background */}
      <div className="parallax-background">
        <h1 className="title">Parallax Bus Journey</h1>
      </div>

      {/* Points */}
      {points.map((_, index) => (
        <div key={index} className={`point point-${index + 1}`}>
          <div className="point-marker">Point {index + 1}</div>
        </div>
      ))}

      {/* Bus */}
      <div
        className="bus"
        style={{
          transform: `translateY(${points[currentPoint]}px)`,
        }}
      >
        🚌
      </div>
    </div>
  );
};

export default ParallaxBus;
