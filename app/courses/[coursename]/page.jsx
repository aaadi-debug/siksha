"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { LiaUniversitySolid } from "react-icons/lia";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import Breadcrumbs from "@/app/components/Breadcrubms";

// Mock Data
const courses = [
  {
    name: "B.Com",
    stream: "Commerce",
    subStreams: ["General", "Accounting", "Taxation"],
  },
  {
    name: "MBA/PGDM",
    stream: "Management",
    subStreams: ["Finance", "Marketing", "Human Resources"],
  },
  {
    name: "M.Phil",
    stream: "Research",
    subStreams: ["Physics", "Chemistry", "Biology"],
  },
  // Add more courses here
];

const colleges = [
  {
    sno: 1,
    name: "ABC College",
    city: "Delhi",
    state: "Delhi",
    courseFee: "50,000-1,00,000",
    type: "Private",
    specializations: 30,
    placement: "4 LPA Avg, 10 LPA Highest",
    grade: "A+",
    course: "B.Com",
    stream: "Commerce",
    subStream: "General",
  },
  {
    sno: 2,
    name: "XYZ University",
    city: "Mumbai",
    state: "Maharashtra",
    courseFee: "2,00,000-3,00,000",
    type: "Government",
    specializations: 42,
    placement: "5 LPA Avg, 12 LPA Highest",
    grade: "A",
    course: "MBA/PGDM",
    stream: "Management",
    subStream: "Finance",
  },
  // Add more colleges here
];

const Page = ({ params }) => {
  const { coursename } = params;
  const urldata = decodeURIComponent(coursename);

  const [selectedCourse, setSelectedCourse] = useState("MBA/PGDM");
  const [selectedStream, setSelectedStream] = useState("Management");
  const [selectedSubStream, setSelectedSubStream] = useState("Finance");
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Filter colleges based on selected filters
    setLoading(true);
    const timeout = setTimeout(() => {
      const result = colleges.filter(
        (college) =>
          college.course === selectedCourse &&
          college.stream === selectedStream &&
          college.subStream === selectedSubStream
      );
      setFilteredColleges(result);
      setLoading(false);
    }, 500); // Simulate API call
    return () => clearTimeout(timeout);
  }, [selectedCourse, selectedStream, selectedSubStream]);

  // Dynamically update stream and sub-stream based on course selection
  const handleCourseChange = (courseName) => {
    const course = courses.find((c) => c.name === courseName);
    setSelectedCourse(courseName);
    setSelectedStream(course.stream);
    setSelectedSubStream(course.subStreams[0]);
  };

  useEffect(() => {
    const query = new URLSearchParams({
      course: selectedCourse,
      stream: selectedStream,
      subStream: selectedSubStream,
    }).toString();
    window.history.pushState(null, "", `/course/${selectedCourse}?${query}`);
  }, [selectedCourse, selectedStream, selectedSubStream]);

  return (
    <>
      <div className="bg-skin">
        <Navbar />
        <Breadcrumbs page_title="Course" page_title2={urldata} page_title3="" />

        <div className="py-8 lg:px-20 px-6">
          <h2 className="text-4xl font-bold text-black capitalize mb-4">
            {urldata}
          </h2>
          <div className="textEditor">
            <h3>Bachelor of Commerce (B.Com): A Comprehensive Overview</h3>
            <p>
              The Bachelor of Commerce (B.Com) is one of the most sought-after
              undergraduate programs in commerce and business disciplines
              worldwide...
            </p>

            <h3>Why Choose a Bachelor of Commerce?</h3>
            <ol>
              <li>
                <h4>Diverse Career Opportunities</h4>
                <p>
                  A B.Com degree prepares students for various career paths...
                </p>
              </li>
              <li>
                <h4>Professional Courses and Certifications</h4>
                <p>The B.Com degree lays the groundwork for pursuing advanced certifications...</p>
                <ul>
                  <li>Chartered Accountancy (CA)</li>
                  <li>Certified Public Accountant (CPA)</li>
                  <li>Cost and Management Accounting (CMA)</li>
                  <li>Master of Business Administration (MBA)</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h1>College Page</h1>

          {/* Filters */}
          <div className="filters">
            <select
              value={selectedCourse}
              onChange={(e) => handleCourseChange(e.target.value)}
            >
              {courses.map((course) => (
                <option key={course.name} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>

            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
            >
              {courses
                .find((course) => course.name === selectedCourse)
                ?.stream.split(",")
                .map((stream) => (
                  <option key={stream} value={stream}>
                    {stream}
                  </option>
                ))}
            </select>

            <select
              value={selectedSubStream}
              onChange={(e) => setSelectedSubStream(e.target.value)}
            >
              {courses
                .find((course) => course.name === selectedCourse)
                ?.subStreams.map((subStream) => (
                  <option key={subStream} value={subStream}>
                    {subStream}
                  </option>
                ))}
            </select>
          </div>

          {/* Table */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>College Name</th>
                  <th>City, State</th>
                  <th>Course Fee</th>
                  <th>College Type</th>
                  <th>Specializations</th>
                  <th>Placement</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {filteredColleges.map((college) => (
                  <tr key={college.sno}>
                    <td>{college.sno}</td>
                    <td>
                      {college.name} ({college.city}, {college.state})
                    </td>
                    <td>{college.courseFee}</td>
                    <td>{college.type}</td>
                    <td>{college.specializations}</td>
                    <td>{college.placement}</td>
                    <td>{college.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
