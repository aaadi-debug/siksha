import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
// icons import
import { IoIosNotifications } from "react-icons/io";
//image import
// import AuthorIMG from '../../../../assets/images/college_imgs/college_logo.webp'


const Info = ({collegeName}) => {
    const [showMore, setShowMore] = useState(true);
    const [fixedData, setFixedDatas] = useState();
    
    const today = new Date();


    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const srver = process.env.REACT_APP_SERVER;
    //             const response = await axios.get(`${srver}:5000/api/information/${collegeName}`)
    //             setFixedDatas(response.data)

    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()

    // }, []);


    console.log('collage name',collegeName)


    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('/api/information?name=' + collegeName);
          const result = await res.json();
          if (result.success) {
            setFixedDatas(result.data);
          }
        };
    
        fetchData();
      }, [collegeName]);

    // console.log("data in info is",fixedDatas)

    // const fixedData = [
    //     {
    //         id: 1,
    //         page_title: "IIT Kharagpur Quick Updates",
    //         para_1: "IIT Kharagpur B.Tech Admission 2024 is based on JEE Advanced scores. The result of JEE Advanced for B.Tech admission at IIT Kharagpur will be released on June 09, 2024.",
    //         major_upadtes: [
    //             {
    //                 id: 1,
    //                 list_item: "For the IIT Kharagpur M.Tech admission, the GATE COAP (Round 4) Seat Allotment will be released on June 2, 2024 (10 AM)."
    //             },
    //             {
    //                 id: 2,
    //                 list_item: "IIT Kharagpur JAM Cutoff 2024 Round 1 has been released for M.Sc course. Selected candidates must pay the online seat booking fee by June 4, 2024 (5 PM). Further, IIT JAM Round 2 admission list is expected to be out on June 12, 2024. (Tentatively). "
    //             },
    //             {
    //                 id: 3,
    //                 list_item: "UCEED 2024 Round 3 Seat Allotment for IIT Kharagpur admission to B.Des course will be announced on June 10, 2024."
    //             }
    //         ],
    //         notifications: [
    //             {
    //                 id: 1,
    //                 date: "31 May, 2024",
    //                 link: "",
    //                 title: "JEE Advanced 2024 Result on June 9; Check Qualifying Cutoff for IITs Here"
    //             },
    //             {
    //                 id: 2,
    //                 date: "31 May, 2024",
    //                 link: "",
    //                 title: "IIT Kharagpur MTech Registrations through COAP Portal on Basis of GATE 2024 Scores Open; Apply till June 30"
    //             },
    //             {
    //                 id: 3,
    //                 date: "31 May, 2024",
    //                 link: "",
    //                 title: "IIT JAM First Admission List 2024 Out @jam.iitm.ac.in, Get Direct Link Here"
    //             },
    //         ],

    //         authorImgSrc: "",
    //         author_name: "- vidhi sharma on, Jun 1, 2024",
    //         author_para: [
    //             {
    //                 id: 1,
    //                 para: "IIT Kharagpur was the first IIT to be established in 1951. IIT KGP is recognized as an Institute of National Importance, ranking 6th among the Top Engineering Colleges in India according to the NIRF 2023 report. Indian Institute of Technology, Kharagpur has 16,590+ students and 950+ staff members. The campus area of IIT Kharagpur is spread across 2100 acres.",
    //             },
    //             {
    //                 id: 2,
    //                 para: "IIT Kharagpur was the first IIT to be established in 1951. IIT KGP is recognized as an Institute of National Importance, ranking 6th among the Top Engineering Colleges in India according to the NIRF 2023 report. Indian Institute of Technology, Kharagpur has 16,590+ students and 950+ staff members. The campus area of IIT Kharagpur is spread across 2100 acres.",
    //             },
    //             {
    //                 id: 3,
    //                 para: "IIT Kharagpur was the first IIT to be established in 1951. IIT KGP is recognized as an Institute of National Importance, ranking 6th among the Top Engineering Colleges in India according to the NIRF 2023 report. Indian Institute of Technology, Kharagpur has 16,590+ students and 950+ staff members. The campus area of IIT Kharagpur is spread across 2100 acres.",
    //             },
    //             {
    //                 id: 4,
    //                 para: "IIT Kharagpur was the first IIT to be established in 1951. IIT KGP is recognized as an Institute of National Importance, ranking 6th among the Top Engineering Colleges in India according to the NIRF 2023 report. Indian Institute of Technology, Kharagpur has 16,590+ students and 950+ staff members. The campus area of IIT Kharagpur is spread across 2100 acres.",
    //             },
    //         ],

    //         h5: "IIT Kharagpur Highlights",
    //         h5_para: "Some of the major highlights of IIT Kharagpur are as follows:"
    //     }
    // ]

    // const collegeHighlights = [
    //     {
    //         id: 1,
    //         particular: "Established Year",
    //         highlights: "1951"
    //     },
    //     {
    //         id: 2,
    //         particular: "Location",
    //         highlights: "Kharagpur, West Bengal"
    //     },
    //     {
    //         id: 3,
    //         particular: "Campus Area",
    //         highlights: "2100 Acres"
    //     },
    //     {
    //         id: 4,
    //         particular: "Institute Type",
    //         highlights: "Public"
    //     },
    //     {
    //         id: 5,
    //         particular: "NIRF Ranking 2023",
    //         highlights: "1951"
    //     },
    //     {
    //         id: 6,
    //         particular: "Top Courses",
    //         highlights: "	B.Tech, M.Tech"
    //     },
    //     {
    //         id: 7,
    //         particular: "Students",
    //         highlights: "16,590+"
    //     },
    //     {
    //         id: 8,
    //         particular: "Faculty",
    //         highlights: "	760+"
    //     },
    //     {
    //         id: 9,
    //         particular: "Staff",
    //         highlights: "	950+"
    //     },
    //     {
    //         id: 10,
    //         particular: "Official Website",
    //         highlights: "https://www.iitkgp.ac"
    //     },
    // ]

    return (
        <div className="info_section">
            {/* 1st section */}
            {/* {fixedDatas.map((data,index)=>( */}
            {/* <div>
                {fixedDatas?.page_title}

                </div> */}
            {/* ))} */}


            <div className="quick_updates">
                <div className="quick_updates_wrapper">
                    <h5> {fixedData?.page_title} </h5>
                    <p> {fixedData?.para_1} </p>
                    <p className="d-flex align-items-center">
                        <span className="mr-5">Other major updates of {collegeName} are as follows:</span>
                        <button className="ml-5" onClick={toggleReadMore} id="myBtn"> {/* to toggle read more and less */}
                            {showMore ? "...Read more" : "Read less"}
                        </button>
                    </p>
                    <ul style={{ display: showMore ? "none" : "inline" }}>
                        {
                            fixedData?.major_updates?.map((list, index) => (
                                <li key={index}> {list.list_item} </li>
                            ))
                        }
                    </ul>

                    <div className="notification_div">
                        <div className="notification_div_wrapper">
                            <div className="notification_header">
                                <span><IoIosNotifications /></span>
                                <p>Notification</p>
                            </div>
                            <ul>
                                {
                                    fixedData?.notifications?.map((data) => (
                                        <li key={data.id}>
                                            <span> {data.date}:</span> <a href={data.link}> {data.title} </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd section */}
            <div className="about_college">
                <div className="about_college_wrapper">
                    <h5>About {collegeName}</h5>
                    <small>
                        <img src={fixedData?.authorImgSrc} alt="author-image" />
                        Written By &nbsp; <b>{fixedData?.author_name}  </b>
                    </small>
                    {
                        fixedData?.author_para.map((para) => (
                            <p key={para.id}> {para.para} </p>
                        ))
                    }
                </div>
            </div>

            {/* 3rd section */}
            <div className="highlights">
                <div className="highlights_wrapper">
                    <h5> {fixedData?.h5} </h5>
                    <p> {fixedData?.h5_para} </p>

                    <div className="table_wrapper" id='packagesList'>
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Particluars  </th>
                                    <th>{collegeName} Highlights {today.getFullYear()} </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    fixedData?.collegeHighlights.length > 0 ? (
                                        fixedData?.collegeHighlights.map(collegeHighlights => (
                                            <tr key={collegeHighlights.id}>
                                                <td className='courses_name'>{collegeHighlights.particular}</td>
                                                <td >
                                                    {collegeHighlights.highlights ? (
                                                        collegeHighlights.highlights.startsWith('http') ? (
                                                            <a
                                                                href={collegeHighlights.highlights}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className='text-black'
                                                                
                                                            >
                                                                {collegeHighlights.highlights}
                                                            </a>
                                                        ) : (
                                                            collegeHighlights.highlights
                                                        )
                                                    ) : (
                                                        "N/A"
                                                    )}
                                                </td>
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
                </div>
            </div>
        </div>
    )
}

export default Info
