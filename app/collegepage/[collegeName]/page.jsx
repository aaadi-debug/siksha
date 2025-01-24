"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import Footer from '../../Footer/Footer.jsx'
// import { useParams, Link } from 'react-router-dom';
import Link from "next/link";
// import collegeLOGO from '../../../assets/images/college_imgs/college_logo.webp'
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Info from "../../components/Info";
import Courses from "../../components/Courses";
import Admissions from "../../components/Admissions";
import Reviews from "../../components/Reviews";
import Departments from "../../components/Departments";
import CutOffs from "../../components/CutOffs";
import Placements from "../../components/Placements";
import Rankings from "../../components/Rankings";
import Gallery from "../../components/Gallery";
import Scholarships from "../../components/Scholarships";
import Faculty from "../../components/Faculty";
import NewsArticles from "../../components/NewsArticles";
import Hostel from "../../components/Hostel";
import CollegeCompare from "../../components/CollegeCompare";
import axios from "axios";

const page = ({ params }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const { collegeName } = params;
  const [activeTab, setActiveTab] = useState("info");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/collegeslist?name=" + collegeName);
      const result = await res.json();
      if (result.success) {
        setData(result.data);
      }
    };

    fetchData();
  }, [collegeName]);

  console.log("data for upper navigation", data);

  return (
    <>
      <div className="college_page_responsive">
        <section className="collegepage_section">
          <figure className="college_img">
            <img src="/assets/images/college_imgs.jpg" alt="" />
          </figure>

          {data?.length === 0 ? (
            <div className="text-center">No College info Found</div>
          ) : (
            <div className="collegepage_section_wrapper">
              <div className="collegepage_section_about">
                {/* ----- left div ---- */}
                <div className="college_about_body">
                  <div className="college_about_body_head">
                    <img
                      src={data?.collageIcon[data?.collageIcon.length - 1]}
                      alt="college-logo"
                    />
                    <div className="body">
                      <h4> {data?.name}</h4>
                      <h5>{data?.shortDiscription}</h5>
                      <div className="body_points">
                        <p>{data?.shortAddress}</p>
                        <p>
                          <span>
                            <FaRegNewspaper />
                          </span>
                          {data?.universitytype}
                        </p>
                        <p>
                          <span>
                            <FaCalendarAlt />
                          </span>
                          {data?.Estd}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="college_about_body_foot"></div>
                </div>
                {/* ----- right div ---- */}
                <div className="college_about_footer">
                  <div className="rating">
                    <h2 className="number">{data?.rating}</h2>
                    <div className="reviews">
                      <div className="star_box">
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                      </div>
                      <div className="no_of_reviews">(74 Reviews)</div>
                    </div>
                  </div>

                  <div className="will_you_get_btn">
                    <Link href="">Will You get In</Link>
                  </div>

                  <div className="will_you_get_btn">
                    <Link href="">Get Contact Details</Link>
                  </div>
                  <Link href={"#"} className="claim_this_college">
                    <span>
                      <GoDotFill />
                    </span>
                    <p>Claim this college</p>
                    <div className="claim_this_college_tooltip">
                      <ul>
                        Claim this college if you are:
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* -- tab ---- */}
        <section className="collegepage_content">
          <div className="collegepage_tab_wrapper flex">
            {/* Sidebar Toggler */}
            <div
              className="sidebar-toggler cursor-pointer"
              onClick={toggleSidebar}
            >
              <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
            </div>
            <div
              className={`sidebar ${
                sidebarOpen ? "hidden" : "block"
              } w-1/5 pr-5 pl-4`}
            >
              <ul className="space-y-2 nav-pills">
                <li>
                  <button
                    onClick={() => setActiveTab("info")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "info"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Info
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("courses")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "courses"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Courses & Fees
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("admission")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "admission"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Admission 2024
                  </button>
                </li>
                {/* Add other tabs here */}
                <li>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "reviews"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Reviews
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("department")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "department"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Department
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("cutoff")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "cutoff"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    CutOff
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("placement")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "placement"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Placement
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("ranking")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "ranking"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Ranking
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("gallery")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "gallery"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("scholarship")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "scholarship"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Scholarship
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("faculty")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "faculty"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Faculty
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("newsArticles")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "newsArticles"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    News & Articles
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("hostel")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "hostel"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    Hostel
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("collegeCompare")}
                    className={`nav-link w-full text-left py-3 px-3 ${
                      activeTab === "collegeCompare"
                        ? "bg-white text-blue custom_css"
                        : ""
                    }`}
                  >
                    College Compare
                  </button>
                </li>
                <li>
                  <Link
                    href={`/collegepage/${collegeName}/qna/`}
                    className="nav-link w-full text-left py-3 px-3 text-blue-500"
                  >
                    Q&A
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- /.col-md-4 --> */}
            <div className="col-md-10 w-4/5">
              <div className="tab-content">
                {activeTab === "info" && (
                  <div className="text-left text-light">
                    <Info collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "courses" && (
                  <div className="text-left text-light">
                    <Courses collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "admission" && (
                  <div className="text-left text-light">
                    <Admissions collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "reviews" && (
                  <div className="text-left text-light">
                    <Reviews collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "department" && (
                  <div className="text-left text-light">
                    <Departments collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "cutoff" && (
                  <div className="text-left text-light">
                    <CutOffs collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "placement" && (
                  <div className="text-left text-light">
                    <Placements collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "ranking" && (
                  <div className="text-left text-light">
                    <Rankings collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "gallery" && (
                  <div className="text-left text-light">
                    <Gallery collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "scholarship" && (
                  <div className="text-left text-light">
                    <Scholarships collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "faculty" && (
                  <div className="text-left text-light">
                    <Faculty collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "newsArticles" && (
                  <div className="text-left text-light">
                    <NewsArticles collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "hostel" && (
                  <div className="text-left text-light">
                    <Hostel collegeName={data?.name} />
                  </div>
                )}
                {activeTab === "collegeCompare" && (
                  <div className="text-left text-light">
                    <CollegeCompare collegeName={data?.name} />
                  </div>
                )}
              </div>
            </div>
            {/* <!-- col-md-8 end --> */}
          </div>
        </section>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default page;
