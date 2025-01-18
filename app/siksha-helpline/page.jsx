"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import collegeDataJson from "../data/collegeData.json";
import Testimonials from "../components/Testimonials";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import DynamicWhiteButton from "../components/DynamicWhiteButton";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import DynamicThemeButton from "../components/DynamicThemeButton";
import Services from "../components/Services";
import TestimonialSlider from "../components/TestimonialSlider";
import TestimonialSlider2 from "../components/TestimonialSlider2";
import StudentsPlacedCompanies from "../components/StudentsPlacedCompanies";

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
              backgroundSize: "cover", // Adjust size as needed
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
                <p className="mt-4 text-white/70">
                  Siksha Helpline is a trusted educational portal dedicated to
                  helping students navigate their academic journey with
                  confidence and clarity. With partnerships across prestigious
                  colleges and universities around the world, we provide
                  personalized guidance at every step – from admissions to
                  graduation and beyond.
                </p>

                <p className="mt-3 text-white/70 mb-10">
                  Our mission is to simplify the admission process, offer
                  continuous support, and empower students with the tools to
                  achieve success. Whether you're choosing a college, filling
                  out applications, or preparing for placements, Siksha Helpline
                  stands by your side every step of the way.
                </p>

                <div className="flex gap-6 flex-wrap items-center py-2 max-sm:flex-col max-sm:items-start max-sm:space-x-0 max-sm:space-y-4">
                  <DynamicWhiteButton href="#emailUsForm">
                    Contact Us Now
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

          <StudentsPlacedCompanies />

          {/* our services starts */}
          <Services />
          {/* our services ends */}

          <TestimonialSlider2 />

          <section className="lg:px-10 px-6 pt-10 pb-20">
            <div className="mt-10">
              <div className="text-4xl max-sm:text-3xl text-black font-semibold text-center">
                Take the First Step Towards Your Dream Career
              </div>
              content heere
            </div>
          </section>

          <TestimonialSlider />

          <div className="2xl:px-40 lg:px-10  px-6 py-20" id="emailUsForm">
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
