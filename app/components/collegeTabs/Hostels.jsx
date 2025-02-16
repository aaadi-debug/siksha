import React from "react";
import DynamicTable from "../DynamicTable";

const Hostels = ({ college }) => {
  const hostels = college?.hostels;

  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4 border-b pb-2">
          {college?.collegeName} Hostels
        </div>
      </div>

      {hostels ? (
        <>
          {/* Male Hostels */}
          {hostels.male?.length > 0 && (
            <div className="mb-6">
              <div className="text-lg font-semibold text-tertiary mb-2">
                Male Hostels
              </div>
              {hostels.male.map((hostel, index) => (
                <div key={index} className="mb-4">
                  {hostel.heading && (
                    <h3 className="text-lg font-semibold mb-2">
                      {hostel.heading}
                    </h3>
                  )}
                  <DynamicTable
                    headers={hostel?.hostelFeeTable?.headers}
                    rows={hostel?.hostelFeeTable?.rows}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Female Hostels */}
          {hostels.female?.length > 0 && (
            <div className="mb-6">
            <div className="text-lg font-semibold text-tertiary mb-2">
                Female Hostels
              </div>
              {hostels.female.map((hostel, index) => (
                <div key={index} className="mb-4">
                  {hostel.heading && (
                    <h3 className="text-lg font-semibold mb-2">
                      {hostel.heading}
                    </h3>
                  )}
                  <DynamicTable
                    headers={hostel?.hostelFeeTable?.headers}
                    rows={hostel?.hostelFeeTable?.rows}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>No hostels to show.</div>
      )}
    </>
  );
};

export default Hostels;
