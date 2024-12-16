import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap';

import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import Modal from 'react-modal';

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

// Modal.setAppElement('#root');


const Courses = () => {

    const [filter, setFilter] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);    // State to manage visibility of specialization button

    const fee_eligibilty_table = [  //mapping data for table
        {
            id: 1,
            name: "B.Tech",
            fees: "₹2.15 Lakhs (1st Year Fees)",
            eligibility: "10+2 with 75% + JEE Advanced",
            applicationDate: "27 Apr - 07 May 2024",
        },
        {
            id: 2,
            name: "M.Tech",
            fees: "₹1.50 Lakhs (1st Year Fees)",
            eligibility: "Pass in Graduation + GATE",
            applicationDate: "20 Mar - 19 Apr 2024",
        },
        {
            id: 3,
            name: "MBA",
            fees: "₹3.00 Lakhs (1st Year Fees)",
            eligibility: "Graduation + CAT",
            applicationDate: "15 Feb - 10 Mar 2024",
        }
        // Add more courses as needed
    ];

    const specialization_table = [  //mapping data for table
        {
            id: 1,
            mdule_name: "Computer Science And Engineering",
            rating: "4.5",
            no_of_reviews: "29",
            first_year_fees: "24,000",
            third_column_data: "787"
        },
        {
            id: 2,
            mdule_name: "Microelectronics And Vlsi Design",
            rating: "4.5",
            no_of_reviews: "29",
            first_year_fees: "24,000",
            third_column_data: "787"
        },
        {
            id: 3,
            mdule_name: "Biomedical Engineering",
            rating: "4.5",
            no_of_reviews: "29",
            first_year_fees: "24,000",
            third_column_data: "787"
        }
    ]

    const offered_courses = [      //mapping data for search cards
        {
            title: "Bachelor of Technology [B.Tech]",
            rating: "4.5",
            reviews: "29",
            no_of_courses: "40",
            course_duartion: "2",
            time_of_course: "Full Time",
            eligibility: "Pass in Graduation + GATE",
            first_year_fees: "24,000",
            application_date: "20 Mar - 19 Apr 2024",
            no_of_males: "863",
            no_of_females: "157",
            student_intake: "1020",
            median_salary: "1300000",
            passing_percentage: "94",
            placemet_percentage: "81",
            no_of_specialization: "20",
            specialization_heading_3: "GATE Cutoff 2023",
        },
    ];

    const handleFilterChange = (e) => {
        setFilter(e.target.value.toUpperCase());
    };

    const filteredCourses = offered_courses.filter(offered_courses => offered_courses.title.toUpperCase().includes(filter));  // variablea for search filter card

    const openModal = () => {   //function to open modal
        setIsOpen(true);
    };

    const closeModal = () => {  //function to close modal
        setIsOpen(false);
    };

    // Function to toggle visibility of *specialization* button
    const toggleView = () => {
        setIsVisible(!isVisible);
    };

    const fixedData = [
        {
            id: 1,
            page_title: "IIT Kharagpur Fees & Eligibility",
        }
    ]


    return (
        <div className="courses_section">
            {/* 1st section */}
            <div className="fee_eligibility">
                <div className="fee_eligibility_wrapper">
                    <h5> {fixedData[0].page_title} </h5>
                    <div className="table_wrapper">
                        <table className="bordered">          {/* Table styling is in table.css */}
                            <thead>
                                <tr>
                                    <th>Course </th>
                                    <th>Fees </th>
                                    <th>Eligibility </th>
                                    <th>Application Date </th>
                                    <th>Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {fee_eligibilty_table.map(fee_eligibilty_data => (
                                    <tr key={fee_eligibilty_data.id}>
                                        <td>{fee_eligibilty_data.name}</td>
                                        <td className='fees'> {fee_eligibilty_data.fees}	</td>
                                        <td>{fee_eligibilty_data.eligibility}</td>
                                        <td>{fee_eligibilty_data.applicationDate}</td>
                                        <td className="apply_now_btn">
                                            <a href="">
                                                Apply Now
                                                <span><IoIosArrowForward /></span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 2nd section */}
            <div className="courses_offered">
                <div className="courses_offered_wrapper"></div>
                <h5>Courses Offered By IIT Kharagpur 2024</h5>
                <small>Select Degree & Streams To See Course Fees & Admission Details</small>

                <div className='courses_offered_search'>
                    <div className="search_input">
                        <span><FaSearch /></span>
                        <input
                            type="text"
                            id="myInput"
                            onChange={handleFilterChange}
                            placeholder="Search Courses..."
                            title="Type in a name"
                        />
                    </div>
                    <ul id="myUL">
                        <div className="courses_offered_card_container">
                            {filteredCourses.map((offered_courses, index) => (
                                <li key={index} className="courses_offered_card">
                                    <h5>{offered_courses.title}</h5> {/* title from data*/}
                                    <div className="courses_offered_card_content">
                                        <div className="courses_offered_card_content_1">
                                            <div className="review_box">
                                                <div className="rb rb_1">
                                                    <span>{offered_courses.rating}</span> {/* rating like 4.5 from data*/}
                                                    <span><FaStar /></span>
                                                    <span>({offered_courses.reviews} Reviews)</span> {/* reviews like 29 from data*/}
                                                </div>
                                                <div className="rb rb_2">{offered_courses.no_of_courses} Courses</div> {/* no_of_courses like 40 from data*/}
                                                <div className="rb rb_3">{offered_courses.course_duartion} years</div> {/* course_duartion like 2 from data*/}
                                                <div className="rb rb_4">{offered_courses.time_of_course}</div> {/* time_of_course like Full Time from data*/}
                                            </div>
                                            <div className="elegibility_box">
                                                <small>Eligibilty:</small>
                                                <p> {offered_courses.eligibility} </p> {/* eligibility from data */}
                                            </div>
                                        </div>
                                        <div className="courses_offered_card_content_2">
                                            <div className="fee_box">
                                                <p>1st Yr Fees: <span>{offered_courses.first_year_fees}</span></p> {/* first_year_fees from data */}
                                            </div>
                                            <div className="app_date_box">
                                                <p>Application Date: <span>{offered_courses.application_date}</span></p>
                                                <div className="modal_btn">
                                                    <input type="button" value="Check Detailed Fees" onClick={openModal} />
                                                    <span><IoIosArrowForward /></span>
                                                </div>
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
                                        </div>
                                        <div className="courses_offered_card_content_3">
                                            <div className="cta_buttons">
                                                <div className="brochure_btn"><input type="button" value="Brochure" onClick={openModal} /> &nbsp; <HiOutlineDownload /></div>
                                                <div className="applynow_btn"><input type="button" value="Apply Now" onClick={openModal} /> &nbsp; <IoIosArrowDropright /></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* nirf ranking */}
                                    <div className="nirf_rank_insights">
                                        <p>Insights Based on NIRF Ranking 2024</p>
                                        <div className="nirf_rank_insights_wrapper">
                                            <div className="wrapper">
                                                <figure>
                                                    <img src='/assets/images/1_1.jpg' alt="" />
                                                </figure>
                                                <div className="students">
                                                    <div className="gender">
                                                        Male: <span> &nbsp;{offered_courses.no_of_males}</span> &nbsp; | &nbsp; Female: <span> &nbsp;{offered_courses.no_of_females}</span>
                                                    </div>
                                                    <div className="intake">
                                                        <input type="button" value={`Student Intake (${offered_courses.student_intake})`} />
                                                        <span><IoIosArrowForward /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wrapper">
                                                <figure>
                                                    <img src='/assets/images/1_1.jpg' alt="" />
                                                </figure>
                                                <div className="students">
                                                    <div className="gender">
                                                        <span>₹ {offered_courses.median_salary}</span>
                                                    </div>
                                                    <div className="intake">
                                                        <input type="button" value="Median Salary" />
                                                        <span><IoIosArrowForward /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wrapper">
                                                <figure>
                                                    <img src='/assets/images/1_1.jpg' alt="" />
                                                </figure>
                                                <div className="students">
                                                    <div className="gender">
                                                        <span>{offered_courses.passing_percentage}%</span>
                                                    </div>
                                                    <div className="intake">
                                                        <input type="button" value="Passing %" />
                                                        <span><IoIosArrowForward /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wrapper">
                                                <figure>
                                                    <img src='/assets/images/1_1.jpg' alt="" />
                                                </figure>
                                                <div className="students">
                                                    <div className="gender">
                                                        <span>{offered_courses.placemet_percentage}%</span>
                                                    </div>
                                                    <div className="intake">
                                                        <input type="button" value="Placement %" />
                                                        <span><IoIosArrowForward /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="viewall_modal_btn">
                                                <span><CgMenuGridO /></span>
                                                <input type="button" value="View All" />
                                                <span><IoIosArrowForward /></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='view_specialization'>
                                        {/* Button to show items initially */}
                                        {!isVisible && (
                                            <div className="btn_div">
                                                <button onClick={toggleView}> <MdKeyboardArrowDown /> View {offered_courses.no_of_specialization} Specialisations </button>
                                            </div>
                                        )}
                                        {/* List items, shown only when isVisible is true */}
                                        {isVisible && (
                                            <>
                                                <div className="table_wrapper">
                                                    <table>          {/* Table styling is in table.css */}
                                                        <thead>
                                                            <tr>
                                                                <th>B.Tech Specialisations </th>
                                                                <th>Fees </th>
                                                                <th> {offered_courses.specialization_heading_3} </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {specialization_table.map(specialization_data => (
                                                                <tr key={specialization_data.id}>
                                                                    <td className='table_specialization'>
                                                                        <p>{specialization_data.college_name}</p>
                                                                        <div className="review_box">
                                                                            <div className="rb rb_1">
                                                                                <span>{specialization_data.rating}</span>
                                                                                <span><FaStar /></span>
                                                                                <span>({specialization_data.no_of_reviews} Reviews)</span>
                                                                            </div>
                                                                            <div className="compare_div">
                                                                                <input type="button" value="Comapre" />
                                                                                <img src='/assets/images/decision.png' alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className='table_fee'>
                                                                        <p>₹ {specialization_data.first_year_fees}</p>
                                                                        <p>1st Yr Fees</p>
                                                                        <div className="modal_btn">
                                                                            <input type="button" value="Check Details" onClick={openModal} />
                                                                            <span><IoIosArrowForward /></span>
                                                                        </div>
                                                                    </td>
                                                                    <td>{specialization_data.third_column_data}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* Button to hide items */}
                                                <div className="btn_div">
                                                    <button onClick={toggleView}> <MdKeyboardArrowUp />  Show Less</button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </div>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Courses
