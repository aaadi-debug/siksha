<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import StarRating from "../StarRating";

const review = [
  {
    _id: 1,
    studentName: "Aditya Raj Gupta",
    studentImage: "",
    studentEmail: "webdegredg@gmail.com",
    studentPhone: "+91999999999",
    studentGender: "Male",

    studentRating: "5",
    universityName: "Sharda University",
    courseName: "Engineering",
    yearOfAdmission: "2024",
    isHelpful: true,
    date: "Feb 11, 2025",
    likePoints: ["like 1", "like 2"],
    dislikePoints: ["dis-like 1", "dis-like 2"],
    reason2: "Step 2 data",
    reason4: "Step 4 data",
    reason5: "Step 5 data",
    reason6: "Step 6 data",
    reason7: "Step 7 data",
  },
  
];

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReadMore = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div className="text-2xl font-semibold text-tertiary">Reviews</div>

      <div className="mt-4 bg-white rounded-lg ">
        <div className="font-semibold mb-3">Total reviews: {review.length}</div>
        <div className="space-y-6">
          {review.map((review, index) => (
            <div
              key={review._id}
              className="p-6 border border-gray-200 rounded-lg"
            >
              <div className="flex items-start justify-between space-x-4">
                <div className="">
                  <p className="text-tertiary font-semibold text-lg">
                    College: {review.universityName} - {review.courseName}
                  </p>
                  <span className="text-sm text-gray-500">
                    Review Date: {review.date}
                  </span>
                </div>
                <div>
                  <div className="text-yellow-500">
                    <div className="flex items-center text-prim">
                      <StarRating rating={review.studentRating} />
                    </div>
                  </div>
                  {review.isHelpful && (
                    <div
                      className="px-3 py-1 text-white rounded text-sm text-center bg-green-500 mt-1"
                      disabled
                    >
                      Helpful
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center"></div>

              <div className="grid gap-4 grid-cols-2 max-sm:grid-cols-1 mt-2">
                <div className="bg-green-100 rounded-lg p-2">
                  <div className="text-green-600 flex gap-2 items-center text-lg font-semibold ">
                    <ThumbsUp size={20} />
                    Likes:
                  </div>
                  <ul className="list-disc pl-6 mt-2  text-black">
                    {review.likePoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-100 rounded-lg p-2">
                  <div className="text-red-600 flex gap-2 items-center text-lg font-semibold ">
                    <ThumbsDown size={20} />
                    Dislikes:
                  </div>
                  <ul className="list-disc pl-6  mt-2  text-black">
                    {review.dislikePoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Additional Feedback:</h4>
                {expandedReviews[index] && (
                  <div className=" border-t-2 border-dashed mt-4 ">
                    {review.reason5 && (
                      <div>
                        <div className="font-semibold text-md text-tertiary mt-4">
                          Course Curriculum
                        </div>
                        <div className="mt-2 text-textClr">
                          {review.reason5}
                        </div>
                      </div>
                    )}
                    {review.reason2 && (
                      <div>
                        <div className="font-semibold text-md text-tertiary mt-4">
                          Fees and Financial Aid
                        </div>
                        <div className="mt-2 text-textClr">
                          {review.reason2}
                        </div>
                      </div>
                    )}
                    {review.reason4 && (
                      <div>
                        <div className="font-semibold text-md text-tertiary mt-4">
                          Course Structure
                        </div>
                        <div className="mt-2 text-textClr">
                          {review.reason4}
                        </div>
                      </div>
                    )}

                    {review.reason6 && (
                      <div>
                        <div className="font-semibold text-md text-tertiary mt-4">
                          Campus Life
                        </div>
                        <div className="mt-2 text-textClr">
                          {review.reason6}
                        </div>
                      </div>
                    )}
                    {review.reason7 && (
                      <div>
                        <div className="font-semibold text-md text-tertiary mt-4">
                          Night Life
                        </div>
                        <div className="mt-2 text-textClr">
                          {review.reason7}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <button
                  className="mt-2 text-second underline hover:text-prim transition duration-300"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedReviews[index] ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
=======
import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="text-2xl font-semibold text-tertiary">Reviews</div>
>>>>>>> second-account/main
    </>
  );
};

export default Reviews;
