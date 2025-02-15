import { React, useState, useEffect } from "react";

// importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css/navigation";

import collegeDataJSON from "../data/collegeData.json";

const CollegeRecommendations = () => {
  const colleges = collegeDataJSON.data;

  const createSlug = (id, name, city) => {
    const cleanedName = encodeURIComponent(
      name
        .replace(/[\[\]]/g, "") // Remove square brackets
        .replace(/[-]+/g, "-") // Replace multiple hyphens with a single hyphen
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .toLowerCase()
    );

    const formattedCity = encodeURIComponent(
      city.toLowerCase().replace(/\s+/g, "-")
    );
    return `${id}-${cleanedName}-${formattedCity}`;
  };

  return (
    <section className="pb-5 lg:px-20">
      <div className="">
        <h2 className="pb-3 text-3xl text-black font-semibold">
          Recommended Colleges
        </h2>

        <div className="college_list">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.5}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            // navigation
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
            {colleges.length > 0 ? (
              colleges.map((college, index) => (
                <SwiperSlide key={index}>
                  <a
                    href={`/college/${createSlug(
                      college.collegeId,
                      college.collegeName,
                      college.collegeAddress.city
                    )}`}
                    className="block border relative bg-white rounded-lg overflow-hidden h-[300px]"
                  >
                    <img
                      src={
                        college.collegeImages?.[0] ||
                        "/assets/testimonial_noImage.png"
                      }
                      alt={college.collegeName}
                      className="scale-100 hover:scale-125 transition duration-700 object-cover h-full"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-second/80 py-4 px-3">
                      <div className="twoLinerTitle2 font-medium text-white hover:text-gray-400 text-lg">
                        {college.collegeName}
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))
            ) : (
              <div>No College Available.</div>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CollegeRecommendations;
