"use client";
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import DynamicThemeButton from "../DynamicThemeButton";

const Dashboard = ({ student, colleges }) => {
  const [isSubmitted, setIsSubmitted] = useState(false); // For showing success message
  const [isSubmitting, setIsSubmitting] = useState(false); // For managing loading state
  const [departments, setDepartments] = useState([]);

  // Define state for the selected option
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const [selectedOption2, setSelectedOption2] = useState(null);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const [selectedOption3, setSelectedOption3] = useState(null);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const [selectedOption4, setSelectedOption4] = useState(null);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);

  // Create a ref to the dropdown element
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);

  // Handle selecting an option for dropdown 1
  const handleSelectOption1 = (option) => {
    setSelectedOption1(option);
    setValue("collegeType", option, { shouldValidate: true }); // Update form value & trigger validation
    setDropdownOpen1(false);
  };

  // Handle selecting an option for dropdown 2
  const handleSelectOption2 = (option) => {
    setSelectedOption2(option);
    setValue("studentType", option, { shouldValidate: true }); // Update form value & trigger validation
    setDropdownOpen2(false);
  };

  // Handle selecting an option for dropdown 3
  const handleSelectOption3 = (option) => {
    setSelectedOption3(option);
    setValue("gender", option, { shouldValidate: true }); // Update form value & trigger validation
    setDropdownOpen3(false);
  };
  // Handle selecting an option for dropdown 4
  const handleSelectOption4 = (option) => {
    setSelectedOption4(option);
    setValue("course", option, { shouldValidate: true }); // Update form value & trigger validation
    setDropdownOpen4(false);
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm();

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

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target)
      ) {
        setDropdownOpen1(false);
      }
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setDropdownOpen2(false);
      }
      if (
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target)
      ) {
        setDropdownOpen3(false);
      }
      if (
        dropdownRef4.current &&
        !dropdownRef4.current.contains(event.target)
      ) {
        setDropdownOpen4(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="text-2xl font-semibold text-tertiary">Your Profile</div>

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
            {/* College type and Student type */}
            <div className="grid grid-cols-2  max-sm:grid-cols-1 gap-8">
              <div className="relative" ref={dropdownRef1}>
                <label
                  htmlFor="collegeType"
                  className="block text-sm font-medium text-gray-500"
                >
                  Where you want to study?
                </label>

                <div
                  className="relative mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  onClick={() => setDropdownOpen1(!dropdownOpen1)} // Toggle dropdown
                >
                  <div
                    className={`px-4 py-3  ${
                      selectedOption1 ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {selectedOption1 || "Select an Option"}
                  </div>
                  <div
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                      dropdownOpen1 ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {dropdownOpen1 && (
                  <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10">
                    <ul className="divide-y divide-gray-100">
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() =>
                          handleSelectOption1("Interested in Indian Colleges")
                        }
                      >
                        Interested in Indian Colleges
                      </li>
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() =>
                          handleSelectOption1("Interested in Abroad Colleges")
                        }
                      >
                        Interested in Abroad Colleges
                      </li>
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() =>
                          handleSelectOption1(
                            "Interested in Both Indian and Abroad Colleges"
                          )
                        }
                      >
                        Interested in Both Indian and Abroad Colleges
                      </li>
                    </ul>
                  </div>
                )}

                {/* Hidden input to integrate with React Hook Form */}
                <input
                  type="hidden"
                  {...register("collegeType", {
                    required: "This field is required",
                  })}
                  value={selectedOption1 || ""}
                />

                {/* Validation message */}
                {errors.collegeType && (
                  <p className="text-red-500 text-sm">
                    {errors.collegeType.message}
                  </p>
                )}
              </div>

              <div className="relative" ref={dropdownRef2}>
                <label
                  htmlFor="collegeType"
                  className="block text-sm font-medium text-gray-500"
                >
                  What describes you the best?
                </label>

                <div
                  className="relative mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  onClick={() => setDropdownOpen2(!dropdownOpen2)} // Toggle dropdown
                >
                  <div
                    className={`px-4 py-3  ${
                      selectedOption2 ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {selectedOption2 || "Select an Option"}
                  </div>
                  <div
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                      dropdownOpen2 ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {dropdownOpen2 && (
                  <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10">
                    <ul className="divide-y divide-gray-100">
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() =>
                          handleSelectOption2("Looking for Admission[Aspirant]")
                        }
                      >
                        Looking for Admission[Aspirant]
                      </li>
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() => handleSelectOption2("Graduate Student")}
                      >
                        Graduate Student
                      </li>
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() =>
                          handleSelectOption2("Post Graduate Student")
                        }
                      >
                        Post Graduate Student
                      </li>
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() => handleSelectOption2("Alumni")}
                      >
                        Alumni
                      </li>
                    </ul>
                  </div>
                )}

                {/* Hidden input to integrate with React Hook Form */}
                <input
                  type="hidden"
                  {...register("studentType", {
                    required: "This field is required",
                  })}
                  value={selectedOption2 || ""}
                />

                {/* Validation message */}
                {errors.studentType && (
                  <p className="text-red-500 text-sm">
                    {errors.studentType.message}
                  </p>
                )}
              </div>
            </div>

            {/* Name and Email  */}
            <div className="grid grid-cols-2  max-sm:grid-cols-1 gap-8">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Full Name"
                    {...register("name", {
                      required: "Full name is required",
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
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Gender and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative" ref={dropdownRef3}>
                <label
                  htmlFor="collegeType"
                  className="block text-sm font-medium text-gray-500"
                >
                  Gender
                </label>

                <div
                  className="relative mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  onClick={() => setDropdownOpen3(!dropdownOpen3)} // Toggle dropdown
                >
                  <div
                    className={`px-4 py-3  ${
                      selectedOption3 ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {selectedOption3 || "Select an Option"}
                  </div>
                  <div
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                      dropdownOpen3 ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {dropdownOpen3 && (
                  <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10">
                    <ul className="divide-y divide-gray-100">
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() => handleSelectOption3("Male")}
                      >
                        Male
                      </li>
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() => handleSelectOption3("Female")}
                      >
                        Female
                      </li>
                      <li
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() =>
                          handleSelectOption3("I don't want to mention")
                        }
                      >
                        I don't want to mention
                      </li>
                    </ul>
                  </div>
                )}

                {/* Hidden input to integrate with React Hook Form */}
                <input
                  type="hidden"
                  {...register("gender", {
                    required: "This field is required",
                  })}
                  value={selectedOption2 || ""}
                />

                {/* Validation message */}
                {errors.gender && (
                  <p className="text-red-500 text-sm">
                    {errors.gender.message}
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
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* City and Course */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-500"
                >
                  City You Live In
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter City"
                  {...register("city", {
                    required: "City is required",
                  })}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>

              <div className="relative" ref={dropdownRef4}>
                <label
                  htmlFor="collegeType"
                  className="block text-sm font-medium text-gray-500"
                >
                  Course Interested
                </label>

                <div
                  className="relative mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  onClick={() => setDropdownOpen4(!dropdownOpen4)} // Toggle dropdown
                >
                  <div
                    className={`px-4 py-3  ${
                      selectedOption4 ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {selectedOption4 || "Select an Option"}
                  </div>
                  <div
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                      dropdownOpen4 ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {dropdownOpen4 && (
                  <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10">
                    <ul className="divide-y divide-gray-100">
                      {departments.map((department, index) => (
                        <li
                          key={index}
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption4(department)}
                        >
                          {department}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Hidden input to integrate with React Hook Form */}
                <input
                  type="hidden"
                  {...register("course", {
                    required: "This field is required",
                  })}
                  value={selectedOption2 || ""}
                />

                {/* Validation message */}
                {errors.course && (
                  <p className="text-red-500 text-sm">
                    {errors.course.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <DynamicThemeButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Save"}
              </DynamicThemeButton>
              {isSubmitting && (
                <img src="/assets/siksha-preloader/4.gif" className="w-16" />
              )}
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Dashboard;
