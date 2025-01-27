"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PhoneCall, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import DynamicThemeButton from "../components/DynamicThemeButton";
import axios from "axios";

const ContactForm = () => {
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
  //   const onSubmit = (data) => {
  //     setIsSubmitting(true); // Start loading
  //     setTimeout(() => {
  //       console.log(data); // Process the data here
  //       setIsSubmitting(false); // End loading
  //       setIsSubmitted(true); // Show success image
  //       setTimeout(() => {
  //         setIsSubmitted(false); // Reset the form after 2 seconds
  //         reset(); // Reset the form fields
  //       }, 3000);
  //     }, 2000); // Simulate server request for 2 seconds
  //   };

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Start loading
    // setIsSubmitted(false); // Reset submitted state

    try {
      // Make API request
      const response = await axios.post("/api/contact", data);
      if (response.data.success) {
        setIsSubmitted(true); // Show success state
        setTimeout(() => {
          setIsSubmitted(false); // Reset success state after 3 seconds
          reset(); // Clear the form fields
        }, 3000);
      } else {
        console.error("Error: ", response.data.error); // Log backend error
        alert(response.data.error); // Display error message
      }
    } catch (error) {
      console.error("Submission Error: ", error);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false); // End loading
    }
  };

  return (
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
          <div className="grid lg:grid-cols-2 gap-4 -mt-5 text-white">
            <div className="bg-second p-4 rounded-lg flex flex-col justify-center items-center shadow-lg text-center">
              <PhoneCall size={24} />
              <h4 className="font-semibold mt-2 mb-3">For Call</h4>
              <a
                href="tel:+918298262156"
                className="hover:underline hover:text-prim transition duration-300"
              >
                +91 8298262156
              </a>
            </div>
            <div className="bg-second p-4 rounded-lg flex flex-col justify-center items-center shadow-lg text-center">
              <FaWhatsapp size={24} />
              <h4 className="font-semibold mt-2 mb-3">For WhatsApp</h4>
              <a
                href="https://wa.me/+919205230652"
                target="_blank"
                className="hover:underline hover:text-prim transition duration-300"
              >
                +91 9205230652
              </a>
            </div>
            <div className="bg-second p-4 rounded-lg flex flex-col justify-center items-center shadow-lg text-center">
              <Mail size={24} />
              <h4 className="font-semibold mt-2 mb-3">Write email Us</h4>
              <a
                href="mailto:contact@sikshahelpline.com"
                className="hover:underline hover:text-prim transition duration-300"
              >
                contact@sikshahelpline.com
              </a>
            </div>
            <div className="bg-second p-4 rounded-lg flex flex-col justify-center items-center shadow-lg text-center">
              <MapPin size={24} />
              <h4 className="font-semibold mt-2 mb-3">Visit anytime</h4>
              <a
                href="#map"
                className="text-sm hover:underline hover:text-prim transition duration-300"
              >
                Siksha HELPLINE Unit-02 Greencity Apartment Chandmari Near MS
                College Motihari, East Champaran, Bihar, 845401
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <h5 className="text-second font-medium text-xl mb-2">
            We are here for you! How can we help?
          </h5>
          <h2 className="text-black font-semibold text-4xl">Get in Touch</h2>

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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email (First Row) */}
                <div className="grid grid-cols-1 gap-4">
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
                          message: "Name should be at-least 3 characters.",
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

                {/* Subject and Phone (Second Row) */}
                <div className="grid grid-cols-1 gap-4">
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
                    placeholder="Go ahead, we are listening..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message:
                          "Message should be at-least 20 characters long.",
                      },
                      maxLength: {
                        value: 100,
                        message: "Message should not exceed 100 characters.",
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
                  <DynamicThemeButton type="submit" disabled={isSubmitting}>
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
  );
};

export default ContactForm;
