import React from "react";

const Reviews = ({ college }) => {
  const reviews = college?.reviews || [];

  return (
    <div className="mb-4">
      <div className="text-2xl font-semibold text-tertiary mb-4 border-b pb-2">
        {college?.collegeName} Reviews
      </div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{review.studentName}</h3>
              <span className="text-sm text-gray-600">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 font-bold text-lg">{review.studentRating} ⭐</span>
            </div>
            <p className="text-sm text-gray-700"><strong>Course:</strong> {review.courseName}</p>
            <ul className="list-disc pl-5 mt-2 text-sm text-green-600">
              <strong>Likes:</strong>
              {review.likePoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <ul className="list-disc pl-5 mt-2 text-sm text-red-600">
              <strong>Dislikes:</strong>
              {review.dislikePoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button
              className={`mt-3 px-4 py-2 text-white rounded-lg ${review.isHelpful ? 'bg-green-500' : 'bg-gray-400'}`}
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