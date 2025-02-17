<<<<<<< HEAD
import { React, useState, useEffect } from "react";
=======
import { React, useState, useEffect } from 'react'

// importing swiper
>>>>>>> second-account/main
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
<<<<<<< HEAD
import collegeDataJSON from "../data/collegeData.json";

const SetYourGoal = () => {
  const colleges = collegeDataJSON.data.filter(
    (college) => college.collegeAddress.country.toLowerCase() === "india"
  );

  // Mapping of department names to image URLs
  const departmentImages = {
    "Engineering": "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038840.jpg?t=st=1739704592~exp=1739708192~hmac=a05cc92de7bd48a3bbe5895f694bd248b584444758e2fb0594090a9cda156af7&w=1060",
    "Dental": "https://img.freepik.com/free-photo/smiling-female-patient-sitting-chair-showing-thumb-up-dental-clinic_23-2147879168.jpg?t=st=1739704471~exp=1739708071~hmac=e141e091ae437970cf7bb29d07fca443472352338b3a8bbfef4c0f573d971856&w=740",
    "Management": "https://img.freepik.com/free-photo/young-businessman-looking-digital-tablet-standing-front-building_23-2147941656.jpg?t=st=1739704660~exp=1739708260~hmac=520034078bb3b58c3b79b5f6132149f06ecbc338605c63ae6e1e9a5c6f5fc1db&w=1060",
    "Arts": "https://img.freepik.com/free-photo/male-painter-studio-using-watercolor-his-art_23-2150213627.jpg?t=st=1739704710~exp=1739708310~hmac=0ef269797e367a7a7a38c81e84aa3805213b6e351b104ea3205eac7fc52aa49e&w=1060",
    "Science": "https://img.freepik.com/free-photo/woman-working-with-virtual-reality-goggles_23-2148776811.jpg?t=st=1739704760~exp=1739708360~hmac=72689430a5782c3c703acc7e9b710ad01086535591cd25381a7de4e956d19a34&w=1060",
    "Law": "https://img.freepik.com/free-photo/lawyer_23-2147984121.jpg?t=st=1739704914~exp=1739708514~hmac=1571ee1d16349d6d5e7693c8de19045a7b3523f9253a4c3fdf0d9ac4b58715cc&w=740"
    // Add more mappings as needed
  };

    // Fallback image URL if no department image is found
    const fallbackImage = "https://img.freepik.com/free-vector/education-design-with-icons_23-2147501091.jpg";

  const extractUniqueDepartments = (colleges) => {
    const departmentMap = new Map();

    colleges.forEach((college) => {
      college.departments?.forEach((department) => {
        if (!departmentMap.has(department.departmentName)) {
          departmentMap.set(department.departmentName, {
            collegesCount: 0,
            courses: [],
          });
        }

        const deptData = departmentMap.get(department.departmentName);
        deptData.collegesCount += 1;

        department.courses.forEach((course) => {
          if (!deptData.courses.some((c) => c.courseSlug === course.courseSlug)) {
            deptData.courses.push({
              courseSlug: course.courseSlug,
              courseUrl: course.courseUrl,
            });
          }
        });
      });
    });

    return Array.from(departmentMap.entries()).map(([deptName, data]) => ({
      departmentName: deptName,
      collegesCount: data.collegesCount,
      courses: data.courses.slice(0, 3),
    }));
  };

  const uniqueDepartments = extractUniqueDepartments(colleges);

  return (
    <section className="pt-20 pb-10 lg:px-20 px-6">
      <div className="">
        <h2 data-aos="fade-up" className="mb-4 text-3xl text-black font-semibold">
          Select Your Goal
        </h2>
=======

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
>>>>>>> second-account/main

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
<<<<<<< HEAD
          {uniqueDepartments.length > 0 ? (
            uniqueDepartments.map((department, index) => (
              <SwiperSlide key={index}>
                <div className="block relative bg-white rounded-lg h-[300px] group overflow-hidden">
                  <div className="rounded-lg overflow-hidden h-[300px]">
                    <img
                      src={departmentImages[department.departmentName] || fallbackImage}
                      alt={department.departmentName}
                      className="scale-100 rounded-lg group-hover:scale-125 transition duration-700 object-cover h-full w-full"
                    />
                  </div>
                  <div className="absolute rounded-b-lg -bottom-28 group-hover:bottom-0 transition-bottom duration-500 left-0 w-full bg-second/80 py-4 px-3">
                    <div className="flex gap-2 items-start">
                      <div className="border border-white p-2 w-1/5 rounded-full">
                        <img src="/assets/icons/graduated.png" alt="slider-icon" />
                      </div>
                      <div className="w-4/5 flex flex-col">
                        <div className="oneLinerTitle font-medium text-white hover:text-gray-400 text-lg">
                          {department.departmentName}
                        </div>
                        <div className="text-xs rounded text-white">
                          ({department.collegesCount} Colleges)
                        </div>
                      </div>
                    </div>

                    <ul className="list-none mt-5 ">
                      {department.courses.map((course, i) => (
                        <li key={i} className="border-b text-sm mb-2">
                          <a href={`/courses/${course.courseUrl}`} className="hover:text-prim transition duration-300">{course.courseSlug}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div>No College Available.</div>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default SetYourGoal;
=======

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
>>>>>>> second-account/main
