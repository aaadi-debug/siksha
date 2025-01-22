"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; // Use useParams from next/navigation
import { Filter } from "lucide-react";


import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Breadcrumbs from "@/app/components/Breadcrubms";
import HorizontalScroll from "@/app/components/HorizontalScroll";

import collegeDataJson from "../../data/collegeData.json"; // Rename the imported data to avoid conflict

function calculateMinMaxFees(data) {
  let minFee = Infinity;
  let maxFee = -Infinity;

  data.departments.map((department) => {
    department.courses.map((course) => {
      course.specialization.map((specialization) => {
        if (
          specialization.fee &&
          specialization.fee.general &&
          specialization.fee.general.length > 0
        ) {
          specialization.fee.general.map((feeDetail) => {
            const tuitionFee = parseInt(feeDetail.tuitionFee, 10);
            if (!isNaN(tuitionFee)) {
              minFee = Math.min(minFee, tuitionFee);
              maxFee = Math.max(maxFee, tuitionFee);
            }
          });
          console.log("1.", specialization.fee.general[0].tuitionFee);
          console.log("2.", specialization.fee.general[1]);
        } else {
          console.log(
            "Fee data is not available for specialization:",
            specialization.name
          );
        }
      });
    });
  });

  return {
    minFee: minFee === Infinity ? "N/A" : minFee,
    maxFee: maxFee === -Infinity ? "N/A" : maxFee,
  };
}

function calculateSpecializations(data) {
  let specializationCount = 0;
  data.departments.map((department) => {
    department.courses.map((course) => {
      // console.log("Specila len", course.specialization.length);
      specializationCount += course.specialization.length;
    });
  });

  return specializationCount;
}

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

