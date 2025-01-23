"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import collegeDataJson from "../../data/collegeData.json"; // Rename the imported data to avoid conflict
import { useRouter } from "next/navigation"; // Import useRouter
import Breadcrumbs2 from "@/app/components/Breadcrumbs2";
import { X, Filter } from "lucide-react";

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
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCollegeType, setSelectedCollegeType] = useState("");
  const [selectedFeeRange, setSelectedFeeRange] = useState([0, 0]);
  const [maxFee, setMaxFee] = useState(0);

  const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] =
    useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isSpecializationDropdownOpen, setIsSpecializationDropdownOpen] =
    useState(false);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isCollegeTypeDropdownOpen, setIsCollegeTypeDropdownOpen] =
    useState(false);
  const [isFeeRangeDropdownOpen, setIsFeeRangeDropdownOpen] = useState(false);

  const [filteredColleges, setFilteredColleges] = useState([]);

  const departmentDropdownRef = useRef(null);
  const courseDropdownRef = useRef(null);
  const specializationDropdownRef = useRef(null);
  const stateDropdownRef = useRef(null);
  const cityDropdownRef = useRef(null);
  const collegeTypeDropdownRef = useRef(null);
  const feeRangeDropdownRef = useRef(null);

  // =====================================================
  // =====================================================

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

  const states = [
    ...new Set(collegeData.data.map((college) => college.collegeAddress.state)),
  ];

  const cities = [
    ...new Set(collegeData.data.map((college) => college.collegeAddress.city)),
  ];

  const collegeTypes = [
    ...new Set(collegeData.data.map((college) => college.collegeType)),
  ];

  // console.log("Filtered unique specializations", uniqueSpecializations);
  // console.log("State", states);
  // console.log("City", cities);
  // console.log("College Type", collegeTypes);
  // =====================================================
  // =====================================================

  useEffect(() => {
    const fees = collegeData.data.flatMap((college) =>
      college.departments.flatMap((department) =>
        department.courses.flatMap((course) =>
          course.specialization.flatMap((spec) => {
            if (Array.isArray(spec.fee.general)) {
              return spec.fee.general.map((feeObj) => {
                // Ensure tuitionFee is a valid number
                const fee = parseInt(feeObj.tuitionFee, 10);
                return isNaN(fee) ? 0 : fee; // If NaN, return 0 to avoid issues
              });
            }
            return [];
          })
        )
      )
    );

    // console.log("Fees array:", fees);  // Debugging fees array

    // Calculate the maximum fee dynamically
    const max = fees.length > 0 ? Math.max(...fees) : 0;
    // console.log("Calculated max fee:", max);  // Debugging max fee value
    setMaxFee(max);
    // Set selectedFeeRange with default values
    setSelectedFeeRange([0, max]);
  }, [collegeData]); // Ensure collegeData is available

  useEffect(() => {
    const filtered = collegeData.data.filter((college) => {
      // Check filters one by one
      const matchesState = selectedState
        ? college.collegeAddress.state === selectedState
        : true;
      const matchesCity = selectedCity
        ? college.collegeAddress.city === selectedCity
        : true;
      const matchesCollegeType = selectedCollegeType
        ? college.collegeType === selectedCollegeType
        : true;

      const matchesDepartment = selectedDepartment
        ? college.departments.some(
            (department) => department.departmentName === selectedDepartment
          )
        : true;

      const matchesCourse = selectedCourse
        ? college.departments.some((department) =>
            department.courses.some((course) =>
              selectedSpecialization
                ? course.courseName === selectedCourse &&
                  course.specialization.some(
                    (special) => special.name === selectedSpecialization
                  )
                : course.courseName === selectedCourse
            )
          )
        : true;

      // Fee range filter logic
      const matchesFeeRange = college.departments.some((department) =>
        department.courses.some((course) =>
          course.specialization.some(
            (spec) =>
              // Check if spec.fee.general is an array before calling .some
              Array.isArray(spec.fee.general) &&
              spec.fee.general.some(
                (feeObj) =>
                  parseInt(feeObj.tuitionFee, 10) >= selectedFeeRange[0] &&
                  parseInt(feeObj.tuitionFee, 10) <= selectedFeeRange[1]
              )
          )
        )
      );

      return (
        matchesState &&
        matchesCity &&
        matchesCollegeType &&
        matchesDepartment &&
        matchesCourse &&
        matchesFeeRange
      );
    });

    setFilteredColleges(filtered);
  }, [
    selectedState,
    selectedCity,
    selectedCollegeType,
    selectedDepartment,
    selectedCourse,
    selectedSpecialization,
    selectedFeeRange,
    collegeData,
  ]);

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

  const handleStateChange = (state) => {
    setSelectedState(state);
  };
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };
  const handleCollegeTypeChange = (type) => {
    setSelectedCollegeType(type);
  };
  const handleFeeChange = (values) => {
    setSelectedFeeRange(values);
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
      if (
        stateDropdownRef.current &&
        !stateDropdownRef.current.contains(event.target)
      ) {
        setIsStateDropdownOpen(false);
      }
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target)
      ) {
        setIsCityDropdownOpen(false);
      }
      if (
        collegeTypeDropdownRef.current &&
        !collegeTypeDropdownRef.current.contains(event.target)
      ) {
        setIsCollegeTypeDropdownOpen(false);
      }
      if (
        feeRangeDropdownRef.current &&
        !feeRangeDropdownRef.current.contains(event.target)
      ) {
        setIsFeeRangeDropdownOpen(false);
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

  const courseAboutForPageTitle = matchedCourse
    ? matchedCourse.courseAbout
    : courseUrlFromPath.replace(/-/g, " ");
  // =====================================================
  // =====================================================

  const clearFilters = () => {
    setSelectedDepartment(null); // Reset to no department selected
    setSelectedCourse(null); // Reset to no course selected
    setSelectedSpecialization(null);
    setSelectedState(null);
    setSelectedCity(null);
    setSelectedCollegeType(null);

    router.push("/courses/india-colleges", undefined, { shallow: true }); // Redirect to all-colleges and reset filters
  };

  return (
    <div className="mx-auto pt-20 max-sm:pt-16 ">
      <div
        className="lg:px-10 px-6 pt-10 overflow-hidden"
        // style={{
        //   backgroundImage: "url(/assets/bg_elem/courses-bg3.png)",
        //   // backgroundColor: "#3d52a0",
        //   backgroundSize: "100%",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
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
        <div className="bg-gray-100 p-6 mt-10 rounded-lg relative pr-32">
          <h2 className="text-4xl font-semibold mb-6 text-prim">
            {!selectedDepartment && !selectedCourse
              ? "Top all India Colleges"
              : `Top ${courseNameForPageTitle} Colleges`}
          </h2>

          <div
            dangerouslySetInnerHTML={{
              __html: courseAboutForPageTitle,
            }}
            className="dangerousHTML"
          />

          <img
            src="/assets/bg_elem/hat-docs.png"
            alt="Graduation Hat Image"
            className="absolute -top-24 -right-24"
          />
        </div>
      </div>

      <div className="lg:px-10 px-6">
        {/* Filters */}
        <div className=" sticky top-20 z-10 bg-gray-100 py-4 px-4 mt-6">
          <div className="flex gap-4 items-center">
            <div className="px-3 py-1 border-2 bg-gray-200 rounded-full flex items-center gap-2 text-sm">
              <Filter size={14} /> All Filters
            </div>

            {/* Department Filter */}
            <div className="relative" ref={departmentDropdownRef}>
              <button
                className={`px-3 py-1 border-2 rounded-full flex items-center gap-2 text-sm ${
                  selectedDepartment
                    ? "border-prim text-tertiary bg-prim/20"
                    : "border-gray-300 bg-white text-gray-800"
                }`}
                onClick={() => setIsDepartmentDropdownOpen((prev) => !prev)}
              >
                {selectedDepartment || "Department"}
              </button>
              {isDepartmentDropdownOpen && (
                <div className="absolute bg-white shadow rounded mt-2">
                  {uniqueDepartments.map((department) => (
                    <div
                      key={department}
                      className={`px-4 py-2 cursor-pointer ${
                        department === selectedDepartment
                          ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                          : "hover:bg-gray-100"
                      }`}
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
                className={`px-3 py-1 border-2 rounded-full flex items-center gap-2 text-sm ${
                  selectedCourse
                    ? "border-prim text-tertiary bg-prim/20"
                    : "border-gray-300 bg-white text-gray-800"
                }`}
                onClick={() => setIsCourseDropdownOpen((prev) => !prev)}
              >
                {selectedCourse || "Course"}
              </button>
              {isCourseDropdownOpen && (
                <div className="absolute bg-white shadow rounded mt-2">
                  {uniqueCourses.map((course) => (
                    <div
                      key={course}
                      className={`px-4 py-2 cursor-pointer ${
                        course === selectedCourse
                          ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                          : "hover:bg-gray-100"
                      }`}
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
                className={`px-3 py-1 border-2 rounded-full flex items-center gap-2 text-sm ${
                  selectedSpecialization
                    ? "border-prim text-tertiary bg-prim/20"
                    : "border-gray-300 bg-white text-gray-800"
                }`}
                onClick={() => setIsSpecializationDropdownOpen((prev) => !prev)}
              >
                {selectedSpecialization || "Specialization"}
              </button>
              {isSpecializationDropdownOpen && (
                <div className="absolute bg-white shadow rounded mt-2">
                  {uniqueSpecializations.length > 0 ? (
                    uniqueSpecializations.map((specialization) => (
                      <div
                        key={specialization}
                        className={`px-4 py-2 cursor-pointer ${
                          specialization === selectedSpecialization
                            ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                            : "hover:bg-gray-100"
                        }`}
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

            {/* State Filter */}
            <div className="relative" ref={stateDropdownRef}>
              <button
                className="px-3 py-1 border-2 bg-white rounded-full flex items-center gap-2 text-sm"
                onClick={() => setIsStateDropdownOpen((prev) => !prev)}
              >
                {selectedState || "State"}
              </button>
              {isStateDropdownOpen && (
                <div className="absolute bg-white shadow rounded mt-2">
                  {states.map((state) => (
                    <div
                      key={state}
                      onClick={() => {
                        handleStateChange(state);
                        setIsStateDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {state}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* City Filter */}
            <div className="relative" ref={cityDropdownRef}>
              <button
                className="px-3 py-1 border-2 bg-white rounded-full flex items-center gap-2 text-sm"
                onClick={() => setIsCityDropdownOpen((prev) => !prev)}
              >
                {selectedCity || "City"}
              </button>
              {isCityDropdownOpen && (
                <div className="absolute bg-white shadow rounded mt-2">
                  {cities.map((city) => (
                    <div
                      key={city}
                      onClick={() => {
                        handleCityChange(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* College type Filter */}
            <div className="relative" ref={collegeTypeDropdownRef}>
              <button
                className="px-3 py-1 border-2 bg-white rounded-full flex items-center gap-2 text-sm"
                onClick={() => setIsCollegeTypeDropdownOpen((prev) => !prev)}
              >
                {selectedCollegeType || "College Type"}
              </button>
              {isCollegeTypeDropdownOpen && (
                <div className="absolute bg-white shadow rounded mt-2">
                  {collegeTypes.map((type) => (
                    <div
                      key={type}
                      onClick={() => {
                        handleCollegeTypeChange(type);
                        setIsCollegeTypeDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer capitalize"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fee range Filter */}
            <div className="relative" ref={feeRangeDropdownRef}>
              <button
                className="px-3 py-1 border-2 bg-white rounded-full flex items-center gap-2 text-sm"
                onClick={() => setIsFeeRangeDropdownOpen((prev) => !prev)}
              >
                Fee Range
              </button>
              {isFeeRangeDropdownOpen && (
                <div className="absolute bg-white shadow rounded mt-2">
                  <input
                    id="feeRange"
                    type="range"
                    min={0}
                    max={maxFee}
                    step={1000}
                    value={selectedFeeRange[0]} // Assuming it's the start of the range
                    onChange={(e) =>
                      handleFeeChange([
                        parseInt(e.target.value, 10),
                        selectedFeeRange[1],
                      ])
                    }
                    style={{
                      width: "100%",
                      height: "6px",
                      backgroundColor: "lightgray",
                      borderRadius: "5px",
                    }}
                  />
                  <input
                    id="feeRangeMax"
                    type="range"
                    min={0}
                    max={maxFee}
                    step={1000}
                    value={selectedFeeRange[1]} // Assuming it's the end of the range
                    onChange={(e) =>
                      handleFeeChange([
                        selectedFeeRange[0],
                        parseInt(e.target.value, 10),
                      ])
                    }
                    style={{
                      width: "100%",
                      height: "6px",
                      backgroundColor: "lightgray",
                      borderRadius: "5px",
                    }}
                  />
                  <div>
                    <span>Min: {selectedFeeRange[0]}</span>
                    <span> | Max: {selectedFeeRange[1]}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Selected Filters */}
          <div className="mt-3">
            {(selectedDepartment ||
              selectedCourse ||
              selectedSpecialization ||
              selectedState ||
              selectedCity ||
              selectedCollegeType ||
              (selectedFeeRange &&
                selectedFeeRange[0] !== 0 &&
                selectedFeeRange[1] !== 0)) && ( // Only render this section if at least one filter is selected
              <>
                <h3 className="text-sm text-tertiary font-semibold mb-2">
                  Selected Filters:
                </h3>
                <div className="flex items-center gap-2">
                  {selectedDepartment && (
                    <div className="border-2 border-prim bg-prim/20 text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
                      {selectedDepartment}
                      <button
                        className="ml-2 text-red-500"
                        onClick={() => setSelectedDepartment(null)}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  )}
                  {selectedCourse && (
                    <div className="border-2 border-prim bg-prim/20 text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
                      {selectedCourse}
                      <button
                        className="ml-2 text-red-500"
                        onClick={() => setSelectedCourse(null)}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  )}
                  {selectedSpecialization && (
                    <div className="border-2 border-prim bg-prim/20 text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
                      {selectedSpecialization}
                      <button
                        className="ml-2 text-red-500"
                        onClick={() => setSelectedSpecialization(null)}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  )}
                  {selectedState && (
                    <div className="border-2 border-prim bg-prim/20 text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
                      {selectedState}
                      <button
                        className="ml-2 text-red-500"
                        onClick={() => setSelectedState(null)}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  )}
                  {selectedCity && (
                    <div className="border-2 border-prim bg-prim/20 text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
                      {selectedCity}
                      <button
                        className="ml-2 text-red-500"
                        onClick={() => setSelectedCity(null)}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  )}
                  {selectedCollegeType && (
                    <div className="border-2 border-prim bg-prim/20 text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
                      {selectedCollegeType}
                      <button
                        className="ml-2 text-red-500"
                        onClick={() => setSelectedCollegeType(null)}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  )}
                  {selectedFeeRange &&
                    selectedFeeRange[0] !== 0 &&
                    selectedFeeRange[1] !== 0 && (
                      <div className="border-2 border-prim bg-prim/20 text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
                        Fee Range: {selectedFeeRange[0]} - {selectedFeeRange[1]}
                        <button
                          className="ml-2 text-red-500"
                          onClick={() => setSelectedFeeRange([0, maxFee])} // Reset fee range to default
                        >
                          <X size={12} />
                        </button>
                      </div>
                    )}
                  <button
                    onClick={clearFilters}
                    className="bg-gray-200 border-2 text-tertiary rounded-full text-xs px-3 py-1"
                  >
                    Clear All
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Filtered Colleges */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Colleges:</h3>
          {filteredColleges?.length > 0 ? (
            filteredColleges?.map((college) => (
              <div key={college.collegeId} className="mb-4 p-4 border rounded">
                <h4 className="text-xl font-semibold">{college.collegeName}</h4>
                <p>Type: {college.collegeType}</p>
                <p>Established: {college.EstdYear}</p>
              </div>
            ))
          ) : (
            <div className="text-red-500 text-center py-10">
              No college available.
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Colleges:</h3>
          {filteredColleges?.length > 0 ? (
            filteredColleges?.map((college) => (
              <div key={college.collegeId} className="mb-4 p-4 border rounded">
                <h4 className="text-xl font-semibold">{college.collegeName}</h4>
                <p>Type: {college.collegeType}</p>
                <p>Established: {college.EstdYear}</p>
              </div>
            ))
          ) : (
            <div className="text-red-500 text-center py-10">
              No college available.
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Colleges:</h3>
          {filteredColleges?.length > 0 ? (
            filteredColleges?.map((college) => (
              <div key={college.collegeId} className="mb-4 p-4 border rounded">
                <h4 className="text-xl font-semibold">{college.collegeName}</h4>
                <p>Type: {college.collegeType}</p>
                <p>Established: {college.EstdYear}</p>
              </div>
            ))
          ) : (
            <div className="text-red-500 text-center py-10">
              No college available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterableCoursePage;
