import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DynamicThemeButton from "./DynamicThemeButton";

const EducationLoanApply = ({ bank }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [courses, setCourses] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  // Fetch courses based on selected category
  useEffect(() => {
    if (selectedCategory) {
      const category = bank.offeredCourses.find(
        (item) => item.category === selectedCategory
      );
      setCourses(category ? category.courses : []);
    } else {
      setCourses([]);
    }
  }, [selectedCategory]);

  return (
    <div className="bg-white">
      <h2 className="text-4xl font-semibold text-center">ENTER YOUR DETAILS</h2>
      <div className="text-prim text-center mb-4">
        Please register to get more information
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            id="phone"
            type="text"
            {...register("phone", { required: "Phone number is required" })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone.message}</p>
          )}
        </div>

        {/* Bank Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="bank"
            className="block text-sm font-medium text-gray-700"
          >
            Select Bank
          </label>
          <select
            id="bank"
            {...register("bank", { required: "Please select a bank" })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Bank</option>
            {bank.map((data) => (
              <option key={data.id} value={data.bankName}>
                {data.bankName}
              </option>
            ))}
          </select>
          {errors.bank && (
            <p className="text-red-500 text-xs">{errors.bank.message}</p>
          )}
        </div>

        {/* <div className="grid gap-4 grid-cols-2 max-sm:grid-cols-1">
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Select Category
            </label>
            <select
              id="category"
              {...register("category", {
                required: "Please select a category",
              })}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Category</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs">{errors.category.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700"
            >
              Select Course
            </label>
            <select
              id="course"
              {...register("course", { required: "Please select a course" })}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="text-red-500 text-xs">{errors.course.message}</p>
            )}
          </div>
        </div> */}

        {/* Toggle Button (India or Abroad) */}
        <div className="mb-4 flex items-center space-x-4">
          <label
            htmlFor="location"
            className="block text-lg font-medium text-gray-700"
          >
            Want to avail loan for abroad banks?
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="location"
              {...register("location")}
              className="mr-2"
            />
            <span>Abroad</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <DynamicThemeButton type="submit">Apply Now</DynamicThemeButton>
        </div>
      </form>
    </div>
  );
};

export default EducationLoanApply;
