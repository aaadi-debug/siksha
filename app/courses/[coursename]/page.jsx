"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { LiaUniversitySolid } from "react-icons/lia";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import Breadcrumbs from "@/app/components/Breadcrubms";

const page = ({ params }) => {
  const { coursename } = params;
  const urldata = decodeURIComponent(coursename);

  return (
    <>
      <div className="about_us">
        <Navbar />
        <Breadcrumbs page_title="Course" page_title2={urldata} page_title3="" />

        <div className="py-8 lg:px-20 px-6">
          <h2 className="text-4xl font-bold text-black capitalize mb-4">
            {urldata}
          </h2>
          <p>
            {/* <div
              className="text-lg blog_content"
              style={{ all: "initial" }}
              dangerouslySetInnerHTML={{ __html: blogInfo?.content }}
            /> */}
            <div className="textEditor">
              <h3>Bachelor of Commerce (B.Com): A Comprehensive Overview</h3>
              <p>
                The Bachelor of Commerce (B.Com) is one of the most sought-after
                undergraduate programs in commerce and business disciplines
                worldwide. This degree offers a strong foundation in the
                principles of commerce, economics, business management, and
                accounting. Its versatile curriculum is designed to cater to the
                diverse needs of students aspiring to build careers in finance,
                banking, accounting, management, or entrepreneurship.
              </p>

              <h3>Bachelor of Commerce (B.Com): A Comprehensive Overview</h3>
              <p>
              The B.Com program typically spans three to four years, depending on the country and educational system. It equips students with theoretical knowledge and practical skills necessary to understand and manage complex financial and business operations. With a focus on subjects such as accounting, taxation, economics, and business law, B.Com is a gateway to numerous career opportunities in both the public and private sectors.
              </p>

              <h3>Why Choose a Bachelor of Commerce?</h3>
              <ol>
                <li>
                    <h4>Diverse Career Opportunities</h4>
                    <p>A B.Com degree prepares students for various career paths, including roles such as accountants, financial analysts, tax consultants, auditors, investment bankers, and entrepreneurs.</p>
                </li>
                <li>
                    <h4>Professional Courses and Certifications</h4>
                    <p>The B.Com degree lays the groundwork for pursuing advanced certifications like:</p>
                    <ul>
                        <li>Chartered Accountancy (CA)</li>
                        <li>Certified Public Accountant (CPA)</li>
                        <li>Cost and Management Accounting (CMA)</li>
                        <li>Master of Business Administration (MBA)</li>
                    </ul>
                </li>
              </ol>
            </div>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
