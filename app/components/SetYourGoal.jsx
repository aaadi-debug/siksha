import { React, useState, useEffect } from 'react'

// importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SliderCard from './SliderCard';


const SetYourGoal = () => {

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
    slidesPerView: isMobile ? 2.5 : 3.5,
    spaceBetween: isMobile ? 10 : 30,
    slidesPerGroup: 1,
    loop: true,
    loopfillgroupwithblank: "true",
    // loopfillgroupwithblank={value.toString()}
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  // const [data , setData]=useState()

  const data = [
    {
      id: "1",
      heading: "Engineering",
      degree_name_1: "BE/B.tech",
      specialization: "Diploma in Engineering",
      degree_name_2: "ME/M.TECH",
      image: '/assets/images/Goal/Untitled design (50).png'
    },
    {
      id: "2",
      heading: "Management",
      degree_name_1: "MBA/PGDM",
      specialization: "BBA/BMS",
      degree_name_2: "EXECUTIVE MBA",
      image: '/assets/images/Goal/Untitled design (61).png'
    },
    {
      id: "3",
      heading: "Commerce",
      degree_name_1: "B.Com",
      specialization: "M.Com",
      image: '/assets/images/Goal/Untitled design (45).png'
    },
    {
      id: "4",
      heading: "Arts",
      degree_name_1: "BA",
      specialization: "MA",
      degree_name_2: "BFA",
      degree_name_3: "BSW",
      image: '/assets/images/Goal/Untitled design (46).png'
    },
    {
      id: "5",
      heading: "Medical",
      degree_name_1: "MBBS",
      specialization: "PG Medical",
      image: '/assets/images/Goal/medical.png'
    },
    {
      id: "6",
      heading: "Design",
      degree_name_1: "B.Des",
      image: '/assets/images/Goal/Untitled design (47).png'
    },
    {
      id: "7",
      heading: "Science",
      degree_name_1: "B.Sc",
      specialization: "M.Sc",
      image: '/assets/images/Goal/Untitled design (48).png'
    },
    {
      id: "8",
      heading: "Pharmacy",
      degree_name_1: "B.Pharma",
      specialization: "M.Pharma",
      image: '/assets/images/Goal/Untitled design (49).png'
    },
    {
      id: "9",
      heading: "Paramedical",
      degree_name_1: "B.Sc(Nursing)",
      specialization: "M.Sc(Nursing)",
      image: '/assets/images/Goal/goals-paramedical.png'
    },
    {
      id: "10",
      heading: "Computer Application",
      degree_name_1: "BCA",
      specialization: "MCA",
      image: '/assets/images/Goal/Untitled design (51).png'
    },
    {
      id: "11",
      heading: "Education",
      degree_name_1: "B.ED",
      specialization: "M.ED",
      degree_name_2: "B.P.ED",
      image: '/assets/images/Goal/edu.png'
    },
    {
      id: "12",
      heading: "Agriculture",
      degree_name_1: "B.Sc (ag)",
      specialization: "M.Sc (Ag)",
      image: '/assets/images/Goal/Untitled design (52).png'
    },
    {
      id: "13",
      heading: "Animation",
      degree_name_1: "Bachelor in Animation",
      specialization: "Diploma in Animation",
      degree_name_2: "Certification in Animation",
      image: '/assets/images/Goal/Untitled design (69).png'
    },
    {
      id: "14",
      heading: "Architecture",
      degree_name_1: "B.Arch",
      specialization: "M.Arch",
      image: '/assets/images/Goal/Untitled design (53).png'
    },
    {
      id: "15",
      heading: "Hotel Management",
      degree_name_1: "BHM",
      image: '/assets/images/Goal/Untitled design (54).png'
    },
    {
      id: "16",
      heading: "Law",
      degree_name_1: "LLB",
      specialization: "LLM",
      image: '/assets/images/Goal/Untitled design (55).png'
    },
    {
      id: "17",
      heading: "Dental",
      degree_name_1: "BDS",
      specialization: "MDS",
      image: '/assets/images/Goal/Untitled design (56).png'
    },
    {
      id: "18",
      heading: "Veterinary Sciences",
      degree_name_1: "Veterinary Sciences",
      image: '/assets/images/Goal/Untitled design (57).png'
    },
    {
      id: "19",
      heading: "Mass Communications",
      degree_name_1: "BMM",
      specialization: "MMC",
      image: '/assets/images/Goal/Untitled design (58).png'
    },
    {
      id: "20",
      heading: "Aviation",
      degree_name_1: "B.Aviation",
      image: '/assets/images/Goal/Untitled design (59).png'
    },
    {
      id: "21",
      heading: "Vocational Courses",
      degree_name_1: "Vocational Courses",
      image: '/assets/images/Goal/Untitled design (60).png'
    }
  ]




  return (
    <section className="setgoalsection pb-5 lg:px-20">
      <div className="setgoalsection_wrapper   pt-5">
        <h2 data-aos="fade-up" className='mb-4 text-3xl text-black font-semibold'>Select Your Goal</h2>

        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: { slidesPerView: 1.4 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 2.8 },
            1024: { slidesPerView: 3.4 },
            1300: { slidesPerView: 4.2 },
            1500: { slidesPerView: 5.4 },
          }}
          modules={[Autoplay, Navigation, A11y]}
          className="swiper-wrapper mx-auto mb-4"
        >

          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <SliderCard
                heading={value.heading}
                sliderbg={value.image} // Assuming SliderBG is defined somewhere
                degree_name_1={value.degree_name_1}
                specialization={value.specialization}
                degree_name_2={value.degree_name_2}
              // no_of_colleges={value.degree_name_3} 
              />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev"></div> {/* Previous button */}
          <div className="swiper-button-next"></div> {/* Next button */}
        </Swiper>
      </div>
    </section>
  )
}

export default SetYourGoal
