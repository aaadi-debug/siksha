import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import DynamicThemeButton from "./DynamicThemeButton";

const ApplyNow = ({ student, colleges }) => {
  const [isSubmitted, setIsSubmitted] = useState(false); // For showing success message
  const [isSubmitting, setIsSubmitting] = useState(false); // For managing loading state
  const [selectedCollege, setSelectedCollege] = useState(null); // To store selected college
  const [selectedCourse, setSelectedCourse] = useState(null); // To store selected college
  const [departments, setDepartments] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [step, setStep] = useState(1);
  const [charCount, setCharCount] = useState(0);
  const [isPastingError, setIsPastingError] = useState(false); // Tracking if paste error occurred
  const [likePoints, setLikePoints] = useState([""]);
  const [dislikePoints, setDislikePoints] = useState([""]);

  // Define state for the selected option
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const [selectedOption2, setSelectedOption2] = useState(null);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const [selectedOption3, setSelectedOption3] = useState(null);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const [selectedOption4, setSelectedOption4] = useState(null);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);

  const [selectedOption5, setSelectedOption5] = useState(null);
  const [dropdownOpen5, setDropdownOpen5] = useState(false);

  const [selectedOption6, setSelectedOption6] = useState(null);
  const [dropdownOpen6, setDropdownOpen6] = useState(false);

  // Create a ref to the dropdown element
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);
  const dropdownRef5 = useRef(null);
  const dropdownRef6 = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    trigger,
    getValues,
    control,
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
        reset(); // ✅ Reset the form fields
        setSelectedOption3(""); // Reset college dropdown
        setSelectedOption4(""); // Reset "Start Year" dropdown
        setSelectedOption5(""); // Reset "Start Year" dropdown
        setSelectedOption6(""); // Reset "Start Year" dropdown
        // window.location.reload(); // Reset the form fields
      }, 3000);
    }, 2000); // Simulate server request for 2 seconds
  };

  const handleSelectOption3 = (college) => {
    setSelectedCollege(college);
    setSelectedOption3(college.collegeName);
    setDropdownOpen3(false);
    setDropdownOpen4(true);

    clearErrors("collegeName");
    setValue("collegeName", college.collegeName);
  };

  const handleSelectOption4 = (department) => {
    setSelectedCourse(department);
    setSelectedOption4(department.departmentName);
    setDropdownOpen4(false);
    setDropdownOpen6(true); // Open Specialization dropdown

    // Extract all specializations from department courses
    const extractedSpecializations = department.courses.flatMap((course) =>
      course.specialization ? course.specialization : []
    );

    setSpecializations(extractedSpecializations); // Update state properly
    clearErrors("courseOpted");
    setValue("courseOpted", department.departmentName);
  };

  const handleSelectOption6 = (specialization) => {
    setSelectedOption6(specialization.name);
    setDropdownOpen6(false);

    clearErrors("specilizationOpted");
    setValue("specilizationOpted", specialization.name);
  };

  // Handle selecting an option for dropdown 5
  const handleSelectOption5 = (option) => {
    setSelectedOption5(option);
    setDropdownOpen5(false);
    clearErrors("startYear");

    // Update React Hook Form value manually to sync with state
    setValue("startYear", option);
  };

  //to select department from college data
  useEffect(() => {
    // Extract unique department names
    const allDepartments = colleges.flatMap((college) =>
      college.departments.map((dept) => dept.departmentName)
    );
    const uniqueDepartments = [...new Set(allDepartments)];
    setDepartments(uniqueDepartments);
  }, [colleges]);

  useEffect(() => {
    // Extract unique specializations while handling empty cases
    const allSpecializations = colleges.flatMap((college) =>
      college.departments.flatMap((dept) =>
        dept.courses.flatMap((course) =>
          Array.isArray(course.specialization) &&
          course.specialization.length > 0
            ? course.specialization.map((spec) => spec.name)
            : []
        )
      )
    );

    // Remove duplicates and filter out any falsy values
    const uniqueSpecializations = [
      ...new Set(allSpecializations.filter(Boolean)),
    ];

    setSpecializations(uniqueSpecializations);
  }, [colleges]);

  console.log(specializations);

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
      if (
        dropdownRef5.current &&
        !dropdownRef5.current.contains(event.target)
      ) {
        setDropdownOpen5(false);
      }
      if (
        dropdownRef6.current &&
        !dropdownRef6.current.contains(event.target)
      ) {
        setDropdownOpen6(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="writeReviewForm">
      {/* Steps */}
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
        <form onSubmit={handleSubmit(onSubmit)} className="border p-10">
          {/* City and Course */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First dropdown (College) */}
            <div className="relative" ref={dropdownRef3}>
              <label
                htmlFor="collegeName"
                className="block text-sm font-medium text-gray-500"
              >
                College/University Name
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
                  {selectedOption3 || "Select an Option"}{" "}
                  {/* Display collegeName */}
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
                  <ul className="divide-y divide-gray-100 max-h-[200px] overflow-y-auto">
                    {colleges.map((college, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() => handleSelectOption3(college)} // Pass whole college object
                      >
                        {college.collegeName} {/* Display collegeName */}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hidden input to integrate with React Hook Form */}
              <input
                type="hidden"
                {...register("collegeName", {
                  required: "This field is required",
                })}
                value={selectedCollege?.collegeName || ""}
              />

              {/* Validation message */}
              {errors.collegeName && (
                <p className="text-red-500 text-sm">
                  {errors.collegeName.message}
                </p>
              )}
            </div>

            {/* Second dropdown (Department) */}
            <div className="relative" ref={dropdownRef4}>
              <label
                htmlFor="courseOpted"
                className="block text-sm font-medium text-gray-500"
              >
                Course Interested In
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
                  {selectedOption4 || "Select an Option"}{" "}
                  {/* Display selected department or message */}
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

              {dropdownOpen4 && selectedCollege && (
                <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10">
                  <ul className="divide-y divide-gray-100 max-h-[200px] overflow-y-auto">
                    {selectedCollege.departments.map((department, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() => handleSelectOption4(department)} // Pass department
                      >
                        {department.departmentName}{" "}
                        {/* Display departmentName */}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hidden input to integrate with React Hook Form */}
              <input
                type="hidden"
                {...register("courseOpted", {
                  required: "This field is required",
                })}
                value={selectedOption4 || ""}
              />

              {/* Validation message */}
              {errors.courseOpted && (
                <p className="text-red-500 text-sm">
                  {errors.courseOpted.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4  ">
            {/* Third specilaization (Specilaization) */}
            <div className="relative" ref={dropdownRef6}>
              <label
                htmlFor="specilizationOpted"
                className="block text-sm font-medium text-gray-500"
              >
                Specialization Interested
              </label>

              <div
                className="relative mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                onClick={() => setDropdownOpen6(!dropdownOpen6)} // Toggle dropdown
              >
                <div
                  className={`px-4 py-3  ${
                    selectedOption6 ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {selectedOption6 || "Select an Option"}{" "}
                  {/* Display selected department or message */}
                </div>
                <div
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                    dropdownOpen6 ? "rotate-180" : ""
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

              {dropdownOpen6 && specializations.length > 0 && (
                <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10">
                  <ul className="divide-y divide-gray-100 max-h-[200px] overflow-y-auto">
                    {specializations.map((specialization, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                        onClick={() => handleSelectOption6(specialization)}
                      >
                        {specialization.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hidden input to integrate with React Hook Form */}
              <input
                type="hidden"
                {...register("specilizationOpted", {
                  required: "This field is required",
                })}
                value={selectedOption6 || ""}
              />

              {/* Validation message */}
              {errors.specilizationOpted && (
                <p className="text-red-500 text-sm">
                  {errors.specilizationOpted.message}
                </p>
              )}
            </div>
            {/* Fourth Name */}
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
                  value={student.studentName} // Pre-populate with student name
                  readOnly // Disable input field
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-300 text-gray-700 opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2  max-sm:grid-cols-1 gap-8 mt-4">
            {/* Email  */}
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
                value={student.studentEmail} // Pre-populate with student email
                readOnly // Disable input field
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-300 text-gray-700 opacity-50"
              />
            </div>
            {/* Phone  */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-500"
              >
                Phone Number
              </label>
              <div className="flex items-center mt-1 gap-2">
                {student.studentAddress.country === "India" && (
                  <span className="px-4 py-3 border border-gray-300 rounded-md bg-gray-300 opacity-50 text-gray-700">
                    +91
                  </span>
                )}
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter Phone Number"
                  value={student.studentPhone} // Pre-populate with student phone
                  readOnly={student.studentAddress.country === "India"} // Disable if from India
                  className={`block w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-300 text-gray-700 opacity-50 ${
                    student.studentAddress.country === "India" ? "" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2  max-sm:grid-cols-1 gap-8 mt-4 mb-6">
            {/* When do you plan to start your studies? */}
            <div className="relative" ref={dropdownRef5}>
              <label
                htmlFor="startYear"
                className="block text-sm font-medium text-gray-500"
              >
                When do you plan to start your studies?
              </label>

              <div
                className="relative mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                onClick={() => setDropdownOpen5(!dropdownOpen5)} // Toggle dropdown
              >
                <div
                  className={`px-4 py-3 ${
                    selectedOption5 ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {selectedOption5 || "Select an Option"}
                </div>
                <div
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                    dropdownOpen5 ? "rotate-180" : ""
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

              {dropdownOpen5 && (
                <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10">
                  <ul className="divide-y divide-gray-100 max-h-[200px] overflow-y-auto">
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() + i; // Generate years dynamically
                      return (
                        <li
                          key={year}
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption5(year)}
                        >
                          {year}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Hidden input to integrate with React Hook Form */}
              <input
                type="hidden"
                {...register("startYear", {
                  required: "This field is required",
                })}
                value={selectedOption5 || ""}
              />

              {/* Validation message */}
              {errors.startYear && (
                <p className="text-red-500 text-sm">
                  {errors.startYear.message}
                </p>
              )}
            </div>

            {/* Entrance Exam Question */}
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Have You Appeared or Scheduled For any Entrance Exams?
              </label>

              <div className="mt-2 space-y-2">
                {["Yes", "No", "Booked"].map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      value={option}
                      {...register("entranceExam", {
                        required: "This field is required",
                      })}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>

              {/* Display Validation Error */}
              {errors.entranceExam && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.entranceExam.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4 justify-between mt-5 max-sm:flex-col">
            {/* <DynamicThemeButton type="submit">Submit</DynamicThemeButton> */}
            <div className="flex gap-2 items-center">
              <DynamicThemeButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </DynamicThemeButton>
              {isSubmitting && (
                <img src="/assets/siksha-preloader/4.gif" className="w-16" />
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ApplyNow;
