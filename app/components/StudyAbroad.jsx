import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import StudyAbroadCard from "./StudyAbroadCard";
import collegeDataJSON from "../data/collegeData.json";
import { ChevronRight } from "lucide-react";

const StudyAbroad = () => {
  const filteredColleges = collegeDataJSON.data.filter(
    (college) => college.collegeAddress.country.toLowerCase() !== "india"
  );

  // Group colleges by country and count them
  const collegeGroupedByCountry = filteredColleges.reduce((acc, college) => {
    const country = college.collegeAddress.country;

    if (!acc[country]) {
      acc[country] = { count: 0, representativeCollege: college };
    }

    acc[country].count += 1;
    return acc;
  }, {});

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
    <section className="px-6 lg:px-20">
      <div className="">
        <h2
          data-aos="zoom-in"
          className="mb-4 text-3xl text-black font-semibold"
        >
          Study Abroad
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
          {Object.entries(collegeGroupedByCountry).map(
            ([country, data], index) => (
              <SwiperSlide key={index}>
                <a
                  href={`/courses-abroad/abroad-colleges`}
                  className="block border relative bg-white rounded-lg overflow-hidden h-[300px] group"
                >
                  <img
                    src={
                      data.representativeCollege.collegeImages?.[0] ||
                      "/assets/testimonial_noImage.png"
                    }
                    alt={country}
                    className="scale-100 group-hover:scale-125 transition duration-700 object-cover h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white py-3 px-2 flex gap-2 items-start">
                    <div className="w-1/4 p-2 border border-black rounded-full">
                      <img
                        src="/assets/icons/school.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="w-3/4">
                      <div className="font-medium text-tertiary">
                        Study in {country}{" "}
                      </div>
                      <div className="font-medium text-textClr flex gap-1 items-center text-sm">
                        Check {data.count} {data.count > 1 ? "Colleges" : "College"} <ChevronRight size={14} />{" "}
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default StudyAbroad;
