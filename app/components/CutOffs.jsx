import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const CutOffDynamic = () => {

    const fixedData = [
        {
            id: 1,
            page_title: "IIT Kharagpur Cutoff 2024: Check Previous Year's JEE Advanced, IIT JAM, GATE, CAT Cutoffs ",
            authorImgSrc: "",
            author_name: "Sapna Malik",
            para_1: "IIT Kharagpur cutoff 2024 is expected to be released in the month of July or August. IIT Madras offers a 4-year-long BTech as its flagship program. The institute’s BTech CSE program is the most sought-after course and the cutoff for this course has the most competitive scores. The institute accepts JEE Advanced scores followed by the JoSAA counselling for admission to this course. IIT Madras BTech CSE cutoff in round 1 remained at 144 ranks for the general category, and in round 6 the cutoff was 148 ranks.",

            also_check_title_1: "JEE Advanced College Predictor",
            also_check_link_1: "",

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

            also_check_title_2: "IIT Kharagpur BTech Cutoff",
            also_check_link_2: "",
        }
    ]

    const tableOfContents = [
        {
            id: 1,
            title: "IIT Madras JEE Advanced Cutoff 2024 (Expected)",
            link: "#expectedCutoff",
        },
        {
            id: 2,
            title: "IIT Madras JEE Advanced Cutoff 2024 (Expected)",
            link: "#roundWiseCutoff",
        },
        {
            id: 3,
            title: "IIT Madras JEE Advanced Cutoff 2024 (Expected)",
            link: "#cutoffTrends",
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

    const expectedCutoff = [ //array for 1st table
        {
            id: 1,
            courses_name: "B.Tech Computer Science Engineering",
            cutoff_2023: "148",
            cutoff_2022: "175",
            cutoff_2021: "164",
        },
        {
            id: 2,
            courses_name: "B.Tech Electrical Engineering",
            cutoff_2023: "964",
            cutoff_2022: "1028",
            cutoff_2021: "1009",
        },
        {
            id: 3,
            courses_name: "B.Tech Engineering Physics",
            cutoff_2023: "1877",
            cutoff_2022: "2090",
            cutoff_2021: "1884",
        }
    ]

    const roundWiseCutoff = [ //array for 2nd table
        {
            id: 1,
            rounds: "Round 1",
            download_link: "/path-to-your-file.pdf",
        },
        {
            id: 2,
            rounds: "Round 2",
            download_link: "148",
        },
        {
            id: 3,
            rounds: "Round 3",
            download_link: "148",
        },

    ]

    const cutoffTrends = [ //array for 3rd table
        {
            id: 1,
            institutes: "IIT Madras",
            cutoff_2023: "148",
            cutoff_2022: "175",
            cutoff_2021: "111"
        },
        {
            id: 2,
            institutes: "IIT Delhi",
            cutoff_2023: "148",
            cutoff_2022: "215",
            cutoff_2021: "111"
        },
        {
            id: 3,
            institutes: "IIT Hyderabad",
            cutoff_2023: "148",
            cutoff_2022: "145",
            cutoff_2021: "141"
        },
        {
            id: 4,
            institutes: "IIT Guwahati",
            cutoff_2023: "654",
            cutoff_2022: "608",
            cutoff_2021: "521"
        },
    ]

    const cutoffComparision2023 = [ //array for 4th table
        {
            id: 1,
            courses_name: "B.Tech Computer Science Engineering",
            round_1: "144",
            round_6: "148",
        },
        {
            id: 2,
            courses_name: "B.Tech Electrical Engineering",
            round_1: "908",
            round_6: "964",
        },
        {
            id: 3,
            courses_name: "B.Tech Engineering Physics",
            round_1: "1795",
            round_6: "1877",
        }
    ]

    const cutoffComparision2022 = [ //array for 5th table
        {
            id: 1,
            courses_name: "B.Tech Computer Science Engineering",
            round_1: "144",
            round_6: "148",
        },
        {
            id: 2,
            courses_name: "B.Tech Electrical Engineering",
            round_1: "908",
            round_6: "964",
        },
        {
            id: 3,
            courses_name: "B.Tech Engineering Physics",
            round_1: "1795",
            round_6: "1877",
        }
    ]

    const cutoffComparision2021 = [ //array for 5th table
        {
            id: 1,
            courses_name: "B.Tech Computer Science Engineering",
            round_1: "144",
            round_6: "148",
        },
        {
            id: 2,
            courses_name: "B.Tech Electrical Engineering",
            round_1: "908",
            round_6: "964",
        },
        {
            id: 3,
            courses_name: "B.Tech Engineering Physics",
            round_1: "1795",
            round_6: "1877",
        }
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
        <div className="cutoff_section">
            <div className="cutoff_section_wrapper">

                {/* 1st section */}
                <div className="cutoff_div">
                    <div className="cutoff_div_wrapper">
                        <h5> {fixedData[0].page_title} </h5>

                        <small>
                            <img src={fixedData[0].authorImgSrc} alt="author-iamge" />
                            Written By &nbsp; <b> {fixedData[0].author_name}  </b>
                        </small>
                        <p> {fixedData[0].para_1} </p>

                        <div className="also_check">  {/* global styling */}
                            <p>
                                <span>Also Check: &nbsp;</span>
                                <a href={fixedData[0].also_check_link_1} > {fixedData[0].also_check_title_1}  </a>
                            </p>
                        </div>

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
                        <div className="table_wrapper" id='expectedCutoff'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th>Courses </th>
                                        <th className='text-center'>2023 (Cutoff by Rank) </th>
                                        <th className='text-center'>2022 (Cutoff by Rank) </th>
                                        <th className='text-center'>2021 (Cutoff by Rank) </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        expectedCutoff.length > 0 ? (
                                            expectedCutoff.map(expectedCutoff => (
                                                <tr key={expectedCutoff.id}>
                                                    <td className='courses_name'>{expectedCutoff.courses_name}</td>
                                                    <td className='text-center'> {expectedCutoff.cutoff_2023 || "N/A"}</td>
                                                    <td className='text-center'>{expectedCutoff.cutoff_2022 || "N/A"}</td>
                                                    <td className='text-center'>{expectedCutoff.cutoff_2021 || "N/A"}</td>
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
                        <div className="also_check mt-3">  {/* global styling */}
                            <p>
                                <span>Check: &nbsp;</span>
                                <a href={fixedData[0].also_check_link_2} > {fixedData[0].also_check_title_2}  </a>
                            </p>
                        </div>


                        {/* 2nd table of contents */}
                        <h5 className='mt-5'> {fixedData[0].table_content_title_2} </h5>
                        <p> {fixedData[0].table_content_para_2} </p>
                        <div className="table_wrapper" id='roundWiseCutoff'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th className='text-center'>Rounds </th>
                                        <th className='text-center'>Cutoff</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        roundWiseCutoff.length > 0 ? (
                                            roundWiseCutoff.map(roundWiseCutoff => (
                                                <tr key={roundWiseCutoff.id}>
                                                    <td className='text-center'>{roundWiseCutoff.rounds}</td>
                                                    <td className='text-center'>
                                                        <a className='download_btn' href={`${roundWiseCutoff.cutoff_2023}`} target='_blank' rel="noopener noreferrer">Download</a>
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

                        {/* 3rd table of contents */}
                        <h5 className='mt-5'> {fixedData[0].table_content_title_3} </h5>
                        <p> {fixedData[0].table_content_para_3} </p>
                        <div className="table_wrapper" id='cutoffTrends'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th className=''>Institutes  </th>
                                        <th className='text-center'>BTech CSE Cutoff 2023 </th>
                                        <th className='text-center'>BTech CSE Cutoff 2022</th>
                                        <th className='text-center'>BTech CSE Cutoff 2021</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cutoffTrends.length > 0 ? (
                                            cutoffTrends.map(cutoffTrends => (
                                                <tr key={cutoffTrends.id}>
                                                    <td className='institutes'>{cutoffTrends.institutes}</td>
                                                    <td className='text-center'> {cutoffTrends.cutoff_2023 || "N/A"}</td>
                                                    <td className='text-center'>{cutoffTrends.cutoff_2022 || "N/A"}</td>
                                                    <td className='text-center'>{cutoffTrends.cutoff_2021 || "N/A"}</td>
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

                        {/* 4th table of contents */}
                        <h5 className='mt-5'> {fixedData[0].table_content_title_4} </h5>
                        <p> {fixedData[0].table_content_para_4} </p>
                        <div className="table_wrapper" id='cutoffComparision2023'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th className=''>Institutes  </th>
                                        <th className='text-center'>Round 1 (Closing Rank) </th>
                                        <th className='text-center'>Round 6 (Closing Rank)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cutoffComparision2023.length > 0 ? (
                                            cutoffComparision2023.map(cutoffComparision2023 => (
                                                <tr key={cutoffComparision2023.id}>
                                                    <td className='courses_name'>{cutoffComparision2023.courses_name}</td>
                                                    <td className='text-center'> {cutoffComparision2023.round_1 || "N/A"}</td>
                                                    <td className='text-center'>{cutoffComparision2023.round_6 || "N/A"}</td>
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

                        {/* 5th table of contents */}
                        <h5 className='mt-5'> {fixedData[0].table_content_title_5} </h5>
                        <p> {fixedData[0].table_content_para_5} </p>
                        <div className="table_wrapper" id='cutoffComparision2022'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th className=''>Institutes  </th>
                                        <th className='text-center'>Round 1 (Closing Rank) </th>
                                        <th className='text-center'>Round 6 (Closing Rank)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cutoffComparision2022.length > 0 ? (
                                            cutoffComparision2022.map(cutoffComparision2022 => (
                                                <tr key={cutoffComparision2022.id}>
                                                    <td className='courses_name'>{cutoffComparision2022.courses_name}</td>
                                                    <td className='text-center'> {cutoffComparision2022.round_1 || "N/A"}</td>
                                                    <td className='text-center'>{cutoffComparision2022.round_6 || "N/A"}</td>
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

                        {/* 6th table of contents */}
                        <h5 className='mt-5'> {fixedData[0].table_content_title_6} </h5>
                        <p> {fixedData[0].table_content_para_6} </p>
                        <div className="table_wrapper" id='cutoffComparision2021'>
                            <table>          {/* Table styling is in table.css */}
                                <thead>
                                    <tr>
                                        <th className=''>Institutes  </th>
                                        <th className='text-center'>Round 1 (Closing Rank) </th>
                                        <th className='text-center'>Round 6 (Closing Rank)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cutoffComparision2021.length > 0 ? (
                                            cutoffComparision2021.map(cutoffComparision2021 => (
                                                <tr key={cutoffComparision2021.id}>
                                                    <td className='courses_name'>{cutoffComparision2021.courses_name}</td>
                                                    <td className='text-center'> {cutoffComparision2021.round_1 || "N/A"}</td>
                                                    <td className='text-center'>{cutoffComparision2021.round_6 || "N/A"}</td>
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

                        {/* FAQs */}
                        <h5 className='mt-5'> {fixedData[0].table_content_title_7} </h5>
                        <Accordion defaultActiveKey="0" id='FAQs'>
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
        </div>
    )
}

export default CutOffDynamic
