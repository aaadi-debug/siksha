"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import collegeDataJson from "../../data/collegeData.json"; // Rename the imported data to avoid conflict
import { useRouter } from "next/navigation"; // Import useRouter
import Breadcrumbs2 from "@/app/components/Breadcrumbs2";
import {
  X,
  Filter,
  ArrowRight,
  Scale,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import DynamicThemeButton from "@/app/components/DynamicThemeButton";
import DynamicSidebarModal from "@/app/components/DynamicSidebarModal";

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

const FilterableCoursePage = () => {
  const pathname = usePathname();
  const courseUrlFromPath = pathname.split("/").pop() || ""; // Extracting courseUrl from the path
  const collegeData = collegeDataJson;
  const router = useRouter();

  // State to control the number of displayed colleges
  const [visibleCount, setVisibleCount] = useState(30);

  // Function to load more colleges
  const loadMoreColleges = () => {
    setVisibleCount((prevCount) => prevCount + 30);
  };

  const createSlug = (id, name, city) => {
    const cleanedName = encodeURIComponent(
      name
        .replace(/[\[\]]/g, "") // Remove square brackets
        .replace(/[-]+/g, "-") // Replace multiple hyphens with a single hyphen
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .toLowerCase()
    );

    const formattedCity = encodeURIComponent(
      city.toLowerCase().replace(/\s+/g, "-")
    );
    return `${id}-${cleanedName}-${formattedCity}`;
  };

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

  const [openAccordion, setOpenAccordion] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
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
      <div className="lg:px-10 px-6 pt-10 overflow-hidden">
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
        <div className="bg-gray-100 p-6 mt-10 rounded-lg relative">
          <h1 className="text-4xl max-sm:text-2xl font-semibold mb-6 max-sm:mb-2 text-prim">
            {!selectedDepartment && !selectedCourse
              ? "Top all India Colleges"
              : `Top ${courseNameForPageTitle} Colleges`}
          </h1>

          <div className="relative">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "max-h-none" : "max-h-[10rem]"
              }`}
            >
              {!selectedDepartment && !selectedCourse ? (
                <div>
                  {/* Default data when no filter is selected */}
                  <p>
                    India is home to some of the world’s finest colleges and
                    universities, offering a diverse range of courses and
                    programs to cater to every student’s aspirations. From
                    historic institutions with decades of academic excellence to
                    modern universities embracing cutting-edge technology, the
                    Indian education system is designed to empower students for
                    global opportunities. Whether you’re looking for
                    engineering, medical sciences, arts, commerce, or
                    professional courses, India’s colleges provide a strong
                    foundation for your future.
                  </p>
                  <h2 className="text-2xl text-tertiary font-semibold mt-3 mb-2">
                    Diverse Educational Opportunities
                  </h2>
                  <p>
                    One of the standout features of India’s college ecosystem is
                    its diversity. With over 40,000 colleges and 900
                    universities, students have the flexibility to choose from
                    undergraduate, postgraduate, diploma, and doctoral programs
                    in virtually every field imaginable. India’s colleges cater
                    to a wide array of interests, such as:
                  </p>
                  <ul className="pl-6 list-disc mt-2">
                    <li className="pb-2">
                      <b>Engineering and Technology:</b> Institutes like the
                      IITs, NITs, and IIITs are globally recognized for their
                      excellence in engineering and technology education.
                    </li>
                    <li className="pb-2">
                      <b>Medical Sciences:</b> Prestigious colleges like AIIMS,
                      JIPMER, and CMC Vellore offer world-class medical training
                      and research opportunities.
                    </li>

                    <li className="pb-2">
                      <b>Arts and Humanities: </b> For creative minds,
                      institutions like Delhi University, JNU, and Jadavpur
                      University provide robust programs in literature, history,
                      sociology, and fine arts.
                    </li>
                    <li className="pb-2">
                      <b>Commerce and Business: </b> Colleges like SRCC, IIMs,
                      and Christ University lead the way in nurturing tomorrow’s
                      business leaders.
                    </li>
                  </ul>
                  <h2 className="text-2xl text-tertiary font-semibold mt-3 mb-2">
                    Colleges Across States
                  </h2>
                  <p>
                    India’s colleges are spread across its vast geographical
                    landscape, ensuring access to quality education in every
                    state. From the bustling academic hubs of Delhi NCR, Mumbai,
                    and Bangalore to the serene campuses of Kerala, Rajasthan,
                    and Himachal Pradesh, every region offers unique academic
                    environments. Whether you’re seeking opportunities in
                    metropolitan cities or looking for a more peaceful learning
                    experience in smaller towns, there’s a college in India
                    tailored for your needs.
                  </p>
                  <h2 className="text-2xl text-tertiary font-semibold mt-3 mb-2">
                    Campus Life in India
                  </h2>
                  <p>
                    Beyond academics, India’s colleges are renowned for their
                    vibrant campus culture. Students can engage in
                    extracurricular activities such as cultural fests, sports
                    tournaments, and technical competitions. Facilities like
                    libraries, state-of-the-art laboratories, and modern hostels
                    ensure a comfortable and enriching student life.
                  </p>
                  <h2 className="text-2xl text-tertiary font-semibold mt-3 mb-2">
                    Begin Your Journey Today
                  </h2>
                  <p>
                    Whether you’re a student from India or abroad, exploring
                    colleges in India is your first step toward a bright future.
                    With so many options available, finding the right college
                    can be overwhelming—but it’s also an exciting journey filled
                    with potential and promise. Let us help you filter through
                    courses, departments, states, and fee ranges to find the
                    perfect institution for your needs. Start exploring now, and
                    take a step closer to your dreams!
                  </p>
                </div>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: courseAboutForPageTitle,
                  }}
                  className="dangerousHTML"
                />
              )}
            </div>
            {/* Blurred Effect */}
            {!isExpanded && (
              <div className="w-full h-8 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
            )}

            <div className="flex justify-center items-center bg-white rounded-b-lg">
              {/* Action Buttons */}
              <button
                onClick={toggleReadMore}
                className="text-second font-medium hover:underline focus:outline-none text-center py-2 rounded-b-lg"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          <img
            src="/assets/bg_elem/hat-docs.png"
            alt="Graduation Hat Image"
            className="absolute lg:-top-20 lg:-right-20 2xl:w-56 xl:w-56 lg:w-56 md:w-32 max-sm:w-20 w-28 md:-top-10 md:-right-10 max-sm:-top-6 max-sm:-right-6 -top-10 -right-10"
          />
        </div>
      </div>

      <div className="lg:px-10 px-6">
        {/* Filters */}

        {/* for mobile and tab view */}
        <div className="lg:hidden md:block max-sm:block">
          <div className="flex flex-col bg-gray-100 py-4 px-4 mt-6">
            <div className="px-3 py-1 border-2 bg-gray-200 rounded-full flex items-center gap-2 text-sm mr-auto">
              <Filter size={14} />{" "}
              <DynamicSidebarModal
                headerText="All Filters"
                headerIcon=<Filter size={16} />
                triggerText="Filter Colleges"
                sidebarWidth=""
              >
                <div className="space-y-4 overflow-y-auto h-[80vh] custom-course-scrollbar">
                  {/* Department Filter Mobile View */}
                  <div>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 focus:outline-none flex justify-between items-center ${
                        selectedDepartment
                          ? "border-prim text-tertiary bg-prim/20"
                          : "border-gray-300 bg-white text-gray-800"
                      }`}
                      onClick={() => toggleAccordion(0)}
                    >
                      Department{" "}
                      {openAccordion === 0 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === 0 ? "h-auto p-1" : "h-0"
                      }`}
                    >
                      <div className="">
                        {uniqueSpecializations?.length > 0 ? (
                          uniqueDepartments?.map((department) => (
                            <div
                              key={department}
                              className={`p-2 cursor-pointer text-sm rounded-lg mt-2 ${
                                department === selectedDepartment
                                  ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                  : "hover:bg-gray-100 border"
                              }`}
                              onClick={() => {
                                handleDepartmentChange(department);
                                setIsDepartmentDropdownOpen(false);
                              }}
                            >
                              {department}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-2 text-gray-500">
                            No department available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Course Filter Mobile View */}
                  <div>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 focus:outline-none flex justify-between items-center ${
                        selectedCourse
                          ? "border-prim text-tertiary bg-prim/20"
                          : "border-gray-300 bg-white text-gray-800"
                      }`}
                      onClick={() => toggleAccordion(1)}
                    >
                      Course{" "}
                      {openAccordion === 1 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === 1 ? "h-auto p-1" : "h-0"
                      }`}
                    >
                      <div className="">
                        {uniqueCourses?.length > 0 ? (
                          uniqueCourses?.map((course) => (
                            <div
                              key={course}
                              className={`p-2 cursor-pointer text-sm rounded-lg mt-2 ${
                                course === selectedCourse
                                  ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                  : "hover:bg-gray-100 border"
                              }`}
                              onClick={() => {
                                handleCourseChange(course);
                                setIsCourseDropdownOpen(false);
                              }}
                            >
                              {course}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-2 text-gray-500">
                            No course available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Specialization Mobile View */}
                  <div>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 focus:outline-none flex justify-between items-center ${
                        selectedSpecialization
                          ? "border-prim text-tertiary bg-prim/20"
                          : "border-gray-300 bg-white text-gray-800"
                      }`}
                      onClick={() => toggleAccordion(2)}
                    >
                      Specialization{" "}
                      {openAccordion === 2 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === 2 ? "h-auto p-1" : "h-0"
                      }`}
                    >
                      <div className="">
                        {uniqueSpecializations.length > 0 ? (
                          uniqueSpecializations.map((specialization) => (
                            <div
                              key={specialization}
                              className={`p-2 cursor-pointer text-sm rounded-lg mt-2 ${
                                specialization === selectedSpecialization
                                  ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                  : "hover:bg-gray-100 border"
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
                    </div>
                  </div>

                  {/* State Filter Mobile View */}
                  <div>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 focus:outline-none flex justify-between items-center ${
                        selectedState
                          ? "border-prim text-tertiary bg-prim/20"
                          : "border-gray-300 bg-white text-gray-800"
                      }`}
                      onClick={() => toggleAccordion(3)}
                    >
                      State{" "}
                      {openAccordion === 3 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === 3 ? "h-auto p-1" : "h-0"
                      }`}
                    >
                      <div className="">
                        {states?.length ? (
                          states?.map((state) => (
                            <div
                              key={state}
                              onClick={() => {
                                handleStateChange(state);
                                setIsStateDropdownOpen(false);
                              }}
                              className={`p-2 cursor-pointer text-sm rounded-lg mt-2 ${
                                state === selectedState
                                  ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                  : "hover:bg-gray-100 border"
                              }`}
                            >
                              {state}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-2 text-gray-500">
                            No state available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* City filter mobile view */}
                  <div>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 focus:outline-none flex justify-between items-center ${
                        selectedCity
                          ? "border-prim text-tertiary bg-prim/20"
                          : "border-gray-300 bg-white text-gray-800"
                      }`}
                      onClick={() => toggleAccordion(4)}
                    >
                      City{" "}
                      {openAccordion === 4 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === 4 ? "h-auto p-1" : "h-0"
                      }`}
                    >
                      <div className="">
                        {cities?.length ? (
                          cities?.map((city) => (
                            <div
                              key={city}
                              onClick={() => {
                                handleCityChange(city);
                                setIsCityDropdownOpen(false);
                              }}
                              className={`p-2 cursor-pointer text-sm rounded-lg mt-2 ${
                                city === selectedCity
                                  ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                  : "hover:bg-gray-100 border"
                              }`}
                            >
                              {city}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-2 text-gray-500">
                            No city available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* College Type filter mobile view */}
                  <div>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 focus:outline-none flex justify-between items-center ${
                        selectedCollegeType
                          ? "border-prim text-tertiary bg-prim/20"
                          : "border-gray-300 bg-white text-gray-800"
                      }`}
                      onClick={() => toggleAccordion(5)}
                    >
                      College Type{" "}
                      {openAccordion === 5 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === 5 ? "h-auto p-1" : "h-0"
                      }`}
                    >
                      <div className="">
                        {collegeTypes?.length ? (
                          collegeTypes?.map((type) => (
                            <div
                              key={type}
                              onClick={() => {
                                handleCollegeTypeChange(type);
                                setIsCollegeTypeDropdownOpen(false);
                              }}
                              className={`p-2 cursor-pointer text-sm rounded-lg mt-2 capitalize ${
                                type === selectedCollegeType
                                  ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                  : "hover:bg-gray-100 border"
                              }`}
                            >
                              {type}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-2 text-gray-500">
                            No college type available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Fee Range filter mobile view */}
                  <div>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 focus:outline-none flex justify-between items-center ${
                        selectedFeeRange[0]
                          ? "border-prim text-tertiary bg-prim/20"
                          : "border-gray-300 bg-white text-gray-800"
                      }`}
                      onClick={() => toggleAccordion(6)}
                    >
                      Fee Range{" "}
                      {openAccordion === 6 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === 6 ? "h-auto p-2" : "h-0"
                      }`}
                    >
                      <div className="rounded-lg mt-2">
                        <div className="flex justify-between items-center text-sm mb-2">
                          <span>
                            Min: ₹{formatNumberWithCommas(selectedFeeRange[0])}
                          </span>
                          <span>
                            Max: ₹{formatNumberWithCommas(selectedFeeRange[1])}
                          </span>
                        </div>
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
                          className="range-input mb-4"
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
                          className="range-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </DynamicSidebarModal>
            </div>
            {/* Selected Filters */}
            <div className="">
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
                  <h3 className="text-sm text-tertiary font-semibold mb-2 mt-3">
                    Selected Filters:
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedDepartment && (
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center capitalize">
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
                        <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
                          Fee Range: ₹
                          {formatNumberWithCommas(selectedFeeRange[0])} - ₹
                          {formatNumberWithCommas(selectedFeeRange[1])}
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
        </div>

        {/* for dekstop view */}
        <div className="lg:block hidden">
          <div className="z-10 bg-gray-100 py-4 px-4 mt-6">
            <div className="flex flex-wrap 2xl:gap-4 xl:gap-4 lg:gap-2 items-center">
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
                  Department
                </button>
                {isDepartmentDropdownOpen && (
                  <div className="absolute bg-white shadow rounded-lg mt-2 w-96 p-3 h-auto max-h-96 overflow-y-auto custom-course-scrollbar">
                    <div className="rounded-lg flex flex-wrap gap-2">
                      {uniqueDepartments?.length > 0 ? (
                        uniqueDepartments?.map((department) => (
                          <div
                            key={department}
                            className={`px-3 py-1 cursor-pointer text-sm rounded-full ${
                              department === selectedDepartment
                                ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                : "hover:bg-gray-100 border"
                            }`}
                            onClick={() => {
                              handleDepartmentChange(department);
                              setIsDepartmentDropdownOpen(false);
                            }}
                          >
                            {department}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-500">
                          No department available
                        </div>
                      )}
                    </div>
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
                  Course
                </button>
                {isCourseDropdownOpen && (
                  <div className="absolute bg-white shadow rounded-lg mt-2 w-96 p-3 h-auto max-h-96 overflow-y-auto custom-course-scrollbar">
                    <div className="rounded-lg flex flex-wrap gap-2">
                      {uniqueCourses?.length > 0 ? (
                        uniqueCourses?.map((course) => (
                          <div
                            key={course}
                            className={`px-3 py-1 cursor-pointer text-sm rounded-full ${
                              course === selectedCourse
                                ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                : "hover:bg-gray-100 border"
                            }`}
                            onClick={() => {
                              handleCourseChange(course);
                              setIsCourseDropdownOpen(false);
                            }}
                          >
                            {course}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-500">
                          No course available
                        </div>
                      )}
                    </div>
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
                  onClick={() =>
                    setIsSpecializationDropdownOpen((prev) => !prev)
                  }
                >
                  Specialization
                </button>
                {isSpecializationDropdownOpen && (
                  <div className="absolute bg-white shadow rounded-lg mt-2 w-96 p-3 h-auto max-h-96 overflow-y-auto custom-course-scrollbar">
                    <div className="rounded-lg flex flex-wrap gap-2">
                      {uniqueSpecializations?.length > 0 ? (
                        uniqueSpecializations?.map((specialization) => (
                          <div
                            key={specialization}
                            className={`px-3 py-1 cursor-pointer text-sm rounded-full ${
                              specialization === selectedSpecialization
                                ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                : "hover:bg-gray-100 border"
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
                  </div>
                )}
              </div>

              {/* State Filter */}
              <div className="relative" ref={stateDropdownRef}>
                <button
                  className={`px-3 py-1 border-2 rounded-full flex items-center gap-2 text-sm ${
                    selectedState
                      ? "border-prim text-tertiary bg-prim/20"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                  onClick={() => setIsStateDropdownOpen((prev) => !prev)}
                >
                  State
                </button>
                {isStateDropdownOpen && (
                  <div className="absolute bg-white shadow rounded-lg mt-2 w-96 p-3 h-auto max-h-96 overflow-y-auto custom-course-scrollbar">
                    <div className="rounded-lg flex flex-wrap gap-2">
                      {states?.length > 0 ? (
                        states?.map((state) => (
                          <div
                            key={state}
                            onClick={() => {
                              handleStateChange(state);
                              setIsStateDropdownOpen(false);
                            }}
                            className={`px-3 py-1 cursor-pointer text-sm rounded-full ${
                              state === selectedState
                                ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                : "hover:bg-gray-100 border"
                            }`}
                          >
                            {state}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-500">
                          No state available
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* City Filter */}
              <div className="relative" ref={cityDropdownRef}>
                <button
                  className={`px-3 py-1 border-2 rounded-full flex items-center gap-2 text-sm ${
                    selectedCity
                      ? "border-prim text-tertiary bg-prim/20"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                  onClick={() => setIsCityDropdownOpen((prev) => !prev)}
                >
                  City
                </button>
                {isCityDropdownOpen && (
                  <div className="absolute bg-white shadow rounded-lg mt-2 w-96 p-3 h-auto max-h-96 overflow-y-auto custom-course-scrollbar">
                    <div className="rounded-lg flex flex-wrap gap-2">
                      {cities?.length > 0 ? (
                        cities?.map((city) => (
                          <div
                            key={city}
                            onClick={() => {
                              handleCityChange(city);
                              setIsCityDropdownOpen(false);
                            }}
                            className={`px-3 py-1 cursor-pointer text-sm rounded-full ${
                              city === selectedCity
                                ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                : "hover:bg-gray-100 border"
                            }`}
                          >
                            {city}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-500">
                          No city available
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* College type Filter */}
              <div className="relative" ref={collegeTypeDropdownRef}>
                <button
                  className={`px-3 py-1 border-2 rounded-full flex items-center gap-2 text-sm ${
                    selectedCollegeType
                      ? "border-prim text-tertiary bg-prim/20"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                  onClick={() => setIsCollegeTypeDropdownOpen((prev) => !prev)}
                >
                  College Type
                </button>
                {isCollegeTypeDropdownOpen && (
                  <div className="absolute bg-white shadow rounded-lg mt-2 w-96 p-3 h-auto max-h-96 overflow-y-auto custom-course-scrollbar">
                    <div className="rounded-lg flex flex-wrap gap-2">
                      {collegeTypes?.length > 0 ? (
                        collegeTypes?.map((type) => (
                          <div
                            key={type}
                            onClick={() => {
                              handleCollegeTypeChange(type);
                              setIsCollegeTypeDropdownOpen(false);
                            }}
                            className={`px-3 py-1 cursor-pointer text-sm rounded-full ${
                              type === selectedCollegeType
                                ? "border-2 border-orange-500 bg-orange-100 text-orange-600"
                                : "hover:bg-gray-100 border"
                            }`}
                          >
                            {type}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-500">
                          No college type available
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Fee range Filter */}
              <div className="relative" ref={feeRangeDropdownRef}>
                <button
                  className={`px-3 py-1 border-2 rounded-full flex items-center gap-2 text-sm ${
                    selectedFeeRange[0]
                      ? "border-prim text-tertiary bg-prim/20"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                  onClick={() => setIsFeeRangeDropdownOpen((prev) => !prev)}
                >
                  Fee Range
                </button>
                {isFeeRangeDropdownOpen && (
                  <div className="absolute bg-white shadow rounded-lg mt-2 w-96 p-3 h-auto max-h-96 overflow-y-auto custom-course-scrollbar">
                    <div className="rounded-lg">
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span>
                          Min: ₹{formatNumberWithCommas(selectedFeeRange[0])}
                        </span>
                        <span>
                          Max: ₹{formatNumberWithCommas(selectedFeeRange[1])}
                        </span>
                      </div>
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
                        className="range-input mb-4"
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
                        className="range-input"
                      />
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
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedDepartment && (
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
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
                      <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center capitalize">
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
                        <div className="border-2 border-prim  text-tertiary rounded-full text-xs px-3 py-1 flex items-center">
                          Fee Range: ₹
                          {formatNumberWithCommas(selectedFeeRange[0])} - ₹
                          {formatNumberWithCommas(selectedFeeRange[1])}
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
        </div>

        {/* Filtered Colleges */}
        <div className="mt-3 mb-20 p-4 bg-gray-100">
          <h3 className="text-lg font-semibold mb-4">
            Found{" "}
            {filteredColleges?.length > 0 ? `${filteredColleges?.length}` : `0`}{" "}
            {filteredColleges?.length > 1 ? "Colleges" : "College"}
          </h3>

          {filteredColleges?.length > 0 ? (
            <div className="border overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2 text-left">S.No</th>
                    <th className="border px-4 py-2 text-left">Colleges</th>
                    <th className="border px-4 py-2 text-left">Courses Fee</th>
                    <th className="border px-4 py-2 text-left">College Type</th>
                    <th className="border px-4 py-2 text-left">
                      Specialization
                    </th>
                    <th className="border px-4 py-2 text-left">Placement</th>
                    <th className="border px-4 py-2 text-left">Grade</th>
                    {/* Add more columns as needed */}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filteredColleges
                    ?.slice(0, visibleCount)
                    .map((college, index) => (
                      <tr key={college.collegeId} className="border-b">
                        <td className="border px-4 py-2 align-top">
                          {index + 1}
                        </td>
                        <td className="border px-4 py-2 align-top">
                          <div className="flex gap-2">
                            <a
                              // href={`/collegepage/${college.collegeName}`}
                              href={`/college/${createSlug(
                                college.collegeId,
                                college.collegeName,
                                college.collegeAddress.city
                              )}`}
                              className="lg:w-auto w-1/3"
                            >
                              <img
                                src={college.collegeLogo}
                                alt=""
                                className="rounded-lg w-12 h-12"
                              />
                            </a>
                            <div>
                              <a
                                href={`/college/${createSlug(
                                  college.collegeId,
                                  college.collegeName,
                                  college.collegeAddress.city
                                )}`}
                                className="text-tertiary hover:underline text-lg font-semibold"
                              >
                                {college.collegeName}
                              </a>
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
                          <div className="mt-3 bg-gray-50 p-2 rounded-lg flex justify-between gap-2">
                            <button
                              onClick={() => alert("Button clicked!")}
                              className="text-xs text-prim flex items-center font-medium gap-1"
                            >
                              <ArrowRight size={16} />
                              Apply Now
                            </button>
                            <button
                              onClick={() => alert("Button clicked!")}
                              className="text-xs text-green-600 flex items-center font-medium gap-1"
                            >
                              <Download size={16} />
                              Apply Now
                            </button>
                            <button
                              onClick={() => alert("Button clicked!")}
                              className="text-xs text-prim flex items-center font-medium gap-1"
                            >
                              <Scale size={16} />
                              Compare
                            </button>
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
                          <a
                            href={`/college/${createSlug(
                                college.collegeId,
                                college.collegeName,
                                college.collegeAddress.city
                              )}?tab=courses-and-fees`}
                            className="text-tertiary hover:underline"
                          >
                            (
                            <span className="text-orange-500">
                              {calculateSpecializations(college)}
                            </span>
                            ) Specializations
                          </a>
                        </td>
                        <td className="border px-4 py-2 align-top">
                          <div>
                            {!college.placements.lowest &&
                            !college.placements.average &&
                            !college.placements.highest ? (
                              <p className="text-red-500 font-light">
                                - No Placement Stats -
                              </p>
                            ) : (
                              <>
                                {college.placements.lowest && (
                                  <div className="mb-2">
                                    <p className="text-green-600">
                                      ₹ {college.placements.lowest}
                                    </p>
                                    <p className="text-xs text-textClr">
                                      (Lowest Package)
                                    </p>
                                  </div>
                                )}
                                {college.placements.average && (
                                  <div className="mb-2">
                                    <p className="text-green-600">
                                      ₹ {college.placements.average}
                                    </p>
                                    <p className="text-xs text-textClr">
                                      (Average Package)
                                    </p>
                                  </div>
                                )}
                                <div>
                                  <p className="text-green-600">
                                    ₹ {college.placements.highest}
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
            </div>
          ) : (
            <div className="text-red-500 text-center py-10">
              No college available.
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredColleges?.length && (
            <div className="text-center mt-6">
              <DynamicThemeButton onClick={loadMoreColleges}>
                Load More Colleges
              </DynamicThemeButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterableCoursePage;
