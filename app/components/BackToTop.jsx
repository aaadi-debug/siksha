import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // You can use any icon library

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed lg:bottom-20 right-8 lg:right-8 z-10 bottom-36 max-sm:bottom-36 max-sm:right-4 shadow-lg rounded-full">
          <button
            onClick={scrollToTop}
            className="p-2 bg-second text-white rounded-full shadow-2xl hover:bg-primary/80 transition duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default BackToTop;
