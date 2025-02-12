"use client"
import React from "react";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const successStories = [
  {
    _id: 1,
    name: "Tanya",
    comapnyLogo: "/assets/images/companies/JLL_logo.svg.webp",
    course: "MBA Finance",
    companyName: "JLL",
  },
  {
    _id: 2,
    name: "Vishal",
    comapnyLogo: "/assets/images/companies/Muthoot_Finance_Logo.svg.png",
    course: "PGDM Finance",
    companyName: "Muthoot Finance",
  },
  {
    _id: 3,
    name: "Sachin Kumar",
    comapnyLogo: "/assets/images/companies/Amazon_logo.svg.png",
    course: "Internship",
    companyName: "Amazon",
  },
  {
    _id: 4,
    name: "Mohit",
    comapnyLogo: "/assets/images/companies/ICICI_Bank_Logo.svg.png",
    course: "",
    companyName: "ICICI Bank",
  },
  {
    _id: 5,
    name: "Shubham",
    comapnyLogo: "/assets/images/companies/basic-home-loan.png",
    course: "",
    companyName: "BASIC Home Loan",
  },
  {
    _id: 6,
    name: "Shubham",
    comapnyLogo: "/assets/images/companies/basic-home-loan.png",
    course: "",
    companyName: "BASIC Home Loan",
  },
];

const HomeSection1 = () => {
  return (
    <div className="testimonialSliderWrapper2 relative">
      <div className="2xl:px-48 xl:px-32 lg:px-20 px-6 py-28">
        <div>
          <div className="text-4xl max-sm:text-3xl text-blackClr font-semibold">
            Select Your Goal
          </div>
        </div>
        <div className="mt-10 w-full testimonialSlider2">
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
                slidesPerView: 4.5,
              },
            }}
            navigation={true}
            //  modules={[Autoplay, Pagination, Navigation]}
            modules={[Autoplay, Navigation, A11y]}
            className="swiper-wrapper"
          >
            {successStories.map((company, index) => (
              <SwiperSlide
                key={index}
                className="border transition-all duration-300 transform rounded-xl p-5"
              >
                <div className="flex flex-col items-center text-center ">
                  <div className="w-28 h-28 relative mb-10 flex justify-center items-center">
                    <img
                      src={company.comapnyLogo || "/assets/testimonial_noImage.png"}
                      alt="Comapny Logo"
                      className="rounded-lg w-full object-cover bg-white p-2"
                    />
                    <div className="absolute top-0 left-0 w-28 h-28 border-2 border-prim rounded-lg mb-20 transform rotate-45  -z-10 centerBorderWhite"></div>
                  </div>
                  <p className="text-2xl font-medium mt-2 text-black capitalize activeP1">
                    {company.companyName}
                  </p>
                  <div className="border-2 border-prim rounded-lg w-full py-2 mt-2 centerBorderWhite">
                    <p className="text-xs text-black activeP1 f">
                      STUDENT
                    </p>
                    <p className="text-2xl font-bold text-black activeP1 mt-2">
                      {company.name}
                    </p>
                    <p className="text-black activeP2">
                      {company.course}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ul className="circles">
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

export default HomeSection1;
