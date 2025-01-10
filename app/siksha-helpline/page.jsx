"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import collegeDataJson from "../data/collegeData.json";
import Testimonials from "../components/Testimonials";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import DynamicWhiteButton from "../components/DynamicWhiteButton";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import DynamicThemeButton from "../components/DynamicThemeButton";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false); // For managing loading state
  const [isSubmitted, setIsSubmitted] = useState(false); // For showing success message

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  const onSubmit = (data) => {
    setIsSubmitting(true); // Start loading
    setTimeout(() => {
      console.log(data); // Process the data here
      setIsSubmitting(false); // End loading
      setIsSubmitted(true); // Show success image
      setTimeout(() => {
        setIsSubmitted(false); // Reset the form after 2 seconds
        reset(); // Reset the form fields
      }, 3000);
    }, 2000); // Simulate server request for 2 seconds
  };

  return (
    <>
      <div className="mx-auto pt-20 max-sm:pt-16">
        <div className="">
          <div
            className="lg:px-10 px-6 pt-10"
            style={{
              backgroundImage: `url('/assets/bg_elem/patterns.png')`,
              backgroundColor: "#3D52A0", // Background color
              backgroundSize: "100%", // Adjust size as needed
              backgroundRepeat: "no-repeat", // Prevent tiling
              backgroundPosition: "center", // Center the image
              backgroundBlendMode: "overlay", // Optional: blend color and image
            }}
          >
            <div className="text-white">
              <Breadcrumbs2
                breadcrumbs={[{ title: "Siksha Helpline", link: "" }]}
                linkColor="text-white"
                activeColor="text-white/70"
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 mt-5 lg:pt-10 lg:pb-0 pb-10">
              <div>
                <h1 className="text-4xl max-sm:text-3xl text-white font-semibold">
                  Who We Are
                </h1>
                <p className="mt-4 text-white/70 mb-10">
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

                <div className="flex gap-6 flex-wrap items-center py-2 max-sm:flex-col max-sm:items-start max-sm:space-x-0 max-sm:space-y-4">
                  <DynamicWhiteButton href="/about">
                    Demo Button
                  </DynamicWhiteButton>
                  <div className="flex items-center">
                    <img
                      src="/assets/images/new/student-overlaped.png"
                      alt=""
                    />
                    <p className="text-white text-lg max-sm:text-sm">
                      24k + Happy Students
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex hidden justify-center items-end">
                <div className="flex justify-center">
                  <div className="relative flex justify-center items-end">
                    <img
                      loading="lazy"
                      src="https://getmasum.com/html-preview/edumon/assets/img/banner.png"
                      alt="Siksha-Helpline Image"
                      className="rounded-tl-3xl rounded-tr-5xl w-[80%]"
                    />
                    <div className=" absolute top-20 -left-10 w-40 h-40 rounded-lg bg-white shadow-lg shadow-white animate-left-right flex flex-col justify-center items-center">
                      <div className="bg-second w-20 h-20 rounded-full p-3">
                        <img
                          src="/assets/icons/student.png"
                          alt="Student Icon"
                        />
                      </div>
                      <h3 className="font-bold text-black mt-3 text-lg">28K</h3>
                      <p className="text-textClr text-base">Total Students</p>
                    </div>
                    <div className="border absolute -bottom-16 -right-10 w-64 h-28 rounded-lg bg-white shadow-lg shadow-white animate-up-down flex gap-2 justify-center items-center">
                      <div className="bg-second w-20 h-20 rounded-full p-3">
                        <img
                          src="/assets/icons/college.png"
                          alt="Student Icon"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg">750+</h3>
                        <p className="text-textClr text-base">Total Colleges</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-10 px-6 pt-10">
            <div className="py-10">
              <h2 className="text-4xl max-sm:text-3xl text-black font-semibold ">
                Our Services
              </h2>
              <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 mt-4">
                <div className="rounded-lg p-4 py-5 flex flex-col justify-center items-center text-center animatedBorderBox shadow-sm">
                  <div className="rounded-full border h-20 w-20 bg-second/20 flex justify-center items-center animatedBorderBoxImg">
                    <img src="" alt="" className="" />
                  </div>
                  <h3 className="text-black font-semibold text-2xl mt-3">
                    Service Name
                  </h3>
                  <p className="mt-2">
                    This is the description of this service.
                  </p>
                </div>
                <div className="rounded-lg p-4 py-5 flex flex-col justify-center items-center text-center animatedBorderBox shadow-sm">
                  <div className="rounded-full border h-20 w-20 bg-second/20 flex justify-center items-center animatedBorderBoxImg">
                    <img src="" alt="" className="" />
                  </div>
                  <h3 className="text-black font-semibold text-2xl mt-3">
                    Service Name
                  </h3>
                  <p className="mt-2">
                    This is the description of this service.
                  </p>
                </div>
                <div className="rounded-lg p-4 py-5 flex flex-col justify-center items-center text-center animatedBorderBox shadow-sm">
                  <div className="rounded-full border h-20 w-20 bg-second/20 flex justify-center items-center animatedBorderBoxImg">
                    <img src="" alt="" className="" />
                  </div>
                  <h3 className="text-black font-semibold text-2xl mt-3">
                    Service Name
                  </h3>
                  <p className="mt-2">
                    This is the description of this service.
                  </p>
                </div>
                <div className="rounded-lg p-4 py-5 flex flex-col justify-center items-center text-center animatedBorderBox shadow-sm">
                  <div className="rounded-full border h-20 w-20 bg-second/20 flex justify-center items-center animatedBorderBoxImg">
                    <img src="" alt="" className="" />
                  </div>
                  <h3 className="text-black font-semibold text-2xl mt-3">
                    Service Name
                  </h3>
                  <p className="mt-2">
                    This is the description of this service.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-10">
              <h2 className="text-4xl max-sm:text-3xl text-black font-semibold">
                Our Partners(200+ Partners)
              </h2>
              <div className="mt-4">
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
                        className="rounded-lg bg-white border"
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
            </div>
          </div>

          <Testimonials />

          <div className="lg:px-10 px-6 py-10 bg-skin">
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

          <div className="2xl:px-40 lg:px-10  px-6 py-20">
            <div className="grid gap-4 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1">
              <div>
                <div className="flex justify-center">
                  <img
                    src="/assets/images/new/contact-person.jpg"
                    alt="Contact Person Image"
                    className="w-[90%] rounded-md"
                  />
                </div>
                <div className="grid lg:grid-cols-3 gap-4 -mt-5 text-white">
                  <div className="bg-second p-4 rounded-lg flex flex-col justify-center items-center shadow-lg text-center">
                    <PhoneCall size={24} />
                    <h4 className="font-semibold mt-2 mb-3">For any Query?</h4>
                    <p>Free +91 8298262156</p>
                    <p>Free +91 9205230652</p>
                  </div>
                  <div className="bg-second p-4 rounded-lg flex flex-col justify-center items-center shadow-lg text-center">
                    <Mail size={24} />
                    <h4 className="font-semibold mt-2 mb-3">Write email Us</h4>
                    <p>contact@sikshahelpline.com</p>
                    <p>contact@sikshahelpline.com</p>
                  </div>
                  <div className="bg-second p-4 rounded-lg flex flex-col justify-center items-center shadow-lg text-center">
                    <MapPin size={24} />
                    <h4 className="font-semibold mt-2 mb-3">Visit anytime?</h4>
                    <p>Unit-02 Greencity Apartment Chandmari,</p>
                    <p>East Champaran, Bihar, 845401</p>
                  </div>
                </div>
              </div>
              <div className="">
                <h5 className="text-second font-medium text-xl mb-2">
                  Send us email
                </h5>
                <h2 className="text-black font-semibold text-4xl">
                  Feel Free to write
                </h2>

                <div className="mt-10 mx-auto">
                  {isSubmitted ? (
                    <div className="flex flex-col justify-center items-center gap-2">
                      <img
                        src="/assets/animated_gif/tick.gif"
                        alt="Success"
                        className="w-24 h-24"
                      />
                      <span>Thanks For Reaching Out</span>
                      <span className="font-semibold text-xl text-green-500">
                        Form Submitted Successfully!
                      </span>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      {/* Name and Email (First Row) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-500"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Enter Name"
                            {...register("name", {
                              required: "Name is required",
                              minLength: {
                                value: 3,
                                message:
                                  "Name should be at-least 3 characters.",
                              },
                            })}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-500"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: "Invalid email address",
                              },
                            })}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject and Phone (Second Row) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-500"
                          >
                            Subject
                          </label>
                          <input
                            id="subject"
                            type="text"
                            placeholder="Enter Subject"
                            {...register("subject", {
                              required: "Subject is required",
                              minLength: {
                                value: 6,
                                message:
                                  "Subject should be at-least 6 characters.",
                              },
                            })}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {errors.subject && (
                            <p className="text-red-500 text-sm">
                              {errors.subject.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-500"
                          >
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            placeholder="Enter Phone"
                            {...register("phone", {
                              required: "Phone number is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Invalid phone number",
                              },
                            })}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message (Third Row) */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-500"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          placeholder="Enter Message"
                          {...register("message", {
                            required: "Message is required",
                            minLength: {
                              value: 20,
                              message:
                                "Message should be at-least 20 characters long.",
                            },
                          })}
                          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="4"
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-500 text-sm">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-2 items-center">
                        <DynamicThemeButton
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </DynamicThemeButton>
                        {isSubmitting && (
                          <img
                            src="/assets/siksha-preloader/4.gif"
                            className="w-16"
                          />
                        )}
                      </div>
                    </form>
                  )}

                  {/* Success Message Image (Displayed for 2 seconds) */}
                  {/* {isSubmitted && (
                    <div className="border flex flex-col justify-center items-center gap-2">
                      <img
                        src="/assets/animated_gif/tick.gif"
                        alt="Success"
                        className="w-24 h-24"
                      />
                      <span>Thanks For Reaching Out</span>
                      <span className="font-semibold text-xl text-green-500">
                        Form Submitted Successfully!
                      </span>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
          <div className="map_integration" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.745170448307!2d84.89910807543062!3d26.656640376800702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399334fe4f532959%3A0x458a73d1414465df!2sGreen%20City%20Apartment!5e0!3m2!1sen!2sin!4v1720241751952!5m2!1sen!2sin"
              width="600"
              height="450"
              // style="border:0;"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
