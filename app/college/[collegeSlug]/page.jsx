"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation"; // Import useRouter from next/router
import { TbLayoutDashboard } from "react-icons/tb";

import studentsDataJson from "../../data/studentsData.json";
import collegeDataJson from "../../data/collegeData.json";

import {
  X,
  LogOut,
  Pencil,
  ChevronRight,
  MapPin,
  School,
  Calendar,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import Breadcrumbs2 from "@/app/components/Breadcrumbs2";
import Dashboard from "@/app/components/studentDashboard/Dashboard";
import Preloader from "@/app/components/Preloader";
import Info from "@/app/components/collegeTabs/Info";
import CoursesFee from "@/app/components/collegeTabs/CoursesFee";
import Admissions from "@/app/components/collegeTabs/Admissions";

const page = () => {
  const router = useRouter(); // Initialize the router
  const searchParams = useSearchParams();

  const { collegeSlug } = useParams();

  // Function to fetch the college data based on URL parameter
  const fetchCollegeData = (collegeSlug) => {
    // Extract the collegeId from the slug
    const collegeId = parseInt(collegeSlug.split("-")[0], 10);

    // Find the matching college from the data array
    const college = collegeDataJson.data.find((c) => c.collegeId === collegeId);

    return college || null; // Return null if no college is found
  };

  // Parse the slug (id-name-city)
  const [collegeId, ...rest] = collegeSlug.split("-");

  // Get the "tab" parameter from the URL
  const initialTab = searchParams.get("tab") || "info";
  const [activeTab, setActiveTab] = useState("info");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state

  const college = fetchCollegeData(collegeId);

  if (!college) {
    return (
      <h1 className="text-2xl text-center mt-10 py-20">College Not Found</h1>
    );
  }

  useEffect(() => {
    // Update activeTab if URL parameter changes (e.g., user manually edits the URL)
    setActiveTab(searchParams.get("tab") || "info");
  }, [searchParams]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`, undefined, { shallow: true }); // Updating the URL without reloading the page
  };

  // Inside TutorDashboard component
  const handleHorizontalTabChange = (tab) => {
    setActiveTab(tab); // Update vertical tab based on the horizontal selection
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const calculateStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // One half star if decimal >= 0.5
    const emptyStars = 5 - fullStars - halfStars; // Remaining stars are empty

    return { fullStars, halfStars, emptyStars };
  };

  const { fullStars, halfStars, emptyStars } = calculateStars(
    college.collegeRating.rate
  );

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <Suspense fallback={<Preloader />}>
            <Info college={college} />
          </Suspense>
        );
      case "courses-and-fees":
        return (
          <Suspense fallback={<Preloader />}>
            <CoursesFee college={college} />
          </Suspense>
        );
      case "admissions":
        return (
          <Suspense fallback={<Preloader />}>
            <Admissions college={college} />
          </Suspense>
        );
      default:
        return <p>Select a tab to see content.</p>;
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="pt-20 max-sm:pt-16 overflow-hidden">
        <div
          className="border-red-500 bg-cover bg-center bg-no-repeat  lg:px-10 px-6 py-10"
          //   style={{
          //     backgroundImage: `url('https://demos.codexcoder.com/labartisan/html/edukon/assets/images/pageheader/bg/01.jpg')`,
          //   }}
        >
          <Breadcrumbs2
            breadcrumbs={[
              { title: "Colleges", link: "/college" },
              { title: college.collegeName, link: "" },
            ]}
            linkColor="text-tertiary"
            activeColor="text-gray-500"
          />
        </div>

        <div className="lg:px-10 px-6 ">
          <div className="bg-gray-100 p-6 rounded-lg relative">
            <div className="flex gap-4">
              <img
                src={college?.collegeLogo || "/assets/testimonial_noImage.png"}
                alt="Graduation Hat Image"
                className="w-20 h-20 rounded bg-white p-2"
              />
              {/* dekstop view college about */}
              <div className="hidden lg:block md:block">
                <h1 className="text-4xl max-sm:text-2xl font-semibold pb-2 max-sm:mb-2 text-prim">
                  {college?.collegeName}
                </h1>
                {/* rating */}
                <div className="flex items-center  gap-2 mb-3 mt-2">
                  <span className="text-tertiary font-bold text-lg">
                    {college?.collegeRating?.rate}
                  </span>
                  {/* Display rating stars */}
                  {/* Render full stars */}
                  <div className="flex items-center text-prim">
                    {Array(fullStars)
                      .fill(0)
                      .map((_, index) => (
                        <FaStar key={`full-${index}`} />
                      ))}

                    {/* Render half star */}
                    {halfStars > 0 && <FaStarHalfAlt key="half-star" />}

                    {/* Render empty stars */}
                    {Array(emptyStars)
                      .fill(0)
                      .map((_, index) => (
                        <FaRegStar key={`empty-${index}`} />
                      ))}
                  </div>

                  <span className="text-sm underline text-textClr">
                    ({college?.collegeRating?.reviews} Reviews)
                  </span>
                </div>

                <div>
                  <div className="flex max-sm:flex-col gap-2 items-center">
                    {(college?.collegeAddress.city ||
                      college?.collegeAddress.state) && (
                      <div className="flex items-center text-textClr gap-1 capitalize">
                        <MapPin size={16} className="text-prim" />
                        {college?.collegeAddress.city}
                        {college?.collegeAddress.city && <>, </>}
                        {college?.collegeAddress.state}
                      </div>
                    )}

                    {college?.collegeType && (
                      <div className="flex items-center text-textClr gap-1 capitalize">
                        <School size={16} className="text-prim" />
                        {college?.collegeType}
                      </div>
                    )}

                    {college?.EstdYear && (
                      <div className="flex items-center text-textClr gap-1">
                        <Calendar size={16} className="text-prim" />
                        {college?.EstdYear}
                      </div>
                    )}

                    {college?.NAACGrade && (
                      <div className="flex items-center text-textClr gap-1 capitalize">
                        <GraduationCap size={16} className="text-prim" />
                        NAAC Grade {college?.NAACGrade}
                      </div>
                    )}
                  </div>
                  {college?.approvedBy?.length === 0 ? (
                    <></>
                  ) : (
                    <div className="flex items-center text-textClr gap-1">
                      <ShieldCheck size={16} className="text-prim" />
                      {college?.approvedBy.join(", ")}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* mobile view college about */}
            <div className="block lg:hidden md:hidden">
              <h1 className="text-4xl max-sm:text-2xl font-semibold pb-2 max-sm:mb-2 text-prim">
                {college?.collegeName}
              </h1>
              {/* rating */}
              <div className="flex items-center  gap-2 mb-3 mt-2">
                <span className="text-tertiary font-bold text-lg">
                  {college?.collegeRating?.rate}
                </span>
                {/* Display rating stars */}
                {/* Render full stars */}
                <div className="flex items-center text-prim">
                  {Array(fullStars)
                    .fill(0)
                    .map((_, index) => (
                      <FaStar key={`full-${index}`} />
                    ))}

                  {/* Render half star */}
                  {halfStars > 0 && <FaStarHalfAlt key="half-star" />}

                  {/* Render empty stars */}
                  {Array(emptyStars)
                    .fill(0)
                    .map((_, index) => (
                      <FaRegStar key={`empty-${index}`} />
                    ))}
                </div>

                <span className="text-sm underline text-textClr">
                  ({college?.collegeRating?.reviews} Reviews)
                </span>
              </div>

              <div>
                {(college?.collegeAddress.city ||
                  college?.collegeAddress.state) && (
                  <div className="flex items-center max-sm:items-start text-textClr gap-1 capitalize">
                    <MapPin size={16} className="text-prim max-sm:mt-1" />
                    {college?.collegeAddress.city}
                    {college?.collegeAddress.city && <>, </>}
                    {college?.collegeAddress.state}
                  </div>
                )}

                {college?.collegeType && (
                  <div className="flex items-center text-textClr gap-1 capitalize">
                    <School size={16} className="text-prim" />
                    {college?.collegeType}
                  </div>
                )}

                {college?.EstdYear && (
                  <div className="flex items-center text-textClr gap-1">
                    <Calendar size={16} className="text-prim" />
                    {college?.EstdYear}
                  </div>
                )}

                {college?.NAACGrade && (
                  <div className="flex items-center text-textClr gap-1 capitalize">
                    <GraduationCap size={16} className="text-prim" />
                    NAAC Grade {college?.NAACGrade}
                  </div>
                )}
                {college?.approvedBy?.length === 0 ? (
                  <></>
                ) : (
                  <div className="flex items-center max-sm:items-start text-textClr gap-1">
                    <ShieldCheck size={16} className="text-prim max-sm:mt-1" />
                    {college?.approvedBy.join(", ")}
                  </div>
                )}
              </div>
            </div>

            <img
              src="/assets/bg_elem/hat-docs.png"
              alt="Graduation Hat Image"
              className="absolute lg:-top-20 lg:-right-20 2xl:w-56 xl:w-56 lg:w-56 md:w-32 max-sm:w-20 w-28 md:-top-10 md:-right-10 max-sm:-top-6 max-sm:-right-6 -top-10 -right-10"
            />
          </div>
        </div>

        <div className="lg:px-10 px-6 py-2 mt-4">
          <div className="flex gap-2 flex-col md:flex-row rounded-xl bg-gray-100 p-3">
            {/* Sidebar */}
            <aside className="hidden lg:block w-1/6  overflow-y-auto rounded">
              <nav>
                <ul>
                  {[
                    {
                      label: "College Info",
                      icon: <TbLayoutDashboard size={20} />,
                      value: "info",
                    },
                    {
                      label: "Courses & Fees",
                      icon: <TbLayoutDashboard size={20} />,
                      value: "courses-and-fees",
                    },
                    {
                      label: "Admissions",
                      icon: <TbLayoutDashboard size={20} />,
                      value: "admissions",
                    },
                  ].map((item) => (
                    <li key={item.value}>
                      <button
                        onClick={() => handleTabClick(item.value)}
                        className={`flex gap-2 text-sm items-center w-full text-left px-2 py-2 rounded transition duration-300 hover:bg-white mb-1 ${
                          activeTab === item.value
                            ? "text-prim bg-white border-2 border-prim"
                            : "text-tertiary hover:text-secondary border-2 border-gray-100"
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="w-4/6 p-3 bg-white rounded-xl  overflow-y-auto">
              {/* Profile Completion Reminder Box */}
              {renderContent()}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
