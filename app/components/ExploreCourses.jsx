import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const tabsData = [
  {
    id: "Bachelors",
    label: "Bachelors",
    courseCategory: "bachelors",
    content: [
      {
        _id: 1,
        time: "Full Time",
        courseName: "B.Com General",
        courseCategory: "bachelor of commerce",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "bachelor of commerce bcom",
      },
      {
        _id: 2,
        time: "Full Time",
        courseName: "B.Ed General",
        courseCategory: "bachelor of education",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "bachelor of commerce bcom",
      },
      {
        _id: 3,
        time: "Full Time",
        courseName: "BCA General",
        courseCategory: "bachelor of computer application",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "bachelor of commerce bcom",
      },
      {
        _id: 4,
        time: "Full Time",
        courseName: "Bachelor of Arts",
        courseCategory: "bachelor of arts",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "bachelor of commerce bcom",
      },
      {
        _id: 5,
        time: "Full Time",
        courseName: "BBA General",
        courseCategory: "bachelor of business administration",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "bachelor of commerce bcom",
      },
    ],
  },
  {
    id: "Masters",
    label: "Masters",
    courseCategory: "masters",
    content: [
      {
        _id: 7,
        time: "Full Time",
        courseName: "MBA General",
        courseCategory: "bachelor of commerce",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "master-of-business-administration-mba",
      },
      {
        _id: 8,
        time: "Full Time",
        courseName: "Master of Computer Applications[MCA]",
        courseCategory: "bachelor of commerce",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "master-of-computer-applications-mca",
      },
      {
        _id: 9,
        time: "Full Time",
        courseName: "B.Com General",
        courseCategory: "bachelor of commerce",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "bachelor of commerce bcom",
      },
      {
        _id: 10,
        time: "Full Time",
        courseName: "B.Com General",
        courseCategory: "bachelor of commerce",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "bachelor of commerce bcom",
      },
      {
        _id: 11,
        time: "Full Time",
        courseName: "B.Com General",
        courseCategory: "bachelor of commerce",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "bachelor of commerce bcom",
      },
      {
        _id: 12,
        time: "Full Time",
        courseName: "B.Com General",
        courseCategory: "bachelor of commerce",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "bachelor of commerce bcom",
      },
    ],
  },
  {
    id: "Doctorate",
    label: "Doctorate",
    courseCategory: "doctorate",
    content: [
      {
        _id: 13,
        time: "Full Time",
        courseName: "Ph.D Chemistry",
        courseCategory: "phd chemistry",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "master-of-business-administration-mba",
      },
      {
        _id: 14,
        time: "Full Time",
        courseName: "Ph.D Physics",
        courseCategory: "phd phsics",
        duration: 3,
        avgFees: "69.11 K",
        noOfColleges: "6728",
        link: "phd-physics",
      },
    ],
  },
];

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
    <div>
      <div className=" bg-secondary-light pt-48 pb-10 lg:px-32 mx-auto px-6 explorecourses">
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
              {tabsData.map(
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
                              <p className="capitalize text-xs p-2 bg-secondary-light rounded inline">
                                {data.time}
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
                            <div>
                              <Link
                                href={`/courses/${data.courseCategory}`}
                                className="flex justify-between items-center pt-2 text-sm mt-3 border-t group"
                              >
                                <p className="text-textClr hover:text-primary">
                                  Course Overview
                                </p>
                                <p className="text-black hover:text-primary">
                                  <ChevronRight size={16} />
                                </p>
                              </Link>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
