import React from "react";

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

  return (
    <div className="mb-4">
      <div className="text-2xl font-semibold text-tertiary mb-4 border-b pb-2">
        {college?.collegeName} Reviews
      </div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4">
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

              <div>
                <div className="flex justify-between items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    {review.studentName}
                  </h3>
                  <span className="text-sm text-gray-600">
                    (Joined on: {review.date})
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 font-bold text-lg">
                    {review.studentRating} ⭐
                  </span>
                </div>
              </div>
            </div>

            <p className=" text-gray-700">
              <strong>Course:</strong> {review.courseName}
            </p>
            <div className="grid gap-4 grid-cols-2">
              <ul className="list-disc pl-5 mt-2  text-green-600">
                <strong className="text-tertiary">Likes:</strong>
                {review.likePoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <ul className="list-disc mt-2  text-red-600">
                <strong className="text-tertiary">Dislikes:</strong>
                {review.dislikePoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-3 px-4 py-2 text-white rounded-lg ${
                review.isHelpful ? "bg-green-500" : "bg-gray-400"
              }`}
              disabled
            >
              {review.isHelpful ? "Marked as Helpful" : "Mark as Helpful"}
            </button>
          </div>
        ))
      ) : (
        <div className="text-gray-500">No reviews available.</div>
      )}
    </div>
  );
};

export default Reviews;
