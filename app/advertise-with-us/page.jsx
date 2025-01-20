"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import DynamicWhiteButton from "../components/DynamicWhiteButton";
import DynamicThemeButton from "../components/DynamicThemeButton";

// Imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const page = () => {
  const adsOptions = [
    {
      bannerName: "Sidebar Banners",
      bannerLink: "#sidebar-banners",
      bannerImage: "/assets/bg_elem/laptop.png",
    },
    {
      bannerName: "Footer Banners",
      bannerLink: "#footer-banners",
      bannerImage: "/assets/bg_elem/laptop.png",
    },
    {
      bannerName: "Text Links",
      bannerLink: "#text-links",
      bannerImage: "/assets/bg_elem/laptop.png",
    },
    {
      bannerName: "Mailer Services",
      bannerLink: "#mailer-services",
      bannerImage: "/assets/bg_elem/laptop.png",
    },
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Trigger animation when page is loaded or slider changes
  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Delay to trigger the animation after the component mounts
    return () => clearTimeout(timer);
  }, [currentSlide]); // Re-run when currentSlide changes

  // Swiper slide change handler
  const handleSlideChange = (swiper) => {
    const normalizedIndex = swiper.realIndex % adsOptions.length; // Normalize index
    setCurrentSlide(normalizedIndex); // Update the current slide
  };

  return (
    <div className="mx-auto pt-20 max-sm:pt-16">
      <div className="advertiseSwiper">
        <Swiper
          spaceBetween={30}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1300: { slidesPerView: 1 },
            1500: { slidesPerView: 1 },
          }}
          navigation={true}
          onSlideChange={handleSlideChange} // Trigger slide change handler
          modules={[Autoplay, Navigation, A11y]}
        >
          {adsOptions.map((adOption, index) => (
            <SwiperSlide
              key={index}
              className="pt-10 2xl:pb-64 xl:pb-56 lg:pb-32 lg:px-10 px-6"
              style={{
                backgroundImage: `url('${adOption.bannerImage}')`,
                backgroundSize: "70%",
                backgroundRepeat: "no-repeat",
                backgroundPosition:
                  isLoaded && currentSlide === index
                    ? "bottom right"
                    : "250% center", // Background comes from the right when loaded or slider changes
                transition: "background-position 1s ease-out",
              }}
            >
              <div className="text-white">
                <Breadcrumbs2
                  breadcrumbs={[
                    { title: "Advertise With Siksha Helpline", link: "" },
                  ]}
                  linkColor="text-second"
                  activeColor="text-textClr"
                />
              </div>
              <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 mt-5 lg:pt-10 lg:pb-0 pb-10">
                <div className="2xl:pl-48 xl:pl-40 lg:32 2xl:pt-32 xl:pt-28 lg:pt-12">
                  <motion.p
                    key={`text-1-${currentSlide}`} // Re-trigger animation by changing key
                    className="mt-4 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl max-sm:text-3xl uppercase font-bold text-tertiary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1 }}
                  >
                    Advertising
                  </motion.p>
                  <motion.p
                    key={`text-2-${currentSlide}`} // Re-trigger animation by changing key
                    className="2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl max-sm:text-3xl uppercase font-bold text-tertiary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    Options
                  </motion.p>
                  <motion.p
                    key={`text-3-${currentSlide}`} // Re-trigger animation by changing key
                    className="mt-3 text-tertiary 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl max-sm:text-3xl font-light uppercase mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 1 }}
                  >
                    {adOption.bannerName}
                  </motion.p>

                  <motion.p
                    key={`text-4-${currentSlide}`} // Re-trigger animation by changing key
                    className="flex gap-6 flex-wrap items-center py-2 max-sm:flex-col max-sm:items-start max-sm:space-x-0 max-sm:space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 1 }}
                  >
                    <DynamicThemeButton href={adOption.bannerLink}>
                      Select this Banner
                    </DynamicThemeButton>
                  </motion.p>
                </div>
                <div className=""></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* why siksha helpline starts */}
      <section className="2xl:px-64 xl:px-56 lg:px-32 px-10 py-10">
        <div className="flex gap-4 justify-center items-center">
          <div className="border-2 border-second w-24"></div>
          <h2 className="text-3xl font-semibold text-black text-center ">
            About{" "}
            <span className="text-second">Siksha Helpline Advertising</span>?
          </h2>
          <div className="border-2 border-second w-24"></div>
        </div>
        <p className="mt-4 text-center">
          Siksha Helpline is India’s most innovative and interactive education
          portal with a user-friendly and ergonomically designed interface to
          ensure maximum engagement and conversion rates. We cater to the needs
          of students, parents, and educators seeking comprehensive information
          on higher education. By advertising with us, you can connect directly
          with a vast audience actively exploring educational opportunities.
        </p>
      </section>
      {/* why siksha helpline ends */}

      {/* What we offer starts */}
      <section className="">
        <div
            style={{
                backgroundImage: `url(/assets/images/others/ad-1.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left"
              }}
        >
          <div className="text-4xl max-sm:text-3xl text-black font-semibold text-center">
            What We Offer
          </div>
          <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 max-sm:grid-cols-1 mt-10">
            <div>
              
            </div>
            <div>
              <div className="border-2 h-full border-dashed rounded-lg p-4  relative cursor-pointer hover:bg-second-light/40 transition duration-500 group">
                <h3 className="text-4xl font-bold text-black text-center">
                  For Educational Institutes
                </h3>
                <ul className="mt-4">
                  <li>
                    <b>Dedicated Microsite Creation: </b> A custom page
                    showcasing your institute’s unique offerings.
                  </li>
                  <li>
                    <b>Responsive Creative Display: </b> Seamless presentation
                    of images and multimedia content.
                  </li>
                  <li>
                    <b>Enhanced User Engagement: </b> Guaranteed increase in
                    interaction and click-through rates.
                  </li>
                  <li>
                    <b>Traffic Migration: </b> Easily direct traffic to your
                    website through referral links.
                  </li>
                  <li>
                    <b>API Integration: </b> Add your own API to receive instant
                    notifications from prospective candidates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-2 mt-10">
          <div>
            <div className="border-2 h-full border-dashed rounded-lg p-4  relative cursor-pointer hover:bg-second-light/40 transition duration-500 group">
              <h3 className="text-4xl font-bold text-black text-center">
                For Advertisers
              </h3>
              <ul className="mt-4">
                <li>
                  <b>Ample Advertising Space: </b> ptions for side banners,
                  footer banners, and text links.
                </li>
                <li>
                  <b> Targeted Banner Placement: </b> Intelligent algorithms
                  ensure banners are displayed only on relevant pages.
                </li>
                <li>
                  <b>Ad Rotation Policy:</b> Sustainable advertising reach with
                  optimized visitor frequency.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/others/advertisers.png"
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
      {/* What we offer ends */}
    </div>
  );
};

export default page;
