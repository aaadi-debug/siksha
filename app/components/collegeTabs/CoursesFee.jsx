import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import DynamicTable from "../DynamicTable";
import DynamicModal from "../DynamicModal";
import ApplyNowForm from "../ApplyNowForm";
import DynamicThemeButton from "../DynamicThemeButton";
import { ChevronDown, ChevronUp } from "lucide-react";

function formatNumberWithCommas(number) {
  // Handle cases where the number is less than 1000
  if (number < 1000) {
    return number.toString();
  }

  let numStr = number.toString();
  let lastThreeDigits = numStr.slice(-3);
  let remainingDigits = numStr.slice(0, -3);

  // Add commas to the remaining part
  remainingDigits = remainingDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

  // Combine the parts
  return remainingDigits + "," + lastThreeDigits;
}

const CoursesFee = ({ college }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleModal = (open) => {
    setIsModalOpen(open);
  };

  const departments = college?.departments || [];

  // Extract all courses without filtering by "Full Time"
  const allCourses = [];
  const allSpecializations = [];

  departments.forEach((dept) => {
    dept.courses.forEach((course) => {
      // Calculate min and max fee for all courses
      const allFees = course.specialization.flatMap(
        (spec) =>
          Array.isArray(spec.fee?.general)
            ? spec.fee.general.map((fee) => parseInt(fee.tuitionFee || "0", 10))
            : [] // Return an empty array if spec.fee.general is not an array
      );

      const minFee = allFees.length > 0 ? Math.min(...allFees) : 0; // Handle empty array case
      const maxFee = allFees.length > 0 ? Math.max(...allFees) : 0;

      allCourses.push({
        courseSlug: (
          <>
            <div className="text-lg">{course?.courseSlug}</div>
            <a
              href="#"
              className="text-sm text-prim hover:underline hover:text-prim flex items-center "
            >
              {course?.specialization?.length}{" "}
              {course?.specialization?.length > 1 ? "Courses" : "Course"}{" "}
              <ChevronRight size={16} />
            </a>
          </>
        ),
        feeRange: (
          <>
            <div className="text-green-500">
              ₹{formatNumberWithCommas(minFee)} - ₹
              {formatNumberWithCommas(maxFee)}
            </div>
          </>
        ),
        courseEligibility: `${course?.courseEligibility}`,
        courseApplicationDate: `${course?.courseApplicationDate}`,

        courseName: course?.courseName,
        courseSpecilzationCount: course?.specialization?.length,
        courseTime: course?.specialization[0]?.courseDuration || 0,
        courseType: course?.specialization[0]?.courseType,
      });
    });
  });

  departments.forEach((dept) => {
    dept.courses.forEach((course) => {
      course.specialization.map((spec) => {
        allSpecializations.push({
          specializationName: `${spec?.name}`,
          firstYearFee:
            spec.fee.general.length > 0
              ? spec.fee.general[0].tuitionFee
              : "N/A",
        });
      });
    });
  });

  const allCoursesWithSpecializations = [];

  departments.forEach((dept) => {
    dept.courses.forEach((course) => {
      const courseSpecializations = course.specialization.map((spec) => ({
        specializationName: spec?.name,
        firstYearFee:
          spec.fee.general.length > 0 ? spec.fee.general[0].tuitionFee : "N/A",
      }));

      allCoursesWithSpecializations.push({
        courseName: course?.courseName, // Assuming `course` has a `name` field
        specializations: courseSpecializations,
      });
    });
  });

  console.log("Aitya 3", allCoursesWithSpecializations);

  console.log("Aditya", allCourses);
  console.log("Aditya2", allSpecializations);

  return (
    <>
      <div className="mb-4">
        <div className="text-lg font-semibold text-tertiary mb-4">
          {college?.collegeName} Courses & Fees
        </div>

        {/* Table */}
        <div className="mb-5">
          <DynamicTable
            headers={[
              "Course",
              "Fees (INR)",
              "Eligibility",
              "Application Date",
              "Action",
            ]}
            rows={allCourses.map((course) => [
              { content: course.courseSlug },
              { content: course.feeRange },
              { content: course.courseEligibility },
              { content: course.courseApplicationDate },
              {
                content: (
                  <button
                    onClick={() => toggleModal(true)}
                    className="text-sm text-prim hover:underline flex items-center gap-1 w-full"
                  >
                    Apply Now <ChevronRight size={16} />
                  </button>
                ),
              },
            ])}
          />
          {/* Table Modal */}
          <DynamicModal
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            modalHeading="Application Form"
          >
            <ApplyNowForm />
          </DynamicModal>
        </div>

        {/* Courses Offered */}
        <div className="text-lg font-semibold text-tertiary">
          Courses Offered By {college?.collegeName}
        </div>
        <p className="text-textClr text-xs mb-3">
          Select Degree and Streams to See Course Fees and Admission Details.
        </p>

        <div className="rounded-lg">
          {allCourses?.map((course, index) => (
            <div key={index} className="border rounded-lg mb-3">
              <div className="p-3">
                <div className="flex gap-2 justify-between max-sm:flex-col">
                  <div className="text-xl font-semibold text-tertiary">
                    {course?.courseName}
                  </div>
                  <p className="text-lg font-bold">{course?.feeRange}</p>
                </div>
                <div className="flex  text-gray-700 text-sm mt-2">
                  <div className="pr-2">
                    {course?.courseSpecilzationCount}{" "}
                    {course?.courseSpecilzationCount > 1 ? "Courses" : "Course"}
                  </div>
                  <div className="border-x px-2 border-gray-300">
                    {course?.courseTime}{" "}
                    {course?.courseTime > 1 ? "Years" : "Year"}
                  </div>
                  <div className="px-2">{course?.courseType}</div>
                </div>
                <div className="grid grid-cols-2 max-sm:grid-cols-1  mt-2">
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1">
                    <div className="mt-3">
                      <div className="text-sm">Eligibility: </div>
                      <div className="font-semibold text-tertiary">
                        {course?.courseEligibility}
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-sm">Application Date: </div>
                      <div className="font-semibold text-green-600">
                        {course?.courseEligibility}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-end justify-end max-sm:justify-start">
                    <DynamicThemeButton onClick={() => toggleModal(true)}>
                      Apply Now
                    </DynamicThemeButton>
                  </div>
                </div>
              </div>

              {course?.courseSpecilzationCount === 0 ? (
                <></>
              ) : (
                <div
                  className={`p-3 ${
                    openIndex === index
                      ? "bg-white border-t mt-2"
                      : "bg-gray-100"
                  }`}
                >
                  {/* Toggle Button */}
                  {openIndex !== index && (
                    <button
                      className="text-prim text-md flex items-center gap-1"
                      onClick={() => setOpenIndex(index)}
                    >
                      View {course?.courseSpecilzationCount}{" "}
                      {course?.courseSpecilzationCount > 1
                        ? "Courses"
                        : "Course"}{" "}
                      <ChevronDown />
                    </button>
                  )}

                  {/* Expandable Section */}
                  {openIndex === index && (
                    <div className="mt-2 rounded-lg">
                      <DynamicTable
                        headers={[
                          "Courses",
                          "Fees (INR)",
                          "Application Date",
                          "Cut-Off (Rank)",
                        ]}
                        rows={allCoursesWithSpecializations.map((data) => [
                          { content: data.specializations.map((specialization) => (<>{specialization.name}</>))},
                          // { content: course.feeRange },
                          // { content: course.courseEligibility },
                          // { content: course.courseApplicationDate },
                        ])}
                      />

                      {/* Show Less Button */}
                      <button
                        className="mt-2 text-red-500 underline"
                        onClick={() => setOpenIndex(null)}
                      >
                        Show Less
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesFee;
