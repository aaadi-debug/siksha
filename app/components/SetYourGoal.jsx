import { React, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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