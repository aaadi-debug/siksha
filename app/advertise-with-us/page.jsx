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

import AOS from "aos";
import "aos/dist/aos.css";
import FAQs from "../components/FAQs";

const page = () => {
  const adsOptions = [
    {
      bannerName: "Sidebar Banners",
      bannerLink: "#sidebar-banners",
      bannerImage: "/assets/bg_elem/slider-img-1.png",
    },
    {
      bannerName: "Footer Banners",
      bannerLink: "#footer-banners",
      bannerImage: "/assets/bg_elem/slider-img-2.png",
    },
    {
      bannerName: "Text Links",
      bannerLink: "#text-links",
      bannerImage: "/assets/bg_elem/slider-img-3.png",
    },
    {
      bannerName: "Mailer Services",
      bannerLink: "#mailer-services",
      bannerImage: "/assets/bg_elem/slider-img-4.png",
    },
  ];

  const faqs = [
    {
      question: "What is Question 1?",
      answer: "Next.js is a React framework for production.",
    },
    {
      question: "What is Question 2?",
      answer: "Tailwind CSS is a utility-first CSS framework.",
    },
    {
      question: "How do Question 3?",
      answer: "Simply import it and pass an array of FAQs to it.",
    },
    {
      question: "How do Question 4?",
      answer: "Simply import it and pass an array of FAQs to it.",
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

  useEffect(() => {
    AOS.init();
  }, []);

  // Swiper slide change handler
  const handleSlideChange = (swiper) => {
    const normalizedIndex = swiper.realIndex % adsOptions.length; // Normalize index
    setCurrentSlide(normalizedIndex); // Update the current slide
  };

  return (
    <div className="mx-auto pt-20 max-sm:pt-16 relative animatedCicrlesWrapper">
      <div className="advertiseSwiper">
        <div className="text-white pt-10 lg:px-10">
          <Breadcrumbs2
            breadcrumbs={[
              { title: "Advertise With Siksha Helpline", link: "" },
            ]}
            linkColor="text-second"
            activeColor="text-textClr"
          />
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
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
          <h2 className="text-3xl font-semibold text-tertiary text-center ">
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
      <section className="pt-10 pb-20 2xl:px-64 xl:px-56 lg:px-20 md:px-10 max-sm:px-10 px-10">
        <div className="text-4xl max-sm:text-3xl text-tertiary font-semibold text-center">
          What We Offer
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 max-sm:grid-cols-1 grid-cols-1 gap-20 mt-5">
          <div
            className="border-2 border-dashed rounded-lg p-4 relative cursor-pointer hover:bg-second-light/40 transition duration-500 group"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="text-2xl font-bold text-black mb-4 text-center">
              For Educational Institutes
            </h3>
            <ul>
              <li>
                <b>Dedicated Microsite Creation:</b> A custom page showcasing
                your institute’s unique offerings.{" "}
              </li>
              <li>
                <b>Responsive Creative Display: </b> Seamless presentation of
                images and multimedia content.{" "}
              </li>
              <li>
                <b>Enhanced User Engagement:</b>Guaranteed increase in
                interaction and click-through rates.{" "}
              </li>
              <li>
                <b>Traffic Migration:</b> Easily direct traffic to your website
                through referral links.{" "}
              </li>
              <li>
                <b>API Integration:</b> Add your own API to receive instant
                notifications from prospective candidates.{" "}
              </li>
            </ul>

            <div className="bg-second-light rounded-full p-3 absolute -top-6 -left-6 group-hover:bg-second transition duration-500">
              {/* Default Image */}
              <img
                src="/assets/icons/university-theme.png"
                alt="Support Icon Default"
                className="w-8 h-8 transition-hidden duration-500 group-hover:hidden"
              />
              {/* Hover Image */}
              <img
                src="/assets/icons/university-white.png"
                alt="Support Icon Hover"
                className="w-8 h-8 hidden transition-hiden duration-500 group-hover:block"
              />
            </div>
          </div>

          <div
            className="border-2 border-dashed rounded-lg p-4 relative cursor-pointer hover:bg-second-light/40 transition duration-500 group"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="text-2xl font-bold text-black mb-4 text-center">
              For Advertisers
            </h3>
            <ul>
              <li>
                <b>Ample Advertising Space:</b>Options for side banners, footer
                banners, and text links.{" "}
              </li>
              <li>
                <b>Targeted Banner Placement: </b> Intelligent algorithms ensure
                banners are displayed only on relevant pages.{" "}
              </li>
              <li>
                <b>Ad Rotation Policy:</b> Sustainable advertising reach with
                optimized visitor frequency.{" "}
              </li>
            </ul>

            <div className="bg-second-light rounded-full p-3 absolute -top-6 -left-6 group-hover:bg-second transition duration-500">
              {/* Default Image */}
              <img
                src="/assets/icons/ad-theme.png"
                alt="Solution Icon Default"
                className="w-8 h-8 transition-hidden duration-500 group-hover:hidden"
              />
              {/* Hover Image */}
              <img
                src="/assets/icons/ad-white.png"
                alt="Solution Icon Hover"
                className="w-8 h-8 hidden transition-hiden duration-500 group-hover:block"
              />
            </div>
          </div>
        </div>
      </section>
      {/* What we offer ends */}

      {/* Advertising options starts */}
      <section className="py-10  overflow-hidden">
        <div className="text-4xl max-sm:text-3xl text-tertiary font-semibold text-center mb-4">
          Advertising Options
        </div>

        <div
          className="grid lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 grid-cols-1 mt-10"
          id="sidebar-banners"
        >
          <div className="max-sm:order-2">
            <img
              src="/assets/bg_elem/banner-1.jpg"
              alt="Sidebar Banner"
              data-aos="fade-right"
              data-aos-duration="1500"
            />
          </div>
          <div className="bg-second p-20 flex flex-col text-center justify-center items-center max-sm:p-6">
            <div
              className="text-7xl font-bold text-white max-sm:text-4xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Sidebar Banners
            </div>
            <p
              className="text-2xl text-white mt-3 max-sm:text-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Compact, high-visibility placements.{" "}
            </p>
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 grid-cols-1"
          id="footer-banners"
        >
          <div className="bg-second p-20 flex flex-col text-center justify-center items-center  max-sm:p-6 ">
            <div
              className="text-7xl font-bold text-white max-sm:text-4xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Footer Banners
            </div>
            <p
              className="text-2xl text-white mt-3 max-sm:text-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Wide-format banners for maximum exposure.
            </p>
          </div>
          <div className="">
            <img
              src="/assets/bg_elem/banner-2.jpg"
              alt="Sidebar Banner"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 grid-cols-1 overflow-hidden"
          id="text-links"
        >
          <div className="max-sm:order-2 overflow-hidden">
            <img
              src="/assets/bg_elem/banner-3.jpg"
              alt="Sidebar Banner"
              data-aos="fade-right"
              data-aos-duration="1500"
            />
          </div>
          <div className="bg-second p-20 flex flex-col text-center justify-center items-center  max-sm:p-6 ">
            <div
              className="text-7xl font-bold text-white max-sm:text-4xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Text Links
            </div>
            <p
              className="text-2xl text-white mt-3 max-sm:text-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Discreet yet effective options for brand visibility.
            </p>
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 grid-cols-1 overflow-hidden"
          id="mailer-services"
        >
          <div className="bg-second p-20 flex flex-col text-center justify-center items-center  max-sm:p-6 ">
            <div
              className="text-7xl font-bold text-white max-sm:text-4xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Mailer Services
            </div>
            <p
              className="text-2xl text-white mt-3 max-sm:text-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Reach targeted audiences through our opt-in email database.
            </p>
          </div>
          <div className=" overflow-hidden">
            <img
              src="/assets/bg_elem/banner-4.jpg"
              alt="Sidebar Banner"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </section>
      {/* Advertising options ends */}

      {/* why siksha helpline starts */}
      <section className="2xl:px-64 xl:px-56 lg:px-32 px-10 py-20 max-sm:px-6">
        <div className="flex gap-4 justify-center items-center">
          <div className="border-2 border-second w-24"></div>
          <h2 className="text-3xl font-semibold text-black text-center ">
            Why Choose{" "}
            <span className="text-second">Siksha Helpline Advertising</span>?
          </h2>
          <div className="border-2 border-second w-24"></div>
        </div>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mt-5">
          <div
            className="border-2 border-dashed rounded-lg p-4 flex flex-col justify-center items-center text-center relative cursor-pointer hover:bg-second-light/40 transition duration-500 group"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            <h3 className="text-lg font-bold text-black">
              Comprehensive Analytics
            </h3>
            <p className="mt-3 text-textClr font-light">
              Track ad performance and measure ROI
            </p>

            <div className="bg-second-light rounded-full p-3 absolute -top-6 -left-6 group-hover:bg-second transition duration-500">
              {/* Default Image */}
              <img
                src="/assets/icons/analysis-theme.png"
                alt="Analysis Icon Default"
                className="w-8 h-8 transition-hidden duration-500 group-hover:hidden"
              />
              {/* Hover Image */}
              <img
                src="/assets/icons/analysis-white.png"
                alt="Analysis Icon Hover"
                className="w-8 h-8 hidden transition-hiden duration-500 group-hover:block"
              />
            </div>
          </div>

          <div
            className="border-2 border-dashed rounded-lg p-4 flex flex-col justify-center items-center text-center relative cursor-pointer hover:bg-second-light/40 transition duration-500 group"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <h3 className="text-lg font-bold text-black">
              Customizable Designs
            </h3>
            <p className="mt-3 text-textClr font-light">
              Flexible options to match your brand identity
            </p>

            <div className="bg-second-light rounded-full p-3 absolute -top-6 -left-6 group-hover:bg-second transition duration-500">
              {/* Default Image */}
              <img
                src="/assets/icons/design-theme.png"
                alt="Design Icon Default"
                className="w-8 h-8 transition-hidden duration-500 group-hover:hidden"
              />
              {/* Hover Image */}
              <img
                src="/assets/icons/design-white.png"
                alt="Design Icon Hover"
                className="w-8 h-8 hidden transition-hiden duration-500 group-hover:block"
              />
            </div>
          </div>

          <div
            className="border-2 border-dashed rounded-lg p-4 flex flex-col justify-center items-center text-center relative cursor-pointer hover:bg-second-light/40 transition duration-500 group"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            <h3 className="text-lg font-bold text-black">Wide Reach</h3>
            <p className="mt-3 text-textClr font-light">
              Engage with students, parents, and educators nationwide
            </p>

            <div className="bg-second-light rounded-full p-3 absolute -top-6 -left-6 group-hover:bg-second transition duration-500">
              {/* Default Image */}
              <img
                src="/assets/icons/globe-theme.png"
                alt="Wide Reach Icon Default"
                className="w-8 h-8 transition-hidden duration-500 group-hover:hidden"
              />
              {/* Hover Image */}
              <img
                src="/assets/icons/globe-white.png"
                alt="Wide Reach Icon Hover"
                className="w-8 h-8 hidden transition-hiden duration-500 group-hover:block"
              />
            </div>
          </div>
        </div>
      </section>
      {/* why siksha helpline ends */}

      {/* FAQ starts */}
      <div className="lg:px-20 px-10 max-sm:px-6">
        <div className="text-4xl max-sm:text-3xl text-tertiary font-semibold text-center mb-4">
          Frequently Asked Questions
        </div>
        <FAQs faqs={faqs} />
      </div>
      {/* FAQ ends */}

      {/* Still have question starts */}
      <div className="lg:px-20 pt-10 pb-20 px-10 max-sm:px-6">
        <div
          className="flex justify-between items-center flex-wrap text-center gap-4 pb-20 border rounded-lg p-4 bg-white"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex">
            <div className="w-1/5">
              <img
                src="/assets/images/others/lady-contact-person.png"
                alt="Person Avatar"
                className="rounded-full w-16 h-16 max-sm:w-12 max-sm:h-12"
              />
            </div>
            <div className="w-4/5 text-left">
              <div className="text-black text-lg font-semibold">
                Still have questions?
              </div>
              <p>
                Can't find the answer you're looking for? Please connect with
                us.
              </p>
            </div>
          </div>
          <div>
            <DynamicThemeButton href="/contact-us">
              Get In Touch
            </DynamicThemeButton>
          </div>
        </div>
      </div>
      {/* Still have question ends */}

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

export default page;
