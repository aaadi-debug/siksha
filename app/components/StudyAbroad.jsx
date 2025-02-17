import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import StudyAbroadCard from "./StudyAbroadCard";
<<<<<<< HEAD
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
=======

const StudyAbroad = () => {
  return (
    <section className="topcollection studyabroad pb-5 lg:px-20">
      <div className="topcollection_wrapper pt-5">
>>>>>>> second-account/main
        <h2
          data-aos="zoom-in"
          className="mb-4 text-3xl text-black font-semibold"
        >
          Study Abroad
        </h2>
<<<<<<< HEAD

=======
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
<<<<<<< HEAD
=======
          // navigation
>>>>>>> second-account/main
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
<<<<<<< HEAD
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
=======
          // navigation={true}
          //  modules={[Autoplay, Pagination, Navigation]}
          modules={[Autoplay, Navigation, A11y]}
          className="swiper-wrapper mx-auto mb-4"
        >
          <SwiperSlide>
            <StudyAbroadCard
              imgSrc="/assets/images/Study-abroad/study-usa.png"
              college_name="Best B.Tech College in USA"
              noofcoolleges="5506"
              check_no_of_colleges="1100"
              avg_study_cost="33.12 K "
              question_1="Why Study in the USA"
              question_1_link=""
              question_2="Why Study in the USA"
              question_2_link=""
              question_3="Why Study in the USA"
              question_3_link=""
              learn_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StudyAbroadCard
              imgSrc="/assets/images/Study-abroad/study-uk.png"
              college_name="Best B.Tech College in UK"
              noofcoolleges="5506"
              check_no_of_colleges="1100"
              avg_study_cost="33.12 K "
              question_1="Why Study in the USA"
              question_1_link=""
              question_2="Why Study in the USA"
              question_2_link=""
              question_3="Why Study in the USA"
              question_3_link=""
              learn_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StudyAbroadCard
              imgSrc="/assets/images/Study-abroad/study-canada.png"
              college_name="Best B.Tech College in Canada"
              noofcoolleges="5506"
              check_no_of_colleges="1100"
              avg_study_cost="33.12 K "
              question_1="Why Study in the USA"
              question_1_link=""
              question_2="Why Study in the USA"
              question_2_link=""
              question_3="Why Study in the USA"
              question_3_link=""
              learn_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StudyAbroadCard
              imgSrc="/assets/images/Study-abroad/study-aus.png"
              college_name="Best B.Tech College in Australia"
              noofcoolleges="5506"
              check_no_of_colleges="1100"
              avg_study_cost="33.12 K "
              question_1="Why Study in the USA"
              question_1_link=""
              question_2="Why Study in the USA"
              question_2_link=""
              question_3="Why Study in the USA"
              question_3_link=""
              learn_more_link=""
            />
          </SwiperSlide>
          s
          <SwiperSlide>
            <StudyAbroadCard
              imgSrc="/assets/images/Study-abroad/study-germany.png"
              college_name="Best B.Tech College in Germany"
              noofcoolleges="5506"
              check_no_of_colleges="1100"
              avg_study_cost="33.12 K "
              question_1="Why Study in the USA"
              question_1_link=""
              question_2="Why Study in the USA"
              question_2_link=""
              question_3="Why Study in the USA"
              question_3_link=""
              learn_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StudyAbroadCard
              imgSrc="/assets/images/Study-abroad/study-ireland.png"
              college_name="Best B.Tech College in Ireland"
              noofcoolleges="5506"
              check_no_of_colleges="1100"
              avg_study_cost="33.12 K "
              question_1="Why Study in the USA"
              question_1_link=""
              question_2="Why Study in the USA"
              question_2_link=""
              question_3="Why Study in the USA"
              question_3_link=""
              learn_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StudyAbroadCard
              imgSrc="/assets/images/Study-abroad/study-nz.png"
              college_name="Best B.Tech College in New Zealand"
              noofcoolleges="5506"
              check_no_of_colleges="1100"
              avg_study_cost="33.12 K "
              question_1="Why Study in the USA"
              question_1_link=""
              question_2="Why Study in the USA"
              question_2_link=""
              question_3="Why Study in the USA"
              question_3_link=""
              learn_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StudyAbroadCard
              imgSrc="/assets/images/Study-abroad/study-netherlands.png"
              college_name="Best B.Tech College in Netherlands"
              noofcoolleges="5506"
              check_no_of_colleges="1100"
              avg_study_cost="33.12 K "
              question_1="Why Study in the USA"
              question_1_link=""
              question_2="Why Study in the USA"
              question_2_link=""
              question_3="Why Study in the USA"
              question_3_link=""
              learn_more_link=""
            />
          </SwiperSlide>
>>>>>>> second-account/main
        </Swiper>
      </div>
    </section>
  );
};

export default StudyAbroad;
