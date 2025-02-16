import React from "react";
import DynamicTable from "../DynamicTable";

const CutOffs = ({ college }) => {
  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4">
          {college?.collegeName} Cut-Offs
        </div>
      </div>

      {college?.cutOffs?.length > 0 ? (
        college?.cutOffs?.map((cutoff, index) => (
          <div key={index} className=" border-gray-300">
            <div className="text-lg font-semibold text-textClr border-b mb-2">
              {college?.collegeName} {cutoff?.cutoffYear} Cut-Offs
            </div>

            <div>
              {cutoff?.cutoffExamWise?.map((data, index) => (
                <div key={index} className="mb-4">
                  <div className="text-lg font-semibold text-tertiary">
                    {college?.collegeName}, {data.examName} Cut-Off{" "}
                    {cutoff?.cutoffYear}
                  </div>
                  <DynamicTable
                    headers={data?.examCutoffTable?.headers}
                    rows={data?.examCutoffTable?.rows}
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>No cut-offs to show.</div>
      )}
    </>
  );
};

export default CutOffs;
