"use client";
import React, { useEffect } from "react";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import collegeDataJson from "../data/collegeData.json";
import Testimonials from "../components/Testimonials";
import Breadcrumbs2 from "../components/Breadcrumbs2";

const placedCompanies = [
  {
    companyId: 1,
    companyName: "Amazon",
    companyLogo:
      "https://www.shutterstock.com/image-vector/nuremberg-germany-december-23th-2023-600nw-2404360865.jpg",
  },
  {
    companyId: 2,
    companyName: "Flipkart",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNju7w1CeiteE9eiNIN8qeoXoehxdfFYgPtQ&s",
  },
  {
    companyId: 3,
    companyName: "De Shaw & Co",
    companyLogo:
      "https://logovtor.com/wp-content/uploads/2023/06/d-e-shaw-and-co-lp-logo-vector.png",
  },
  {
    companyId: 4,
    companyName: "Goldman Sachs",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2048px-Goldman_Sachs.svg.png",
  },
  {
    companyId: 5,
    companyName: "Dell",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png",
  },
  {
    companyId: 6,
    companyName: "Infosys",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
  },
  {
    companyId: 7,
    companyName: "TCS",
    companyLogo:
      "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1720244494",
  },
  {
    companyId: 8,
    companyName: "Amazon",
    companyLogo:
      "https://www.shutterstock.com/image-vector/nuremberg-germany-december-23th-2023-600nw-2404360865.jpg",
  },
  {
    companyId: 9,
    companyName: "Flipkart",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNju7w1CeiteE9eiNIN8qeoXoehxdfFYgPtQ&s",
  },
  {
    companyId: 10,
    companyName: "De Shaw & Co",
    companyLogo:
      "https://logovtor.com/wp-content/uploads/2023/06/d-e-shaw-and-co-lp-logo-vector.png",
  },
  {
    companyId: 11,
    companyName: "Goldman Sachs",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2048px-Goldman_Sachs.svg.png",
  },
  {
    companyId: 12,
    companyName: "Dell",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png",
  },
  {
    companyId: 13,
    companyName: "Infosys",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
  },
  {
    companyId: 14,
    companyName: "TCS",
    companyLogo:
      "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1720244494",
  },
];

