import { React, useEffect } from "react";

// importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import collegeDataJSON from "../data/collegeData.json";

const TopCollection = () => {
  const colleges = collegeDataJSON.data.filter(
    (college) => college.collegeAddress.country.toLowerCase() === "india"
  );

  // Split data into two parts
  const first20Colleges = colleges.slice(0, 20);
  const next20Colleges = colleges.slice(20, 40);

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="pb-5 lg:px-20 px-6">
      <div className="">
        <h2
          data-aos="fade-up"
          className="mb-4 text-3xl text-black font-semibold"
        >
          Top Collection
        </h2>

        {/* First Swiper (First 20 Colleges) */}
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
          {first20Colleges.length > 0 ? (
            first20Colleges.map((college, index) => (
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

        {/* Second Swiper (Next 20 Colleges) */}
        {next20Colleges.length > 0 && (
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
              1500: { slidesPerView: 4.4 },
            }}
            modules={[Autoplay, Navigation, A11y]}
            className="swiper-wrapper mx-auto mb-4"
          >
            {next20Colleges.length > 0 ? (
              next20Colleges.map((college, index) => (
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
        )}
      </div>
    </section>
  );
};

export default TopCollection;
