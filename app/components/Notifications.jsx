'use client'
import React from 'react'
import { useParams } from 'react-router-dom'; // Change to `next/router` for Next.js
import Navbar from '../components/Navbar';

const Notifications = () => {
    const { notificationName } = useParams();

    const contentPara = [
        {
            id: 1,
            para: "Indian Institute of Technology, Roorkee released the GATE syllabus for the 2025 examination at their website, gate2025.iitr.ac.in. Candidates can check and download the syllabus for all 30 subjects. Each of the papers consists of 100 marks. The Data Science and Artificial Intelligence (DA) syllabus was added in 2024 by IISc Bangalore."
        },
        {
            id: 2,
            para: "Along with each subject, candidates need to appear in the General Aptitude paper. The authority has set 85% weightage for the core subjects and 15% weightage in the General Aptitude (GA) paper. The GA paper includes topics of verbal, quantitative, analytical, and spatial aptitude. There is also a compulsory section of Engineering Mathematics in XE paper, Reasoning and Comprehension in XH, and Chemistry in XL paper."
        },
        {
            id: 3,
            para: "From 2024 onwards, a new two-paper combination has been introduced in GATE examination. According to this, students appearing for a particular paper can attempt other eligible papers as well. For example, students preparing for Agricultural Engineering (AG) paper, have the option to appear in the Civil Engineering (CE) syllabus as well. Read the article to get the list of eligible subjects for each paper."
        },
    ]

    const notificationDetails = [
        {
            id: 1,
            notificationData: 'The Railway Recruitment Cell (RRC) of Southern Railway has announced the Various Trade Apprentices 2024 recruitment. Candidates interested in the Railway RRC Southern Railway Apprentice positions can apply online from July 22, 2024, to August 12, 2024. For detailed information on eligibility, post details, selection procedure, and more, please read the official notification.',
            importantDate: {
                heading: 'Important Dates',
                table_data: [
                    {
                        id: 1,
                        event_name: "Application start Date",
                        date: "July 22, 2024",
                    },
                    {
                        id: 2,
                        event_name: "Last date for application",
                        date: "August 12, 2024 (Upto 5 PM)",
                    },
                ]
            },
            applicationFee: {
                heading: 'Application Fee',
                table_data: [
                    {
                        id: 1,
                        category: "General/OBC",
                        fee: "₹100",
                    },
                    {
                        id: 2,
                        category: "SC/ST/PWD",
                        fee: "₹0",
                    },
                ],
                note: 'No application fees for SC/ST/PWD candidates. Only online registration is required.'
            },
            vacancyDetails: {
                heading: 'Vacancy Details',
                table_data: [
                    {
                        id: 1,
                        postName: "Trade Apprentice",
                        totalPosts: "200",
                    },
                ]
            },
            eligibilityCriteria: {
                heading: 'Eligibility Criteria',
                listItems: [
                    {
                        id: 1,
                        item: ''
                    }
                ],
                table_data: [
                    {
                        id: 1,
                        name: "General",
                        type: "10th Pass",
                        posts: "150"
                    },
                    {
                        id: 2,
                        name: "SC/ST",
                        type: "10th Pass",
                        posts: "50"
                    },
                ],
            },
            howToApply: {
                heading: 'How To Apply',
                listItems: [
                    {
                        id: 1,
                        item: ''
                    }
                ],
            },
            usefulLinks: {
                heading: 'Useful Links',
                table_data: [
                    {
                        id: 1,
                        linkDesc: "Official Notification",
                        url: "https://example.com/notification"
                    },
                    {
                        id: 2,
                        linkDesc: "Apply Online",
                        url: "https://example.com/apply"
                    },
                ],
            },
            notiFooterData: 'Heys Its footer of notifications'
        }
    ]

    return (
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
                                                            <td>{item.url || "N/A"}</td>
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
    )
}

export default Notifications
