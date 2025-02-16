"use client";
import { useState } from "react";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import collegeDataJson from "../data/collegeData.json";

import {
  MapPin,
  School,
  Calendar,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import DynamicThemeButton from "../components/DynamicThemeButton";
import StarRating from "../components/StarRating";

// Page to list all colleges
export default function CollegesPage() {
  const colleges = collegeDataJson.data;

  // State to control the number of displayed colleges
  const [visibleCount, setVisibleCount] = useState(30);

  // Function to load more colleges
  const loadMoreColleges = () => {
    setVisibleCount((prevCount) => prevCount + 30);
  };

  const createSlug = (id, name, city) => {
    const cleanedName = encodeURIComponent(
      name
        .replace(/[\[\]]/g, "") // Remove square brackets
        .replace(/[-]+/g, "-") // Replace multiple hyphens with a single hyphen
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .toLowerCase()
    );

    const formattedCity = encodeURIComponent(
      city.toLowerCase().replace(/\s+/g, "-")
    );
    return `${id}-${cleanedName}-${formattedCity}`;
  };

  // Function to calculate rating stars for individual college
  const calculateStars = (rating) => {
    const validRating = isNaN(rating) ? 0 : Math.max(0, Math.min(5, rating)); // Ensure between 0-5
    const fullStars = Math.floor(validRating);
    const halfStars = validRating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return { fullStars, halfStars, emptyStars };
  };

  return (
    <>
      <div className="pt-20 max-sm:pt-16 pb-20">
        <div className="border-red-500 bg-cover bg-center bg-no-repeat  lg:px-10 px-6 py-10">
          <Breadcrumbs2
            breadcrumbs={[{ title: "All Colleges", link: "" }]}
            linkColor="text-tertiary"
            activeColor="text-gray-500"
          />
        </div>
        <div className="lg:px-10 px-6 pb-10">
          <h1 className="text-3xl font-bold text-center mb-6">Our Colleges</h1>
          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
            {colleges.slice(0, visibleCount).map((college) => {
              // Calculate reviews for each college individually
              const reviews = college?.reviews ?? [];
              const validRatings = reviews
                .map((review) => parseFloat(review?.studentRating))
                .filter((rating) => !isNaN(rating)); // Remove invalid ratings

              const averageRating =
                validRatings.length > 0
                  ? validRatings.reduce((sum, rating) => sum + rating, 0) /
                    validRatings.length
                  : 0;

              const { fullStars, halfStars, emptyStars } =
                calculateStars(averageRating);

              return (
                <a
                  key={college.id}
                  href={`/college/${createSlug(
                    college.collegeId,
                    college.collegeName,
                    college.collegeAddress.city
                  )}`}
                  className="p-2 border text-tertiary border-gray-300 rounded-lg hover:bg-prim-light transition duration-300"
                >
                  <div className="flex gap-2">
                    <img
                      src={
                        college?.collegeLogo ||
                        "/assets/testimonial_noImage.png"
                      }
                      alt="College Logo"
                      className="w-20 h-20 rounded bg-white p-2"
                    />
                    {/* College details */}
                    <div className="">
                      <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl max-sm:text-2xl font-semibold pb-2 max-sm:mb-2 text-prim">
                        {college?.collegeName}
                      </h1>
                      {/* Rating Section */}
                      <div className="flex items-center flex-wrap gap-2 mb-3 mt-2">
                        <span className="text-tertiary font-bold text-lg">
                          {averageRating.toFixed(1)}
                        </span>
                        {/* Render rating stars */}
                        <div className="flex items-center text-prim">
                          <StarRating rating={averageRating} />
                        </div>
                        {reviews.length > 0 && (
                          <span className="text-sm underline text-textClr">
                            ({reviews.length}{" "}
                            {reviews.length > 1 ? "Reviews" : "Review"})
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="flex flex-col items-start">
                          {(college?.collegeAddress.city ||
                            college?.collegeAddress.state) && (
                            <div className="flex items-start text-textClr gap-1 capitalize">
                              <MapPin size={16} className="text-prim mt-1" />
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
                </a>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleCount < colleges.length && (
            <div className="text-center mt-6">
              <DynamicThemeButton onClick={loadMoreColleges}>
                Load More Colleges
              </DynamicThemeButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
