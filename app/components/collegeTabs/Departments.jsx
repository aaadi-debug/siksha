import React from "react";
import DynamicThemeButton from "../DynamicThemeButton";

const Departments = ({ college }) => {
  const departments = college?.departments;

  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4">
          {college?.collegeName} Departments
        </div>
      </div>

      {/* Department list */}
      <div className="">
        {departments &&
          departments.map((department) => (
            <div key={department.id} className="rounded-lg p-3 border mb-3">
              <div className="flex justify-between items-start">
                <div className="text-lg font-semibold text-tertiary">
                  {department.departmentName}
                </div>
                <DynamicThemeButton href="?tab=courses-and-fees">
                  View All Course
                </DynamicThemeButton>
              </div>
              <p className="text-gray-500">{department.description}</p>

              <div className="mt-3 text-textClr">
                Courses Offered by {college?.collegeName} in{" "}
                {department.departmentName} department:{" "}
              </div>
              <ul className="pl-6 list-decimal mt-2">
                {department.courses.map((course) => (
                  <li key={course.id} className="mt-2">
                    <a
                      href={`?tab=courses-and-fees#course-${course?.courseName}`}
                      className="text-tertiary hover:text-second hover:underline"
                    >
                      {course.courseName}
                    </a>
                  </li>
                ))}
              </ul>
              {/* {`course-${course?.courseName}-${index}`} */}
            </div>
          ))}
      </div>

      {/* Contact */}
    </>
  );
};

export default Departments;
