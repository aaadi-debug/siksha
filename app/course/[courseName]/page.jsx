"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import collegeDataJson from "../../data/collegeData.json"; // Rename the imported data to avoid conflict

const CoursePage = () => {
  const { courseName } = useParams(); // Get courseName from the URL using useParams
  const decodedCourseName = decodeURIComponent(courseName); // Decode the URL-encoded courseName
  console.log(decodedCourseName); // This will now print the correct course name

  const [collegeData, setCollegeData] = useState([]); // Renamed to avoid conflict
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    courseName: decodedCourseName || "",
    departmentName: "",
    specialization: "",
    state: "",
    city: "",
    collegeType: "",
    feeRange: [0, 1000000],
  });

  const college = collegeDataJson.data;

  useEffect(() => {
    // Simulate data loading, e.g., from an API or a local file
    setLoading(true);
    setCollegeData(college); // Set the data from the imported JSON
    setFilteredData(college); // Initially set filtered data to all colleges
    setLoading(false);
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
              (spec) => spec.name === filters.specialization
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

    // Handle fee range filtering
    filtered = filtered.filter((college) =>
      college.departments.some((dept) =>
        dept.courses.some((course) =>
          course.specialization.some(
            (spec) =>
              parseInt(spec.fee.general.firstYear.tuitionFee) >=
                filters.feeRange[0] &&
              parseInt(spec.fee.general.firstYear.tuitionFee) <=
                filters.feeRange[1]
          )
        )
      )
    );

    setFilteredData(filtered);
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
        }
      }
  
      // If the departmentName filter is changed, update the courseName filter with the first course in that department
      if (filterType === "departmentName") {
        const selectedDepartment = value;
        const matchingCollege = collegeData.find((college) =>
          college.departments.some((dept) => dept.departmentName === selectedDepartment)
        );
  
        if (matchingCollege) {
          const department = matchingCollege.departments.find((dept) => dept.departmentName === selectedDepartment);
          const firstCourse = department?.courses[0]?.courseName || "";
          newFilters.courseName = firstCourse;
        }
      }
  
      return newFilters;
    });
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

  return (
    <div>
      <h1>Courses Offered</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex space-x-4">
            {/* Course Filter */}
            <div>
              <label>Course Name</label>
              <select
                onChange={(e) =>
                  handleFilterChange("courseName", e.target.value)
                }
                value={filters.courseName}
              >
                <option value="">Select Course</option>
                {getUniqueValues("courseName").map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Department Filter */}
            <div>
              <label>Department</label>
              <select
                onChange={(e) =>
                  handleFilterChange("departmentName", e.target.value)
                }
                value={filters.departmentName}
              >
                <option value="">Select Department</option>
                {getUniqueValues("departmentName").map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Specialization Filter */}
            <div>
              <label>Specialization</label>
              <select
                onChange={(e) =>
                  handleFilterChange("specialization", e.target.value)
                }
                value={filters.specialization}
              >
                <option value="">Select Specialization</option>
                {getUniqueValues("specialization").map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* State Filter */}
            <div>
              <label>State</label>
              <select
                onChange={(e) => handleFilterChange("state", e.target.value)}
                value={filters.state}
              >
                <option value="">Select State</option>
                {getUniqueValues("state").map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div>
              <label>City</label>
              <select
                onChange={(e) => handleFilterChange("city", e.target.value)}
                value={filters.city}
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
            <div>
              <label>College Type</label>
              <select
                onChange={(e) =>
                  handleFilterChange("collegeType", e.target.value)
                }
                value={filters.collegeType}
              >
                <option value="">Select College Type</option>
                {["private", "public"].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Fee Filter */}
            <div>
              <label>Fee Range</label>
              <input
                type="range"
                min="0"
                max="1000000"
                value={filters.feeRange[0]}
                onChange={(e) =>
                  handleFilterChange("feeRange", [
                    e.target.value,
                    filters.feeRange[1],
                  ])
                }
              />
              <input
                type="range"
                min="0"
                max="1000000"
                value={filters.feeRange[1]}
                onChange={(e) =>
                  handleFilterChange("feeRange", [
                    filters.feeRange[0],
                    e.target.value,
                  ])
                }
              />
            </div>
          </div>

          {/* Filtered Data */}
          <div>
            <h2>Filtered Colleges</h2>
            {filteredData.map((college) => (
              <div key={college.collegeId}>
                <h3>{college.collegeName}</h3>
                <p>{college.collegeAbout}</p>
                {/* More detailed info */}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CoursePage;
