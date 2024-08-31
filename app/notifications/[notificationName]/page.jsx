"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Page = ({ params }) => {
  const { notificationName } = useParams();
  const title = decodeURIComponent(params.notificationName);

  const [notificationDetails, setNotificationDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/notification?title=" + title);
        const result = await res.json();
        if (result.success) {
          setNotificationDetails(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [title]);

  const renderTable = (data) => {
    if (!data.heading || !data.table_data || data.table_data.length === 0) {
      return null;
    }

    const headers = Object.keys(data.table_data[0]);
    return (
      <div className="table_wrapper mt-5 overflow-x-auto" id="packagesList">
        <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
          {data.heading}
        </div>
        <div className="table-container overflow-x-auto">
          <table>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white rounded">
              {data.table_data.length > 0 ? (
                data.table_data.map((item, index) => (
                  <tr key={index} className="pl-4">
                    {headers.map((header) => (
                      <td key={header}>{item[header] || "N/A"}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={headers.length} style={{ textAlign: "center" }}>
                    Not Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {data.note && (
          <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
            {data.note}
          </div>
        )}
      </div>
    );
  };

  const renderList = (data) => {
    if (!data.heading || !data.listItems || data.listItems.length === 0) {
      return null;
    }

    return (
      <div className="table_wrapper mt-5" id="packagesList">
        <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
          {data.heading}
        </div>
        <ul>
          {data.listItems.length > 0 ? (
            data.listItems.map((item, index) => (
              <li key={index}>{item.item}</li>
            ))
          ) : (
            <li>
              <td colSpan="2" style={{ textAlign: "center" }}>
                Not Available
              </td>
            </li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="contact_us_wrapper">
          <div className="hero_notifications">
            <h2>Notifications</h2>
          </div>
          <div className="container py-5 lg:px-28">
            {notificationDetails.length > 0 ? (
              notificationDetails.map((data, index) => (
                <div key={index}>
                  <p>{data.notificationData}</p>
                  {renderTable(data.importantDate)}
                  {renderTable(data.applicationFee)}
                  {renderTable(data.vacancyDetails)}
                  {renderList(data.eligibilityCriteria)}
                  {renderList(data.howToApply)}
                  {renderTable(data.usefulLinks)}
                  <p className="mt-3">{data.notiFooterData}</p>
                </div>
              ))
            ) : (
              <div>No Data Found</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
