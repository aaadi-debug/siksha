"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Page = ({ params }) => {
  const { notificationName } = useParams();
  const url = decodeURIComponent(params.notificationName);

  const [notificationSData, setNotificationDetails] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/notification?url=" + url);
      const result = await res.json();
      if (result.success) {
        setNotificationDetails(result.data);
      }
    };

    fetchData();
  }, [url]);

  // const notificationSData = [
  //   {
  //     _id: 1,
  //     summary:
  //       "Minimum Age : 15 Years Maximum Age : 22-24 Years (Post Wise) Age Relaxation Extra as per Southern Railway RRC SR Apprentice Rules 2024-2025.",
  //     table: [
  //       {
  //         id: 1,
  //         tableHeading: "Main heading of table",
  //         tableRow: [
  //           // { id: 1, row: "row1" },
  //           {
  //             id: 1,
  //             row: [
  //               {
  //                 id: 1,
  //                 colData: "OBC",
  //               },
  //               {
  //                 id: 2,
  //                 colData: "150",
  //               },
  //               {
  //                 id: 3,
  //                 colData: "200",
  //               },
  //             ],
  //           },
  //           {
  //             id: 2,
  //             row: [
  //               {
  //                 id: 1,
  //                 colData: "SC",
  //               },
  //               {
  //                 id: 2,
  //                 colData: "90",
  //               },
  //               {
  //                 id: 3,
  //                 colData: "600",
  //               },
  //             ],
  //           },
  //         ],
  //         tableCol: [
  //           { id: 1, col: "category" },
  //           { id: 2, col: "before date" },
  //           { id: 3, col: "after date" },
  //         ],
  //         tableFooter: "Main Footer of table",
  //       },
  //       {
  //         id: 2,
  //         tableHeading: "Main heading of table 2",
  //         tableRow: [
  //           // { id: 1, row: "row1" },
  //           {
  //             id: 1,
  //             row: [
  //               {
  //                 id: 1,
  //                 colData: "2020",
  //               },
  //               {
  //                 id: 2,
  //                 colData: "150",
  //               },
  //               {
  //                 id: 3,
  //                 colData: "200",
  //               },
  //               {
  //                 id: 4,
  //                 colData: "500",
  //               },
  //               {
  //                 id: 5,
  //                 colData: "100",
  //               },
  //             ],
  //           },
  //           {
  //             id: 2,
  //             row: [
  //               {
  //                 id: 1,
  //                 colData: "2019",
  //               },
  //               {
  //                 id: 2,
  //                 colData: "90",
  //               },
  //               {
  //                 id: 3,
  //                 colData: "600",
  //               },
  //               {
  //                 id: 4,
  //                 colData: "1",
  //               },
  //               {
  //                 id: 5,
  //                 colData: "2",
  //               },
  //             ],
  //           },
  //         ],
  //         tableCol: [
  //           { id: 1, col: "Posts/Year" },
  //           { id: 2, col: "general" },
  //           { id: 3, col: "ews" },
  //           { id: 3, col: "sc" },
  //           { id: 5, col: "st" },
  //         ],
  //         tableFooter: "Main Footer of table",
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
      <div>

        <div className="contact_us_wrapper">
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(150, 105, 97, 0.67) 0%, rgba(2, 0, 76, 0.84) 100%), url(${notificationSData?.image || ""})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              height: "40vh",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <h2 className="h2 w-[70%] text-center max-sm:w-[90%]">{notificationSData?.title}</h2>
          </div>
          <div className="container py-5 lg:px-28">
            <div className="overflow-x-auto">
              {/* {notificationSData.map((data) => ( */}
              <div key={notificationSData?._id} className="mb-6">
                {/* {data.summary && ( */}
                <p className="mb-4 text-gray-600">{notificationSData?.summary}</p>
                {/* )} */}

                {/* Dynamic table iterations */}
                {notificationSData?.table?.map((table) => (
                  <>
                    <div className="table_wrapper bg-white rounded-lg mb-5">
                      <div
                        className={`text-2xl font-semibold text-black rounded ${table.tableHeading.length == 0 ? "hidden" : " p-2"
                          } `}
                      >
                        {table.tableHeading}
                      </div>

                      <div className="overflow-x-auto">
                        <div className="max-sm:w-[700px]">
                          <table key={table.id}>
                            <thead>
                              <tr>
                                {table.tableCol.map((col, colIndex) => (
                                  <th
                                    key={colIndex}
                                    className={`${table.tableCol.length === 1
                                      ? "text-center"
                                      : "text-left"
                                      }`}
                                  >
                                    {col.col || "N/A"}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {/* Creating dynamic rows */}
                              {table.tableRow.map((row, rowIndex) => (
                                <tr key={row.id}>
                                  {/* Checking: if row is an array or a string */}
                                  {Array.isArray(row.row) ? (
                                    row.row.map((colData) => (
                                      <td key={colData.id}>
                                        {colData.colData || "N/A"}
                                      </td>
                                    ))
                                  ) : (
                                    <td
                                      colSpan={table.tableCol.length}
                                      className="text-left"
                                    >
                                      {row.row || "N/A"}
                                    </td>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div
                        className={`text-2xl font-semibold text-black rounded border-t ${table.tableFooter.length == 0 ? "hidden" : " p-2"
                          } `}
                      >
                        {table.tableFooter}
                      </div>
                    </div>
                  </>
                ))}
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Page;
