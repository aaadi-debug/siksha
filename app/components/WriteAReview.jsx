import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import DynamicThemeButton from "./DynamicThemeButton";

const WriteAReview = ({ student, colleges }) => {
  const [isSubmitted, setIsSubmitted] = useState(false); // For showing success message
  const [isSubmitting, setIsSubmitting] = useState(false); // For managing loading state
  const [selectedCollege, setSelectedCollege] = useState(null); // To store selected college
  const [departments, setDepartments] = useState([]);
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

  // Create a ref to the dropdown element
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);
  const dropdownRef5 = useRef(null);

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
        // window.location.reload(); // Reset the form fields
      }, 3000);
    }, 2000); // Simulate server request for 2 seconds
  };

  // Handle selecting an option for dropdown 3
  const handleSelectOption3 = (college) => {
    setSelectedCollege(college); // Set selected college
    setSelectedOption3(college.collegeName); // Store the college name
    setDropdownOpen3(false); // Close the first dropdown after selecting
    setDropdownOpen4(true); // Open the second dropdown for departments

    // Clear the error for collegeName
    clearErrors("collegeName");

    // Update React Hook Form value manually to sync with state
    setValue("collegeName", college.collegeName);
  };

  const handleSelectOption4 = (department) => {
    setSelectedOption4(department.departmentName); // Store selected department name
    setDropdownOpen4(false); // Close the second dropdown after selecting

    // Clear the error for courseOpted
    clearErrors("courseOpted");

    // Update React Hook Form value manually to sync with state
    setValue("courseOpted", department.departmentName);
  };

  // Handle selecting an option for dropdown 5
  const handleSelectOption5 = (option) => {
    setSelectedOption5(option);
    setDropdownOpen5(false);
    clearErrors("yearOfAdmission");

    // Update React Hook Form value manually to sync with state
    setValue("yearOfAdmission", option);
  };

  // Generic validation function for textareas
  const validateTextarea = (
    value,
    fieldName,
    setCharCount,
    setError,
    clearErrors,
    isPastingError,
    setIsPastingError
  ) => {
    if (isPastingError) {
      setIsPastingError(false); // Remove paste error when user starts typing
      clearErrors(fieldName);
    }

    let errorMessage = [];

    //   // if (value.length < 200) {
    //   //   return "Minimum 200 characters required.";
    //   // }

    if (value.length > 2000) {
      return "Character limit exceeded! Maximum 2000 characters allowed.";
    }

    if (/(\w)\1{5,}/.test(value)) {
      return "Avoid excessive repetition of the same character.";
    }

    // No Words Longer than 20 Characters
    const words = value.split(/\s+/);
    if (words.some((word) => word.length > 20)) {
      return "Words longer than 20 characters are not allowed.";
    }

    if (errorMessage.length > 0) {
      setError("reason", { type: "manual", message: errorMessage.join("\n") });
    }

    clearErrors(fieldName); // Clear previous errors if validation passes
    setCharCount(value.length); // Update character count
    return true; // Validation passed
  };

  // Example usage for two textareas
  const handleTextareaChange = (e, fieldName) => {
    const value = e.target.value; // Extract the value

    setCharCount((prev) => ({ ...prev, [fieldName]: value.length }));

    validateTextarea(
      value,
      fieldName,
      setCharCount,
      setError,
      clearErrors,
      isPastingError,
      setIsPastingError
    );
  };

  const handlePaste = (e, fieldName) => {
    e.preventDefault();
    setIsPastingError(true);

    // Dynamically set the error for the current field
    setError(fieldName, {
      type: "manual",
      message: "Pasting is not allowed. Please type manually.",
    });
  };

  const handleNext = async () => {
    // Trigger validation for the "reason" field
    // const isValid = await trigger("reason");
    const isValid = await trigger(`reason${step}`); // Dynamically trigger validation

    // console.log("Is valid:", isValid); // Debugging log
    // console.log("Errors:", errors.reason); // Debugging log

    // Check if the field is valid
    if (!isValid) {
      // If there are errors, do not proceed to the next step
      return;
    }

    // If no errors, move to the next step
    setStep((prev) => prev + 1);
  };

  const handleNextStep1 = async () => {
    // Reset the errors manually before triggering the next step
    clearErrors();

    // Ensure the form values are properly updated before triggering validation
    setValue("collegeName", selectedOption3);
    setValue("courseOpted", selectedOption4);
    setValue("yearOfAdmission", selectedOption5);

    // Trigger validation for all fields
    const isValid = await trigger(); // This will trigger validation for all fields

    console.log("Is valid:", isValid); // Check if all fields are valid
    console.log("Errors:", errors); // Debugging log

    // If validation fails, do not proceed
    if (!isValid) {
      return;
    }

    // If validation passes, proceed to the next step
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleAddLike = () => {
    const likes = getValues("likePoints") || [];
    setValue("likePoints", [...likes, ""]);
  };

  const handleAddDislike = () => {
    const dislikes = getValues("dislikePoints") || [];
    setValue("dislikePoints", [...dislikes, ""]);
  };

  const handleRemoveLike = (index) => {
    const updatedLikes = getValues("likePoints").filter((_, i) => i !== index);
    setValue("likePoints", updatedLikes);
  };

  const handleRemoveDislike = (index) => {
    const updatedDislikes = getValues("dislikePoints").filter(
      (_, i) => i !== index
    );
    setValue("dislikePoints", updatedDislikes);
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
          {/* step 1 */}
          {step === 1 && (
            <>
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
                    {...register("collegeName", {
                      required: "This field is required",
                    })}
                    value={selectedOption3?.collegeName || ""}
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

              {/* Phone and yearOfAdmission  */}
              <div className="grid grid-cols-2  max-sm:grid-cols-1 gap-8 mt-4 mb-10">
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
                    htmlFor="yearOfAdmission"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Year of Admission
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
                        {/* Options for Year of Admission */}
                        <li
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption5("2025")}
                        >
                          2025
                        </li>
                        <li
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption5("2024")}
                        >
                          2024
                        </li>
                        <li
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption5("2023")}
                        >
                          2023
                        </li>
                        <li
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption5("2022")}
                        >
                          2022
                        </li>
                        <li
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption5("2021")}
                        >
                          2021
                        </li>
                        <li
                          className="px-4 py-3 cursor-pointer hover:bg-prim-light hover:text-prim"
                          onClick={() => handleSelectOption5("2020")}
                        >
                          2020
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Hidden input to integrate with React Hook Form */}
                  <input
                    type="hidden"
                    {...register("yearOfAdmission", {
                      required: "This field is required",
                    })}
                    value={selectedOption5 || ""}
                  />

                  {/* Validation message */}
                  {errors.yearOfAdmission && (
                    <p className="text-red-500 text-sm">
                      {errors.yearOfAdmission.message}
                    </p>
                  )}
                </div>
              </div>

              <DynamicThemeButton onClick={handleNextStep1}>
                Save & Next
              </DynamicThemeButton>
            </>
          )}

          {/* step 2 */}
          {step > 1 && step <= 2 && (
            <div>
              <label className="block text-2xl font-semibold text-tertiary">
                Que. Tell us the detailed fee structure (yearly) and scholarship
                details (if any). Mention the fees for the complete course along
                with the fact that it is increasing or not.
              </label>
              <div>
                <div className="text-tertiary text-md font-semibold mt-6">
                  Please consider including:{" "}
                </div>
                <ul className="list-disc pl-6 text-textClr">
                  <li>The year-wise fees you paid (or will be paying)</li>
                  <li>
                    Mention the Tuition fees, caution fees, registration fees,
                    admission fees, development fees, lab fee and the other
                    compulsory charges during the course completion as per the
                    category (like Management, SC, ST).
                  </li>
                  <li>
                    Also, share the fees of your batchmates for categories other
                    than yours.
                  </li>
                  <li>
                    Names and amounts of scholarships or financial aid that are
                    available for students. Like merit cum need.
                  </li>
                </ul>
              </div>
              <textarea
                {...register(`reason${step}`, {
                  required: "This field is required",
                  validate: (value) =>
                    validateTextarea(
                      value,
                      `reason${step}`,
                      setCharCount,
                      setError,
                      clearErrors,
                      isPastingError,
                      setIsPastingError
                    ),
                })}
                className="border p-2 w-full rounded mt-4 outline-none focus:ring-2 focus:ring-prim text-textClr"
                rows="10"
                maxLength={2000}
                onChange={(e) => {
                  handleTextareaChange(e, `reason${step}`);
                }}
                onPaste={(e) => handlePaste(e, `reason${step}`)} // Pass fieldName dynamically
              />
              {/* Character Count */}
              <div className="text-right text-sm text-gray-500 mt-1">
                Characters: {charCount[`reason${step}`] || 0}/2000
              </div>

              {/* Validation Errors */}
              <ul className="text-red-500 text-sm mt-2">
                {typeof errors[`reason${step}`]?.message === "string"
                  ? errors[`reason${step}`].message
                      .split("\n")
                      .map((err, index) => <li key={index}>• {err}</li>)
                  : null}
              </ul>
            </div>
          )}

          {/* step 3 */}
          {step > 2 && step <= 3 && (
            <>
              {/* Likes */}
              <div>
                <label className="block text-2xl font-semibold text-tertiary">
                  Likes
                </label>
                <Controller
                  name="likePoints"
                  control={control}
                  defaultValue={[""]}
                  render={({ field }) => (
                    <>
                      {field.value.map((like, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 mt-4"
                        >
                          <input
                            {...register(`likePoints[${index}]`, {
                              required: "This field is required",
                              minLength: {
                                value: 40,
                                message: "Minimum 40 characters required",
                              },
                              maxLength: {
                                value: 250,
                                message: "Maximum 250 characters allowed",
                              },
                            })}
                            type="text"
                            value={like}
                            onChange={(e) => {
                              const updatedLikes = [...field.value];
                              updatedLikes[index] = e.target.value;
                              setValue("likePoints", updatedLikes);
                            }}
                            className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-prim text-textClr"
                          />
                          {field.value.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveLike(index)}
                              className="text-red-500"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddLike}
                        className="text-prim mt-2"
                      >
                        Add More Like
                      </button>
                    </>
                  )}
                />
                <ul className="text-red-500 text-sm mt-2">
                  {errors?.likePoints?.map((error, index) => (
                    <li key={index}>• {error?.message}</li>
                  ))}
                </ul>
              </div>

              {/* Dislikes */}
              <div className="mt-6">
                <label className="block text-2xl font-semibold text-tertiary">
                  Dislikes
                </label>
                <Controller
                  name="dislikePoints"
                  control={control}
                  defaultValue={[""]}
                  render={({ field }) => (
                    <>
                      {field.value.map((dislike, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 mt-4"
                        >
                          <input
                            {...register(`dislikePoints[${index}]`, {
                              required: "This field is required",
                              minLength: {
                                value: 40,
                                message: "Minimum 40 characters required",
                              },
                              maxLength: {
                                value: 250,
                                message: "Maximum 250 characters allowed",
                              },
                            })}
                            type="text"
                            value={dislike}
                            onChange={(e) => {
                              const updatedDislikes = [...field.value];
                              updatedDislikes[index] = e.target.value;
                              setValue("dislikePoints", updatedDislikes);
                            }}
                            className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-prim text-textClr"
                          />
                          {field.value.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveDislike(index)}
                              className="text-red-500"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddDislike}
                        className="text-prim mt-2"
                      >
                        Add More Dislike
                      </button>
                    </>
                  )}
                />
                <ul className="text-red-500 text-sm mt-2">
                  {errors?.dislikePoints?.map((error, index) => (
                    <li key={index}>• {error?.message}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* step 4 */}
          {step > 3 && step <= 4 && (
            <div>
              <label className="block text-2xl font-semibold text-tertiary">
                Que. Please provide insights around the faculty members of your
                college. Also mention about the course structure, exam systems
                and marketing schemes.
              </label>
              <div>
                <div className="text-tertiary text-md font-semibold mt-6">
                  Please consider including:{" "}
                </div>
                <ul className="list-disc pl-6 text-textClr">
                  <li>
                    The faculty-to-student ratio. How is the faculty to student
                    relationship and how approachable are the faculties?
                  </li>
                  <li>
                    The name of the faculties you liked and why did you like
                    them? who are the best faculties?
                  </li>
                  <li>
                    The names of the facilities you didn't like and reason for
                    not liking them?
                  </li>
                  <li>
                    How many exams are there and how easy or difficult are they?
                    How many students fail to clear the exmas? How relevant is
                    the course curriculum?
                  </li>
                </ul>
              </div>
              <textarea
                {...register(`reason${step}`, {
                  required: "This field is required",
                  validate: (value) =>
                    validateTextarea(
                      value,
                      `reason${step}`,
                      setCharCount,
                      setError,
                      clearErrors,
                      isPastingError,
                      setIsPastingError
                    ),
                })}
                className="border p-2 w-full rounded mt-4 outline-none focus:ring-2 focus:ring-prim text-textClr"
                rows="10"
                maxLength={2000}
                onChange={(e) => {
                  handleTextareaChange(e, `reason${step}`);
                }}
                onPaste={(e) => handlePaste(e, `reason${step}`)} // Pass fieldName dynamically
              />
              {/* Character Count */}
              <div className="text-right text-sm text-gray-500 mt-1">
                Characters: {charCount[`reason${step}`] || 0}/2000
              </div>

              {/* Validation Errors */}
              <ul className="text-red-500 text-sm mt-2">
                {typeof errors[`reason${step}`]?.message === "string"
                  ? errors[`reason${step}`].message
                      .split("\n")
                      .map((err, index) => <li key={index}>• {err}</li>)
                  : null}
              </ul>
            </div>
          )}

          {/* step 5 */}
          {step > 4 && step <= 5 && (
            <div>
              <label className="block text-2xl font-semibold text-tertiary">
                Que. How would you rate the course curriculum in terms of
                relevance and comprehensiveness?
              </label>
              <div>
                <div className="text-tertiary text-md font-semibold mt-6">
                  Please consider including:{" "}
                </div>
                <ul className="list-disc pl-6 text-textClr">
                  <li>
                    specific aspects of the curriculum that influenced your
                    decision to choose this course.
                  </li>
                  <li>
                    How well the curriculum prepares you for real- world
                    applications or furthur academic pursuits.
                  </li>
                  <li>
                    Suggest the area for improvements in the Course Curriculum
                    and Teaching methods
                  </li>
                  <li>
                    The frequency and timing of exams alnog with your
                    prespective on their difficulty level.
                  </li>
                </ul>
              </div>
              <textarea
                {...register(`reason${step}`, {
                  required: "This field is required",
                  validate: (value) =>
                    validateTextarea(
                      value,
                      `reason${step}`,
                      setCharCount,
                      setError,
                      clearErrors,
                      isPastingError,
                      setIsPastingError
                    ),
                })}
                className="border p-2 w-full rounded mt-4 outline-none focus:ring-2 focus:ring-prim text-textClr"
                rows="10"
                maxLength={2000}
                onChange={(e) => {
                  handleTextareaChange(e, `reason${step}`);
                }}
                onPaste={(e) => handlePaste(e, `reason${step}`)} // Pass fieldName dynamically
              />
              {/* Character Count */}
              <div className="text-right text-sm text-gray-500 mt-1">
                Characters: {charCount[`reason${step}`] || 0}/2000
              </div>

              {/* Validation Errors */}
              <ul className="text-red-500 text-sm mt-2">
                {typeof errors[`reason${step}`]?.message === "string"
                  ? errors[`reason${step}`].message
                      .split("\n")
                      .map((err, index) => <li key={index}>• {err}</li>)
                  : null}
              </ul>
            </div>
          )}

          {/* step 6 */}
          {step > 5 && step <= 6 && (
            <div>
              <label className="block text-2xl font-semibold text-tertiary">
                Que. Can your describe your overall experience with campus life,
                focusing on social apsects, club involvement, and the
                infranstructure provided?
              </label>
              <div>
                <div className="text-tertiary text-md font-semibold mt-6">
                  Please consider including:{" "}
                </div>
                <ul className="list-disc pl-6 text-textClr">
                  <li>
                    The names of the annual technical festivals, along with the
                    months they are typically held.
                  </li>
                  <li>
                    The range and accessibility of books and journals available
                    in the library.
                  </li>
                  <li>
                    The facilities and technological provision within the
                    classrooms.
                  </li>
                  <li>
                    An overview of sports and extracurricular activites offered
                    on campus.
                  </li>
                  <li>
                    Any student-run social groups, clubs, or student portals,
                    including their impact on student life.
                  </li>
                </ul>
              </div>
              <textarea
                {...register(`reason${step}`, {
                  required: "This field is required",
                  validate: (value) =>
                    validateTextarea(
                      value,
                      `reason${step}`,
                      setCharCount,
                      setError,
                      clearErrors,
                      isPastingError,
                      setIsPastingError
                    ),
                })}
                className="border p-2 w-full rounded mt-4 outline-none focus:ring-2 focus:ring-prim text-textClr"
                rows="10"
                maxLength={2000}
                onChange={(e) => {
                  handleTextareaChange(e, `reason${step}`);
                }}
                onPaste={(e) => handlePaste(e, `reason${step}`)} // Pass fieldName dynamically
              />
              {/* Character Count */}
              <div className="text-right text-sm text-gray-500 mt-1">
                Characters: {charCount[`reason${step}`] || 0}/2000
              </div>

              {/* Validation Errors */}
              <ul className="text-red-500 text-sm mt-2">
                {typeof errors[`reason${step}`]?.message === "string"
                  ? errors[`reason${step}`].message
                      .split("\n")
                      .map((err, index) => <li key={index}>• {err}</li>)
                  : null}
              </ul>
            </div>
          )}

          {/* Step 7 */}
          {step > 6 && step <= 7 && (
            <>
              <div>
                <label className="block text-2xl font-semibold text-tertiary">
                  Que. What's the nightlife like in or around your college
                  campus?
                </label>
                <div>
                  <div className="text-tertiary text-md font-semibold mt-6">
                    Share your favourite hangout spots, late-night activities,
                    and how students unwind after a day of classes. How do these
                    experiences shape your overall college life? Please consider
                    including:
                  </div>
                  <ul className="list-disc pl-6 text-textClr">
                    <li>
                      Mention gym, cafeterias, library, and public area closing
                      off.
                    </li>
                    <li>Mention hostel and campus in timings.</li>
                    <li>
                      List famous hangout places inside and outside the
                      college/university. Also mention is the locality safe to
                      roam around at night.
                    </li>
                  </ul>
                </div>
                <textarea
                  {...register(`reason${step}`, {
                    required: "This field is required",
                    validate: (value) =>
                      validateTextarea(
                        value,
                        `reason${step}`,
                        setCharCount,
                        setError,
                        clearErrors,
                        isPastingError,
                        setIsPastingError
                      ),
                  })}
                  className="border p-2 w-full rounded mt-4 outline-none focus:ring-2 focus:ring-prim text-textClr"
                  rows="10"
                  maxLength={2000}
                  onChange={(e) => {
                    handleTextareaChange(e, `reason${step}`);
                  }}
                  onPaste={(e) => handlePaste(e, `reason${step}`)} // Pass fieldName dynamically
                />
                {/* Character Count */}
                <div className="text-right text-sm text-gray-500 mt-1">
                  Characters: {charCount[`reason${step}`] || 0}/2000
                </div>

                {/* Validation Errors */}
                <ul className="text-red-500 text-sm mt-2">
                  {typeof errors[`reason${step}`]?.message === "string"
                    ? errors[`reason${step}`].message
                        .split("\n")
                        .map((err, index) => <li key={index}>• {err}</li>)
                    : null}
                </ul>
              </div>

              {/* Overall Review Section */}
              <div className="mt-6">
                <label className="block text-xl font-semibold text-tertiary">
                  Overall Review
                </label>

                {/* Rating Input (1-5) */}
                <div className="mt-4 flex items-center gap-2">
                  <label className="block text-md text-textClr">
                    Rating (1-5):
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    {...register("studentRating", {
                      required: "Please provide a rating",
                    })}
                    className="border p-2 rounded mt-2 outline-none focus:ring-2 focus:ring-prim text-textClr w-20"
                  />
                </div>

                {/* Is Helpful Toggle */}
                <div className="mt-4 flex items-center">
                  <label className="block text-md text-textClr mr-2">
                    Is this review helpful?
                  </label>
                  <input
                    type="checkbox"
                    {...register("isHelpful")}
                    className="h-5 w-5 text-prim border-2 rounded"
                  />
                </div>
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between mt-5 max-sm:flex-col">
            {step > 1 && (
              <DynamicThemeButton onClick={handlePrevious}>
                Previous
              </DynamicThemeButton>
            )}
            {step > 1 && step < 7 && (
              <DynamicThemeButton onClick={handleNext}>
                Save & Next
              </DynamicThemeButton>
            )}
            {step === 7 && (
              <>
                {/* <DynamicThemeButton type="submit">Submit</DynamicThemeButton> */}
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
              </>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default WriteAReview;
