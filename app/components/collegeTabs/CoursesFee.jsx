import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import DynamicTable from "../DynamicTable";
import DynamicModal from "../DynamicModal";
import ApplyNowForm from "../ApplyNowForm";
import DynamicThemeButton from "../DynamicThemeButton";

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

  const toggleModal = (open) => {
    setIsModalOpen(open);
  };

  const departments = college?.departments || [];

  // Extract all courses without filtering by "Full Time"
  const allCourses = [];

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
              {course.specialization.length}{" "}
              {course.specialization.length > 1 ? "Courses" : "Course"}{" "}
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
        courseEligibility: `${course.courseEligibility}`,
        courseApplicationDate: `${course.courseApplicationDate}`,

        courseName: course?.courseName,
      });
    });
  });

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

        <div className="border p-2 rounded-lg">
          {allCourses?.map((course, index) => (
            <div key={index} className="border rounded-lg mb-3">
              <div className="p-2">
                <div className="flex gap-2 justify-between max-sm:flex-col">
                  <div className="text-xl font-semibold text-tertiary">
                    {course.courseName}
                  </div>
                  <p className="text-lg font-bold">{course.feeRange}</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1">
                  <div className="mt-3">
                    <div className="text-sm">Eligibility: </div>
                    <div className="font-semibold text-tertiary">
                      {course.courseEligibility}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-sm">Application Date: </div>
                    <div className="font-semibold text-green-600">
                      {course.courseEligibility}
                    </div>
                  </div>
                  <div className="mt-3"></div>
                  <div className="mt-3 flex items-end justify-end border">
                    <div>
                    <DynamicThemeButton onClick={() => toggleModal(true)}>
                      Apply Now
                    </DynamicThemeButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesFee;
