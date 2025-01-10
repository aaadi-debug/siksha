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
              backgroundImage: `url('/assets/bg_elem/landing-page-bg.jpg')`,
              //   backgroundColor: "#3D52A0", // Background color
              backgroundSize: "cover", // Adjust size as needed
              backgroundRepeat: "no-repeat", // Prevent tiling
              backgroundPosition: "center", // Center the image
              backgroundBlendMode: "overlay", // Optional: blend color and image
            }}
          >
            <div className="text-white">
              <Breadcrumbs2
                breadcrumbs={[{ title: "Landing Page", link: "" }]}
                linkColor="text-second"
                activeColor="text-textClr"
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 mt-5 lg:pt-10 lg:pb-0 pb-10">
              <div className="2xl:mb-48 2xl:mt-20 xl:mb-56 xl:pb-16 lg:pb-20">
                <h3 className="font-bold text-lg text-second uppercase tracking-widest mb-2">
                  Online education
                </h3>
                <h2 className="text-6xl max-sm:text-3xl text-black font-bold">
                  Learn The
                </h2>
                <h2 className="text-6xl max-sm:text-3xl text-black font-bold">
                  Skills You Need
                </h2>
                <h2 className="text-6xl max-sm:text-3xl text-black font-bold">
                  To Succeed
                </h2>
                <p className="mt-4 text-lg text-black/70 mb-10">
                  Free online courses from the world’s Leading experts. join 18+
                  million Learners today.
                </p>

                <div className="flex gap-6 flex-wrap items-center py-2 max-sm:flex-col max-sm:items-start max-sm:space-x-0 max-sm:space-y-4">
                  <DynamicThemeButton href="#enquireNowForm">
                    Enquire Now
                  </DynamicThemeButton>
                  <div className="flex items-center">
                    <img
                      src="/assets/images/new/student-overlaped.png"
                      alt=""
                    />
                    <p className="text-black text-lg max-sm:text-sm">
                      24k + Happy Students
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative lg:block hidden">
                <img
                  src="/assets/images/new/landing-page-girl.png"
                  alt="Landing Page Student Image"
                  className="absolute z-10 bottom-0"
                />
                <div className="2xl:block  hidden">
                  <div className="absolute bottom-0 left-10 ">
                    <div class="all-shapes"></div>
                  </div>
                  <div
                    className="absolute top-[20%] left-[0%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalOne"
                    style={{
                      backgroundImage:
                        "linear-gradient(to left, #00c0a6, #00b1c9, #009df4, #0080ff, #1d4dfa);",
                    }}
                  >
                    200+ Colleges Partners
                  </div>
                  <div
                    className="absolute top-[20%] right-[10%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalTwo  z-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #52f781, #a5e150, #d3c83a, #f0ae43, #fe955c);",
                    }}
                  >
                    200+ Colleges Partners
                  </div>
                  <div
                    className="absolute top-[40%] right-[0%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalOne z-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #fe955c, #ff816d, #ff6d86, #ff5fa7, #ff5dcc);",
                    }}
                  >
                    200+ Colleges Partners
                  </div>
                  <div
                    className="absolute top-[60%] right-[15%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalTwo z-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #785eff, #009fff, #00c8ff, #00e4ce, #52f781);",
                    }}
                  >
                    200+ Colleges Partners
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-10 px-6 py-10 bg-skin flex items-center max-sm:flex-col">
            <h2 className="text-4xl max-sm:text-2xl text-black font-semibold w-1/4 max-sm:w-full ">
              Our Students Placed in
            </h2>
            <div className="mt-3 w-3/4 swiperButtonNone max-sm:w-full">
              <Swiper
                spaceBetween={30}
                slidesPerView={1.5}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
                // navigation
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
                    slidesPerView: 10, // Show 2.5 slides
                  },
                  1500: {
                    slidesPerView: 12, // Show 3 full slides
                  },
                }}
                navigation={true}
                //  modules={[Autoplay, Pagination, Navigation]}
                modules={[Autoplay, Navigation, A11y]}
                className="swiper-wrapper"
              >
                {placedCompanies.length > 0 ? (
                  placedCompanies.map((company, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex items-end justify-center rounded"
                    >
                      <img
                        src={company.companyLogo}
                        alt={company.companyName || "Company Logo"}
                        className="rounded"
                      />
                      {/* <h3 className="text-gray-700 text-lg font-semibold mt-2 twoLinerTitle2">
                          {company.companyName}
                        </h3> */}
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

          <div className="lg:px-10 px-6 py-10">
            <div className="py-10">
              <h2 className="text-4xl max-sm:text-3xl text-black font-semibold ">
                Our Services
              </h2>
              <div className="grid gap-10 lg:grid-cols-5 md:grid-cols-2 max-sm:grid-cols-1 mt-4">
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
              <h2 className="text-4xl max-sm:text-3xl text-black font-semibold ">
                Process(How do we Full Fill there Requirements) (usp)
              </h2>
            </div>
          </div>

          <Testimonials />

          <div className="2xl:px-40 lg:px-10  px-6 py-20" id="enquireNowForm">
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
                  Enquire Us
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

                      {/* Course and Phone (Second Row) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="course"
                            className="block text-sm font-medium text-gray-500"
                          >
                            Course
                          </label>
                          <input
                            id="course"
                            type="text"
                            placeholder="Enter course"
                            {...register("course", {
                              required: "Course is required",
                              minLength: {
                                value: 6,
                                message:
                                  "Course should be at-least 6 characters.",
                              },
                            })}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {errors.course && (
                            <p className="text-red-500 text-sm">
                              {errors.course.message}
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

                      {/* Loan Assistance Checkbox */}
                      <div className="flex items-center gap-2 pb-6">
                        <input
                          id="loanAssistance"
                          type="checkbox"
                          {...register("loanAssistance")}
                          className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="loanAssistance"
                          className="text-sm font-medium text-gray-500"
                        >
                          I also need loan assistance
                        </label>
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
