"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import AOS from "aos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { LiaUniversitySolid } from "react-icons/lia";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import { FaPlay } from "react-icons/fa6";
import DynamicThemeButton from "../components/DynamicThemeButton";
import WriteAReview from "../components/WriteAReview";

import studentsDataJson from "../data/studentsData.json";
import collegeDataJson from "../data/collegeData.json";

const About = () => {
  const student = studentsDataJson[0];
  const colleges = collegeDataJson.data;

  useEffect(() => {
    AOS.init();
  }, []);
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current path:", pathname); // Check the current path
  }, [pathname]);

  return (
    <>
      <div className="pt-20 max-sm:pt-16">
        <div
          className="border-red-500 bg-cover bg-center bg-no-repeat  lg:px-10 px-6 py-10"
          style={{
            backgroundImage: `url('https://demos.codexcoder.com/labartisan/html/edukon/assets/images/pageheader/bg/01.jpg')`,
          }}
        >
          <Breadcrumbs2
            breadcrumbs={[{ title: "Review Colleges", link: "" }]}
            linkColor="text-tertiary"
            activeColor="text-gray-500"
          />
          {/* <!-- Content inside your hero section --> */}
          <h2 className="text-4xl font-bold pt-10 pb-16 text-center">
            Review Colleges
          </h2>
        </div>
      </div>

      <div className="2xl:px-64 xl:px-48 lg:px-20 px-6 py-20 bg-prim-light flex flex-col justify-center items-center">
        <div className="text-lg font-semibold">Hello {student.studentName},</div>
        <div className="text-4xl font-bold text-tertiary mt-3 mb-5">
          Start Writing a Review
        </div>

        <DynamicThemeButton href="#writeReviewForm">
          Review Now
        </DynamicThemeButton>
      </div>

      <div className="py-20 lg:px-10 px6">
        <WriteAReview colleges={colleges} student={student} />
      </div>
    </>
  );
};

export default About;
