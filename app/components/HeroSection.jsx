import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import SetYourGoal from './SetYourGoal';
// import TopCollection from './TopCollection';


import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link'; // Correct import for Next.js
import { FaSearch } from "react-icons/fa";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onloadeddata = () => {
        setVideoLoaded(true);
      };
    }
  }, []);

  return (
    <div>
      <section className="herosection">
        {!videoLoaded && (
          <div className="video-placeholder">
            <img src="path_to_low_quality_image.jpg" alt="Loading..." />
          </div>
        )}
        <LazyLoadComponent>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="video_bg"
            preload="metadata"
          >
            <source src='/assets/videos/college1-crop.mp4' type="video/mp4" />
          </video>
        </LazyLoadComponent>
        <Navbar />
        <div className="herosection_wrapper">
          <h2>
            <span className='fixed_h text-3xl font-semibold'>Find Over</span> {' '}
            <span style={{ color: '#00f1ff', fontWeight: 'bold', marginLeft: '150px' }} className='text-3xl font-semibold'>
              <Typewriter
                words={['3500+ Colleges in India', '500+ Exams in India', '1100+ Exams in India', '1 Lakh Reviews in India!']}
                loop={Infinity}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <div className="search_widget">
            <input type="text" placeholder='Search for Colleges, Exams, Courses, and More...' />
            <Link href="/"><FaSearch /></Link> {/* Correct usage of Link with <a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
