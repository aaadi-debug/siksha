"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Page = ({ params }) => {
  const { notificationName } = useParams();
  const title = decodeURIComponent(params.notificationName);

  const [notificationDetails, setNotificationDetails] = useState([]);

  const notificationSData = [
    {
      _id: 1,
      summary:
        "Minimum Age : 15 Years Maximum Age : 22-24 Years (Post Wise) Age Relaxation Extra as per Southern Railway RRC SR Apprentice Rules 2024-2025.",
      table: [
        {
          id: 1,
          tableHeading: "Main heading of table",
          tableRow: [
            { id: 1, row: "row1" },
            { id: 2, row: "row2" },
          ],
          tableCol: [
            { id: 1, col: "col1" },
            { id: 2, col: "col2" },
            { id: 3, col: "col3" },
          ],
          tableFooter: "Main Footer of table",
        },
        {
          id: 2,
          tableHeading: "Main heading of table 2",
          tableRow: [
            { id: 1, row: "Aditya row1" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
          ],
          tableCol: [
            { id: 1, col: "col1" },
            { id: 2, col: "col2" },
            { id: 3, col: "col3" },
            { id: 4, col: "col4" },
          ],
          tableFooter: "",
        },
        {
          id: 3,
          tableHeading: "Main heading of table 2",
          tableRow: [
            { id: 1, row: "Aditya row1" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
          ],
          tableCol: [{ id: 1, col: "col1" }],
          tableFooter: "Main Footer of table",
        },
        {
          id: 4,
          tableHeading: "Main heading of table 2",
          tableRow: [
            { id: 1, row: "Aditya row1" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "Aditya row2" },
            { id: 2, row: "" },
          ],
          tableCol: [
            { id: 1, col: "" },
            { id: 1, col: "col1" },
          ],
          tableFooter: "Main Footer of table",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <div className="contact_us_wrapper">
          <div
            className=""
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(150, 105, 97, 0.67) 0%, rgba(2, 0, 76, 0.84) 100%), 
                url('/assets/images/noti.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "40vh",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <h2 className="h2 w-[70%] text-center max-sm:w-[90%]">{title}</h2>
          </div>
          <div className="container py-5 lg:px-28">
            <div className="overflow-x-auto">
              {notificationSData.map((data) => (
                <div key={data._id} className="mb-6">
                  {data.summary && (
                    <p className="mb-4 text-gray-600">{data.summary}</p>
                  )}

                  {/* Dynamic table iterations */}
                  {data.table.map((table) => (
                    <>
                      <div className="table_wrapper bg-white rounded-lg mb-5">
                        <div
                          className={`text-2xl font-semibold text-black rounded ${
                            table.tableHeading.length == 0 ? "hidden" : " p-2"
                          } `}
                        >
                          {table.tableHeading}
                        </div>

                        <div className="overflow-x-auto">
                        <div className="max-sm:w-[700px]">
                          <table
                            key={table.id}
                          >
                            <thead>
                              <tr>
                                {table.tableCol.map((col, colIndex) => (
                                  <th
                                    key={colIndex}
                                    className={`${
                                      table.tableCol.length === 1
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
                              {/* Create dynamic rows */}
                              {table.tableRow.map((row, rowIndex) => (
                                <tr key={row.id}>
                                  {/* Create dynamic columns */}
                                  {table.tableCol.map((col, colIndex) => (
                                    <td
                                      key={col.id}
                                      className={`${
                                        table.tableCol.length === 1
                                          ? "text-center"
                                          : "text-left"
                                      }`}
                                    >
                                      {`${row.row || "N/A"} - ${
                                        col.col || "N/A"
                                      }`}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        </div>

                        <div
                          className={`text-2xl font-semibold text-black rounded border-t ${
                            table.tableFooter.length == 0 ? "hidden" : " p-2"
                          } `}
                        >
                          {table.tableFooter}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
