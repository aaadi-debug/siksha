
import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
//this component if for horizontal button which appers dynamic based on scroll position

const HorizontalScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [scrollPositions, setScrollPositions] = useState({
    canScrollLeft: false,
    canScrollRight: true,
  });

  // Update scroll positions when scrolling
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    setScrollPositions({
      canScrollLeft: container.scrollLeft > 0,
      canScrollRight:
        container.scrollLeft + container.offsetWidth < container.scrollWidth,
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto no-scrollbar"
      >
        {children}
      </div>

      {/* Left Scroll Button */}
      {scrollPositions.canScrollLeft && (
        <button
          className="absolute top-[40%] -left-6 z-10 bg-white rounded-full px-3 py-3 shadow"
          onClick={() =>
            scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
          }
        >
          <ArrowLeft size={16} />
        </button>
      )}

      {/* Right Scroll Button */}
      {scrollPositions.canScrollRight && (
        <button
          className="absolute top-[40%] -right-6 z-10 bg-white rounded-full px-3 py-3 shadow"
          onClick={() =>
            scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
          }
        >
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroll;
