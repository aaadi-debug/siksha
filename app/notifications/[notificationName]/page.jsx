'use client'
import React from 'react'
import Notifications from '../../components/Notifications'
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useEffect, useState } from "react";


const Page = ({params}) => {
  const { notificationName } = useParams();

  const title = decodeURIComponent(params.notificationName); 

  const [notificationDetails, setNotificationDetails] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('/api/notification?title=' + title);
        const result = await res.json();
        if (result.success) {
          setNotificationDetails(result.data);
        }
    };

    fetchData();
}, [title]);

  console.log("notificationName data ",notificationDetails)
  return (
    <>
      <div>
            <div className="notification_page">
                <Navbar />

                <div className="contact_us_wrapper">
                    <div className="hero_notifications">
                        <h2>Notifications</h2>
                    </div>
                    <div className="container py-5 lg:px-28">
                        {notificationDetails.length > 0 ? (
                            notificationDetails.map((data) => (
                                <div key={data.id}>
                                    <p>{data.notificationData}</p>
                                    <p></p>
                                    <div className="table_wrapper mt-5" id='packagesList'>
                                        <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
                                            {data.importantDate.heading}
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Event</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white rounded'>
                                                {data.importantDate.table_data.length > 0 ? (
                                                    data.importantDate.table_data.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className='courses_name'>{item.event_name}</td>
                                                            <td>{item.date || "N/A"}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" style={{ textAlign: 'center' }}>Not Available</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Add similar sections for applicationFee, vacancyDetails, eligibilityCriteria, howToApply, and usefulLinks */}

                                    <div className="table_wrapper mt-5" id='packagesList'>
                                        <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
                                            {data.applicationFee.heading}
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Category</th>
                                                    <th>Fee</th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white rounded'>
                                                {data.applicationFee.table_data.length > 0 ? (
                                                    data.applicationFee.table_data.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className='courses_name'>{item.category}</td>
                                                            <td>{item.fee || "N/A"}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" style={{ textAlign: 'center' }}>Not Available</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                        <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
                                            {data.applicationFee.note}
                                        </div>
                                    </div>
                                    <div className="table_wrapper mt-5" id='packagesList'>
                                        <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
                                            {data.vacancyDetails.heading}
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Post Name</th>
                                                    <th>Toatl Posts</th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white rounded'>
                                                {data.vacancyDetails.table_data.length > 0 ? (
                                                    data.vacancyDetails.table_data.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className='courses_name'>{item.postName}</td>
                                                            <td>{item.totalPosts || "N/A"}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" style={{ textAlign: 'center' }}>Not Available</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="table_wrapper mt-5" id='packagesList'>
                                        <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
                                            {data.eligibilityCriteria.heading}
                                        </div>
                                        <ul>
                                            {data.eligibilityCriteria.listItems.length > 0 ? (
                                                data.eligibilityCriteria.listItems.map((item) => (
                                                    <li key={item.id}>
                                                        {item.item}
                                                    </li>
                                                ))
                                            ) : (
                                                <li>
                                                    <td colSpan="2" style={{ textAlign: 'center' }}>Not Available</td>
                                                </li>
                                            )}
                                        </ul>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Type</th>
                                                    <th>Posts</th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white rounded'>
                                                {data.eligibilityCriteria.table_data.length > 0 ? (
                                                    data.eligibilityCriteria.table_data.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className='courses_name'>{item.name}</td>
                                                            <td>{item.type || "N/A"}</td>
                                                            <td>{item.posts || "N/A"}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" style={{ textAlign: 'center' }}>Not Available</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="table_wrapper mt-5" id='packagesList'>
                                        <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
                                            {data.howToApply.heading}
                                        </div>
                                        <ul>
                                            {data.howToApply.listItems.length > 0 ? (
                                                data.howToApply.listItems.map((item) => (
                                                    <li key={item.id}>
                                                        {item.item}
                                                    </li>
                                                ))
                                            ) : (
                                                <li>
                                                    <td colSpan="2" style={{ textAlign: 'center' }}>Not Available</td>
                                                </li>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="table_wrapper mt-5" id='packagesList'>
                                        <div className="text-2xl font-semibold text-black p-2 bg-white rounded">
                                            {data.usefulLinks.heading}
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Link Description</th>
                                                    <th>URL</th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white rounded'>
                                                {data.usefulLinks.table_data.length > 0 ? (
                                                    data.usefulLinks.table_data.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className='courses_name'>{item.linkDesc}</td>
                                                            <td><a className='text-black' href={item.url}>{item.url || "N/A"}</a></td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" style={{ textAlign: 'center' }}>Not Available</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className='mt-3'>{data.notiFooterData}</p>
                                </div>
                            ))
                        ) : (
                            <div>No Data Found</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default Page
