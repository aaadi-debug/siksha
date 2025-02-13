"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Breadcrumbs2 from "../../components/Breadcrumbs2";

import LoanData from "../../data/loans.json";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import DynamicThemeButton from "../../components/DynamicThemeButton";
import { motion } from "framer-motion";

const Page = () => {
  // console.log("Loans", LoanData)
  const { bankurl } = useParams();

  const bank = LoanData.find((b) => b.bankurl === bankurl); // Match with bank data
  console.log("Bank Data", bank);

  return (
    <>
      <div className="mx-auto pt-20 max-sm:pt-16">
        <div className="">
          {/* Section 1 */}
          <div
            className="lg:px-10 px-6 pt-10"
            style={{
              backgroundImage: `url('/assets/bg_elem/education-loan-bg.png')`,
              //   backgroundColor: "#3D52A0", // Background color
              backgroundSize: "cover", // Adjust size as needed
              backgroundRepeat: "no-repeat", // Prevent tiling
              backgroundPosition: "center", // Center the image
              backgroundBlendMode: "overlay", // Optional: blend color and image
            }}
          >
            <div className="text-white">
              <Breadcrumbs2
                breadcrumbs={[{ title: "Landing Page", link: "" }]}
                linkColor="text-second"
                activeColor="text-textClr"
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 mt-5 lg:pt-10 lg:pb-0 pb-10">
              <div className="2xl:mb-20 2xl:mt-10 xl:mb-20 xl:pb-16 lg:pb-20">
                <h2 className="lg:text-6xl md:text-5xl max-sm:text-3xl text-4xl text-black font-bold">
                  Education
                </h2>
                <h2 className="lg:text-6xl md:text-5xl max-sm:text-3xl text-4xl text-black font-bold">
                  Loans in India and
                </h2>
                <h2 className="lg:text-6xl md:text-5xl max-sm:text-3xl text-4xl text-black font-bold">
                  Abroad
                </h2>
                <p className="mt-4 text-lg text-black/70 mb-10">
                  Education Loans are designed to extend financial assistance to
                  students aspiring to pursue their higher studies in reputed
                  colleges in India or Abroad.
                </p>

                <div className="flex gap-6  items-center py-2 max-sm:flex-col max-sm:items-start max-sm:space-x-0 max-sm:space-y-4 2xl:w-[70%] xl:w-[80%] lg:w-[100%]">
                  <a
                    href=""
                    className="flex flex-col justify-center items-center text-center w-[50%] max-sm:w-full bg-white rounded shadow-md p-8"
                  >
                    <img
                      src="/assets/icons/emi.png"
                      alt="Apply Now"
                      className="w-20"
                    />
                    <div className="text-xl font-semibold mt-4 text-tertiary">
                      Calculate EMI's{" "}
                    </div>
                    <p className="text-textClr mt-2">
                      Wondering how many instalments will you have to pay for
                      the repayment of your education loan? Check Now!
                    </p>
                  </a>
                  <a
                    href=""
                    className="flex flex-col justify-center items-center text-center w-[50%] max-sm:w-full bg-white rounded shadow-md p-8"
                  >
                    <img
                      src="/assets/icons/apply.png"
                      alt="Apply Now"
                      className="w-20"
                    />
                    <div className="text-xl font-semibold mt-4 text-tertiary">
                      Calculate EMI's{" "}
                    </div>
                    <p className="text-textClr mt-2">
                      Wondering how many instalments will you have to pay for
                      the repayment of your education loan? Check Now!
                    </p>
                  </a>
                </div>
              </div>
              <div className="relative lg:block hidden">
                <img
                  src="/assets/images/new/landing-page-girl.png"
                  alt="Landing Page Student Image"
                  className="absolute z-10 bottom-0"
                />
                <div className="2xl:block  hidden">
                  <div className="absolute bottom-0 left-10 ">
                    <div className="all-shapes"></div>
                  </div>
                  <div className="absolute top-[20%] left-[0%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalOne gradientOne">
                    20+ Bank Partners
                  </div>
                  <div className="absolute top-[20%] right-[10%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalTwo  z-10 gradientTwo">
                    1000+ Loans Availed
                  </div>
                  <div className="absolute top-[40%] right-[0%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalOne z-10 gradientThree">
                    200+ xyz xyz
                  </div>
                  <div className="absolute top-[60%] right-[15%] px-4 rounded-lg py-2 text-lg text-white divMoveDiagonalTwo z-10 gradientFour">
                    200+ xyz xyz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
