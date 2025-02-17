import { React, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css'; // Import Swiper CSS
import { Navigation } from 'swiper/modules';
import LatestNewsCard from './LatestNewsCard';

const LatestNews = () => {

  // const [shouldNotSwipe, setShouldNotSwipe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the device width is less than or equal to 768px (tablet size)
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  }

  // Listen to window resize events to update the isMobile state
  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);


  const params = {
    modules: { Navigation },
    slidesPerView: isMobile ? 2.5 : 3.5,
    spaceBetween: isMobile ? 10 : 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 4000, // 3 seconds delay between slides
      disableOnInteraction: false // Enables autoplay even if user interacts with the swiper
    },
    loopfillgroupwithblank: "true",
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    observer: true,
    observeParents: true
  }


  const newsData = [
    {
      sliderbg: "/assets/images/News/univeristy addmission 2024.png",
      news_title: "IP University Admission 2024: Register with your CUET results to apply for PG courses",
      location: "New Delhi",
      news_para: "IPU Admission 2024: Applicants can now apply to IP University for admission using their CUET PG results. The fee for registration is Rs 2,500, but it is not applicable for the candidates who have secured any seat in any program through National Level Tests, Common Entrance Tests, or Management Quota.",
      read_more_link: "",
    },
  ];


  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
     // Simulate data fetching
     const fetchData = async () => {
       try {
         const res = await fetch(`/api/notification`);
         const result = await res.json();
         if (result.success) {
           setBlogs(result.data);
           setFilteredBlogs(result.data);
         }
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };
 
     fetchData();
   }, []);
  return (
    <section className="px-6 lg:px-20 py-20">
      <div className=" ">
        <h2 data-aos="zoom-in" className='mb-4 text-3xl text-black font-semibold'>Latest News & Notifications</h2>

        {/* <button onClick={toggleSwiping}>Toggle Swiping</button> */}
        {/* Should swipe: {shouldNotSwipe.toString()} */}
        <Swiper {...params}>
          {blogs.map((news, index) => (
            <SwiperSlide key={index}>
              <LatestNewsCard
                sliderbg={news.image}
                news_title={news.title}
                news_para={news.message}
                read_more_link={news.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default LatestNews
