import { useState } from "react";
import CollegeDataJSON from "../data/collegeData.json";
import { Plus } from "lucide-react";

function formatNumberWithCommas(number) {
  // Handle cases where the number is less than 1000
  if (number < 1000) {
    return number.toString();
  }

  let numStr = number.toString();
  let lastThreeDigits = numStr.slice(-3);
  let remainingDigits = numStr.slice(0, -3);

  // Add commas to the remaining part
  remainingDigits = remainingDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

  // Combine the parts
  return remainingDigits + "," + lastThreeDigits;
}

export default function CollegeCompare() {
  const colleges = CollegeDataJSON.data;
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [searchQueries, setSearchQueries] = useState(["", "", ""]);
  const [specializationQueries, setSpecializationQueries] = useState([
    "",
    "",
    "",
  ]);
  const [selectedSpecializations, setSelectedSpecializations] = useState([
    null,
    null,
    null,
  ]);

  const addCollege = (college, index) => {
    if (selectedColleges.length < 3 && !selectedColleges.includes(college)) {
      const newSelected = [...selectedColleges];
      newSelected[index] = college;
      setSelectedColleges(newSelected);
      setSearchQueries((prev) => {
        const newQueries = [...prev];
        newQueries[index] = "";
        return newQueries;
      });
      setSelectedSpecializations((prev) => {
        const newSpecializations = [...prev];
        newSpecializations[index] = null;
        return newSpecializations;
      });
    }
  };

  const removeCollege = (index) => {
    const newSelected = [...selectedColleges];
    newSelected[index] = null;
    setSelectedColleges(newSelected);
    setSelectedSpecializations((prev) => {
      const newSpecializations = [...prev];
      newSpecializations[index] = null;
      return newSpecializations;
    });
  };

  const addSpecialization = (specialization, index) => {
    const newSpecializations = [...selectedSpecializations];
    newSpecializations[index] = specialization;
    setSelectedSpecializations(newSpecializations);

    // Clear the specialization query for the selected index
    setSpecializationQueries((prev) => {
      const newQueries = [...prev];
      newQueries[index] = "";
      return newQueries;
    });
  };

  // Function to calculate total fees
  const calculateTotalFee = (specialization) => {
    if (!specialization || !specialization.fee || !specialization.fee.general)
      return 0;
    return specialization.fee.general.reduce(
      (total, fee) => total + parseInt(fee.tuitionFee || 0),
      0
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">College Comparison</h1>
      <div className="grid lg:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 gap-4 mb-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="border-2 border-prim rounded-lg text-center flex flex-col items-center"
          >
            {selectedColleges[index] ? (
              <div className="p-4 bg-prim-light rounded-lg w-full h-full">
                <img
                  src={selectedColleges[index].collegeImages[0]}
                  alt="College"
                  className="w-full mb-2 rounded-lg 2xl:h-[250px] xl:h-[220px] lg:h-[200px] md:h-[200px] h-[250px]"
                />
                <div className="text-xl font-semibold">
                  {selectedColleges[index].collegeName}
                </div>
                <button
                  className="mt-2 bg-red-500 text-white px-2 py-1 text-sm rounded"
                  onClick={() => removeCollege(index)}
                >
                  Remove
                </button>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                  placeholder="Search Specialization..."
                  value={specializationQueries[index]}
                  onChange={(e) => {
                    const newQueries = [...specializationQueries];
                    newQueries[index] = e.target.value;
                    setSpecializationQueries(newQueries);
                  }}
                />
                {specializationQueries[index] && (
                  <div className="border mt-2 rounded-lg bg-white shadow max-h-40 overflow-y-auto">
                    {selectedColleges[index].departments.flatMap((department) =>
                      department.courses.flatMap((course) =>
                        course.specialization
                          .filter((specialization) =>
                            specialization.name
                              .toLowerCase()
                              .includes(
                                specializationQueries[index].toLowerCase()
                              )
                          )
                          .map((specialization) => (
                            <div
                              key={specialization.id}
                              className="p-2 hover:bg-gray-100 cursor-pointer text-left px-4 border-b transition duration-300"
                              onClick={() =>
                                addSpecialization(specialization, index)
                              }
                            >
                              {specialization.name} ({course.courseName})
                            </div>
                          ))
                      )
                    )}
                  </div>
                )}
                {selectedSpecializations[index] && (
                  <div className="mt-2 text-lg text-tertiary text-center mt-3 font-semibold">
                    {selectedSpecializations[index].name}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full bg-prim-light rounded-lg p-4">
                <div className="flex flex-col justify-center items-center mb-3">
                  <span className="border rounded-full text-gray-300 p-3 bg-white">
                    <Plus size={24} />
                  </span>
                  <div>Add College</div>
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search College..."
                  value={searchQueries[index]}
                  onChange={(e) => {
                    const newQueries = [...searchQueries];
                    newQueries[index] = e.target.value;
                    setSearchQueries(newQueries);
                  }}
                />
                {searchQueries[index] && (
                  <div className="border mt-2 rounded bg-white shadow-md max-h-40 overflow-y-auto">
                    {colleges
                      .filter(
                        (college) =>
                          college.collegeName
                            .toLowerCase()
                            .includes(searchQueries[index].toLowerCase()) &&
                          !selectedColleges.includes(college)
                      )
                      .map((college) => (
                        <div
                          key={college.collegeId}
                          className="p-2 hover:bg-gray-100 cursor-pointer text-left px-4 border-b transition duration-300"
                          onClick={() => addCollege(college, index)}
                        >
                          {college.collegeName}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-lg mt-2">
        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 rounded">
              <th className="border border-gray-300 px-4 py-4">
                Comparison Criteria
              </th>
              {selectedColleges.map(
                (college, idx) =>
                  college && (
                    <th key={idx} className="border border-gray-300 px-4 py-4">
                      {college.collegeName}
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-prim p-4 bg-prim-light font-semibold">
                Selected Specialization
              </td>
              {selectedSpecializations.map((specialization, idx) => (
                <td
                  key={idx}
                  className="border-2 border-prim p-4 bg-prim-light"
                >
                  {specialization ? specialization.name : "-"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 bg-prim-light font-semibold">
                1st Year Fee
              </td>
              {selectedSpecializations.map((specialization, idx) => (
                <td key={idx} className="border border-gray-300 p-4">
                  {specialization &&
                  specialization.fee &&
                  specialization.fee.general &&
                  specialization.fee.general[0]
                    ? `₹${formatNumberWithCommas(
                        specialization.fee.general[0].tuitionFee
                      )}`
                    : "-"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 bg-prim-light font-semibold">
                Total Fee
              </td>
              {selectedSpecializations.map((specialization, idx) => (
                <td key={idx} className="border border-gray-300 p-4">
                  {specialization
                    ? `₹${formatNumberWithCommas(
                        calculateTotalFee(specialization)
                      )}`
                    : "-"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Course Type - Duration
              </td>
              {selectedSpecializations.map((specialization, idx) => (
                <td key={idx} className="border border-gray-300 p-4">
                  {specialization
                    ? `${specialization.courseType} - ${specialization.courseDuration} years`
                    : "-"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Eligibility
              </td>
              {selectedSpecializations.map((specialization, idx) => {
                const course = selectedColleges[idx]?.departments
                  .flatMap((department) => department.courses)
                  .find((course) =>
                    course.specialization.some(
                      (spec) => spec.id === specialization?.id
                    )
                  );
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {course ? course.courseEligibility : "-"}
                  </td>
                );
              })}
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Application Date
              </td>
              {selectedSpecializations.map((specialization, idx) => {
                const course = selectedColleges[idx]?.departments
                  .flatMap((department) => department.courses)
                  .find((course) =>
                    course.specialization.some(
                      (spec) => spec.id === specialization?.id
                    )
                  );
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {course ? course.courseApplicationDate : "-"}
                  </td>
                );
              })}
            </tr>

            <tr>
              <th
                id="placements"
                colSpan={selectedColleges.length + 1}
                className="border border-gray-300 py-4 px-4 bg-prim text-white text-center font-bold"
              >
                Placements
              </th>
            </tr>

            {/* Highest Package Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Highest Package
              </td>
              {selectedColleges.map((college, idx) => (
                <td key={idx} className="border border-gray-300 p-4">
                  {college?.placements?.highest || "-"}
                </td>
              ))}
            </tr>
            {/* Average Package Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Average Package
              </td>
              {selectedColleges.map((college, idx) => (
                <td key={idx} className="border border-gray-300 p-4">
                  {college?.placements?.average || "-"}
                </td>
              ))}
            </tr>
            {/* Lowest Package Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Lowest Package
              </td>
              {selectedColleges.map((college, idx) => (
                <td key={idx} className="border border-gray-300 p-4">
                  {college?.placements?.lowest || "-"}
                </td>
              ))}
            </tr>
            {/* Placement Highlights Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Placement Highlights
              </td>
              {selectedColleges.map((college, idx) => {
                const highlights =
                  college?.placements?.placementContent?.highlights;
                return (
                  <td key={idx} className="border border-gray-300 pt-1 pb-4 px-4">
                    {highlights ? (
                      <ul className="list-disc list-inside pl-4">
                        {highlights.map((highlight, i) => (
                          <li key={i} className="mt-3">
                            <strong>{highlight.year}:</strong>
                            <ul className="list-disc list-inside pl-4">
                              {highlight.highlightsTable.map((item, j) => (
                                <li key={j}>
                                  <strong>{item.particulars}:</strong>{" "}
                                  {item.admHighlights}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>

            <tr>
              <th
                id="results"
                colSpan={selectedColleges.length + 1}
                className="border border-gray-300 py-4 px-4 bg-prim text-white text-center font-bold"
              >
                Results
              </th>
            </tr>

            {/* Result Description Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Result Description
              </td>
              {selectedColleges.map((college, idx) => {
                const resultDescription = college?.results?.description;
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {resultDescription ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: resultDescription }}
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>

            <tr>
              <th
                id="cutOffs"
                colSpan={selectedColleges.length + 1}
                className="border border-gray-300 py-4 px-4 bg-prim text-white text-center font-bold"
              >
                Cut-Offs
              </th>
            </tr>

            {/* Cutoff Year Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Cutoff Year
              </td>
              {selectedColleges.map((college, idx) => {
                const cutoffYear = college?.cutOffs?.[0]?.cutoffYear;
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {cutoffYear || "-"}
                  </td>
                );
              })}
            </tr>
            {/* Exam-Wise Cutoff Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Exam-Wise Cutoff
              </td>
              {selectedColleges.map((college, idx) => {
                const examWiseCutoff = college?.cutOffs?.[0]?.cutoffExamWise;
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {examWiseCutoff ? (
                      <ul className="list-disc list-inside ml-4">
                        {examWiseCutoff.map((exam, i) => (
                          <li key={i}>
                            <strong>{exam.examName}:</strong>
                            <table className="w-full mt-2">
                              <thead>
                                <tr>
                                  {exam.examCutoffTable.headers.map(
                                    (header, j) => (
                                      <th
                                        key={j}
                                        className="border border-gray-300 p-1"
                                      >
                                        {header}
                                      </th>
                                    )
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                {exam.examCutoffTable.rows.map((row, j) => (
                                  <tr key={j}>
                                    {row.map((cell, k) => (
                                      <td
                                        key={k}
                                        className="border border-gray-300 p-1"
                                        rowSpan={cell.rowspan}
                                        colSpan={cell.colspan}
                                      >
                                        {cell.content}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>

            <tr>
              <th
                id="ratings"
                colSpan={selectedColleges.length + 1}
                className="border border-gray-300 py-4 px-4 bg-prim text-white text-center font-bold"
              >
                Ratings and Reviews
              </th>
            </tr>

            {/* Average Rating Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Average Rating
              </td>
              {selectedColleges.map((college, idx) => {
                const reviews = college?.reviews;
                const averageRating = reviews?.length
                  ? (
                      reviews.reduce(
                        (sum, review) => sum + parseFloat(review.studentRating),
                        0
                      ) / reviews.length
                    ).toFixed(1)
                  : "-";
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {averageRating}
                  </td>
                );
              })}
            </tr>

            {/* Like Points Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Like Points
              </td>
              {selectedColleges.map((college, idx) => {
                const reviews = college?.reviews;
                const likePoints =
                  reviews?.flatMap((review) => review.likePoints) || [];
                const uniqueLikePoints = [...new Set(likePoints)]; // Remove duplicates
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {uniqueLikePoints.length ? (
                      <ul className="list-disc list-inside ml-4">
                        {uniqueLikePoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>

            {/* Dislike Points Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Dislike Points
              </td>
              {selectedColleges.map((college, idx) => {
                const reviews = college?.reviews;
                const dislikePoints =
                  reviews?.flatMap((review) => review.dislikePoints) || [];
                const uniqueDislikePoints = [...new Set(dislikePoints)]; // Remove duplicates
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {uniqueDislikePoints.length ? (
                      <ul className="list-disc list-inside ml-4">
                        {uniqueDislikePoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>

            {/* Review Highlights Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Review Highlights
              </td>
              {selectedColleges.map((college, idx) => {
                const reviews = college?.reviews;
                const highlights =
                  reviews?.map((review) => ({
                    reason2: review.reason2,
                    reason4: review.reason4,
                    reason5: review.reason5,
                    reason6: review.reason6,
                    reason7: review.reason7,
                  })) || [];
                return (
                  <td key={idx} className="border border-gray-300 pt-1 pb-4 px-4">
                    {highlights.length ? (
                      <ul className="list-disc list-inside ml-4">
                        {highlights.map((highlight, i) => (
                          <li key={i} className="mt-3">
                            <strong>Fees and Financial Aid:</strong>{" "}
                            {highlight.reason2}
                            <br />
                            <strong>Course Structure:</strong>{" "}
                            {highlight.reason4}
                            <br />
                            <strong> Course Curriculum:</strong>{" "}
                            {highlight.reason5}
                            <br />
                            <strong>Campus Life:</strong> {highlight.reason6}
                            <br />
                            <strong>Night Life:</strong> {highlight.reason7}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>

            <tr>
              <th
                id="gallery"
                colSpan={selectedColleges.length + 1}
                className="border border-gray-300 py-4 px-4 bg-prim text-white text-center font-bold"
              >
                Gallery Images and Videos
              </th>
            </tr>

            {/* Images Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Images
              </td>
              {selectedColleges.map((college, idx) => {
                const gallery = college?.gallery;
                const images = gallery?.flatMap((item) => item.images) || [];
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {images.length ? (
                      <div className="flex flex-wrap gap-2">
                        {images.map((image, i) => (
                          <img
                            key={i}
                            src={image}
                            alt={`Gallery Image ${i + 1}`}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>

            {/* Videos Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Videos
              </td>
              {selectedColleges.map((college, idx) => {
                const gallery = college?.gallery;
                const videos = gallery?.flatMap((item) => item.videos) || [];
                return (
                  <td key={idx} className="border border-gray-300 p-4">
                    {videos.length ? (
                      <div className="flex flex-wrap gap-2">
                        {videos.map((video, i) => (
                          <div
                            key={i}
                            className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center"
                          >
                            {video.includes("youtube.com") ||
                            video.includes("youtu.be") ? (
                              <a
                                href={video}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-12 w-12 text-red-600"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                </svg>
                              </a>
                            ) : (
                              <video
                                controls
                                className="w-full h-full rounded-lg"
                              >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>

            <tr>
              <th
                id="hostelFees"
                colSpan={selectedColleges.length + 1}
                className="border border-gray-300 py-4 px-4 bg-prim text-white text-center font-bold"
              >
                Hostel Fees
              </th>
            </tr>
            {/* Hostel Fee Tables Row */}
            <tr>
              <td className="border border-gray-300 p-4 font-semibold bg-prim-light">
                Hostel Fee Tables
              </td>
              {selectedColleges.map((college, idx) => {
                const maleHostels = college?.hostels?.male || [];
                const femaleHostels = college?.hostels?.female || [];
                const allHostels = [...maleHostels, ...femaleHostels];
                return (
                  <td
                    key={idx}
                    className="border border-gray-300 p-4 pt-1 pb-2"
                  >
                    {allHostels.length ? (
                      <ul className="list-disc list-inside ml-4">
                        {allHostels.map((hostel, i) => (
                          <li key={i} className="mt-3">
                            <strong>{hostel.heading || "Hostel"}:</strong>
                            <table className="w-full mt-2">
                              <thead>
                                <tr>
                                  {hostel.hostelFeeTable.headers.map(
                                    (header, j) => (
                                      <th
                                        key={j}
                                        className="border border-gray-300 p-1"
                                      >
                                        {header}
                                      </th>
                                    )
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                {hostel.hostelFeeTable.rows.map((row, j) => (
                                  <tr key={j}>
                                    {row.map((cell, k) => (
                                      <td
                                        key={k}
                                        className="border border-gray-300 p-1"
                                        rowSpan={cell.rowspan}
                                        colSpan={cell.colspan}
                                      >
                                        {cell.content}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
