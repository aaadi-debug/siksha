"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Search, X } from "lucide-react";
import Link from "next/link";

// Lazy load Typewriter component
const Typewriter = dynamic(() => import("../components/Typewriter"), {
  ssr: false, // Disable server-side rendering for this component
});

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([
    {
      url: "",
      image:
        "https://assets.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg",
      title:
        "IIT Madras - Indian Institute of Technology - [IITM], Chennai, India",
      belongsTo: "College",
    },
    {
      url: "",
      image:
        "https://assets.collegedunia.com/public/college_data/images/logos/NTA%20Logo.jpg",
      title: "Joint Entrance Exam Main - Registration [JEE Main]",
      belongsTo: "Exam",
    },
  ]);
  const searchBarRef = useRef(null);
  const videoRef = useRef(null);


  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = async (e) => {
    setQuery(e.target.value);

    if (e.target.value.trim() === "") {
      setResults([]);
      return;
    }

    const res = await fetch(`/api/search?query=${e.target.value}`);
    const data = await res.json();
    setResults(data);
  };
  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      closeSearch();
    }
  };

  const handleType = (count) => {
    // Access word count number
  };

  const handleDone = () => {
    if (process.env.NODE_ENV === "development") {
      console.log(`Done after 5 loops!`);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play();
            setVideoLoaded(true);
          } else {
            video.pause();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(video);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div>
      <section className="h-[65vh] overflow-hidden">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className={`absolute -top-5 left-0 homeVideo h-[72vh] ${
            videoLoaded ? "visible" : "invisible"
          }`}
          preload="metadata"
          poster="/assets/images/video-poster.jpg"
        >
          <source src="/assets/videos/college1-crop.mp4" type="video/mp4" />
          <source src="/assets/videos/college1-crop.webm" type="video/webm" />
        </video>
        <div className="h-full flex justify-center items-center bg-black/40">
          <div className="lg:w-[40vw] md:w-[70vw] max-sm:w-[80vw]">
            <h1
              className="text-white text-4xl max-sm:text-lg"
              style={{
                paddingTop: "3.5rem",
                margin: "auto 0",
                fontWeight: "bold",
              }}
            >
              Find Over{" "}
              <span style={{ color: "#00f1ff", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "3500+ Colleges in India",
                    "500+ Exams in India",
                    "1100+ Exams in India",
                    "1 Lakh Reviews in India!",
                  ]}
                  loop={9}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={800}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
            <div className="mt-3 relative">
              <button onClick={toggleSearch} className="w-full hover:cursor-pointer">
                <input
                  type="text"
                  placeholder="Search for Colleges, Exams, News and more..."
                  className="rounded-full py-3 px-4 outline-none w-full text-black max-sm:text-sm"
                />
                <div className="bg-second text-white p-2 rounded-full absolute right-2 top-2">
                  <Search />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-0 z-50 bg-black/80 bg-opacity-70 backdrop-blur-md shadow-lg transition-transform duration-500 transform translate-y-0 h-[100vh]">
          <div
            ref={searchBarRef}
            className="bg-white py-10 sm:p-6 md:p-8 lg:px-20 max-sm:px-4"
          >
            <div className="flex gap-2 items-start">
              <input
                type="text"
                placeholder="Search for Colleges, Exmas, News and more..."
                value={query}
                onChange={handleSearch}
                className="mb-4 w-full border border-gray-300 rounded p-3 focus:outline focus:border focus:border-brightblueClr "
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-600 hover:text-gray-900 mt-2"
              >
                <X
                  className="h-10 w-10 rounded-full p-2 transition duration-500 hover:bg-primary/80 hover:text-white"
                  aria-hidden="true"
                />
              </button>
            </div>

            <p className="text-sm text-textClr">Results based on search</p>

            <div className="grid grid-cols-1 gap-6 mt-4 max-h-[70vh] overflow-y-auto">
              {results.length > 0 ? (
                results.map((result, index) => (
                  <Link key={index} href={`/product/${result.url}`}>
                    <div className="flex gap-2 border rounded-lg p-2">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div>
                        <h3 className="text-lg font-bold capitalize oneLinerTitle text-black">
                          {result.title}
                        </h3>
                        <p className="text-textClr"> {result.belongsTo} </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : query.length > 1 ? (
                <p>No result found for {query} 🥺</p>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
