"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
// import Logo from "./Logo";

import {
  Menu,
  User,
  GraduationCap,
  X,
  ChevronDown,
  ChevronUp,
  Search,
  ShoppingBasket,
} from "lucide-react";
import { FaUserTie } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
// import SearchBar from "./SearchBar";
// import { testCategories } from "@/data/testCategories";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Siksha Helpline",
    href: "/siksha-helpline",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact us",
    href: "/contact-us",
  },
  {
    name: "Colleges",
    icon: <ChevronDown />,
    subMenu: [
      { name: "IIT Delhi", href: "/collegepage/IIT Delhi (IIT-D)" },
      { name: "IIT Madras", href: "/collegepage/IIT Madras (IIT-M)" },
      { name: "IIT Kharagpur", href: "/collegepage/IIT Kharagpur (IIT-KGP)" },
      { name: "IIT Roorkee", href: "/collegepage/IIT Roorkee (IIT-R)" },
    ],
  },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // For mobile accordion
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationSidebarOpen, setIsNotificationSidebarOpen] =
    useState(false); // State for sidebar
  const sidebarRef = useRef(null);
  const searchBarRef = useRef(null);

  const [notificationType, setNotificationType] = useState("normal");
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown visibility
  const handleSelect = (value) => {
    setNotificationType(value); // Set selected option
    setIsOpen(false); // Close dropdown after selection
  };
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([
    {
      url: "",
      image:
        "https://assets.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg",
      title:
        "IIT Madras - Indian Institute of Technology - [IITM], Chennai, India",
      belongsTo: "College",
    },
    {
      url: "",
      image:
        "https://assets.collegedunia.com/public/college_data/images/logos/NTA%20Logo.jpg",
      title: "Joint Entrance Exam Main - Registration [JEE Main]",
      belongsTo: "Exam",
    },
  ]);

  const isHomePage = pathname === "/"; // Check if the current page is the homepage
  if (isHomePage) console.log("Home");
  else console.log("Not hjopme");

  const handleSearch = async (e) => {
    setQuery(e.target.value);

    if (e.target.value.trim() === "") {
      setResults([]);
      return;
    }

    const res = await fetch(`/api/search?query=${e.target.value}`);
    const data = await res.json();
    setResults(data);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menuItem) => {
    setActiveSubMenu(activeSubMenu === menuItem ? null : menuItem);
  };

  const toggleNotificationSidebar = () => {
    setIsNotificationSidebarOpen(!isNotificationSidebarOpen);
  };

  const closeCartSidebar = () => {
    setIsNotificationSidebarOpen(false);
  };

  const fetchNotifications = async () => {
    // Replace with your backend API endpoint
    const response = await fetch("/YOUR_BACKEND_API_ENDPOINT");
    const data = await response.json();
    setNotifications(data);
  };

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/notification`);
        const result = await res.json();
        if (result.success) {
          setNotifications(result.data);
          // setFilteredBlogs(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  useEffect(() => {
    if (isNotificationSidebarOpen) {
      console.log("Notificated fetched");
      fetchNotifications();
    }
  }, [isNotificationSidebarOpen]);

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup listener on component unmount
    return () => {
      if (isHomePage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHomePage]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      closeSearch();
    }
  };

  const handleReadMore = (notificationName) => {
    window.location.href = `/notifications/${notificationName}`;
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isHomePage ? (isScrolled ? "bg-white" : "bg-black/40") : "bg-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 responsive_css_logo">
          {/* <Logo /> */}
          <Link href="/">
            <img
              src="/assets/logo-white-box.png"
              alt="Logo"
              className="w-16 rounded-full"
            />
          </Link>
        </div>
        {/* Mega menu for desktop */}
        <div className="hidden grow items-center lg:flex">
          <ul className="ml-12 inline-flex items-center space-x-2">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium text-black uppercase transition-all duration-500 flex items-center hover:bg-second hover:text-white py-2 px-3 rounded-full group-hover:bg-second group-hover:text-white navbarLink ${isHomePage ? (isScrolled ? "" : "text-white") : ""}`}
                  >
                    {item.name}
                    {item.icon && (
                      <span className="transform transition-transform duration-300 group-hover:rotate-180">
                        {item.icon}
                      </span>
                    )}
                  </Link>
                ) : (
                  <span className={`text-sm font-medium text-black uppercase transition-all duration-500 flex items-center py-2 px-3 rounded-full ${isHomePage ? (isScrolled ? "" : "text-white") : ""}`}>
                    {item.name}
                    {item.icon && (
                      <span className="transform transition-transform duration-300 group-hover:rotate-180">
                        {item.icon}
                      </span>
                    )}
                    {item.subMenu && (
                      <div className="absolute left-0 top-full mt-1 hidden w-64 bg-white shadow-xl rounded-lg opacity-0 transform translate-y-4 transition-transform duration-700 ease-in-out group-hover:opacity-100 group-hover:-translate-y-1 group-hover:block border-2 border-t-secondary border-b-secondary border-l-second border-r-second">
                        <ul className="grid grid-cols-1 gap-4 p-4 pointer-auto">
                          {item.subMenu.map((subItem) => (
                            <li
                              key={subItem.name}
                              className="transition duration-500 rounded-lg"
                            >
                              <Link
                                href={subItem.href}
                                className="text-xs font-medium text-black transition duration-500 hover:text-secondary uppercase"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-4 items-center responsive_css_buttonDiv">
            <button
              onClick={toggleSearch}
              className="text-white p-2 transition-all duration-500 bg-second rounded-full flex justify-center align-middle hover:text-secondary py-2 hover:bg-whiteClr hover:rounded-full hover:shadow-gray-900 hover:shadow-whiteClr"
            >
              <Search size={18} />
            </button>
            {/* Cart */}
            <div className="relative group">
              <button
                onClick={toggleNotificationSidebar}
                className="relative rounded-3xl flex justify-center items-center border-2 border-second  bg-white text-second p-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-second hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <IoMdNotifications size={16} />
                {/* <span className="absolute bg-red-500 text-white rounded-full p-1 px-2 -top-3 -right-2 text-xs">
                  {cart?.length}
                </span> */}
              </button>

              {/* Tooltip */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-12 opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded-lg px-3 py-1 transition-opacity duration-300 pointer-events-none z-10">
                Cart
                <div className="absolute w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-black -top-2 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>

            <Link
              href="/tutor/tutorDashboard"
              className="bg-second border-2 border-second flex gap-2 items-center py-2 px-4 rounded-full hover:bg-white hover:text-second transition duration-300 text-sm"
            >
              <span>Login/Signup</span>
            </Link>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleSearch}
            className="text-primary transition-all duration-500 bg-white flex justify-center items-center hover:text-primaryClr hover:bg-whiteClr hover:rounded-full hover:text-secondary"
          >
            <Search />
          </button>
          <Link
            href="/login"
            className="rounded-3xl flex justify-center items-center border-2 border-primary  bg-primary text-white p-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <User size={16} />
            {/* <span>Login</span> */}
          </Link>
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>

        {/* Mobile accordion menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-4 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        src="/assets/images/logo_dark.png"
                        alt="Logo"
                        height="100px"
                        width="200px"
                      />
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href || "#"}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                          onClick={() =>
                            item.subMenu && toggleSubMenu(item.name)
                          }
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                          {item.subMenu && (
                            <>
                              {activeSubMenu === item.name ? (
                                <ChevronUp className="ml-auto" />
                              ) : (
                                <ChevronDown className="ml-auto" />
                              )}
                            </>
                          )}
                        </a>
                        {item.subMenu && activeSubMenu === item.name && (
                          <ul className="ml-6 mt-2">
                            {item.subMenu.map((subItem) => (
                              <li key={subItem.name} className="py-2">
                                <a
                                  href={subItem.href}
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="flex mt-4">
                  <Link
                    href="/signup-tutor"
                    className="rounded-3xl flex gap-2 justify-center items-center border-2 border-primary  bg-primary text-white px-5 py-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <GraduationCap size={20} />
                    <span>Signup as Tutor</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-0 z-50 bg-black/80 bg-opacity-70 backdrop-blur-md shadow-lg transition-transform duration-500 transform translate-y-0 h-[100vh]">
          <div
            ref={searchBarRef}
            className="bg-white py-10 sm:p-6 md:p-8 lg:px-20 max-sm:px-4"
          >
            <div className="flex gap-2 items-start">
              <input
                type="text"
                placeholder="Search for Colleges, Exmas, News and more..."
                value={query}
                onChange={handleSearch}
                className="mb-4 w-full border border-gray-300 rounded p-3 focus:outline focus:border focus:border-brightblueClr "
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-600 hover:text-gray-900 mt-2"
              >
                <X
                  className="h-10 w-10 rounded-full p-2 transition duration-500 hover:bg-primary/80 hover:text-white"
                  aria-hidden="true"
                />
              </button>
            </div>

            <p className="text-sm text-textClr">Results based on search</p>

            <div className="grid grid-cols-1 gap-6 mt-4 max-h-[70vh] overflow-y-auto">
              {results.length > 0 ? (
                results.map((result, index) => (
                  <Link key={index} href={`/product/${result.url}`}>
                    <div className="flex gap-2 border rounded-lg p-2">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div>
                        <h3 className="text-lg font-bold capitalize oneLinerTitle text-black">
                          {result.title}
                        </h3>
                        <p className="text-textClr"> {result.belongsTo} </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : query.length > 1 ? (
                <p>No result found for {query} 🥺</p>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isNotificationSidebarOpen && (
        <>
          <div
            ref={sidebarRef}
            className={`fixed inset-y-0 right-0 z-50 w-96 max-sm:w-72 p-4 bg-white shadow-l transition-transform transform ${
              isNotificationSidebarOpen ? "translate-x-0" : "translate-x-full"
            } duration-700 ease-in-out`}
          >
            <div className="flex items-center justify-between pt-1 pb-2 border-textClr border-b">
              <h2 className="lg:text-2xl text-blackClr font-bold">
                Notifications
              </h2>
              <button
                onClick={closeCartSidebar}
                className="text-gray-600 hover:text-gray-900"
              >
                <X
                  className="h-10 w-10 rounded-full p-2 transition duration-500 hover:bg-primary/80 hover:text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="py-2 pb-16">
              {/* notification dropdown */}
              <div className="relative inline-block w-full">
                {/* Dropdown button */}
                <button
                  onClick={toggleDropdown}
                  className="w-full border border-gray-300 rounded-lg bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 transition duration-200 ease-in-out flex justify-between items-center"
                >
                  {notificationType === "normal"
                    ? "Notification"
                    : "Live Notification"}
                  <span className="ml-2">
                    <ChevronDown />
                  </span>{" "}
                  {/* Dropdown arrow */}
                </button>

                {/* Dropdown menu with animation */}
                <div
                  className={`absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{ transformOrigin: "top" }}
                >
                  <ul>
                    <li
                      onClick={() => handleSelect("normal")}
                      className="px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer"
                    >
                      Notification
                    </li>
                    <li
                      onClick={() => handleSelect("live")}
                      className="px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer"
                    >
                      Live Notification
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 overflow-y-auto h-[80vh]">
                {notifications
                  .filter(
                    (notification) => notification.type === notificationType
                  )
                  .map((notification) => (
                    <div className="border-b pb-2 mb-3" key={notification.id}>
                      <div className="flex items-start justify-start">
                        <div className="w-1/4 ">
                          <img
                            src={notification.image}
                            alt={notification.title}
                            className="w-16 h-16 max-sm:w-12 max-sm:h-12 rounded-full"
                          />
                        </div>
                        <div className="w-3/4 max-sm:text-sm font-semibold twoLinerTitle2">
                          {notification.title || "N/A"}
                        </div>
                      </div>
                      <p className="oneLinerTitle mt-2">
                        {notification.message || "N/A"}
                      </p>
                      <div className="flex text-second justify-between text-sm mt-2 font-semibold">
                        <div className="">
                          {new Date(notification.date).toLocaleDateString()}
                        </div>
                        <button
                          className=""
                          onClick={() => handleReadMore(notification.url)}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-20"
            onClick={toggleNotificationSidebar}
          />
        </>
      )}
    </div>
  );
}
