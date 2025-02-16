import React from 'react'
import PointBar from './PointBar'
import Accordion from 'react-bootstrap/Accordion';
import { FaHandPointDown } from "react-icons/fa6";

const Rankings = () => {

    const fixedData = [
        {
            id: 1,
            page_title: "IIT Kharagpur Ranking 2024: NIRF, India Today, QS World University Rankings",
            authorImgSrc: "",
            author_name: "Sapna Malik",
            para_1: "IIT Placements 2024 have concluded. However, the final report for the IIT Kharagpur 2024 has not been released yet. Some of the top recruiters who have participated in IIT Kharagpur Placements have been Apple, Google, Texas Instruments, Bajaj Auto Ltd, Cetak Ltd, Qualcomm, etc . IIT Kharagpur has announced that it has placed about 80% of students in BTech and dual degree courses and 75% of students in MTech courses until April 30, 2024. A total of 1091 students were placed, and 256 companies participated in the placement drive for the academic session 2023-24.",
            para_2: "As per the IIT Kharagpur Placements 2023 final report and the internship report, 1612 IIT Kharagpur students received placement offers from 480 top companies. The highest placements were achieved in the Core sectors (27.6%), Consulting sector (14.3%) followed by software sector i.e 13.2%. In the IIT Kharagpur Placements, the highest package for UG Courses remained INR 1.31 CPA where more than 154 students received an offer of more than INR 30 LPA. The total PPOs offered to the graduate candidates were 200. The highest offer given to Btech students stands at INR 1.31 CPA, for MTech, highest CTC offered is INR 54.21 LPA.",

            also_check_title_1: "IIT Kharagpur Admission",
            also_check_link_1: "",

            also_check_title_2: "IIT Kharagpur Courses & Fees",
            also_check_link_2: "",

            also_check_title_3: "IIT Kharagpur Cutoff",
            also_check_link_3: "",

            also_check_title_4: "IIT Kharagpur Placement",
            also_check_link_4: "",

            graph_para_1: "The graphical data of the IIT Kharagpur overall rankings by the NIRF 2023 is shown below:",
            graph_para_2: "Check the graphical representation data of the IIT Kharagpur NIRF Engineering rankings:",
            graph_para_3: "Check the graphical representation of IIT Kharagpur’s Management ranking parameter-wise by NIRF 2023:",
            graph_para_4: "Check the graphical representation of IIT Kharagpur’s Management ranking parameter-wise by NIRF 2023:",
            graph_para_5: "The graphical data of IIT Kharagpur’s Research rankings by NIRF 2023 parameter-wise score is given below:",

            table_content_title_1: "IIT Kharagpur Ranking Highlights ",

            table_content_title_2: "IIT Kharagpur NIRF Rankings: Overall",
            table_content_para_2: "According to the NIRF 2023, IIT Kharagpur stood at the 7th position in the overall category. Given below are the overall parameter-wise scores of the institute:",

            table_content_title_3: "IIT Kharagpur vs Other IITs: NIRF Overall Rankings 2023",
            table_content_para_3: "NIRF 2023 has ranked IIT Kharagpur followed by other IITs like IIT Bombay and IIT Madras. IIT Kharagpur stood at the 7th position by the NIRF whereas the IIT Bombay and IIT Madras were ranked at 4 and 1 rankings respectively. Candidates can refer to the table below to learn more about the rankings of renowned IITs:",

            table_content_title_4: "IIT Kharagpur NIRF Rankings 2023: Engineering",
            table_content_para_4: "IIT Kharagpur comes under the list of 10 best engineering colleges as it stands at the 6th position in the engineering category. Mentioned below are the NIRF Engineering parameter-wise scores of IIT Kharagpur:",

            table_content_title_5: "IIT Kharagpur vs Other Institutes: NIRF Engineering Rankings 2023",
            table_content_para_5: "IIT Kharagpur has achieved the 6th rank in the engineering subject with an overall score of 73.76. However, institutes like IIT Guwahati and IIT Hyderabad have got 6th and 7th respectively. Students can check the engineering rankings of IIT Kharagpur and other esteemed IITs:",

            table_content_title_6: "IIT Kharagpur NIRF Rankings 2023: Management",
            table_content_para_6: "In 2023, IIT Kharagpur’s Management ranking dropped by 2 ranks as compared to 2022 and it remained at 14. Check the scores achieved by IIT Kharagpur parameter-wise in the Management department:",

            table_content_title_7: "IIT Kharagpur vs Other Institutes: NIRF Management Rankings 2023",
            table_content_para_7: "NIRF has given better rankings to IIT Bombay while comparing with IIT Kharagpur as their rankings stood at 10 and 14 ranking respectively. The table below shows the Management rankings of IIT Kharagpur and other IITs:",

            table_content_title_8: "IIT Kharagpur NIRF Rankings 2023: Architecture",
            table_content_para_8: "The NIRF 2023 has awarded IIT Kharagpur with 3rd position making the institute one of the best Architecture colleges in India. The table below represents the parameter-wise of IIT Kharagpur Architecture rankings 2023:",

            table_content_title_9: "IIT Kharagpur vs Other Institutes: NIRF ArchitectureRankings 2023",
            table_content_para_9: "As per the NIRF 2023, IIT Kharagpur has been ranked at 3 in the Architecture department followed by IIT Roorkee and NIT Calicut. Candidates can check the list of architecture rankings secured by IIT Kharagpur and other institutes:",

            table_content_title_10: "IIT Kharagpur NIRF Rankings 2023: Research",
            table_content_para_10: "In the research segment, IIT Kharagpur stood at the 5th position as per the NIRF rankings 2023. The tabulation below shows the scores achieved by IIT Kharagpur on each parameter:",

            table_content_title_11: "IIT Kharagpur vs Other Institutes: NIRF Research Rankings 2023",
            table_content_para_11: "The NIRF 2023 has ranked IIT Kharagpur in the research department with the 5th position. Also, other IITs like IIT Delhi and IIT Bombay have achieved remarkable rankings from the NIRF. Students can follow the table that shows the NIRF research rankings of reputed IITs:",

            table_content_title_12: "IIT Kharagpur India Today Rankings 2023",
            table_content_para_12: "According to the India Today Rankings 2023, IIT Kharagpur has made a spot in the list of top 5 institutes of our nation. In the overall and BTech segment, the institute has secured the 4th position. Also, IIT Kharagpur stands as the no.1 college in West Bengal as per the India Today rankings 2023. Students can check the 2023 and 2022 India Today rankings of IIT Kharagpur:",

            table_content_title_13: "IIT Kharagpur QS World University Rankings 2024",
            table_content_para_13: "IIT Kharagpur has also been ranked at the global level and was recognized for its academic reputation, faculty quality, and industry engagement. As per the QS World University Rankings 2024, the institute has been able to achieve 271 rank. The overall score of the institute was 37.4 Given below are the detailed ranking of the IIT Kharagpur QS World University Rankings 2024:",

            table_content_title_14: "IIT Kharagpur vs Other IITs: QS World University Rankings 2024",
            table_content_para_14: "As per the QS World University Rankings 2024, IIT Kharagpur was ranked at 271, and IIT Bombay achieved the 149th spot. To know more about the QS WUR ranking of other IITs, check the table below:",

            table_content_title_15: "IIT Kharagpur QS WUR: Rankings by Subject",
            table_content_para_15: "IIT Kharagpur has been ranked by the QS WUR 2024 in different subjects like Engineering & Technology, Business and Management Studies, etc. However, the institute has achieved the best rankings for its Engineering & Technology subject and the rank stood at 82. Students can check the parameter-wise scores of IIT Kharagpur QS WUR by subject for the Engineering discipline:",

            table_content_title_16: "IIT Kharagpur vs other institutes: QS World University Rankings by Subject",
            table_content_para_16: "IIT Kharagpur secured global recognition in its different disciplines like Engineering, Management, and Science. Listed below are the colleges and their rankings secured in the different disciples as mentioned below:",
        },
    ]

    const placementData = [
        { name: 'TLR', ss: 106.94, fsr: 146.94, fqe: 206.94, fru: 126.94, oe: 156.94 },
        { name: 'RP', pu: 106.94, qp: 146.94, ipr: 206.94, fppp: 156.94 },
        { name: 'GO', gue: 106.94, gphd: 146.94 },
        { name: 'OI', rd: 106.94, wd: 146.94, escs: 206.94, pcs: 156.94 },
        { name: 'PR', pr: 106.94 },
    ];

    const barConfig = [
        { dataKey: 'ss', color: '#9c3025' },
        { dataKey: 'fsr', color: '#9c3025' },
        { dataKey: 'fqe', color: '#9c3025' },
        { dataKey: 'fru', color: '#9c3025' },
        { dataKey: 'oe', color: '#9c3025' },
        { dataKey: 'pu', color: '#30a653' },
        { dataKey: 'qp', color: '#30a653' },
        { dataKey: 'ipr', color: '#30a653' },
        { dataKey: 'fppp', color: '#30a653' },
        { dataKey: 'gue', color: '#5e81b5' },
        { dataKey: 'gphd', color: '#5e81b5' },
        { dataKey: 'rd', color: '#502875' },
        { dataKey: 'wd', color: '#502875' },
        { dataKey: 'escs', color: '#502875' },
        { dataKey: 'pr', color: '#f1872b' },
    ];

    const lineConfig = [
        { dataKey: 'ss', color: '#9c3025' },
        { dataKey: 'fsr', color: '#9c3025' },
        { dataKey: 'fqe', color: '#9c3025' },
        { dataKey: 'fru', color: '#9c3025' },
        { dataKey: 'oe', color: '#9c3025' },
    ];

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

    const internationRanking = [
        {
            id: 1,
            rank_international: "QS World University Rankings 2024",
            rank: "271",
        }
    ]
    const nationalRanking = [
        {
            id: 1,
            rank_national: "NIRF Overall Rankings 2023",
            rank: "7",
        }
    ]
    const overallNIRFRanking = [
        {
            id: 1,
            parameters: "Teaching Learning and Resources (TLR)",
            score: "73.29",
        }
    ]
    const vsNIRF_1 = [
        {
            id: 1,
            college_name: "IIT Kharagpur",
            rank: "6",
        },
        {
            id: 2,
            college_name: "IIT Madras",
            rank: "8",
        },
    ]
    const engineeringNIRFRanking = [
        {
            id: 1,
            parameters: "Teaching Learning and Resources (TLR)",
            score: "67.29",
        }
    ]
    const vsNIRF_2 = [
        {
            id: 1,
            college_name: "IIT Kharagpur",
            rank: "6",
        },
        {
            id: 2,
            college_name: "IIT Madras",
            rank: "8",
        },
    ]
    const managementNIRFRanking = [
        {
            id: 1,
            parameters: "Teaching Learning and Resources (TLR)",
            score: "57.29",
        }
    ]

    const vsNIRF_3 = [
        {
            id: 1,
            college_name: "IIT Kharagpur",
            rank: "6",
        },
        {
            id: 2,
            college_name: "IIT Madras",
            rank: "8",
        },
    ]
    const architectureNIRFRanking = [
        {
            id: 1,
            parameters: "Teaching Learning and Resources (TLR)",
            score: "57.29",
        }
    ]

    const vsNIRF_4 = [
        {
            id: 1,
            college_name: "IIT Kharagpur",
            architecture: "3",
        },
        {
            id: 2,
            college_name: "IIT Madras",
            architecture: "5",
        },
    ]
    const researchNIRFRanking = [
        {
            id: 1,
            parameters: "Quantitative Research (QNR)",
            score: "70.18",
        }
    ]

    const vsNIRF_5 = [
        {
            id: 1,
            college_name: "IIT Kharagpur",
            research: "5",
        },
        {
            id: 2,
            college_name: "IIT Madras",
            research: "4",
        },
    ]

    const todayRankings = [
        {
            id: 1,
            stream: "Overall",
            ranking_2023: "#4 out of 281 in India 2023 #1st in West Bengal",
            ranking_2022: "",
        },
        {
            id: 2,
            stream: "B.Tech",
            ranking_2023: "#4 out of 35 in India 2023",
            ranking_2022: "#4 out of 10 in India 2022",
        },
    ]

    const worldRankings = [
        {
            id: 1,
            parameters: "Overall Score",
            scores: "37.4",
        },
        {
            id: 2,
            parameters: "Academic Reputation ",
            scores: "37.2",
        },
    ]

    const vsWorldRankings = [
        {
            id: 1,
            college_name: "IIT Kharagpur",
            rankings: "271",
        },
        {
            id: 2,
            college_name: "IIT Bombay",
            rankings: "149",
        },
    ]

    const subjectWiseRankings = [
        {
            id: 1,
            parameters: "Overall Score",
            scores: "76.6",
        },
        {
            id: 2,
            parameters: "Academic Reputation ",
            scores: "79.5",
        },
    ]

    const vsSubjectWiseRankings = [
        {
            id: 1,
            college_name: "IIT Kharagpur",
            sub_col_1: "82",
            sub_col_2: "82",
            sub_col_3: "82",
        },
        {
            id: 2,
            college_name: "IIT Delhi ",
            sub_col_1: "42",
            sub_col_2: "82",
            sub_col_3: "82",
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
                    </div>

                    {/* 1st table of contents */}
                    <h5 className='mt-4' id='internationRanking'> {fixedData[0].table_content_title_1} </h5>

                    <div className="diff_table_conatiner">   {/* Table styling is in table.css */}
                        <div className="diff_table_conatiner_head">   {/* Table styling is in table.css */}
                            <h6>Ranking Agencies</h6>
                        </div>

                        <div className="table_wrapper width_80_20" >
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>International Ranking</th>
                                        <th>Rank </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        internationRanking.length > 0 ? (
                                            internationRanking.map(internationRanking => (
                                                <tr key={internationRanking.id}>
                                                    <td className='courses_name'>{internationRanking.rank_international}</td>
                                                    <td> {internationRanking.rank || "N/A"}</td>
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
                        <div className="table_wrapper width_80_20 mt-2">
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>National Ranking</th>
                                        <th>Rank </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        nationalRanking.length > 0 ? (
                                            nationalRanking.map(nationalRanking => (
                                                <tr key={nationalRanking.id}>
                                                    <td className='courses_name'>{nationalRanking.rank_national}</td>
                                                    <td> {nationalRanking.rank || "N/A"}</td>
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

                    <div className="also_check mt-2">  {/* global styling */}
                        <p>
                            <span>Also Check: &nbsp;</span>
                            <a href={fixedData[0].also_check_link_1} > {fixedData[0].also_check_title_1}  </a>
                        </p>
                    </div>

                    {/* 2nd table of contents */}
                    <h5 className='mt-4' id='internationRanking'> {fixedData[0].table_content_title_2} </h5>
                    <p> {fixedData[0].table_content_para_2} </p>
                    <div className="table_wrapper width_80_20" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Parameters </th>
                                    <th>Score out of 100 </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    overallNIRFRanking.length > 0 ? (
                                        overallNIRFRanking.map(overallNIRFRanking => (
                                            <tr key={overallNIRFRanking.id}>
                                                <td className='courses_name'>{overallNIRFRanking.parameters}</td>
                                                <td> {overallNIRFRanking.score || "N/A"}</td>
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

                    {/* 3rd table of contents */}
                    <p className='mt-4'> {fixedData[0].graph_para_1} </p>
                    <PointBar data={placementData} barConfig={barConfig} lineConfig={lineConfig} />

                    {/* 4th table of contents */}
                    <h5> {fixedData[0].table_content_title_3} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_3} </p>
                    <div className="table_wrapper width_80_20" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>College Name </th>
                                    <th>Rank (Overall) </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vsNIRF_1.length > 0 ? (
                                        vsNIRF_1.map(vsNIRF_1 => (
                                            <tr key={vsNIRF_1.id}>
                                                <td className='courses_name'>

                                                    {vsNIRF_1.college_name === 'IIT Kharagpur' ? (  //{/* Passing the college name here from backend ain place of IIT Kharagpur */}
                                                        // Render a disabled link
                                                        <span className='name_link_style disabled_link'>
                                                            {vsNIRF_1.college_name}
                                                        </span>
                                                    ) : (
                                                        // Render a normal link
                                                        <a className='name_link_style' href={`/college/${vsNIRF_1.college_name}`}>
                                                            {vsNIRF_1.college_name}
                                                        </a>
                                                    )}
                                                </td> {/* name_link_style - global*/}

                                                <td> {vsNIRF_1.rank || "N/A"}</td>
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

                    <h5 className='mt-4'> {fixedData[0].table_content_title_4} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_4} </p>
                    <div className="table_wrapper width_80_20 mt-2" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Parameters </th>
                                    <th>Score out of 100 </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    engineeringNIRFRanking.length > 0 ? (
                                        engineeringNIRFRanking.map(engineeringNIRFRanking => (
                                            <tr key={engineeringNIRFRanking.id}>
                                                <td className='courses_name'>{engineeringNIRFRanking.parameters}</td>
                                                <td> {engineeringNIRFRanking.score || "N/A"}</td>
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
                    <p className='mt-4'> {fixedData[0].graph_para_2} </p>
                    <PointBar data={placementData} barConfig={barConfig} lineConfig={lineConfig} />

                    <div className="also_check">  {/* global styling */}
                        <p>
                            <span>Check More: &nbsp;</span>
                            <a href={fixedData[0].also_check_link_2} > {fixedData[0].also_check_title_2}  </a>
                        </p>
                    </div>



                    {/* 55th table of contents */}
                    <h5> {fixedData[0].table_content_title_5} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_5} </p>
                    <div className="table_wrapper width_80_20" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>College Name </th>
                                    <th>Engineering </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vsNIRF_2.length > 0 ? (
                                        vsNIRF_2.map(vsNIRF_2 => (
                                            <tr key={vsNIRF_2.id}>
                                                <td className='courses_name'>

                                                    {vsNIRF_2.college_name === 'IIT Kharagpur' ? (  //{/* Passing the college name here from backend ain place of IIT Kharagpur */}
                                                        // Render a disabled link
                                                        <span className='name_link_style disabled_link'>
                                                            {vsNIRF_2.college_name}
                                                        </span>
                                                    ) : (
                                                        // Render a normal link
                                                        <a className='name_link_style' href={`/college/${vsNIRF_2.college_name}`}>
                                                            {vsNIRF_2.college_name}
                                                        </a>
                                                    )}
                                                </td> {/* name_link_style - global*/}

                                                <td> {vsNIRF_2.rank || "N/A"}</td>
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

                    <h5 className='mt-4'> {fixedData[0].table_content_title_6} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_6} </p>
                    <div className="table_wrapper width_80_20 mt-2" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Parameters </th>
                                    <th>Score out of 100 </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    managementNIRFRanking.length > 0 ? (
                                        managementNIRFRanking.map(managementNIRFRanking => (
                                            <tr key={managementNIRFRanking.id}>
                                                <td className='courses_name'>{managementNIRFRanking.parameters}</td>
                                                <td> {managementNIRFRanking.score || "N/A"}</td>
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
                    <p className='mt-4'> {fixedData[0].graph_para_3} </p>
                    <PointBar data={placementData} barConfig={barConfig} lineConfig={lineConfig} />



                    {/* 7th table of contents */}
                    <h5> {fixedData[0].table_content_title_7} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_7} </p>
                    <div className="table_wrapper width_80_20" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>College Name </th>
                                    <th>Management </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vsNIRF_3.length > 0 ? (
                                        vsNIRF_3.map(vsNIRF_3 => (
                                            <tr key={vsNIRF_3.id}>
                                                <td className='courses_name'>

                                                    {vsNIRF_3.college_name === 'IIT Kharagpur' ? (  //{/* Passing the college name here from backend ain place of IIT Kharagpur */}
                                                        // Render a disabled link
                                                        <span className='name_link_style disabled_link'>
                                                            {vsNIRF_3.college_name}
                                                        </span>
                                                    ) : (
                                                        // Render a normal link
                                                        <a className='name_link_style' href={`/college/${vsNIRF_3.college_name}`}>
                                                            {vsNIRF_3.college_name}
                                                        </a>
                                                    )}
                                                </td> {/* name_link_style - global*/}

                                                <td> {vsNIRF_3.rank || "N/A"}</td>
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

                    {/* 8th table of contents */}
                    <h5 className='mt-4'> {fixedData[0].table_content_title_8} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_8} </p>
                    <div className="table_wrapper width_80_20 mt-2" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Parameters </th>
                                    <th>Score out of 100 </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    architectureNIRFRanking.length > 0 ? (
                                        architectureNIRFRanking.map(architectureNIRFRanking => (
                                            <tr key={architectureNIRFRanking.id}>
                                                <td className='courses_name'>{architectureNIRFRanking.parameters}</td>
                                                <td> {architectureNIRFRanking.score || "N/A"}</td>
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
                    <p className='mt-4'> {fixedData[0].graph_para_4} </p>
                    <PointBar data={placementData} barConfig={barConfig} lineConfig={lineConfig} />

                    <div className="also_check">  {/* global styling */}
                        <p>
                            <span>Check More: &nbsp;</span>
                            <a href={fixedData[0].also_check_link_3} > {fixedData[0].also_check_title_3}  </a>
                        </p>
                    </div>

                    {/* 9th table of contents */}
                    <h5> {fixedData[0].table_content_title_9} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_9} </p>
                    <div className="table_wrapper width_80_20" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>College Name </th>
                                    <th>Architecture </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vsNIRF_4.length > 0 ? (
                                        vsNIRF_4.map(vsNIRF_4 => (
                                            <tr key={vsNIRF_4.id}>
                                                <td className='courses_name'>

                                                    {vsNIRF_4.college_name === 'IIT Kharagpur' ? (  //{/* Passing the college name here from backend ain place of IIT Kharagpur */}
                                                        // Render a disabled link
                                                        <span className='name_link_style disabled_link'>
                                                            {vsNIRF_4.college_name}
                                                        </span>
                                                    ) : (
                                                        // Render a normal link
                                                        <a className='name_link_style' href={`/college/${vsNIRF_4.college_name}`}>
                                                            {vsNIRF_4.college_name}
                                                        </a>
                                                    )}
                                                </td> {/* name_link_style - global*/}

                                                <td> {vsNIRF_4.architecture || "N/A"}</td>
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

                    {/* 10th table of contents */}
                    <h5 className='mt-4'> {fixedData[0].table_content_title_10} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_10} </p>
                    <div className="table_wrapper width_80_20 mt-2" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Parameters </th>
                                    <th>Score out of 100 </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    researchNIRFRanking.length > 0 ? (
                                        researchNIRFRanking.map(researchNIRFRanking => (
                                            <tr key={researchNIRFRanking.id}>
                                                <td className='courses_name'>{researchNIRFRanking.parameters}</td>
                                                <td> {researchNIRFRanking.score || "N/A"}</td>
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

                    <p className='mt-4'> {fixedData[0].graph_para_5} </p>
                    <PointBar data={placementData} barConfig={barConfig} lineConfig={lineConfig} />

                    <div className="also_check">  {/* global styling */}
                        <p>
                            <span>Read More: &nbsp;</span>
                            <a href={fixedData[0].also_check_link_4} > {fixedData[0].also_check_title_4}  </a>
                        </p>
                    </div>

                    {/* 11th table of contents */}
                    <h5> {fixedData[0].table_content_title_11} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_11} </p>
                    <div className="table_wrapper width_80_20" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>College Name </th>
                                    <th>Research </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vsNIRF_5.length > 0 ? (
                                        vsNIRF_5.map(vsNIRF_5 => (
                                            <tr key={vsNIRF_5.id}>
                                                <td className='courses_name'>

                                                    {vsNIRF_5.college_name === 'IIT Kharagpur' ? (  //{/* Passing the college name here from backend ain place of IIT Kharagpur */}
                                                        // Render a disabled link
                                                        <span className='name_link_style disabled_link'>
                                                            {vsNIRF_5.college_name}
                                                        </span>
                                                    ) : (
                                                        // Render a normal link
                                                        <a className='name_link_style' href={`/college/${vsNIRF_5.college_name}`}>
                                                            {vsNIRF_5.college_name}
                                                        </a>
                                                    )}
                                                </td> {/* name_link_style - global*/}

                                                <td> {vsNIRF_5.research || "N/A"}</td>
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

                    {/* 12th table of contents */}
                    <h5 className='mt-4'> {fixedData[0].table_content_title_12} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_12} </p>
                    <div className="table_wrapper" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Stream </th>
                                    <th>2023 Ranking </th>
                                    <th>2022 Ranking </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todayRankings.length > 0 ? (
                                        todayRankings.map(todayRankings => (
                                            <tr key={todayRankings.id}>
                                                <td className='courses_name'>{todayRankings.stream} </td>
                                                <td> {todayRankings.ranking_2023 || "N/A"}</td>
                                                <td> {todayRankings.ranking_2022 || "N/A"}</td>
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

                    {/* 13th table of contents */}
                    <h5 className='mt-4'> {fixedData[0].table_content_title_13} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_13} </p>
                    <div className="table_wrapper" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Parameters  </th>
                                    <th>Scores </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    worldRankings.length > 0 ? (
                                        worldRankings.map(worldRankings => (
                                            <tr key={worldRankings.id}>
                                                <td className='courses_name'>{worldRankings.parameters} </td>
                                                <td> {worldRankings.scores || "N/A"}</td>
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

                    {/* 14th table of contents */}
                    <h5 className='mt-4'> {fixedData[0].table_content_title_14} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_14} </p>
                    <div className="table_wrapper" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>College Name  </th>
                                    <th>Rankings </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vsWorldRankings.length > 0 ? (
                                        vsWorldRankings.map(vsWorldRankings => (
                                            <tr key={vsWorldRankings.id}>
                                                <td className='courses_name'>{vsWorldRankings.college_name} </td>
                                                <td> {vsWorldRankings.rankings || "N/A"}</td>
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

                    {/* 15th table of contents */}
                    <h5 className='mt-4'> {fixedData[0].table_content_title_15} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_15} </p>
                    <div className="table_wrapper" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Parameters  </th>
                                    <th>Scores </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subjectWiseRankings.length > 0 ? (
                                        subjectWiseRankings.map(subjectWiseRankings => (
                                            <tr key={subjectWiseRankings.id}>
                                                <td className='courses_name'>{subjectWiseRankings.parameters} </td>
                                                <td> {subjectWiseRankings.scores || "N/A"}</td>
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

                    {/* 16th table of contents */}
                    <h5 className='mt-4'> {fixedData[0].table_content_title_16} </h5>
                    <p className='mt-2'> {fixedData[0].table_content_para_16} </p>
                    <div className="table_wrapper" >
                        <table>          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th rowSpan={2}>College Name  </th>
                                    <th colSpan={3} className='text-center'>Rankings </th>
                                </tr>
                                <tr>
                                    <th>Engineering & Technology</th>
                                    <th>Electrical and Electronics</th>
                                    <th>Business and Management Studies </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vsSubjectWiseRankings.length > 0 ? (
                                        vsSubjectWiseRankings.map(vsSubjectWiseRankings => (
                                            <tr key={vsSubjectWiseRankings.id}>
                                                <td className='courses_name'>{vsSubjectWiseRankings.college_name} </td>
                                                <td> {vsSubjectWiseRankings.sub_col_1 || "N/A"}</td>
                                                <td> {vsSubjectWiseRankings.sub_col_2 || "N/A"}</td>
                                                <td> {vsSubjectWiseRankings.sub_col_3 || "N/A"}</td>
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

                    <h5 className='mt-4'> FAQs </h5>
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
                </div>
            </div>
        </div>
    )
}

export default Rankings
