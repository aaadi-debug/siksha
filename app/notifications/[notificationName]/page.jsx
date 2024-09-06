"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Page = ({ params }) => {
  const { notificationName } = useParams();
  const title = decodeURIComponent(params.notificationName);

  const [notificationDetails, setNotificationDetails] = useState([]);

  return (
    <>
      <div>
        <Navbar />
        <div className="contact_us_wrapper">
          <div className="hero_notifications">
            <h2 className="h2">{title}</h2>
          </div>
          <div className="container py-5 lg:px-28">
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
