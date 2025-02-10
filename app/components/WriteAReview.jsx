import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import DynamicThemeButton from "./DynamicThemeButton";

const WriteAReview = ({ student, colleges }) => {
  const [isSubmitted, setIsSubmitted] = useState(false); // For showing success message
  const [isSubmitting, setIsSubmitting] = useState(false); // For managing loading state
  const [selectedCollege, setSelectedCollege] = useState(null); // To store selected college
  const [departments, setDepartments] = useState([]);
  const [step, setStep] = useState(1);

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

  // Create a ref to the dropdown element
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);
  const dropdownRef5 = useRef(null);

  const handleNext = () => {
    if (step < 7) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

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
  const handleSelectOption3 = (college) => {
    setSelectedCollege(college); // Set selected college
    setSelectedOption3(college.collegeName); // Store the college name
    setDropdownOpen3(false); // Close the first dropdown after selecting
    setDropdownOpen4(true); // Open the second dropdown for departments
  };

  const handleSelectOption4 = (department) => {
    setSelectedOption4(department.departmentName); // Store selected department name
    setDropdownOpen4(false); // Close the second dropdown after selecting
  };

  // Handle selecting an option for dropdown 5
  const handleSelectOption5 = (option) => {
    setSelectedOption5(option);
    setValue("studentType", option, { shouldValidate: true }); // Update form value & trigger validation
    setDropdownOpen5(false);
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
      if (
        dropdownRef5.current &&
        !dropdownRef5.current.contains(event.target)
      ) {
        setDropdownOpen5(false);
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
      <div className="flex gap-4 items-center bg-gray-100 p-10 overflow-x-auto">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="text-tertiary text-lg font-semibold">
              Step {index + 1}
            </div>
            <div
              className={`w-20 h-4 border-2 ${
                step === index + 1
                  ? "border-prim bg-prim"
                  : "border-gray-300 bg-gray-300"
              }`}
            ></div>
          </div>
        ))}
      </div>

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
          {step === 1 && (
            <>
              {/* City and Course */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First dropdown (College) */}
                <div className="relative" ref={dropdownRef3}>
                  <label
                    htmlFor="collegeType"
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
                      <ul className="divide-y divide-gray-100">
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
                    {...register("course", {
                      required: "This field is required",
                    })}
                    value={selectedOption3?.collegeName || ""}
                  />

                  {/* Validation message */}
                  {errors.course && (
                    <p className="text-red-500 text-sm">
                      {errors.course.message}
                    </p>
                  )}
                </div>

                {/* Second dropdown (Department) */}
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
                      <ul className="divide-y divide-gray-100">
                        {selectedCollege.departments.map(
                          (department, index) => (
                            <li
                              key={index}
                              className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                              onClick={() => handleSelectOption4(department)} // Pass department
                            >
                              {department.departmentName}{" "}
                              {/* Display departmentName */}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Hidden input to integrate with React Hook Form */}
                  <input
                    type="hidden"
                    {...register("course", {
                      required: "This field is required",
                    })}
                    value={selectedOption4 || ""}
                  />

                  {/* Validation message */}
                  {errors.course && (
                    <p className="text-red-500 text-sm">
                      {errors.course.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Name and Email  */}
              <div className="grid grid-cols-2  max-sm:grid-cols-1 gap-8 mt-4">
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
                      disabled // Disable input field
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-300 text-gray-700 opacity-50"
                    />
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
                    value={student.studentEmail} // Pre-populate with student email
                    disabled // Disable input field
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-300 text-gray-700 opacity-50"
                  />
                </div>
              </div>

              {/* Phone and Gender  */}
              <div className="grid grid-cols-2  max-sm:grid-cols-1 gap-8 mt-4">
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
                      disabled={student.studentAddress.country === "India"} // Disable if from India
                      className={`block w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-300 text-gray-700 opacity-50 ${
                        student.studentAddress.country === "India" ? "" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="relative" ref={dropdownRef5}>
                  <label
                    htmlFor="collegeType"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Gender
                  </label>

                  <div
                    className="relative mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    onClick={() => setDropdownOpen5(!dropdownOpen5)} // Toggle dropdown
                  >
                    <div
                      className={`px-4 py-3  ${
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
                      <ul className="divide-y divide-gray-100">
                        <li
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption5("Male")}
                        >
                          Male
                        </li>
                        <li
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption5("Female")}
                        >
                          Female
                        </li>
                        <li
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() =>
                            handleSelectOption5("I don't want to mention")
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
              </div>
            </>
          )}
          {/* <div className="mt-5">
                <DynamicThemeButton type="submit">
                  Save & Next
                </DynamicThemeButton>
              </div> */}

          {step > 1 && step <= 2 && (
            <div className="text-center p-5 border border-gray-300">
              <h2 className="text-lg font-semibold">Step {step} Content</h2>
              <p className="text-gray-500">Aditya 2.</p>
            </div>
          )}
          {step > 2 && step <= 3 && (
            <div className="text-center p-5 border border-gray-300">
              <h2 className="text-lg font-semibold">Step {step} Content</h2>
              <p className="text-gray-500">Aditya 3.</p>
            </div>
          )}
          {step > 3 && step <= 4 && (
            <div className="text-center p-5 border border-gray-300">
              <h2 className="text-lg font-semibold">Step {step} Content</h2>
              <p className="text-gray-500">Aditya 4.</p>
            </div>
          )}
          {step > 4 && step <= 5 && (
            <div className="text-center p-5 border border-gray-300">
              <h2 className="text-lg font-semibold">Step {step} Content</h2>
              <p className="text-gray-500">Aditya 5.</p>
            </div>
          )}
          {step > 5 && step <= 6 && (
            <div className="text-center p-5 border border-gray-300">
              <h2 className="text-lg font-semibold">Step {step} Content</h2>
              <p className="text-gray-500">Aditya 6.</p>
            </div>
          )}
          {/* Step 2-7 Placeholder Content */}
          {step > 6 && step <= 7 && (
            <div className="text-center p-5 border border-gray-300">
              <h2 className="text-lg font-semibold">Step {step} Content</h2>
              <p className="text-gray-500">
                Form fields for Step {step} go here.
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between mt-5 max-sm:flex-col">
            {step > 1 && (
              <DynamicThemeButton onClick={handlePrevious}>
                Previous
              </DynamicThemeButton>
            )}
            {step < 7 && (
              <DynamicThemeButton onClick={handleNext}>
                Save & Next
              </DynamicThemeButton>
            )}
            {step === 7 && <DynamicThemeButton>Submit</DynamicThemeButton>}
          </div>
        </form>
      )}
    </div>
  );
};

export default WriteAReview;
