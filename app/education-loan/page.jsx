"use client";
import React, { useEffect, useState } from "react";
import Breadcrumbs2 from "../components/Breadcrumbs2";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import DynamicThemeButton from "../components/DynamicThemeButton";
import { motion } from "framer-motion";
import Services from "../components/Services";
import LoanData from "../data/loans.json";
import EducationLoanApply from "../components/EducationLoanApply";

const Page = () => {
  // console.log("Loans", LoanData)
  const [selectedCategory, setSelectedCategory] = useState("All Banks");

  const categories = [
    "All Banks",
    ...new Set(LoanData.map((bank) => bank.bankCategory)),
  ];

  const filteredBanks =
    selectedCategory === "All Banks"
      ? LoanData
      : LoanData.filter((bank) => bank.bankCategory === selectedCategory);

  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Close modal when clicking outside the modal area
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

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
                    href="#banks"
                    className="flex flex-col justify-center items-center text-center w-[50%] max-sm:w-full bg-white rounded shadow-md p-8"
                  >
                    <img
                      src="/assets/icons/apply.png"
                      alt="Apply Now"
                      className="w-20"
                    />
                    <div className="text-xl font-semibold mt-4 text-tertiary">
                     Apply Now{" "}
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

          {/* Section 2 */}
          <div className="lg:px-10 px-6 py-20">
            <div className="text-4xl max-sm:text-3xl text-blackClr font-semibold text-center">
              Our Parnered Banks
            </div>
            <div className="mt-3 swiperButtonNone">
              <Swiper
                spaceBetween={10}
                slidesPerView={1.5}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                speed={3000}
                // touchStartPreventDefault={false} // Prevents unwanted scrolling
                // preventInteractionOnTransition={true} // Improves mobile interaction
                // navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  320: {
                    slidesPerView: 2, // 1 slide on very small screens
                  },
                  500: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4, // Can show partial next slide
                  },
                  1024: {
                    slidesPerView: 5, // Showing 2 slides
                  },
                  1300: {
                    slidesPerView: 6, // Show 2.5 slides
                  },
                  1500: {
                    slidesPerView: 7, // Show 3 full slides
                  },
                }}
                navigation={true}
                //  modules={[Autoplay, Pagination, Navigation]}
                modules={[Autoplay, Navigation, A11y]}
                className="swiper-wrapper"
              >
                {LoanData.length > 0 ? (
                  LoanData.map((bank, index) => (
                    <SwiperSlide key={index} className="rounded-lg">
                      <a
                        href={`/education-loan/${bank?.bankurl}`}
                        className="block hover:shadow-lg hover:border transition duration-300"
                      >
                        <div className=" flex justify-center items-center">
                          <img
                            className="h[auto] w-full object-cover rounded-lg "
                            src={
                              bank.bankLogo || "/assets/testimonial_noImage.png"
                            }
                            alt=""
                          />
                        </div>
                      </a>
                    </SwiperSlide>
                  ))
                ) : (
                  <p className="text-center text-gray-600">
                    No best sellers available.
                  </p>
                )}
              </Swiper>
            </div>
          </div>

          {/* Section 3 */}
          <div className="w-full p-4" id="banks">
            <div className="border-b border-2 border-prim grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-4 font-medium lg:text-2xl transition-all duration-300 text-xl max-sm:text-base ${
                    selectedCategory === category
                      ? " bg-prim text-white"
                      : " border-2 border-prim"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className=" mt-4">
              <div className="overflow-x-auto border-gray-300 rounded-lg mt-2">
                <table className="w-full border-collapse border border-prim-light rounded-lg overflow-hidden">
                  {/* Table Header */}
                  <thead className="rounded">
                    <tr className="bg-prim-light rounded">
                      <th className="border border-prim-light rounded px-4 py-4 text-center text-lg  w-[15%]">
                        Bank Name
                      </th>
                      <th className="border border-prim-light rounded px-4 py-4 text-center text-lg  w-[25%]">
                        Interest Rate
                      </th>
                      <th className="border border-prim-light rounded px-4 py-4 text-center text-lg  w-[15%]">
                        Max Time
                      </th>
                      <th className="border border-prim-light rounded px-4 py-4 text-center text-lg  w-[15%]">
                        Loan Type
                      </th>
                      <th className="border border-prim-light rounded px-4 py-4 text-center text-lg  w-[15%]">
                        Scheme
                      </th>
                      <th className="border border-prim-light rounded px-4 py-4 text-center text-lg w-[15%]">
                        Apply Now
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody>
                    {filteredBanks.map((bank, index) => (
                      <>
                        <tr key={index} className="border">
                          <td className="py-4 px-4 flex justify-center flex-col text-center">
                            <img
                              src={bank.bankLogo}
                              alt={bank.bankName}
                              className="w-full"
                            />
                            <a
                              href={`/education-loan/${bank.bankurl}`}
                              className="text-lg text-prim border-2 border-prim mx-auto px-4 hover:bg-prim hover:text-white transition duration-300"
                            >
                              Details
                            </a>
                          </td>
                          <td className="py-4 px-4 border">
                            {bank?.interestRates?.length > 0 ? (
                              bank?.interestRates?.map((data, index) => (
                                <div key={index}>{data}</div>
                              ))
                            ) : (
                              <div>No interest rates available.</div>
                            )}
                          </td>
                          <td className="py-4 px-4 text-center border">
                            {bank?.maxTime || "M/A"} Years
                          </td>
                          <td className="py-4 px-4 text-center border">
                            {bank.loanType}
                          </td>
                          <td className="py-4 px-4 border">
                            {bank?.interestSubsidySchemes?.map(
                              (data, index) => (
                                <div key={index}>{data.scheme}</div>
                              )
                            )}
                          </td>
                          <td className="py-4 px-4 flex justify-center">
                            <DynamicThemeButton onClick={openModal}>
                              Apply Now
                            </DynamicThemeButton>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Background */}
      {isOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center"
          onClick={handleOutsideClick}
        >
          {/* Modal Content */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[40%] h-[60%] max-sm:w-[80%] max-sm:h-[80%] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <EducationLoanApply bank={LoanData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
