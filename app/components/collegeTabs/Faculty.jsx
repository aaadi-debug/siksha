import React from "react";

const Faculty = ({ college }) => {
  const faculty = college?.faculty;

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
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4">
          {college?.collegeName} Faculty Details
        </div>

        <div className="grid gap-4 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 grid-cols-2">
          {faculty?.length > 0 ? (
            faculty?.map((data) => (
              <div
                key={data.id}
                className="border p-3 rounded-lg flex flex-col justify-center items-center text-center hover:bg-prim-light transition duration-300 hover:border-prim"
              >
                <div className="border-2 border-prim p-2 rounded-full  w-12 h-12 flex justify-center items-center text-center">
                  {getStudentNameInitials(data.name)}
                </div>
                <span className="bg-prim text-white py-1 px-3 rounded text-xs mt-3">
                  {data.designation}
                </span>
                <p className="text-lg font-semibold text-tertiary mt-2">
                  {data.name}
                </p>
                <p className="text-gray-500 text-sm">{data.department}</p>
              </div>
            ))
          ) : (
            <div>No faculty Details to show.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Faculty;
