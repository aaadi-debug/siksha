"use client";
import React, { useEffect, useState, lazy, Suspense, useRef } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { TbLayoutDashboard } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { GoBook } from "react-icons/go";
import { FaBullhorn } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import axios from "axios";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import Dashboard from "../components/studentDashboard/Dashboard";
import Preloader from "../components/Preloader";

import studentsDataJson from "../data/studentsData.json";
import collegeDataJson from "../data/collegeData.json";

import {
  X,
  UserRoundPen,
  ReceiptText,
  LogOut,
  SlidersHorizontal,
  FileCheck2,
  Pencil,
  ChevronRight,
  CircleUserRound,
  School,
  MessageSquareCode,
  Settings,
} from "lucide-react";
import Account from "../components/studentDashboard/Account";
import Reviews from "../components/studentDashboard/Reviews";
import AppliedColleges from "../components/studentDashboard/AppliedColleges";

const page = () => {
  const router = useRouter(); // Initialize the router
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isProfileComplete, setIsProfileComplete] = useState(false); // Boolean variable for profile completion
  const [showProfileReminder, setShowProfileReminder] = useState(true); // State to manage visibility of the reminder box
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state

  const [isSticky, setIsSticky] = useState(false);

  const [image, setImage] = useState("/assets/icons/user-avatar.jpg");
  const fileInputRef = useRef(null);

  const student = studentsDataJson[0];
  const colleges = collegeDataJson.data;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // setIsSidebarOpen(!isSidebarOpen);
    router.push(`?tab=${tab}`, undefined, { shallow: true }); // Updating the URL without reloading the page
  };
  const handleTabClickPhoneView = (tab) => {
    setActiveTab(tab);
    setIsSidebarOpen(!isSidebarOpen);
    router.push(`?tab=${tab}`, undefined, { shallow: true }); // Updating the URL without reloading the page
  };

  const handleCloseReminder = () => {
    setShowProfileReminder(false); // Hide the profile completion reminder
  };

  // Inside TutorDashboard component
  const handleHorizontalTabChange = (tab) => {
    setActiveTab(tab); // Update vertical tab based on the horizontal selection
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 400); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <Suspense fallback={<Preloader />}>
            <Dashboard student={student} colleges={colleges} />
          </Suspense>
        );
      case "applied-colleges":
        return (
          <Suspense fallback={<Preloader />}>
            <AppliedColleges student={student} />
          </Suspense>
        );
      case "my-reviews":
        return (
          <Suspense fallback={<Preloader />}>
            <Reviews student={student} />
          </Suspense>
        );
      case "account-settings":
        return (
          <Suspense fallback={<Preloader />}>
            <Account student={student} />
          </Suspense>
        );
      default:
        return <p>Select a tab to see content.</p>;
    }
  };

  return (
    <>
      <div className="pt-20 max-sm:pt-16 pb-20">
        <div className="border-red-500 bg-cover bg-center bg-no-repeat  lg:px-10 px-6 py-10">
          <Breadcrumbs2
            breadcrumbs={[{ title: "Dashboard", link: "" }]}
            linkColor="text-tertiary"
            activeColor="text-gray-500"
          />
        </div>

        <div className="lg:px-10 px-6 py-2">
          <div className="lg:hidden mb-5 sticky top-24">
            <button
              className={`border-2 border-prim bg-white text-prim px-4 py-2 z-50 
                  transition-all duration-700 ease-in-out 
                  ${isSticky ? "w-full" : "w-auto rounded"}`}
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className="flex gap-2 items-center">
                <SlidersHorizontal size={16} />
                My Profile
              </span>
            </button>
          </div>

          <div className="flex gap-2 flex-col md:flex-row rounded-xl">
            {/* Sidebar Modal - Mobile & Tab View */}
            {isSidebarOpen && (
              <>
                <div
                  className="fixed top-0 inset-0 bg-black bg-opacity-50 flex z-50"
                  onClick={toggleSidebar}
                >
                  <div
                    className="bg-white w-3/4 max-w-xs h-full shadow-lg transform translate-x-0 transition-transform duration-300 "
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* <button
                      className="text-secondary"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <X
                        className="absolute top-4 right-4 h-8 w-8 rounded-full p-2 transition duration-500 bg-gray-100 hover:text-white"
                        aria-hidden="true"
                      />
                    </button> */}

                    <aside className="w-full rounded-l-xl overflow-y-auto h-screen">
                      <div className="flex flex-col items-center justify-center bg-prim-light py-4 mb-3">
                        <div className="relative">
                          <img
                            // src={student.studentImage || "/assets/icons/user-avatar.jpg"}
                            src={image}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-2 border-prim"
                          />
                          <button
                            className="absolute bottom-0 right-0 border-2 border-prim rounded-full p-2 bg-white shadow"
                            onClick={() => fileInputRef.current.click()} // Trigger file input on button click
                          >
                            <Pencil size={14} />
                          </button>
                          {/* Hidden File Input */}
                          <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </div>
                        <p className="text-xl font-semibold mt-3">
                          {student.studentName}
                        </p>
                        <p className="text-sm text-secondary">
                          {student.studentEmail}
                        </p>
                        {showProfileReminder && !isProfileComplete && (
                          <div className=" flex text-sm items-center mt-2">
                            <a
                              href="?tab=dashboard"
                              className="hover:text-gray-500 hover:underline text-red-500"
                            >
                              Incomplete Profile
                            </a>
                            <ChevronRight size={16} />
                          </div>
                        )}
                      </div>

                      <nav>
                        <ul className="p-2">
                          {[
                            {
                              label: "Your Profile",
                              icon: <CircleUserRound size={20} />,
                              value: "dashboard",
                            },
                            {
                              label: "Applied Colleges",
                              icon: <School size={20} />,
                              value: "applied-colleges",
                            },
                            {
                              label: "My Reviews",
                              icon: <MessageSquareCode size={20} />,
                              value: "my-reviews",
                            },
                            {
                              label: "Account Settings",
                              icon: <Settings size={20} />,
                              value: "account-settings",
                            },
                          ].map((item) => (
                            <li key={item.value}>
                              <button
                                onClick={() =>
                                  handleTabClickPhoneView(item.value)
                                }
                                className={`flex gap-2 text-sm items-center w-full text-left px-2 py-2 rounded transition duration-300 hover:bg-white mb-1 ${
                                  activeTab === item.value
                                    ? "text-prim bg-white border-2 border-prim"
                                    : "text-tertiary hover:text-secondary border-2 border-white"
                                }`}
                              >
                                {item.icon}
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </nav>

                      <div className="px-3 py-4 border-t">
                        <button className="flex gap-4 items-center">
                          <LogOut size={20} /> Logout
                        </button>
                      </div>
                    </aside>
                  </div>
                </div>
              </>
            )}

            {/* Sidebar - Dekstop */}
            <aside className="hidden lg:block w-full lg:w-1/4 rounded-lg shadow-md overflow-y-auto border-2 border-prim">
              <div className="flex flex-col items-center justify-center bg-prim-light py-4 mb-3">
                <div className="relative">
                  <img
                    // src={student.studentImage || "/assets/icons/user-avatar.jpg"}
                    src={image}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-2 border-prim"
                  />
                  <button
                    className="absolute bottom-0 right-0 border-2 border-prim rounded-full p-2 bg-white shadow"
                    onClick={() => fileInputRef.current.click()} // Trigger file input on button click
                  >
                    <Pencil size={14} />
                  </button>
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <p className="text-xl font-semibold mt-3">
                  {student.studentName}
                </p>
                <p className="text-sm text-secondary">{student.studentEmail}</p>
                {showProfileReminder && !isProfileComplete && (
                  <div className=" flex text-sm items-center mt-2">
                    <a
                      href=""
                      className="hover:text-gray-500 hover:underline text-red-500"
                    >
                      Incomplete Profile
                    </a>
                    <ChevronRight size={16} />
                  </div>
                )}
              </div>

              <nav>
                <ul className="p-2">
                  {[
                    {
                      label: "Your Profile",
                      icon: <CircleUserRound size={20} />,
                      value: "dashboard",
                    },
                    {
                      label: "Applied Colleges",
                      icon: <School size={20} />,
                      value: "applied-colleges",
                    },
                    {
                      label: "My Reviews",
                      icon: <MessageSquareCode size={20} />,
                      value: "my-reviews",
                    },
                    {
                      label: "Account Settings",
                      icon: <Settings size={20} />,
                      value: "account-settings",
                    },
                  ].map((item) => (
                    <li key={item.value}>
                      <button
                        onClick={() => handleTabClick(item.value)}
                        className={`flex gap-2 text-sm items-center w-full text-left px-2 py-2 rounded transition duration-300 hover:bg-white mb-1 ${
                          activeTab === item.value
                            ? "text-prim bg-white border-2 border-prim"
                            : "text-tertiary hover:text-secondary border-2 border-white"
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="px-3 py-4 border-t">
                <button className="flex gap-4 items-center">
                  <LogOut size={20} /> Logout
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="w-full lg:w-3/4 lg:p-4 p-3 max-sm:p-2 bg-white rounded-xl shadow-xl overflow-y-auto border-2 border-prim">
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
