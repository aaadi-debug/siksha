import React from "react";
import DynamicTable from "../DynamicTable";

const Info = ({ college }) => {
  const events = college?.admissions?.importantEvents;

  return (
    <>
      {/* Updates */}
      {college?.latestUpdates && (
        <div className="bg-prim-light p-3 mb-5 rounded-lg">
          <div className="text-lg font-semibold text-tertiary">
            {college?.collegeName} Latest Updates
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: college?.latestUpdates,
            }}
            className="dangerousHTML mt-4"
          />
        </div>
      )}

      {/* Events */}
      {events && (
        <div className="px-3 mb-5">
          <div className="text-lg font-semibold text-tertiary">
            Important Events
          </div>
          <DynamicTable headers={events?.headers} rows={events?.rows} />
        </div>
      )}

      {/* About College */}
      <div className="px-3">
        <div className="text-lg font-semibold text-tertiary">
          About {college?.collegeName}
        </div>
        {!college?.collegeAbout ? (
          <p>Nothing about this college.</p>
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: college?.collegeAbout,
            }}
            className="dangerousHTML"
          />
        )}
      </div>
    </>
  );
};

export default Info;
