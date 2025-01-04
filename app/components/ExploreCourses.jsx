import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import CollegeData from "../data/collegeData.json";

const data = CollegeData.data;
const processData = (data, degree) => {
  return data
    .flatMap((college) =>
      college.departments.flatMap((department) =>
        department.courses
          .filter((course) => course.courseDegree === degree)
          .flatMap((course) =>
            course.specialization.map((specialization) => {
              // Ensure fee.general is an array before processing
              const generalFees = Array.isArray(specialization.fee?.general)
                ? specialization.fee.general
                : [];

              const avgFees = generalFees.length
                ? generalFees.reduce(
                    (total, item) => total + Number(item.tuitionFee || 0),
                    0
                  ) / generalFees.length
                : 0;

              return {
                courseId: course.id,
                courseName: `${course.courseSlug} ${specialization.name}`,
                courseType: specialization.courseType,
                duration: specialization.courseDuration,
                avgFees,
                noOfColleges: 1, // Adjust as needed for calculating college counts
                courseCategory: course.courseUrl,
              };
            })
          )
      )
    )
    .flat();
};

const generateTabsData = (data) => {
  // Extract unique degrees from the nested structure
  const uniqueDegrees = [
    ...new Set(
      data.flatMap((college) =>
        college.departments.flatMap((department) =>
          department.courses.map((course) => course.courseDegree)
        )
      )
    ),
  ].filter(Boolean); // Filter out any undefined or null degrees

  console.log("Unique degrees", uniqueDegrees);

  // Create tabs data dynamically
  return uniqueDegrees.map((degree) => ({
    id: degree,
    label: degree,
    courseCategory: degree.toLowerCase(),
    content: processData(data, degree),
  }));
};

// (course) => course.courseDegree)
// Usage
const tabsData = generateTabsData(data);

console.log("Tab 2", tabsData);

const ExploreCourses = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.id || "");
  const [scrollPositions, setScrollPositions] = useState({});

  const scrollContainerRef = useRef(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isMouseDown.current = true;
    startX.current = e.clientX;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown.current) return;
    const x = e.clientX;
    const walk = (x - startX.current) * 2; // Multiply by 2 to increase drag sensitivity
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  // Update scroll positions dynamically
  const handleScroll = (tabId) => {
    const container = document.getElementById(`${tabId}-slider`);
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      console.log(
        `Tab: ${tabId}, ScrollLeft: ${scrollLeft}, ScrollWidth: ${scrollWidth}, ClientWidth: ${clientWidth}`
      );
      setScrollPositions((prev) => ({
        ...prev,
        [tabId]: {
          canScrollLeft: scrollLeft > 0,
          canScrollRight: scrollLeft + clientWidth < scrollWidth,
        },
      }));
    }
  };

  useEffect(() => {
    const container = document.getElementById(`${activeTab}-slider`);
    if (container) {
      container.addEventListener("scroll", () => handleScroll(activeTab));
      handleScroll(activeTab); // Initialize for active tab
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", () => handleScroll(activeTab));
      }
    };
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    handleScroll(tabId); // Update scroll positions for new tab
  };


  return (
    <div className="bg-skin">
      <div className="container  pt-48 pb-10 lg:px-32 mx-auto explorecourses">
        <h2 className="text-black text-3xl font-semibold ">Explore Courses</h2>
        <div className="w-full mt-4">
          <div className="w-full">
            {/* Tab Labels */}
            <div
              className="flex gap-2 border-gray-300 overflow-x-auto no-scrollbar"
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves
            >
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium transition duration-500 ${
                    activeTab === tab.id
                      ? "border rounded-full bg-white border-black text-black"
                      : "text-gray-500 border rounded-full border-black hover:text-black hover:bg-white hover:rounded-full hover:border hover:border-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-2 relative ">
              {tabsData.length > 0 ? (
                tabsData.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <div
                        key={tab.id}
                        className="relative border-x border-secondary-light rounded"
                      >
                        <div
                          id={`${tab.id}-slider`}
                          className="flex gap-4 overflow-x-auto no-scrollbar"
                          ref={scrollContainerRef}
                          onMouseDown={handleMouseDown}
                          onMouseMove={handleMouseMove}
                          onMouseUp={handleMouseUp}
                          onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves
                        >
                          {tab?.content?.map((data) => (
                            <div
                              key={data._id}
                              className="min-w-[300px] max-w-[300px] p-3 bg-white border rounded-lg flex-shrink-0 flex flex-col justify-between"
                            >
                              <div>
                                <p className="capitalize text-xs p-2 bg-skin rounded inline">
                                  {data.courseType}
                                </p>
                                <h3 className="text-lg font-semibold mb-2 mt-2">
                                  {data.courseName}
                                </h3>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <p className="text-textClr">Duration</p>
                                    <p className="text-black">
                                      {data.duration} Years
                                    </p>
                                  </div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <p className="text-textClr">
                                      Total Avg. Fees
                                    </p>
                                    <p className="text-black">{data.avgFees}</p>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <p className="text-textClr">Colleges</p>
                                    <p className="text-black">
                                      {data.noOfColleges}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between items-center pt-2 mt-3 text-sm border-t group">
                                <Link
                                  href={`/course/${data.courseCategory}`}
                                  className="text-textClr hover:text-primary"
                                >
                                  Course Overview
                                </Link>
                                <span className="text-black hover:text-primary">
                                  <ChevronRight size={16} />
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Left Scroll Button */}
                        {scrollPositions[tab.id]?.canScrollLeft && (
                          <button
                            className="absolute top-[40%] -left-6 z-10 bg-white rounded-full px-3 py-3 shadow"
                            onClick={() => {
                              const container = document.getElementById(
                                `${tab.id}-slider`
                              );
                              container.scrollBy({
                                left: -200,
                                behavior: "smooth",
                              });
                            }}
                          >
                            <ArrowLeft size={16} />
                          </button>
                        )}

                        {/* Right Scroll Button */}
                        {scrollPositions[tab.id]?.canScrollRight && (
                          <button
                            className="absolute top-[40%] -right-6 z-10 bg-white rounded-full px-3 py-3 shadow"
                            onClick={() => {
                              const container = document.getElementById(
                                `${tab.id}-slider`
                              );
                              container.scrollBy({
                                left: 200,
                                behavior: "smooth",
                              });
                            }}
                          >
                            <ArrowRight size={16} />
                          </button>
                        )}
                      </div>
                    )
                )
              ) : (
                <p className="text-gray-400 text-sm">No courses found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