const CoursePage = () => {
  const { courseName } = useParams(); // Get courseName from the URL using useParams
  const router = useRouter();
  const decodedCourseName = decodeURIComponent(courseName); // Decode the URL-encoded courseUrl

  console.log(decodedCourseName); 

  const [collegeData, setCollegeData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    courseName: decodedCourseName || "",
    departmentName: "",
    specialization: "",
    state: "",
    city: "",
    collegeType: "",
  });

  const college = collegeDataJson.data;

  useEffect(() => {
    // Simulate data loading, e.g., from an API or a local file
    setCollegeData(college); // Set the data from the imported JSON
    setFilteredData(college); // Initially set filtered data to all colleges
  }, []);

  useEffect(() => {
    // If the courseName exists in the URL, set it as the default courseName filter
    if (decodedCourseName) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        courseName: decodedCourseName,
      }));
    }

    // Set default department based on the courseName
    const matchingCollege = college.find((college) =>
      college.departments.some((dept) =>
        dept.courses.some((course) => course.courseName === decodedCourseName)
      )
    );

    if (matchingCollege) {
      const department = matchingCollege.departments.find((dept) =>
        dept.courses.some((course) => course.courseName === decodedCourseName)
      );
      setFilters((prevFilters) => ({
        ...prevFilters,
        departmentName: department?.departmentName || "",
      }));
    }
  }, [decodedCourseName, college]); // This hook runs whenever courseName changes

  useEffect(() => {
    if (
      !filters.courseName &&
      !filters.departmentName &&
      !filters.specialization &&
      !filters.state &&
      !filters.city &&
      !filters.collegeType
    ) {
      // No filters selected, show all data
      setFilteredData(collegeData);
      console.log("No filters applied, showing all colleges.", filteredData);
      return;
    }

    // Apply the filters to the data when any filter changes
    let filtered = collegeData;

    if (filters.courseName) {
      filtered = filtered.filter((college) =>
        college.departments.some((dept) =>
          dept.courses.some(
            (course) => course.courseName === filters.courseName
          )
        )
      );
    }

    if (filters.departmentName) {
      filtered = filtered.filter((college) =>
        college.departments.some(
          (dept) => dept.departmentName === filters.departmentName
        )
      );
    }

    if (filters.specialization) {
      filtered = filtered.filter((college) =>
        college.departments.some((dept) =>
          dept.courses.some((course) =>
            course.specialization.some(
              (spec) =>
                spec.name === filters.specialization &&
                (!filters.courseName ||
                  course.courseName === filters.courseName) &&
                (!filters.departmentName ||
                  dept.departmentName === filters.departmentName)
            )
          )
        )
      );
    }

    if (filters.state) {
      filtered = filtered.filter(
        (college) => college.collegeAddress.state === filters.state
      );
    }

    if (filters.city) {
      filtered = filtered.filter(
        (college) => college.collegeAddress.city === filters.city
      );
    }

    if (filters.collegeType) {
      filtered = filtered.filter(
        (college) => college.collegeType === filters.collegeType
      );
    }

    // setTimeout(() => {
    setFilteredData(filtered);
    // }, 500); // 2-second delay
  }, [filters, collegeData]); // Add collegeData to the dependency array


  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [filterType]: value };

      // If the courseName filter is changed, update the department filter accordingly
      if (filterType === "courseName") {
        const selectedCourse = value;
        const matchingCollege = collegeData.find((college) =>
          college.departments.some((dept) =>
            dept.courses.some((course) => course.courseName === selectedCourse)
          )
        );

        if (matchingCollege) {
          const department = matchingCollege.departments.find((dept) =>
            dept.courses.some((course) => course.courseName === selectedCourse)
          );
          newFilters.departmentName = department?.departmentName || "";

          // Update the URL with the courseUrl from the matching course
          const matchingCourse = department.courses.find(
            (course) => course.courseName === selectedCourse
          );
          if (matchingCourse) {
            const courseUrl = matchingCourse.courseUrl;
            router.push(`/course/${courseUrl}`); // Push the new courseUrl to the URL
          }
        }
      }

      // If the departmentName filter is changed, update the courseName filter with the first course in that department
      if (filterType === "departmentName") {
        const selectedDepartment = value;
        const matchingCollege = collegeData.find((college) =>
          college.departments.some(
            (dept) => dept.departmentName === selectedDepartment
          )
        );

        if (matchingCollege) {
          const department = matchingCollege.departments.find(
            (dept) => dept.departmentName === selectedDepartment
          );
          const firstCourse = department?.courses[0]?.courseName || "";
          newFilters.courseName = firstCourse;
        }
      }

      return newFilters;
    });
  };

  const handleClearFilters = () => {
    setFilters({
      courseName: "",
      departmentName: "",
      specialization: "",
      state: "",
      city: "",
      collegeType: "",
    });

    // Reset filtered data to show all colleges
    setFilteredData(collegeData);
    console.log("showing all colleges.", filteredData);
    // router.push(`/course/india-colleges`); // Reset URL
  };

  const getUniqueValues = (field) => {
    const values = [];
    collegeData.forEach((college) => {
      if (field === "courseName") {
        college.departments.forEach((dept) => {
          dept.courses.forEach((course) => {
            if (!values.includes(course.courseName)) {
              values.push(course.courseName);
            }
          });
        });
      } else if (field === "departmentName") {
        college.departments.forEach((dept) => {
          if (!values.includes(dept.departmentName)) {
            values.push(dept.departmentName);
          }
        });
      } else if (field === "specialization") {
        college.departments.forEach((dept) => {
          dept.courses.forEach((course) => {
            course.specialization.forEach((spec) => {
              if (!values.includes(spec.name)) {
                values.push(spec.name);
              }
            });
          });
        });
      } else if (field === "state") {
        if (!values.includes(college.collegeAddress.state)) {
          values.push(college.collegeAddress.state);
        }
      } else if (field === "city") {
        if (!values.includes(college.collegeAddress.city)) {
          values.push(college.collegeAddress.city);
        }
      }
    });
    return values;
  };

  const getAvailableSpecializations = () => {
    let availableSpecializations = [];

    collegeData.forEach((college) => {
      college.departments.forEach((dept) => {
        if (
          (!filters.departmentName ||
            dept.departmentName === filters.departmentName) &&
          dept.courses.some(
            (course) =>
              !filters.courseName || course.courseName === filters.courseName
          )
        ) {
          dept.courses.forEach((course) => {
            if (
              !filters.courseName ||
              course.courseName === filters.courseName
            ) {
              course.specialization.forEach((spec) => {
                if (!availableSpecializations.includes(spec.name)) {
                  availableSpecializations.push(spec.name);
                }
              });
            }
          });
        }
      });
    });

    return availableSpecializations;
  };

  console.log("Final fileterd data: ", filteredData);

  return (
    <div className="bg-skin about_us pt-24">
      <>
        <Breadcrumbs
          page_title="Course"
          page_title2={decodedCourseName}
          page_title3=""
        />
        <div className="lg:px-10 px-6 mt-6 pb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Top {decodedCourseName} Colleges
          </h2>

          <div>
            <div className="rounded-lg bg-white mb-4">
              <div className="w-full p-6 flex text-sm">
                <div className="border-r pr-4 mr-4">
                  <div className="border w-28 rounded-full p-2 flex gap-2 justify-center items-center">
                    <Filter size={16} /> All Filters
                  </div>
                </div>
                <div className="flex overflow-x-auto whitespace-nowrap ">
                  <HorizontalScroll>
                    {/* Course Filter */}
                    <div className="border w-40 rounded-full p-2">
                      {/* <label>Course Name</label> */}
                      <select
                        onChange={(e) =>
                          handleFilterChange("courseName", e.target.value)
                        }
                        value={filters.courseName}
                        className="w-full"
                      >
                        <option value="">Course</option>
                        {getUniqueValues("courseName").map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Department Filter */}
                    <div className="border w-40 rounded-full p-2">
                      {/* <label>Department</label> */}
                      <select
                        onChange={(e) =>
                          handleFilterChange("departmentName", e.target.value)
                        }
                        value={filters.departmentName}
                        className="w-full"
                      >
                        <option value="">Department</option>
                        {getUniqueValues("departmentName").map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Specialization Filter */}
                    <div className="border w-40 rounded-full p-2">
                      {/* <label>Specialization</label> */}
                      <select
                        onChange={(e) =>
                          handleFilterChange("specialization", e.target.value)
                        }
                        value={filters.specialization}
                        className="w-full"
                      >
                        <option value="">Specialization</option>
                        {getAvailableSpecializations().map((specialization) => (
                          <option key={specialization} value={specialization}>
                            {specialization}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* State Filter */}
                    <div className="border w-40 rounded-full p-2">
                      {/* <label>State</label> */}
                      <select
                        onChange={(e) =>
                          handleFilterChange("state", e.target.value)
                        }
                        value={filters.state}
                        className="w-full"
                      >
                        <option value="">State</option>
                        {getUniqueValues("state").map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* City Filter */}
                    <div className="border w-40 rounded-full p-2">
                      {/* <label>City</label> */}
                      <select
                        onChange={(e) =>
                          handleFilterChange("city", e.target.value)
                        }
                        value={filters.city}
                        className="w-full"
                      >
                        <option value="">Select City</option>
                        {getUniqueValues("city").map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* College Type Filter */}
                    <div className="border w-40 rounded-full p-2">
                      {/* <label>College Type</label> */}
                      <select
                        onChange={(e) =>
                          handleFilterChange("collegeType", e.target.value)
                        }
                        value={filters.collegeType}
                        className="w-full"
                      >
                        <option value="">College Type</option>
                        {["private", "public"].map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </HorizontalScroll>
                </div>
              </div>

              <div>
                {/* Selected Filters */}
                {Object.entries(filters).some(([key, value]) => value) && (
                  <div className="px-6 pb-6">
                    <h3 className="mb-2 text-sm font-bold">
                      Selected Filters:
                    </h3>
                    <div className="flex gap-2 flex-wrap items-center">
                      {Object.entries(filters).map(([key, value]) =>
                        value ? (
                          <div
                            key={key}
                            className="bg-white border-2 font-semibold border-second text-second px-3 py-1  rounded-full flex items-center gap-2 text-xs"
                          >
                            <span>{value}</span>
                            <button
                              onClick={() => handleFilterChange(key, "")}
                              className="text-second font-bold"
                            >
                              &times;
                            </button>
                          </div>
                        ) : null
                      )}

                      {/* Clear Filters Button */}
                      <button
                        onClick={handleClearFilters}
                        className="bg-second text-white border-2 border-second px-3 rounded-full py-1 text-xs"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Filtered Data */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold border-b pb-2 mb-4">
                Found {filteredData.length}{" "}
                {filteredData.length > 1 ? "Colleges" : "College"}
              </h3>
              {filteredData.length > 0 ? (
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2 text-left">S.No</th>
                      <th className="border px-4 py-2 text-left">Colleges</th>
                      <th className="border px-4 py-2 text-left">
                        Courses Fee
                      </th>
                      <th className="border px-4 py-2 text-left">
                        College Type
                      </th>
                      <th className="border px-4 py-2 text-left">
                        Specialization
                      </th>
                      <th className="border px-4 py-2 text-left">Placement</th>
                      <th className="border px-4 py-2 text-left">Grade</th>
                      {/* Add more columns as needed */}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((college, index) => (
                      <tr key={college.collegeId} className="border-b">
                        <td className="border px-4 py-2 align-top">
                          {index + 1}
                        </td>
                        <td className="border px-4 py-2 align-top">
                          <div className="flex gap-2">
                            <img
                              src={college.collegeLogo}
                              alt=""
                              className="rounded-lg w-20 h-20"
                            />
                            <div>
                              <h4 className="text-lg font-medium text-black">
                                {college.collegeName}
                              </h4>
                              <p className="text-textClr text-sm">
                                {college.collegeAddress.city},{" "}
                                {college.collegeAddress.state}
                              </p>
                              <p className="text-textClr text-sm">
                                Approved by:{" "}
                                {college.approvedBy.map((approval, index) => (
                                  <span key={index}>
                                    {approval}
                                    {index < college.approvedBy.length - 1 &&
                                      ", "}
                                  </span>
                                ))}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border px-4 py-2 align-top">
                          <div>
                            <div className="text-green-600 font-semibold">
                              {(() => {
                                const { minFee, maxFee } =
                                  calculateMinMaxFees(college);
                                return `₹ ${formatNumberWithCommas(
                                  minFee
                                )} - ₹ ${formatNumberWithCommas(maxFee)}`;
                              })()}{" "}
                              <span className="text-textClr font-normal text-xs">
                                (all-courses)
                              </span>
                            </div>
                            <p className="text-sm text-textClr mt-2">
                              - First Year Fees
                            </p>
                          </div>
                        </td>

                        <td className="border px-4 py-2 align-top">
                          <p className="capitalize">
                            {college.collegeType} College
                          </p>
                        </td>
                        <td className="border px-4 py-2 align-top">
                          <div>
                            (
                            <span className="text-orange-500">
                              {calculateSpecializations(college)}
                            </span>
                            ) Specializations
                          </div>
                        </td>
                        <td className="border px-4 py-2 align-top">
                          <div>
                            {!college.placements[0].lowest &&
                            !college.placements[0].average &&
                            !college.placements[0].highest ? (
                              <p className="text-red-500 font-light">
                                - No Placement Stats -
                              </p>
                            ) : (
                              <>
                                {college.placements[0].lowest && (
                                  <div className="mb-2">
                                    <p className="text-green-600">
                                      ₹ {college.placements[0].lowest}
                                    </p>
                                    <p className="text-xs text-textClr">
                                      (Lowest Package)
                                    </p>
                                  </div>
                                )}
                                {college.placements[0].average && (
                                  <div className="mb-2">
                                    <p className="text-green-600">
                                      ₹ {college.placements[0].average}
                                    </p>
                                    <p className="text-xs text-textClr">
                                      (Average Package)
                                    </p>
                                  </div>
                                )}
                                <div>
                                  <p className="text-green-600">
                                    ₹ {college.placements[0].highest}
                                  </p>
                                  <p className="text-xs text-textClr">
                                    (Highest Package)
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="border px-4 py-2 align-top">
                          {!college.NAACGrade ? (
                            <p className="text-red-500 font-light">- N/A -</p>
                          ) : (
                            <>NAAC: {college.NAACGrade}</>
                          )}
                        </td>
                        {/* Add more columns for additional data */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <>
                  <p>No colleges found with the given filters.</p>
                  <button onClick={handleClearFilters}>
                    Show All Colleges
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </>

      <Footer />
    </div>
  );
};

export default CoursePage;
