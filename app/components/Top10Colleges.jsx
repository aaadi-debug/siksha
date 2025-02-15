import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import CollegeData from "../data/collegeData.json";

const data = CollegeData.data;

const generateTabsData = (data) => {
  // Extract unique courseSlugs from the nested structure
  const uniqueCourseSlugs = [
    ...new Set(
      data.flatMap((college) =>
        college.departments.flatMap((department) =>
          department.courses.map((course) => course.courseSlug)
        )
      )
    ),
  ].filter(Boolean); // Remove any undefined or null values

  console.log("Unique Course Slugs:", uniqueCourseSlugs);

  // Create tabs data dynamically
  return uniqueCourseSlugs.map((slug) => ({
    id: slug,
    label: slug, // Display the courseSlug as the tab name
    content: data
      .map((college) => ({
        ...college,
        departments: college.departments
          .map((department) => ({
            ...department,
            courses: department.courses.filter(
              (course) => course.courseSlug === slug
            ),
          }))
          .filter((department) => department.courses.length > 0), // Remove empty departments
      }))
      .filter((college) => college.departments.length > 0), // Remove colleges without matching courses
  }));
};

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

// Usage
const tabsData = generateTabsData(data);

console.log("Tab 2", tabsData);

const Top10Colleges = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.id);
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const isOverflowingLeft = containerRef.current.scrollLeft > 0;
        const isOverflowingRight =
          containerRef.current.scrollLeft <
          containerRef.current.scrollWidth - containerRef.current.clientWidth;

        setShowLeftArrow(isOverflowingLeft);
        setShowRightArrow(isOverflowingRight);
      }
    };

    // Run the check when the component is mounted
    checkOverflow();

    // Add event listener to update arrows on scroll
    const scrollContainer = containerRef.current;
    scrollContainer.addEventListener("scroll", checkOverflow);

    // Cleanup on unmount
    return () => {
      scrollContainer.removeEventListener("scroll", checkOverflow);
    };
  }, [tabsData]); // Dependency on tabsData to check when it changes

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
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

  return (
    <div className="bg-prim-light py-20 lg:px-20">
      <h2 data-aos="fade-up" className="mb-4 text-3xl text-black font-semibold">
        Top 10 Colleges
      </h2>

      {/* Tabs */}
      <div className="relative flex items-center">
        {/* Left Button (only visible when overflow on the left) */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute -left-5 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <ArrowLeft size={16} />
          </button>
        )}

        {/* Scrollable Tab Container */}
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-full ${
                activeTab === tab.id
                  ? "border-2 border-prim bg-prim text-white"
                  : "border-2 border-prim text-prim hover:bg-prim hover:text-white"
              } transition duration-300`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Button (only visible when overflow on the right) */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute -right-5 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <ArrowRight size={16} />
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-4 grid gap-6 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
        {tabsData
          .filter((tab) => tab.id === activeTab)
          .map((tab) =>
            tab.content.map((college) => (
              <div
                key={college.collegeId}
                className="rounded-2xl h-[400px] flex flex-col justify-end items-center"
                style={{
                  backgroundImage: `url(${college.collegeImages[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
              >
                <a
                  href={`/college/${createSlug(
                    college.collegeId,
                    college.collegeName,
                    college.collegeAddress.city
                  )}`}
                  className="text-black  bg-white w-full p-3 flex flex-col items-center rounded-2xl"
                >
                  <img
                    src={college.collegeLogo}
                    alt={college.collegeName}
                    className="w-16 h-16 rounded-full bg-white shadow-md p-1 -mt-12"
                  />
                  <div className="flex gap-4 mt-6 text-left w-full">
                    <div className="w-1/3 text-sm font-semibold">College</div>
                    <div className="w-2/3 text-sm twoLinerTitle2">
                      {college.collegeName}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2 text-left w-full">
                    <div className="w-1/3 text-sm font-semibold">Cut-Off</div>
                    <div className="w-2/3 text-sm twoLinerTitle2">
                      {/* Check if cutOffs and cutoffExamWise exist */}
                      {college?.cutOffs?.[0]?.cutoffExamWise?.[0] ? (
                        <div className="flex">
                          <span className="font-semibold">
                            {college?.cutOffs[0]?.cutoffExamWise[0]?.examName}{" "}
                            Cut-Off:
                          </span>
                          <span className="ml-2">
                            {
                              college?.cutOffs[0]?.cutoffExamWise[0]
                                ?.examCutoffTable?.rows[0]?.[1]?.content
                            }
                          </span>
                        </div>
                      ) : (
                        <div>No exam cutoffs available</div>
                      )}
                    </div>
                  </div>
                  {/* <div className="flex gap-4 mt-2 text-left w-full">
                    <div className="w-1/3 text-sm font-semibold">
                      Application Date
                    </div>
                    <div className="w-2/3 text-sm twoLinerTitle2">
                      {college.collegeName}
                    </div>
                  </div> */}
                  <div className="flex gap-4 mt-2 text-left w-full">
                    <div className="w-1/3 text-sm font-semibold">Fees</div>
                    <div className="w-2/3 text-sm twoLinerTitle2">
                      {(() => {
                        const { minFee, maxFee } = calculateMinMaxFees(college);
                        return `₹ ${formatNumberWithCommas(
                          minFee
                        )} - ₹ ${formatNumberWithCommas(maxFee)}`;
                      })()}{" "}
                      <div className="text-xs">(1st Year Fees)</div>
                    </div>
                  </div>
                </a>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default Top10Colleges;
