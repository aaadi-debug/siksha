"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Plane } from "lucide-react";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import collegeDataJson from "../data/collegeData.json";
import Testimonials from "../components/Testimonials";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import TestimonialSlider from "../components/TestimonialSlider";
import TestimonialSlider2 from "../components/TestimonialSlider2";
import DynamicWhiteButton from "../components/DynamicWhiteButton";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import DynamicThemeButton from "../components/DynamicThemeButton";
import { motion } from "framer-motion";
import Services from "../components/Services";

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
  const [departments, setDepartments] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const timelineData = [
    {
      id: 1,
      title: "Brief",
      description: "Lorem ipsum dolor sit amet.",
      color: "bg-red-500",
    },
    {
      id: 2,
      title: "Sketch",
      description: "Consectetur adipiscing elit.",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Solution",
      description: "Sed do eiusmod tempor incididunt.",
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Design",
      description: "Labore et dolore magna aliqua.",
      color: "bg-orange-500",
    },
    {
      id: 5,
      title: "Revision",
      description: "Ut enim ad minim veniam.",
      color: "bg-blue-500",
    },
  ];

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

  useEffect(() => {
    // Extract unique department names
    const allDepartments = colleges.flatMap((college) =>
      college.departments.map((dept) => dept.departmentName)
    );
    const uniqueDepartments = [...new Set(allDepartments)];
    setDepartments(uniqueDepartments);
  }, [colleges]);

  return (
    <>
      <div className="mx-auto pt-20 max-sm:pt-16">
        <div className="">
          <section
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
                <div className="font-medium text-second tracking-widest mb-2">
                  Welcome to <span className="font-bold">Siksha Helpline</span>{" "}
                  <span className="text-sm">
                    - India’s Most Loved Educational Portal
                  </span>
                </div>
                <h2 className="lg:text-6xl md:text-5xl max-sm:text-3xl text-4xl text-black font-bold">
                  Empowering Your Future,
                </h2>
                <h2 className="lg:text-6xl md:text-5xl max-sm:text-3xl text-4xl text-black font-bold"></h2>
                <h2 className="lg:text-6xl md:text-5xl max-sm:text-3xl text-4xl text-black font-bold">
                  Step by Step
                </h2>
                <p className="mt-4 text-lg text-black/70 mb-10">
                  At Siksha Helpline, we are more than just a portal – we are
                  your partners in success, from admission to placement. Join
                  thousands of students who have trusted us to guide their
                  educational journey.
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
                    <div className="all-shapes"></div>
                  </div>
                  <div className="absolute top-[20%] left-[0%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalOne gradientOne">
                    200+ Colleges Partners
                  </div>
                  <div className="absolute top-[20%] right-[10%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalTwo  z-10 gradientTwo">
                    200+ Colleges Partners
                  </div>
                  <div className="absolute top-[40%] right-[0%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalOne z-10 gradientThree">
                    200+ Colleges Partners
                  </div>
                  <div className="absolute top-[60%] right-[15%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalTwo z-10 gradientFour">
                    200+ Colleges Partners
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* why siksha helpline starts */}
          <section className="2xl:px-64 xl:px-56 lg:px-32 px-10 py-10">
            <div className="flex gap-4 justify-center items-center">
              <div className="border-2 border-second w-24"></div>
              <h2 className="text-3xl font-semibold text-black text-center ">
                Why <span className="text-second">Siksha Helpline</span>?
              </h2>
              <div className="border-2 border-second w-24"></div>
            </div>

            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mt-5">
              <div className="border-2 border-dashed rounded-lg p-4 flex flex-col justify-center items-center text-center relative cursor-pointer hover:bg-second-light/40 transition duration-500 group">
                <h3 className="text-lg font-bold text-black">
                  Trusted by Students Across India
                </h3>
                <p className="mt-3 text-textClr font-light">
                  250+ universities & colleges partnerships
                </p>

                <div className="bg-second-light rounded-full p-3 absolute -top-6 -left-6 group-hover:bg-second transition duration-500">
                  {/* Default Image */}
                  <img
                    src="/assets/icons/trust-theme.png"
                    alt="Trust Icon Default"
                    className="w-8 h-8 transition-hidden duration-500 group-hover:hidden"
                  />
                  {/* Hover Image */}
                  <img
                    src="/assets/icons/trust-white.png"
                    alt="Trust Icon Hover"
                    className="w-8 h-8 hidden transition-hiden duration-500 group-hover:block"
                  />
                </div>
              </div>

              <div className="border-2 border-dashed rounded-lg p-4 flex flex-col justify-center items-center text-center relative cursor-pointer hover:bg-second-light/40 transition duration-500 group">
                <h3 className="text-lg font-bold text-black">
                  Personalized Support
                </h3>
                <p className="mt-3 text-textClr font-light">
                  From counseling to placement, we stay with you.
                </p>

                <div className="bg-second-light rounded-full p-3 absolute -top-6 -left-6 group-hover:bg-second transition duration-500">
                  {/* Default Image */}
                  <img
                    src="/assets/icons/support-theme.png"
                    alt="Support Icon Default"
                    className="w-8 h-8 transition-hidden duration-500 group-hover:hidden"
                  />
                  {/* Hover Image */}
                  <img
                    src="/assets/icons/support-white.png"
                    alt="Support Icon Hover"
                    className="w-8 h-8 hidden transition-hiden duration-500 group-hover:block"
                  />
                </div>
              </div>

              <div className="border-2 border-dashed rounded-lg p-4 flex flex-col justify-center items-center text-center relative cursor-pointer hover:bg-second-light/40 transition duration-500 group">
                <h3 className="text-lg font-bold text-black">
                  One-Stop Solution
                </h3>
                <p className="mt-3 text-textClr font-light">
                  Admission, loans, internships, placements – all under one roof
                </p>

                <div className="bg-second-light rounded-full p-3 absolute -top-6 -left-6 group-hover:bg-second transition duration-500">
                  {/* Default Image */}
                  <img
                    src="/assets/icons/solution-theme.png"
                    alt="Solution Icon Default"
                    className="w-8 h-8 transition-hidden duration-500 group-hover:hidden"
                  />
                  {/* Hover Image */}
                  <img
                    src="/assets/icons/solution-white.png"
                    alt="Solution Icon Hover"
                    className="w-8 h-8 hidden transition-hiden duration-500 group-hover:block"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* why siksha helpline ends */}

          {/* our services starts */}
          <Services />
          {/* our services ends */}

          <div>
            <TestimonialSlider2 />
          </div>

          {/* roadmap starts */}
          <section className="py-10">
            <div className="mt-10">
              <div className="text-4xl max-sm:text-3xl text-black font-semibold text-center">
                Our Roadmap to Your Success
              </div>
              <div className="mt-4">
                <div className="relative bg-prim/20 py-20">
                  <div className="relative flex items-center justify-center">
                    {/* Road Path */}
                    <div className="absolute w-full h-10 bg-black/50 rounded-full top-1/2 transform -translate-y-1/2"></div>

                    {/* Timeline Items */}
                    <div className="flex justify-between w-full px-10">
                      {timelineData.map((item, index) => (
                        <motion.div
                          key={item.id}
                          className="relative flex flex-col items-center text-center"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          {/* Icon */}
                          <div
                            className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`}
                          >
                            {item.id}
                          </div>
                          {/* Connector */}
                          <div className="h-16 w-1 bg-black"></div>
                          {/* Title */}
                          <h3 className="text-xl font-bold mt-2">
                            {item.title}
                          </h3>
                          {/* Description */}
                          <p className="text-sm mt-1 text-gray-700">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* roadmap ends */}

          <TestimonialSlider />

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
                <h2 className="text-black font-semibold text-4xl capitalize">
                  our expert counselors will get in touch with you
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
                          {/* <input
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
                          /> */}
                          <select
                            id="course"
                            {...register("course", {
                              required: "Course is required",
                            })}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="" disabled>
                              Select a course
                            </option>
                            {departments.map((department, index) => (
                              <option key={index} value={department}>
                                {department}
                              </option>
                            ))}
                          </select>
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

                      {/* Location Field */}
                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-500"
                        >
                          Location
                        </label>
                        <input
                          id="location"
                          type="text"
                          placeholder="Enter Location"
                          {...register("location", {
                            required: "Location is required",
                            minLength: {
                              value: 3,
                              message:
                                "Location should be at least 3 characters.",
                            },
                          })}
                          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.location && (
                          <p className="text-red-500 text-sm">
                            {errors.location.message}
                          </p>
                        )}
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

                <div className=" text-white rounded-lg p-2 mt-5 flex gap-2 items-center">
                  <p className="bg-prim flex items-center rounded-lg gap-2 p-2">
                    <Plane size={16} /> Ready to start your journey? Let’s make
                    your dreams a reality together!
                  </p>
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