const Page = () => {
  const colleges = collegeDataJson.data;

  return (
    <>
      <div className="mx-auto pt-20">
        <div className="">
          <div className="bg-second lg:px-10 px-6 py-10">
            <div className="text-white">
            <Breadcrumbs2
              breadcrumbs={[{ title: "Siksha Helpline", link: "" }]}
            />
            </div>

            <div className="grid gap-10 grid-cols-2 max-sm:grid-cols-1 border mt-5">
              <div>
                <h1 className="text-4xl max-sm:text-3xl text-white font-semibold">
                  Who We Are
                </h1>
                <p className="mt-4 text-white/70">
                  Founded in 2019, Siksha Helpline is one of the most reputable
                  educational consulting companies in India. Our goal is to
                  provide clear, individualized guidance on the path to higher
                  education. The Siksha Helpline offers professional advice and
                  tools to assist you in understanding the complexity of the
                  educational system, whether you're looking for aid with exam
                  preparation, career counseling, school admissions, or academic
                  planning. Our qualified experts give you individualized
                  support, address your inquiries, and offer insightful advice
                  to help you reach your learning objectives and make wise
                  decisions. For everything related to education, the Siksha
                  Helpline is your go-to source because of its emphasis on
                  empowerment, clarity, and assistance.
                </p>
              </div>
              <div className="border flex justify-center relative">
                <img
                  loading="lazy"
                  src="https://getmasum.com/html-preview/edumon/assets/img/banner.png"
                  alt="Siksha-Helpline Image"
                  className="rounded-tl-3xl rounded-tr-5xl w-[50%]"
                />

                <img src="" alt="" className="absolute top-10 -left-10 border h-24 w-24 shadow-lg shadow-white" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl max-sm:text-3xl text-black font-semibold mt-10">
            Our Services
          </h2>
          <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 mt-4">
            <div className="rounded-lg p-4 py-5 flex flex-col justify-center items-center animatedBorderBox">
              <img src="" alt="" className="rounded-full border h-20 w-20" />
              <h3 className="text-black font-semibold text-2xl">
                Service Name
              </h3>
              <p>This is the description of this service.</p>
            </div>
            <div className="rounded-lg p-4 py-5 flex flex-col justify-center items-center animatedBorderBox">
              <img src="" alt="" className="rounded-full border h-20 w-20" />
              <h3 className="text-black font-semibold text-2xl">
                Service Name
              </h3>
              <p>This is the description of this service.</p>
            </div>
            <div className="rounded-lg p-4 py-5 flex flex-col justify-center items-center animatedBorderBox">
              <img src="" alt="" className="rounded-full border h-20 w-20" />
              <h3 className="text-black font-semibold text-2xl">
                Service Name
              </h3>
              <p>This is the description of this service.</p>
            </div>
            <div className="rounded-lg p-4 py-5 flex flex-col justify-center items-center animatedBorderBox">
              <img src="" alt="" className="rounded-full border h-20 w-20" />
              <h3 className="text-black font-semibold text-2xl">
                Service Name
              </h3>
              <p>This is the description of this service.</p>
            </div>
          </div>

          <h2 className="text-4xl max-sm:text-3xl text-black font-semibold mt-10">
            Our Partners(200+ Partners)
          </h2>
          <div className="mt-3">
            <Swiper
              spaceBetween={10}
              slidesPerView={1.5}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              speed={1000}
              touchStartPreventDefault={false} // Prevents unwanted scrolling
              preventInteractionOnTransition={true} // Improves mobile interaction
              // navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                // Mobile small (smaller than 500px)
                320: {
                  slidesPerView: 2, // 1 slide on very small screens
                },
                500: {
                  slidesPerView: 4,
                },
                // Tablets (around 768px)
                768: {
                  slidesPerView: 5, // Can show partial next slide
                },
                1024: {
                  slidesPerView: 6, // Showing 2 slides
                },
                1300: {
                  slidesPerView: 8, // Show 2.5 slides
                },
                1500: {
                  slidesPerView: 8, // Show 3 full slides
                },
              }}
              navigation={true}
              //  modules={[Autoplay, Pagination, Navigation]}
              modules={[Autoplay, Navigation, A11y]}
              className="swiper-wrapper"
            >
              {colleges.length > 0 ? (
                colleges.map((college) => (
                  <SwiperSlide
                    key={college.collegeId}
                    className="rounded-lg bg-white"
                  >
                    <div className="p-4 text-sm">
                      <img
                        className="h[auto] w-full object-cover rounded-lg mr-4"
                        src={college.collegeLogo}
                        alt=""
                      />
                      <h3 className="text-gray-700 text-lg font-semibold mt-2 twoLinerTitle2">
                        {college.collegeName}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p className="text-center text-gray-600">
                  No best sellers available.
                </p>
              )}
            </Swiper>
          </div>

          <Testimonials />

          <h2 className="text-4xl max-sm:text-3xl text-black font-semibold mt-10">
            Our Students Placed in
          </h2>
          <div className="mt-3">
            <Swiper
              spaceBetween={10}
              slidesPerView={1.5}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              speed={2000}
              touchStartPreventDefault={false} // Prevents unwanted scrolling
              preventInteractionOnTransition={true} // Improves mobile interaction
              // navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 3, // 1 slide on very small screens
                },
                500: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 6, // Can show partial next slide
                },
                1024: {
                  slidesPerView: 8, // Showing 2 slides
                },
                1300: {
                  slidesPerView: 9, // Show 2.5 slides
                },
                1500: {
                  slidesPerView: 10, // Show 3 full slides
                },
              }}
              navigation={true}
              //  modules={[Autoplay, Pagination, Navigation]}
              modules={[Autoplay, Navigation, A11y]}
              className="swiper-wrapper"
            >
              {placedCompanies.length > 0 ? (
                placedCompanies.map((company, index) => (
                  <SwiperSlide key={index} className="rounded-lg ">
                    <div className="p-4 text-sm rounded-lg  bg-white/40 hover:bg-white transition duration-300 scale-100">
                      <div className=" max-h-40 flex justify-center items-center">
                        <img
                          className="h[auto] w-full object-cover rounded-lg "
                          src={company.companyLogo}
                          alt=""
                        />
                      </div>
                      <h3 className="text-gray-700 text-lg font-semibold mt-2 twoLinerTitle2">
                        {company.companyName}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p className="text-center text-gray-600">
                  No best sellers available.
                </p>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
