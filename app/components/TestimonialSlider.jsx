import React from "react";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const studentTestimonials = [
  {
    _id: 1,
    name: "Priya Sharma",
    description:
      "Siksha Helpline made my journey from admission to placement smooth and stress-free. Their support was invaluable!",
    image: "",
    course: "PGDM Finance",
  },
  {
    _id: 2,
    name: "Rahul Kumar",
    description:
      "The personalized counseling and guidance I received helped me choose the  perfect college for my MB",
    image: "https://getmasum.com/html-preview/edumon/assets/img/review/3.jpg",
    course: "MBA Finance",
  },
  {
    _id: 3,
    name: "Sachin Kumar",
    description:
      "The personalized counseling and guidance I received helped me choose the  perfect college for my MB",
    image: "",
    course: "B.tech",
  },
  {
    _id: 4,
    name: "Anjali",
    description:
      "The personalized counseling and guidance I received helped me choose the  perfect college for my MB",
    image: "",
    course: "BBA LLB",
  },
  {
    _id: 5,
    name: " Vishal Ayansh",
    description:
      "The personalized counseling and guidance I received helped me choose the  perfect college for my MB",
    image: "",
    course: "PGDM",
  },
  {
    _id: 6,
    name: "Anurag",
    description:
      "The personalized counseling and guidance I received helped me choose the  perfect college for my MB",
    image: "https://getmasum.com/html-preview/edumon/assets/img/review/1.jpg",
    course: " B.tech(biotec)",
  }
];

const TestimonialSlider = () => {
  return (
    <div className="testimonialSliderWrapper relative">
      <div className="2xl:px-48 xl:px-32 lg:px-20 px-6 py-28">
        <div>
          <div className="text-white text-lg font-semibold">Our Students Review</div>
          <div className="text-4xl max-sm:text-3xl text-white font-semibold">
            Hear From Our Students
          </div>
        </div>
        <div className="mt-10 w-full testimonialSlider">
          <Swiper
            spaceBetween={30}
            slidesPerView={1.5}
            loop={true}
            centeredSlides={true} // This centers the active slide
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            speed={2000}
            // navigation
            scrollbar={{ draggable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            //  modules={[Autoplay, Pagination, Navigation]}
            modules={[Autoplay, Navigation, A11y]}
            className="swiper-wrapper"
          >
            {studentTestimonials.map((student, index) => (
              <SwiperSlide
                key={index}
                className="border transition-all duration-300 transform rounded-xl p-5"
              >
                <div className="flex flex-col items-center text-center ">
                  <div className="w-28 h-28 relative mb-10">
                    <img
                      src={student.image || "/assets/testimonial_noImage.png"}
                      alt={student.name}
                      className="rounded-lg w-full object-cover "
                    />
                    <div className="absolute top-0 left-0 w-28 h-28 border-2 rounded-lg mb-20 transform rotate-45  -z-10"></div>
                  </div>
                  <p className="text-2xl font-medium mt-2 text-white capitalize activeP1">
                    {student.name}
                  </p>
                  <p className="text-sm text-white activeP1">
                    {student.course}
                  </p>
                  <p className=" mt-3 text-gray-200 activeP2">
                    {student.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default TestimonialSlider;
