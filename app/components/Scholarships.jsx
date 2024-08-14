import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const Scholarships = () => {

    const fixedData = [
        {
            id: 1,
            page_title: "IIT Kharagpur Gallery",
            authorImgSrc: "",
            author_name: "Collegedunia Team ",
            para_1: "Indian Institute of Technology Kharagpur (IIT KGP) provides a variety of scholarships to students from various backgrounds. These scholarships are available to IIT Kharagpur UG and PG students and are awarded on the basis of merit, need, or a combination of the two. There are various types of scholarships awarded to the UG students of IIT Kharagpur Scholarships offered by Central Government Ministries/Organizations, Scholarships offered by State Government and Union Territories, Scholarships offered by Public Sector Units/Government Undertakings, Scholarships offered by reputed Private Companies/Foundations/Organizations, Scholarships offered by Foreign Companies/Agencies, Endowment Scholarships that are awarded through endowment fund of the Institute, etc. ",
            para_2: "Some of the notable scholarships offered by IIT Kharagpur also include the Batch Of '85 Scholarship (Pays INR 50,000), the Madan Sundar Sahu Memorial Scholarship (Pays INR 2,100 per month), One scholarship of INR 1,000 per month (payable for 10 months in a session) awarded to the best student of the final year class of BTech (Hons.)/ Dual Degree/ BArch (Hons) courses, and One scholarship of INR 1,000 per month (payable for 10 months in a session) awarded to the student of the third-year class of BTech. Given below is detailed information on the scholarships offered by IIT Kharagpur.",

            table_content_title_1: "Scholarships availed by UG Students ",
            table_content_para_1: "",

            faq_title: "IIT Kharagpur FAQs",
        },
    ]

    const tableOfContents = [
        {
            id: 1,
            title: "Scholarships availed by UG Students ",
            link: "#expectedCutoff",
        },
        {
            id: 2,
            title: "Institute Scholarships",
            link: "#packagesList",
        },
        {
            id: 3,
            title: "Endowment and Alumni-Funded Scholarships",
            link: "#placementReport",
        },
        {
            id: 4,
            title: "IIT Kharagpur Foundation (IITKGPF) of USA Award Program for International Internships",
            link: "#cutoffComparision2023",
        },
        {
            id: 5,
            title: "IIT Kharagpur Foundation (IITKGPF) of USA: Award Program for Students Participation in International",
            link: "#cutoffComparision2022",
        },
        {
            id: 6,
            title: "Guru Krupa Foundation (GKF) USA",
            link: "#cutoffComparision2021",
        },
        {
            id: 7,
            title: "Shri Gopal Rajgarhia International Program",
            link: "#",
        },
        {
            id: 8,
            title: "Other Scholarships",
            link: "#",
        },
        {
            id: 9,
            title: "IIT Kharagpur FAQs",
            link: "#",
        },
    ]

    const scholarshipUG = [
        {
            id: 1,
            category: "Institute Type",
            lists: [
                { id: 1, list_item: "Merit Cum Means Scholarship including Tuition fee waiver" },
                { id: 2, list_item: "Scholarship to 2-year MSc students of Joint MSc PhD Program." }
            ],
        },
    ]

    const headingParaContent = [
        {
            id: 1,
            heading: "Institute Scholarships",
            paras: [
                { id: 1, para_item: "Institute scholarships are the type of fee waiver programs that are awarded from the Institute funds. There are awarded on the basis of merit-cum-means to all eligible students. The students eligible for the Institute scholarship at IIT Kharagpur are 4-year BTech (Hons), 5-year Dual Degree, 5-year BArch (Hons.) and 5-year Integrated MSc courses and 4-year BS program, except the students belonging to SC and ST (who are eligible for Post-Matric Scholarship). The students who fulfill the conditions after this appearance shall be eligible for the award of the Merit-Cum-Means (MCM) scholarship. These scholarships will be offered to no more than 25% of students admitted to Undergraduate and Dual Degree programs each year. The Board of Governors will decide on the monetary worth of these scholarships from time to time. There will be an exemption from paying Institute tuition for all recipients of the MCM scholarship. " }
            ]
        },
        {
            id: 2,
            heading: "Endowment and Alumni-Funded Scholarships",
            paras: [
                { id: 1, para_item: "Endowments and Alumni Funded scholarships are the scholarships that are awarded through endowment funds. To be eligible for this scholarship the term best student or the student who has secured the highest CGPA in the immediately preceding semester amongst all the students of the same batch. " }
            ]
        },
        {
            id: 3,
            heading: "IIT Kharagpur Foundation (IITKGPF) of USA Award Program for International Internships",
            paras: [
                { id: 1, para_item: "Under the IIT Kharagpur Foundation (IITKGPF) of USA offers an Award Program for International Internships, supporting meritorious students across Bachelor's and Master's levels as well as various Departments/Schools/Centers each year. Awardees are chosen based on factors such as the quality of the host institution/company, the proposed research, and the academic standing of the applicant. The award ranges from USD 3000-5000 and is managed directly by IITKGPF. However, awardees may need to secure additional funding if necessary." },
                { id: 2, para_item: "The final approval for the award is subject to completion of the internship and return to the Institute before the start of the Autumn Semester. It also includes the approvals from the faculty advisor and Head of Department (HoD). The application process involves waiting for the call, logging into the Foreign Training Portal, and providing the necessary details. Third-year students are prioritized over second-year students when deciding on mandatory internships. Additionally, CGPA rankings are taken into account for non-mandated internships." },
                { id: 3, para_item: "The candidates who have received provisional approval must return to campus before to the autumn semester, negotiate with the host institute to arrange an internship date if necessary, and get approval from their faculty adviser and the head of the department if the dates cannot be modified. The final approval depends on fulfilling these requirements. Every year, the rules and calls for applications are usually announced in March or April." },
            ]
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
        <div className="scholarship_section">
            <div className="scholarship_section_wrapper">

                {/* 1st section */}
                <div className="scholarship_div">
                    <div className="scholarship_div_wrapper">
                        <small>
                            <img src={fixedData[0].authorImgSrc} alt="author-image" />
                            Written By &nbsp; <b>{fixedData[0].author_name}  </b>
                        </small>
                        <p className='mt-3'>{fixedData[0].para_1}</p>
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
                                        <th>Category </th>
                                        <th>Scholarship </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        scholarshipUG.length > 0 ? (
                                            scholarshipUG.map((data) => (
                                                <tr key={data.id}>
                                                    <td className='courses_name'>{data.category}</td>

                                                    <td>
                                                        <ol typeof='1.'>
                                                            {
                                                                data.lists.map((list) => (
                                                                    <li key={list.id}> {list.list_item} </li>
                                                                ))
                                                            }
                                                        </ol>
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

                        {/* Heading - para contents */}
                        <div className="heading_para_content">
                            {
                                headingParaContent.map((data) => (
                                    <div key={data.id} className="heading_para_content">
                                        <h5 className='mt-4'> {data.heading} </h5>
                                        <div>
                                            {
                                                data.paras.map((para) => (
                                                    <p key={para.id}> {para.para_item} </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* FAQs */}
                        <h5> {fixedData[0].faq_title} </h5>
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
        </div>
    )
}

export default Scholarships
