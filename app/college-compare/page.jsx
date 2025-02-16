"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import AOS from "aos";

import Breadcrumbs2 from "../components/Breadcrumbs2";
import DynamicThemeButton from "../components/DynamicThemeButton";

import studentsDataJson from "../data/studentsData.json";
import collegeDataJson from "../data/collegeData.json";
import CollegeCompare from "../components/CollegeCompare";

const Page = () => {
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
            breadcrumbs={[{ title: "College Compare", link: "" }]}
            linkColor="text-tertiary"
            activeColor="text-gray-500"
          />
          {/* <!-- Content inside your hero section --> */}
          <h2 className="text-4xl font-bold pt-10 pb-16 text-center">
            College Compare
          </h2>
        </div>
      </div>

      {/* <div className="2xl:px-64 xl:px-48 lg:px-20 px-6 py-20 bg-prim-light flex flex-col justify-center items-center">
        <div className="text-lg font-semibold">Hello {student.studentName},</div>
        <div className="text-4xl font-bold text-tertiary mt-3 mb-5">
          Start Writing a Review
        </div>

        <DynamicThemeButton href="#writeReviewForm">
          Compare Colleges
        </DynamicThemeButton>
      </div> */}

      <div className=" lg:px-10 px-6">
        <CollegeCompare />
      </div>
    </>
  );
};

export default Page;
