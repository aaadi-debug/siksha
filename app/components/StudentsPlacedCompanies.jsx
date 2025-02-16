import React from "react";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const placedCompanies = [
  {
    companyId: 1,
    companyName: "Alliance University",
    companyLogo:
      "/assets/images/companies/alliance.jpg",
  },
  {
    companyId: 2,
    companyName: "Shanti Business School ",
    companyLogo:
      "/assets/images/companies/sbs.png",
  },
  {
    companyId: 3,
    companyName: "Amity University ",
    companyLogo:
      "/assets/images/companies/amity.png",
  },
  {
    companyId: 4,
    companyName: "Sharda University",
    companyLogo:
      "/assets/images/companies/sharda.png",
  },
  {
    companyId: 5,
    companyName: "Lovely Professional University (LPU)",
    companyLogo:
      "/assets/images/companies/lpu.png",
  },
  {
    companyId: 6,
    companyName: "Chandigarh University ",
    companyLogo:
      "/assets/images/companies/chandi.jpg",
  },
  {
    companyId: 7,
    companyName: "Bennett University ",
    companyLogo:
      "/assets/images/companies/bennet.png",
  },
  {
    companyId: 8,
    companyName: "NIET",
    companyLogo:
      "/assets/images/companies/niet.png",
  },
  {
    companyId: 9,
    companyName: "CMAT College ",
    companyLogo:
      "",
  },
  {
    companyId: 10,
    companyName: "GL Bajaj Institute",
    companyLogo:
      "/assets/images/companies/gl-bajaj.jpg",
  },
  {
    companyId: 11,
    companyName: "PW(IOI) ",
    companyLogo:
      "/assets/images/companies/pw.jpg",
  }
];

const StudentsPlacedCompanies = () => {
  return (
    <div className="lg:px-10 px-6 pt-20">
      <div className="text-4xl max-sm:text-3xl text-blackClr font-semibold text-center">
        Our Students Placed in
      </div>
      <div className="mt-3 swiperButtonNone">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
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
                      src={company.companyLogo || "/assets/testimonial_noImage.png"}
                      alt=""
                    />
                  </div>
                  {/* <h3 className="text-gray-700 text-lg font-semibold mt-2 twoLinerTitle2 text-center"> */}
                  <h3 className="text-gray-700 text-lg font-semibold mt-2 text-center">
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
  );
};

export default StudentsPlacedCompanies;
