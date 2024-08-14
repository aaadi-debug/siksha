import React, { useState } from 'react'
import Modal from 'react-modal';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaHandPointDown } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import Graphs from './Bar';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Placements = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);   // if true then data is unlocked, if false then data is locked
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isPressed, setIsPressed] = useState(false);  

    const fixedData = [
        {
            id: 1,
            page_title: "IIT Kharagpur Placements 2024: Highest Package, Average Package, Top Recruiters",
            authorImgSrc: "",
            author_name: "Sapna Malik",
            para_1: "IIT Placements 2024 have concluded. However, the final report for the IIT Kharagpur 2024 has not been released yet. Some of the top recruiters who have participated in IIT Kharagpur Placements have been Apple, Google, Texas Instruments, Bajaj Auto Ltd, Cetak Ltd, Qualcomm, etc . IIT Kharagpur has announced that it has placed about 80% of students in BTech and dual degree courses and 75% of students in MTech courses until April 30, 2024. A total of 1091 students were placed, and 256 companies participated in the placement drive for the academic session 2023-24.",
            para_2: "As per the IIT Kharagpur Placements 2023 final report and the internship report, 1612 IIT Kharagpur students received placement offers from 480 top companies. The highest placements were achieved in the Core sectors (27.6%), Consulting sector (14.3%) followed by software sector i.e 13.2%. In the IIT Kharagpur Placements, the highest package for UG Courses remained INR 1.31 CPA where more than 154 students received an offer of more than INR 30 LPA. The total PPOs offered to the graduate candidates were 200. The highest offer given to Btech students stands at INR 1.31 CPA, for MTech, highest CTC offered is INR 54.21 LPA.",
            
            table_content_title_1: "IIT Kharagpur JEE Advanced Cutoff 2024 (Expected)",
            table_content_para_1: "IIT Madras BTech cutoff 2023 is released by the JoSAA counselling for 1-6 rounds. The cutoffs are based on the JEE Advanced scores. The cutoff scores vary each year depending on the difficulty of the exams, the number of students, and the availability of seats. Tabulated below is the IIT Madras BTech cutoff analysis of the top 5 courses for the past 3 years:",
            table_content_title_2: "IIT Kharagpur BTech Cutoff 2023: Round-wise Cutoff",
            table_content_para_2: "Tabulated below are the round-wise cutoffs of IIT Kharagpur:",

            table_content_title_3: "IIT Kharagpur Cutoff 2023: Top IITs Cutoff Trends",
            table_content_para_3: "All the IITs allow BTech admission via JoSAA counselling. The table below shows the BTech CSE cutoff trend of the JoSAA cutoff of top IITs for the round 6 general category:",
            
            table_content_title_4: "IIT Kharagpur JEE Advanced Cutoff 2023: Round 1 & Round 6 Comparison",
            table_content_para_4: "IIT Madras BTech cutoff varies each round. As per the cutoff released by the JoSAA, IIT Madras BTech CSE round 1 closing cutoff remained at 144 and the round 6 cutoff closed at 148 ranks. As compared to the round 1 cutoff, the round 6 cutoff score was declined by 4 ranks. Given below is the comparison for such other courses, candidates can refer to the table:",

            table_content_title_5: "IIT Kharagpur JEE Advanced Cutoff 2022: Round 1 & Round 6 Comparison",
            table_content_para_5: "IIT Madras BTech CSE cutoff stood at 167 ranks for the year 2022 in round 1. However, in the final round, the cutoff for BTech CSE declined by 8 ranks and remained at 148 ranks. To know more about such comparison of other top courses of IIT Madras, check the table given below:",

            table_content_title_6: "IIT Kharagpur JEE Advanced Cutoff 2021: Round 1 & Round 6 Comparison",
            table_content_para_6: "According to the IIT Madras BTech CSE cutoff 2021, the round 1 closing cutoff remained at 163 ranks for the general category students. Also, in the final round, the closing cutoff for BTech CSE remained unchanged and stood at 163 ranks. For other top IIT Madras courses, refer to the JEE Advanced cutoff 2021 tabulated below:",

            table_content_title_7: "IIT Kharagpur FAQs",
            table_content_title_8: "Package",

            table_content_para_7: "unchanged and stood at 163 ranks. For other top IIT Madras courses, refer to the JEE Advanced cutoff 2021 tabulated below:",
            table_content_para_8: "unchanged and stood at 163 ranks. For other top IIT Madras courses, refer to the JEE Advanced cutoff 2021 tabulated below:",
            table_content_para_9: "unchanged and stood at 163 ranks. For other top IIT Madras courses, refer to the JEE Advanced cutoff 2021 tabulated below:",
            table_content_para_10: "unchanged and stood at 163 ranks. For other top IIT Madras courses, refer to the JEE Advanced cutoff 2021 tabulated below:",
            table_content_para_11: "unchanged and stood at 163 ranks. For other top IIT Madras courses, refer to the JEE Advanced cutoff 2021 tabulated below:",
            table_content_para_12: "unchanged and stood at 163 ranks. For other top IIT Madras courses, refer to the JEE Advanced cutoff 2021 tabulated below:",

        },
    ]

    const tableOfContents = [
        {
            id: 1,
            title: "IIT Kharagpur Placement 2024: Recruiters and Packages List",
            link: "#expectedCutoff",
        },
        {
            id: 2,
            title: "IIT Madras JEE Advanced Cutoff 2024 (Expected)",
            link: "#packagesList",
        },
        {
            id: 3,
            title: "IIT Madras JEE Advanced Cutoff 2024 (Expected)",
            link: "#placementReport",
        },
        {
            id: 4,
            title: "IIT Madras JEE Advanced Cutoff 2024 (Expected)",
            link: "#cutoffComparision2023",
        },
        {
            id: 5,
            title: "IIT Madras JEE Advanced Cutoff 2024 (Expected)",
            link: "#cutoffComparision2022",
        },
        {
            id: 6,
            title: "IIT Madras JEE Advanced Cutoff 2024 (Expected)",
            link: "#cutoffComparision2021",
        },
        {
            id: 7,
            title: "FAQS",
            link: "#FAQs",
        },
    ]

    const packagesList = [      //array for 1st table
        {
            id: 1,
            company_name: "AB InBev",
            package_offered: "	23.5 LPA",
            role: "Global Management Trainee",
            branches: "All BTech Branches"
        },
        {
            id: 2,
            company_name: "Abascus.AI",
            package_offered: "	23.5 LPA",
            role: "Global Management Trainee",
            branches: "All BTech Branches"
        },
        {
            id: 3,
            company_name: "Accenture",
            package_offered: "	23.5 LPA",
            role: "Global Management Trainee",
            branches: "All BTech Branches"
        },
        {
            id: 4,
            company_name: "Accenture Japan Ltd.",
            package_offered: "	23.5 LPA",
            role: "Global Management Trainee",
            branches: "All BTech Branches"
        },
        {
            id: 5,
            company_name: "AIRBUS Group India",
            package_offered: "	23.5 LPA",
            role: "Global Management Trainee",
            branches: "All BTech Branches"
        }
    ]

    const placementReport = [    //array for 2nd table
        {
            id: 1,
            particulars: "PPOs offered",
            p_stats: "258"
        },
        {
            id: 2,
            particulars: "Total offers",
            p_stats: "258"
        },
        {
            id: 3,
            particulars: "No. of companies visited",
            p_stats: "258"
        }
    ]

    const highestSalaryTable = [    //array for 3rd table - locked
        {
            id: 1,
            iits: "IIT Kanpur",
            high_salary: "1.9 CGPA",
            no_of_offers: "519"
        },
        {
            id: 2,
            iits: "IIT Kanpur",
            high_salary: "1.9 CGPA",
            no_of_offers: "519"
        },
        {
            id: 3,
            iits: "IIT Kanpur",
            high_salary: "1.9 CGPA",
            no_of_offers: "519"
        },
        {
            id: 4,
            iits: "IIT Kanpur",
            high_salary: "1.9 CGPA",
            no_of_offers: "519"
        },
    ]

    const companyWiseOffersTable = [    //array for 4th table - locked
        {
            id: 1,
            recruiters: "IIT Kanpur",
            no_of_offers: "519"
        },
        {
            id: 2,
            recruiters: "IIT Kanpur",
            no_of_offers: "519"
        },
        {
            id: 3,
            recruiters: "IIT Kanpur",
            no_of_offers: "519"
        },
        {
            id: 4,
            recruiters: "IIT Kanpur",
            no_of_offers: "519"
        },
    ]

    const placementStatsTable = [    //array for 4th table - locked
        {
            id: 1,
            batch: "No. of Companies Participated",
            p_stats_2021: "256",
            p_stats_2022: "480+"
        },
        {
            id: 2,
            batch: "No. of Companies Participated",
            p_stats_2021: "519",
            p_stats_2022: "519"
        },
        {
            id: 3,
            batch: "No. of Companies Participated",
            p_stats_2021: "519",
            p_stats_2022: "519"
        },
        {
            id: 4,
            batch: "No. of Companies Participated",
            p_stats_2021: "519",
            p_stats_2022: "519"
        },
    ]

    const salaryStatsTable = [    //array for 5th table - locked
        {
            id: 1,
            s_stats: "Offers above INR 30 LPA",
            no_of_offers: "203 Offers",
        },
        {
            id: 2,
            s_stats: "Offers above INR 30 LPA",
            no_of_offers: "203 Offers",
        },
        {
            id: 3,
            s_stats: "Offers above INR 30 LPA",
            no_of_offers: "203 Offers",
        },
        {
            id: 4,
            s_stats: "Offers above INR 30 LPA",
            no_of_offers: "203 Offers",
        },
    ]

    const topRecruitersTable = [    //array for 6th table - locked
        {
            id: 1,
            microsoft: "Qualcomm",
            instruments: "C-Dot",
            google: "Enphase Energy",
            uber: "Oracle"
        },
        {
            id: 2,
            microsoft: "Qualcomm",
            instruments: "C-Dot",
            google: "Enphase Energy",
            uber: "Oracle"
        },
        {
            id: 3,
            microsoft: "Qualcomm",
            instruments: "C-Dot",
            google: "Enphase Energy",
            uber: "Oracle"
        },
        {
            id: 4,
            microsoft: "Qualcomm",
            instruments: "C-Dot",
            google: "Enphase Energy",
            uber: "Oracle"
        },
    ]

    const summerInternTable = [    //array for 7th table - locked
        {
            id: 1,
            batch: "No. of Recruiters",
            i_stats_2022: "146",
            i_stats_2023: "122",
        },
        {
            id: 2,
            batch: "No. of Recruiters",
            i_stats_2022: "146",
            i_stats_2023: "122",
        },
        {
            id: 3,
            batch: "No. of Recruiters",
            i_stats_2022: "146",
            i_stats_2023: "122",
        },
        {
            id: 4,
            batch: "No. of Recruiters",
            i_stats_2022: "146",
            i_stats_2023: "122",
        },
    ]

    const alumniTable = [    //array for 7th table - locked
        {
            id: 1,
            organization_name: "Indian Institue of Technology, Kharagpur",
            no_of_alumni: "146",
        },
        {
            id: 2,
            organization_name: "Indian Institue of Technology, Kharagpur",
            no_of_alumni: "146",
        },
        {
            id: 3,
            organization_name: "Indian Institue of Technology, Kharagpur",
            no_of_alumni: "146",
        },
        {
            id: 4,
            organization_name: "Indian Institue of Technology, Kharagpur",
            no_of_alumni: "146",
        },
    ]

    const faqData = [  //mapping of FAQs
        {
            id: 0,
            question: "What is the cutoff rank for IIT Kharagpur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 1,
            question: "What is the IIT Kharagpur GATE cutoff 2023?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            question: "What is the rank required for CSE at IIT Kharagpur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 3,
            question: "What is the cutoff score of MSc courses at IIT Kharagpur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 4,
            question: "What is the cutoff for an MBA at IIT Kharagpur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];


    // Function to handle login from backend
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // Function to handle logout from backend
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const openModal = () => {   //function to open modal
        setIsOpen(true);
    };

    const closeModal = () => {  //function to close modal
        setIsOpen(false);
    };

    const togglePackage = () => { // for needle toggler
        setIsPressed(!isPressed);
    };


    return (
        <div className="placement_section">
            <div className="placement_section_wrapper">

                {/* 1st section */}
                <div className="placement_div">
                    <div className="placement_div_wrapper">
                        <h5> {fixedData[0].page_title} </h5>

                        <small>
                            <img src={fixedData[0].authorImgSrc} alt="author-image" />
                            Written By &nbsp; <b>{fixedData[0].author_name}  </b>
                        </small>
                        <p>{fixedData[0].para_1}</p>
                        <p>{fixedData[0].para_2}</p>

                        <div className="table_of_contents">  {/* global styling */}
                            <h6>Table of Content</h6>

                            <ol typeof='1'>
                                {
                                    tableOfContents.map((row) => (
                                        <li key={row.id}> 
                                            <a href={row.link}> {row.title} </a>
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>

                        {/* 1st table of contents */}
                        <h5 className='mt-4'> {fixedData[0].table_content_title_1} </h5>
                        <p> {fixedData[0].table_content_para_1} </p>
                        <div className="table_wrapper" id='packagesList'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>Company name </th>
                                        <th>Package Offered </th>
                                        <th>Role </th>
                                        <th>Branches </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        packagesList.length > 0 ? (
                                            packagesList.map(packagesList => (
                                                <tr key={packagesList.id}>
                                                    <td className='courses_name'>{packagesList.company_name}</td>
                                                    <td> {packagesList.package_offered || "N/A"}</td>
                                                    <td>{packagesList.role || "N/A"}</td>
                                                    <td>{packagesList.branches || "N/A"}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" style={{ textAlign: 'center' }}>Not Available</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* 2nd table of contents */}
                        <h5 className='mt-4'> {fixedData[0].table_content_title_2} </h5>
                        <div className="table_wrapper" id='placementReport'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>Particulars </th>
                                        <th>Placement Statistics 2023</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        placementReport.length > 0 ? (
                                            placementReport.map(placementReport => (
                                                <tr key={placementReport.id}>
                                                    <td className='courses_name'>{placementReport.particulars}</td>
                                                    <td> {placementReport.p_stats || "N/A"}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" style={{ textAlign: 'center' }}>Not Available</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <p className='mt-4'> {fixedData[0].table_content_para_2}  </p>

                        {/* Now below section will be locked and will be visible if user is logged in */}
                        <div className="table_wrapper locked_table">
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>IITs </th>
                                        <th>Highest Salary</th>
                                        <th>Number of Offers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Conditional rendering based on login status */}
                                    {
                                        isLoggedIn ? (
                                            highestSalaryTable.length > 0 ? (
                                                highestSalaryTable.map((row) => (
                                                    <tr key={row.id}>
                                                        <td className='courses_name'>{row.iits}</td>
                                                        <td>{row.high_salary || "N/A"}</td>
                                                        <td>{row.no_of_offers || "N/A"}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" style={{ textAlign: 'center' }}>No Data Available</td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td colSpan="3" style={{ textAlign: 'center', padding: '0' }}>
                                                    {/* <input className="locked_div" type="button" value={` ${<FaLock />} This information is locked. Please log in to view the data.`} onClick={openModal} /> */}
                                                    <div className='locked_content'>
                                                        <button className="locked_div" onClick={openModal}>
                                                            <FaLock /> This information is locked. Please log in to view the data.
                                                        </button>
                                                    </div>
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        // onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="Example Modal"
                                                    >
                                                        <div className="modal_wrapper">
                                                            <h2>Register Now To Get Fee Details</h2>
                                                            <button className='close_btn' onClick={closeModal}>
                                                                <IoIosCloseCircleOutline />
                                                            </button>
                                                        </div>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <h5 className='mt-4'> {fixedData[0].table_content_title_3} </h5>
                        <p> {fixedData[0].table_content_para_3} </p>

                        {/* Now below section will be locked and will be visible if user is logged in */}
                        <div className="table_wrapper locked_table">
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>Recruiters </th>
                                        <th>Number of Offers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Conditional rendering based on login status */}
                                    {
                                        isLoggedIn ? (
                                            companyWiseOffersTable.length > 0 ? (
                                                companyWiseOffersTable.map((row) => (
                                                    <tr key={row.id}>
                                                        <td className='courses_name'>{row.recruiters}</td>
                                                        <td>{row.no_of_offers || "N/A"}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" style={{ textAlign: 'center' }}>No Data Available</td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td colSpan="3" style={{ textAlign: 'center', padding: '0' }}>
                                                    {/* <input className="locked_div" type="button" value={` ${<FaLock />} This information is locked. Please log in to view the data.`} onClick={openModal} /> */}
                                                    <div className='locked_content'>
                                                        <button className="locked_div" onClick={openModal}>
                                                            <FaLock /> This information is locked. Please log in to view the data.
                                                        </button>
                                                    </div>
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        // onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="Example Modal"
                                                    >
                                                        <div className="modal_wrapper">
                                                            <h2>Register Now To Get Fee Details</h2>
                                                            <button className='close_btn' onClick={closeModal}>
                                                                <IoIosCloseCircleOutline />
                                                            </button>
                                                        </div>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <h5 className='mt-4'> {fixedData[0].table_content_title_4} </h5>
                        <p> {fixedData[0].table_content_para_4} </p>

                        <Graphs />

                        <p> {fixedData[0].table_content_para_5} </p>

                        {/* Now below section will be locked and will be visible if user is logged in */}
                        <div className="table_wrapper locked_table">
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>Batch </th>
                                        <th>Placement Statistics (2020-21)</th>
                                        <th>Placement Statistics (2021-22)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Conditional rendering based on login status */}
                                    {
                                        isLoggedIn ? (
                                            placementStatsTable.length > 0 ? (
                                                placementStatsTable.map((row) => (
                                                    <tr key={row.id}>
                                                        <td className='courses_name'>{row.batch}</td>
                                                        <td>{row.p_stats_2021 || "N/A"}</td>
                                                        <td>{row.p_stats_2022 || "N/A"}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" style={{ textAlign: 'center' }}>No Data Available</td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td colSpan="3" style={{ textAlign: 'center', padding: '0' }}>
                                                    {/* <input className="locked_div" type="button" value={` ${<FaLock />} This information is locked. Please log in to view the data.`} onClick={openModal} /> */}
                                                    <div className='locked_content'>
                                                        <button className="locked_div" onClick={openModal}>
                                                            <FaLock /> This information is locked. Please log in to view the data.
                                                        </button>
                                                    </div>
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        // onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="Example Modal"
                                                    >
                                                        <div className="modal_wrapper">
                                                            <h2>Register Now To Get Fee Details</h2>
                                                            <button className='close_btn' onClick={closeModal}>
                                                                <IoIosCloseCircleOutline />
                                                            </button>
                                                        </div>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <p className='mt-3'> {fixedData[0].table_content_para_6} </p>
                        <p> {fixedData[0].table_content_para_7} </p>
                        <p> {fixedData[0].table_content_para_8} </p>

                        {/* Now below section will be locked and will be visible if user is logged in */}
                        <div className="table_wrapper locked_table">
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>Salary Statistics </th>
                                        <th>Number of Offers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Conditional rendering based on login status */}
                                    {
                                        isLoggedIn ? (
                                            salaryStatsTable.length > 0 ? (
                                                salaryStatsTable.map((row) => (
                                                    <tr key={row.id}>
                                                        <td className='courses_name'>{row.s_stats}</td>
                                                        <td>{row.no_of_offers || "N/A"}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" style={{ textAlign: 'center' }}>No Data Available</td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td colSpan="3" style={{ textAlign: 'center', padding: '0' }}>
                                                    {/* <input className="locked_div" type="button" value={` ${<FaLock />} This information is locked. Please log in to view the data.`} onClick={openModal} /> */}
                                                    <div className='locked_content'>
                                                        <button className="locked_div" onClick={openModal}>
                                                            <FaLock /> This information is locked. Please log in to view the data.
                                                        </button>
                                                    </div>
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        // onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="Example Modal"
                                                    >
                                                        <div className="modal_wrapper">
                                                            <h2>Register Now To Get Fee Details</h2>
                                                            <button className='close_btn' onClick={closeModal}>
                                                                <IoIosCloseCircleOutline />
                                                            </button>
                                                        </div>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <p className='mt-3'> {fixedData[0].table_content_para_9} </p>

                        <h5> {fixedData[0].table_content_title_5} </h5>
                        <p> {fixedData[0].table_content_para_10} </p>

                        {/* Now below section will be locked and will be visible if user is logged in */}
                        <div className="table_wrapper locked_table">
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>Microsoft</th>
                                        <th>Texas Instruments</th>
                                        <th>Google</th>
                                        <th>Uber</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Conditional rendering based on login status */}
                                    {
                                        isLoggedIn ? (
                                            topRecruitersTable.length > 0 ? (
                                                topRecruitersTable.map((row) => (
                                                    <tr key={row.id}>
                                                        <td className='courses_name'>{row.microsoft}</td>
                                                        <td>{row.instruments || "N/A"}</td>
                                                        <td>{row.google || "N/A"}</td>
                                                        <td>{row.uber || "N/A"}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" style={{ textAlign: 'center' }}>No Data Available</td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td colSpan="3" style={{ textAlign: 'center', padding: '0' }}>
                                                    {/* <input className="locked_div" type="button" value={` ${<FaLock />} This information is locked. Please log in to view the data.`} onClick={openModal} /> */}
                                                    <div className='locked_content'>
                                                        <button className="locked_div" onClick={openModal}>
                                                            <FaLock /> This information is locked. Please log in to view the data.
                                                        </button>
                                                    </div>
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        // onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="Example Modal"
                                                    >
                                                        <div className="modal_wrapper">
                                                            <h2>Register Now To Get Fee Details</h2>
                                                            <button className='close_btn' onClick={closeModal}>
                                                                <IoIosCloseCircleOutline />
                                                            </button>
                                                        </div>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <h5 className='mt-4'> {fixedData[0].table_content_para_11} </h5>

                        {/* Now below section will be locked and will be visible if user is logged in */}
                        <div className="table_wrapper locked_table" id='summer_intern'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>Batch</th>
                                        <th>Internship Statistics 2022</th>
                                        <th>Internship Statistics 2023</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Conditional rendering based on login status */}
                                    {
                                        isLoggedIn ? (
                                            summerInternTable.length > 0 ? (
                                                summerInternTable.map((row) => (
                                                    <tr key={row.id}>
                                                        <td className='courses_name'>{row.batch}</td>
                                                        <td>{row.i_stats_2022 || "N/A"}</td>
                                                        <td>{row.i_stats_2023 || "N/A"}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" style={{ textAlign: 'center' }}>No Data Available</td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td colSpan="3" style={{ textAlign: 'center', padding: '0' }}>
                                                    {/* <input className="locked_div" type="button" value={` ${<FaLock />} This information is locked. Please log in to view the data.`} onClick={openModal} /> */}
                                                    <div className='locked_content'>
                                                        <button className="locked_div" onClick={openModal}>
                                                            <FaLock /> This information is locked. Please log in to view the data.
                                                        </button>
                                                    </div>
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        // onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="Example Modal"
                                                    >
                                                        <div className="modal_wrapper">
                                                            <h2>Register Now To Get Fee Details</h2>
                                                            <button className='close_btn' onClick={closeModal}>
                                                                <IoIosCloseCircleOutline />
                                                            </button>
                                                        </div>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <p className='mt-3'> {fixedData[0].table_content_para_12} </p>

                        <h5> {fixedData[0].table_content_title_6} </h5>

                        {/* Now below section will be locked and will be visible if user is logged in */}
                        <div className="table_wrapper locked_table" id='alumni_network'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>Name of Organizations</th>
                                        <th>Number of Alumni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Conditional rendering based on login status */}
                                    {
                                        isLoggedIn ? (
                                            alumniTable.length > 0 ? (
                                                alumniTable.map((row) => (
                                                    <tr key={row.id}>
                                                        <td className='courses_name'>{row.organization_name}</td>
                                                        <td>{row.no_of_alumni || "N/A"}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" style={{ textAlign: 'center' }}>No Data Available</td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td colSpan="3" style={{ textAlign: 'center', padding: '0' }}>
                                                    {/* <input className="locked_div" type="button" value={` ${<FaLock />} This information is locked. Please log in to view the data.`} onClick={openModal} /> */}
                                                    <div className='locked_content'>
                                                        <button className="locked_div" onClick={openModal}>
                                                            <FaLock /> This information is locked. Please log in to view the data.
                                                        </button>
                                                    </div>
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        // onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="Example Modal"
                                                    >
                                                        <div className="modal_wrapper">
                                                            <h2>Register Now To Get Fee Details</h2>
                                                            <button className='close_btn' onClick={closeModal}>
                                                                <IoIosCloseCircleOutline />
                                                            </button>
                                                        </div>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <h5 className='mt-4'> {fixedData[0].table_content_title_7} </h5>
                        {/* FAQs */}
                        <Accordion defaultActiveKey="0" id='placement_faqs'>
                            {
                                faqData.map((item, index) => (
                                    <Accordion.Item eventKey={item.id.toString()} key={item.id}>
                                        <Accordion.Header>{`Ques. ${item.question}`}</Accordion.Header>
                                        <Accordion.Body>
                                            {item.answer}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>

                        <h5 className='mt-4'> {fixedData[0].table_content_title_8} </h5>
                        <div className={`needleToggler ${isPressed ? 'pressed' : ''}`}>
                            <div className={`toggle ${isPressed ? 'pressed' : ''}`}>
                                <button 
                                type="button" 
                                id="styled" 
                                aria-pressed={isPressed}
                                onClick={togglePackage}
                                >
                                <span className="iconWrapper">
                                    <FaHandPointDown className="icon" />
                                </span> 
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placements
