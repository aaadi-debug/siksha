"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Search } from "lucide-react";

// Lazy load Typewriter component
const Typewriter = dynamic(() => import("../components/Typewriter"), {
  ssr: false, // Disable server-side rendering for this component
});

const Page = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

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

  return (
    <div>
      <section className="h-[70vh] overflow-hidden">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 homeVideo h-[72vh] ${
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
              <input
                type="text"
                placeholder="Search for Colleges, Exams, News and more..."
                className="rounded-full py-3 px-4 outline-none w-full text-black max-sm:text-sm"
              />
              <button className="bg-second text-white p-2 rounded-full absolute right-2 top-2">
                <Search />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
