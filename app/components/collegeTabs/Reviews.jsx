import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Reviews = ({ college }) => {
  const reviews = college?.reviews || [];

  const getStudentNameInitials = (name) => {
    if (!name) return "";
    const nameParts = name.trim().split(" ");
    const initials =
      nameParts.length >= 2
        ? `${nameParts[0][0]}${nameParts[1][0]}` // Take the first letters of the first two words
        : nameParts[0][0]; // If only one word, take its first letter
    return initials.toUpperCase();
  };

  const calculateStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // One half star if decimal >= 0.5
    const emptyStars = 5 - fullStars - halfStars; // Remaining stars are empty

    return { fullStars, halfStars, emptyStars };
  };

  const totalReviews = reviews.length;
  const validRatings = reviews
    .map((review) => parseFloat(review.studentRating))
    .filter((rating) => !isNaN(rating)); // Remove invalid ratings

  const averageRating =
    validRatings.length > 0
      ? validRatings.reduce((sum, rating) => sum + rating, 0) /
        validRatings.length
      : 0;

  const { fullStars, halfStars, emptyStars } = calculateStars(averageRating);
  
  return (
    <div className="mb-4">
      <div className="text-2xl font-semibold text-tertiary mb-4 border-b pb-2">
        {college?.collegeName} Reviews
      </div>
      {/* Display Total Reviews and Average Rating */}
      {totalReviews > 0 && (
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <div className="text-lg font-semibold">
            Total Reviews: {totalReviews}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">
              ({averageRating.toFixed(1)})
            </span>
            <div className="flex items-center text-prim">
              {Array(fullStars)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={`full-${index}`} />
                ))}
              {halfStars > 0 && <FaStarHalfAlt key="half-star" />}
              {Array(emptyStars)
                .fill(0)
                .map((_, index) => (
                  <FaRegStar key={`empty-${index}`} />
                ))}
            </div>
          </div>
        </div>
      )}
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="border p-2 rounded-lg mb-4">
            <div className="flex gap-2 justify-between items-start max-sm:flex-col">
              <div className="flex gap-2 items-start">
                {review.studentImageUrl ? (
                  <img
                    src={review.studentImageUrl}
                    alt="Student Image"
                    className="rounded-full w-12 h-12"
                  />
                ) : (
                  <div className="border-2 border-prim p-2 rounded-full  w-12 h-12 flex justify-center items-center text-center">
                    {getStudentNameInitials(review.studentName)}
                  </div>
                )}

                <div className="text-lg font-semibold">
                  {review.studentName}
                  <div className="font-medium text-sm text-prim">
                    {review.courseName}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end max-sm:items-start">
                <div className="flex items-center  gap-2 mb-2">
                  <span className="text-tertiary font-bold text-lg">
                    {review.studentRating}
                  </span>
                  {/* Display rating stars */}
                  {/* Render full stars */}
                  <div className="flex items-center text-prim">
                    {Array(fullStars)
                      .fill(0)
                      .map((_, index) => (
                        <FaStar key={`full-${index}`} />
                      ))}

                    {/* Render half star */}
                    {halfStars > 0 && <FaStarHalfAlt key="half-star" />}

                    {/* Render empty stars */}
                    {Array(emptyStars)
                      .fill(0)
                      .map((_, index) => (
                        <FaRegStar key={`empty-${index}`} />
                      ))}
                  </div>
                </div>
                {review.isHelpful && (
                  <div
                    className="px-3 py-1 text-white rounded text-sm  bg-green-500"
                    disabled
                  >
                    Helpful
                  </div>
                )}
              </div>
            </div>

            <div className="text-sm text-gray-600 mt-2">
              Enrolled in: {review.studentYearOfAdmission}
            </div>
            <div className="text-sm text-gray-600">
              Reviewed on: {review.date}
            </div>

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
          </div>
        ))
      ) : (
        <div className="text-gray-500">No reviews available.</div>
      )}
    </div>
  );
};

export default Reviews;
