"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import collegeDataJson from "../../data/collegeData.json"; // Rename the imported data to avoid conflict
import { useRouter } from "next/navigation"; // Import useRouter
import Breadcrumbs2 from "@/app/components/Breadcrumbs2";

const FilterableCoursePage = () => {
  const pathname = usePathname();
  const courseUrlFromPath = pathname.split("/").pop() || ""; // Extracting courseUrl from the path
  const collegeData = collegeDataJson;
  const router = useRouter();

  // Default filters based on URL
  const defaultDepartment = collegeData.data
    .flatMap((college) => college.departments)
    .find((department) =>
      department.courses.some(
        (course) => course.courseUrl === courseUrlFromPath
      )
    )?.departmentName;

  const defaultCourse = collegeData.data
    .flatMap((college) =>
      college.departments.flatMap((department) => department.courses)
    )
    .find((course) => course.courseUrl === courseUrlFromPath)?.courseName;

  // =====================================================
  // =====================================================
  // hooks
  const [selectedDepartment, setSelectedDepartment] =
    useState(defaultDepartment);
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null); // Specialization filter

  const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] =
    useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isSpecializationDropdownOpen, setIsSpecializationDropdownOpen] =
    useState(false);

  const [filteredColleges, setFilteredColleges] = useState([]);

  const departmentDropdownRef = useRef(null);
  const courseDropdownRef = useRef(null);
  const specializationDropdownRef = useRef(null);

  // =====================================================
  // =====================================================

  const toggleDepartmentDropdown = () => {
    setIsDepartmentDropdownOpen((prev) => !prev);
  };

  const toggleCourseDropdown = () => {
    setIsCourseDropdownOpen((prev) => !prev);
  };

  // =====================================================
  // =====================================================
  // Unique values from college data for all filters
  const uniqueDepartments = [
    ...new Set(
      collegeData.data.flatMap((college) =>
        college.departments.map((department) => department.departmentName)
      )
    ),
  ];

  const uniqueCourses = [
    ...new Set(
      collegeData.data.flatMap((college) =>
        college.departments.flatMap((department) =>
          department.courses.map((course) => course.courseName)
        )
      )
    ),
  ];

  // Update unique specializations based on selected department and course
  const uniqueSpecializations = [
    ...new Set(
      collegeData.data.flatMap((college) =>
        college.departments
          .filter((department) =>
            selectedDepartment
              ? department.departmentName === selectedDepartment
              : true
          )
          .flatMap((department) =>
            department.courses
              .filter((course) =>
                selectedCourse ? course.courseName === selectedCourse : true
              )
              .flatMap((course) =>
                course.specialization.map((special) => special.name || [])
              )
          )
      )
    ),
  ];

  console.log("Filtered unique specializations", uniqueSpecializations);
  // =====================================================
  // =====================================================

  // Update filtered colleges whenever filters change
  useEffect(() => {
    const filtered = collegeData.data.filter((college) => {
      if (!selectedDepartment && !selectedCourse && !selectedSpecialization) {
        return true; // No filters selected, show all colleges
      }
      return college.departments.some((department) => {
        const matchesDepartment = selectedDepartment
          ? department.departmentName === selectedDepartment
          : true;
  
        const matchesCourse = selectedCourse
          ? department.courses.some(
              (course) =>
                course.courseName === selectedCourse &&
                (!selectedSpecialization ||
                  course.specialization.some(
                    (special) => special.name === selectedSpecialization
                  ))
            )
          : true;
  
        return matchesDepartment && matchesCourse;
      });
    });
    setFilteredColleges(filtered);
  }, [selectedDepartment, selectedCourse, selectedSpecialization, collegeData]);

  // =====================================================
  // =====================================================
  // Handle changes in filters
  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);

    // Find the first course in the selected department
    const firstCourseInDepartment = collegeData.data
      .flatMap((college) =>
        college.departments.filter((dep) => dep.departmentName === department)
      )
      .flatMap((department) => department.courses[0])
      .find((course) => course);

    if (firstCourseInDepartment) {
      setSelectedCourse(firstCourseInDepartment.courseName);
      router.push(firstCourseInDepartment.courseUrl, undefined, {
        shallow: true,
      });
    }
  };

  const handleCourseChange = (course) => {
    setSelectedCourse(course);

    // Automatically update department based on the selected course
    const relatedDepartment = collegeData.data
      .flatMap((college) =>
        college.departments.filter((department) =>
          department.courses.some((crs) => crs.courseName === course)
        )
      )
      .find((department) => department)?.departmentName;

    setSelectedDepartment(relatedDepartment);

    // Update the URL based on selected course's courseUrl
    const selectedCourseObj = collegeData.data
      .flatMap((college) =>
        college.departments.flatMap((department) =>
          department.courses.filter((crs) => crs.courseName === course)
        )
      )
      .find((course) => course);

    if (selectedCourseObj) {
      router.push(selectedCourseObj.courseUrl, undefined, { shallow: true });
    }
  };

  const handleSpecializationChange = (specialization) => {
    setSelectedSpecialization(specialization);
  };
  // =====================================================
  // =====================================================

  // =====================================================
  // =====================================================
  // For dropdown close when we click outside fo it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        departmentDropdownRef.current &&
        !departmentDropdownRef.current.contains(event.target)
      ) {
        setIsDepartmentDropdownOpen(false);
      }
      if (
        courseDropdownRef.current &&
        !courseDropdownRef.current.contains(event.target)
      ) {
        setIsCourseDropdownOpen(false);
      }
      if (
        specializationDropdownRef.current &&
        !specializationDropdownRef.current.contains(event.target)
      ) {
        setIsSpecializationDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // =====================================================
  // =====================================================

  // =====================================================
  // =====================================================
  // Find the matching course based on courseUrlFromPath
  const matchedCourse = collegeData.data
    .flatMap((college) =>
      college.departments.flatMap((department) =>
        department.courses.find(
          (course) => course.courseUrl === courseUrlFromPath
        )
      )
    )
    .find((course) => course);

  const courseNameForBreadcrumb = matchedCourse
    ? matchedCourse.courseSlug
    : courseUrlFromPath.replace(/-/g, " ");

  const courseNameForPageTitle = matchedCourse
    ? matchedCourse.courseName
    : courseUrlFromPath.replace(/-/g, " ");
  // =====================================================
  // =====================================================

  const clearFilters = () => {
    setSelectedDepartment(null); // Reset to no department selected
    setSelectedCourse(null); // Reset to no course selected
    setSelectedSpecialization(null);
    router.push("/courses/india-colleges", undefined, { shallow: true }); // Redirect to all-colleges and reset filters
  };

  return (
    <div className="pt-24 px-6">
      <Breadcrumbs2
        breadcrumbs={[
          {
            title: `${
              !selectedDepartment && !selectedCourse
                ? "India Colleges"
                : `${courseNameForBreadcrumb} Colleges`
            } `,
            link: "",
          }, // Displaying matched course name
        ]}
        linkColor="text-second"
        activeColor="text-textClr"
      />

      <h2 className="text-2xl font-semibold mb-6">
        {!selectedDepartment && !selectedCourse
          ? "All India Colleges"
          : `${courseNameForPageTitle} Colleges`}
      </h2>

      <div className="flex gap-4 mb-6">
        {/* Department Filter */}
        <div className="relative" ref={departmentDropdownRef}>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={toggleDepartmentDropdown}
          >
            {selectedDepartment || "Select Department"}
          </button>
          {isDepartmentDropdownOpen && (
            <div className="absolute bg-white shadow rounded mt-2">
              {uniqueDepartments.map((department) => (
                <div
                  key={department}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    handleDepartmentChange(department);
                    setIsDepartmentDropdownOpen(false);
                  }}
                >
                  {department}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Course Filter */}
        <div className="relative" ref={courseDropdownRef}>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={toggleCourseDropdown}
          >
            {selectedCourse || "Select Course"}
          </button>
          {isCourseDropdownOpen && (
            <div className="absolute bg-white shadow rounded mt-2">
              {uniqueCourses.map((course) => (
                <div
                  key={course}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    handleCourseChange(course);
                    setIsCourseDropdownOpen(false);
                  }}
                >
                  {course}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Specialization Filter */}
        <div className="relative" ref={specializationDropdownRef}>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => setIsSpecializationDropdownOpen((prev) => !prev)}
          >
            {selectedSpecialization || "Select Specialization"}
          </button>
          {isSpecializationDropdownOpen && (
            <div className="absolute bg-white shadow rounded mt-2">
              {uniqueSpecializations.length > 0 ? (
                uniqueSpecializations.map((specialization) => (
                  <div
                    key={specialization}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleSpecializationChange(specialization);
                      setIsSpecializationDropdownOpen(false);
                    }}
                  >
                    {specialization}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">
                  No specializations available
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Selected Filters */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Selected Filters:</h3>
        <p>Department: {selectedDepartment}</p>
        <p>Course: {selectedCourse}</p>
        <button
          onClick={clearFilters}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear Filters
        </button>
      </div>

      {/* Filtered Colleges */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Colleges:</h3>
        {filteredColleges.map((college) => (
          <div key={college.collegeId} className="mb-4 p-4 border rounded">
            <h4 className="text-xl font-semibold">{college.collegeName}</h4>
            <p>Type: {college.collegeType}</p>
            <p>Established: {college.EstdYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterableCoursePage;
