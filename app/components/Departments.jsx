import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosArrowDropright } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { MdOutlineShare } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';

// import DepartmentIMG from '../../../../assets/images/department.webp'  // image import 

const DepartmentDynamic = () => {

    // Using an object to keep track of the expansion state of each card
    const [expandedCards, setExpandedCards] = useState({});
    const { collegeName } = useParams();
    const [count, setCount] = useState(0)
    const [department, stDepartment]=useState([])

    // Toggle the expansion state for a specific card
    const toggleReadMore = (id) => {
        setExpandedCards((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the specific card's state
        }));
    };

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const srver = process.env.REACT_APP_SERVER;
                const response = await axios.get(`${srver}:5000/api/department/${collegeName}`)
                stDepartment(response.data)

            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, []);


    // const department = [
    //     {
    //         id: 1,
    //         college:"IT Kharagpur",
    //         imgSrc: "../../../../assets/images/department.webp",
    //         title: "Department of Management Studies, IIT Kharagpur - [DoMS IIT Madras]",
    //         location: "Chennai, Tamil Nadu",
    //         course: "M.Phil/Ph.D in Management",
    //         fees: "15650",
    //         view_all_courses_link: ""
    //     },

    // ]

    
    const questions = [
        {
            id: 1,
            college:"IT Kharagpur",
            title: "How is the food at IIT Madras?",
            imgSrc: "xyz",
            author: "Megha Banerjee",
            author_desc: "Studied at IIT Kharagpur",
            description: "IIT Madras has a 4 meal per day program. There are both North Indian and South Indian menus. Even though he has retired from IIT Madras, I would like to name V. Balakrishnan sir from the Physics Department as the answer to this question. He is one of the most respected faculty members of all time at IIT Madras.",
            read_more_link: "",
            likes: 1,
            dislikes: 0
        },
        {
            id: 2,
            college:"IT Kharagpur",
            title: "How is the food at IIT csds?",
            imgSrc: "xyz",
            author: "Avinash Banerjee",
            author_desc: "Studied at IIM Kharagpur",
            description: "IIT Madras has a 4 meal per day program. There are both North Indian and South Indian menus. Even though he has retired from IIT Madras, I would like to name V. Balakrishnan sir from the Physics Department as the answer to this question. He is one of the most respected faculty members of all time at IIT Madras.",
            read_more_link: "",
            likes: 1,
            dislikes: 0
        },
        {
            id: 3,
            college:"IT Kharagpur",
            title: "How is the food at IIT csds?",
            imgSrc: "xyz",
            author: "Avinash purohit",
            author_desc: "Studied at IIM Kharagpur",
            description: "IIT Madras has a 4 meal per day program. There are both North Indian and South Indian menus. Even though he has retired from IIT Madras, I would like to name V. Balakrishnan sir from the Physics Department as the answer to this question. He is one of the most respected faculty members of all time at IIT Madras.",
            read_more_link: "",
            likes: 1,
            dislikes: 0
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            setCount(questions.length);
        }, 1000);
    });



    return (
        <div className="department_section">
            <div className="department_section_wrapper">
                {/* 1st section */}
                <div className="departments_div">
                    <div className="departments_div_wrapper">
                        <h5>{collegeName}</h5>

                        {
                            department.map((row) => (
                                <div key={row.id} className="department">
                                    <div className="department_header">
                                        <img src={row.imgSrc} alt="" />
                                        <div className="department_head">
                                            <h6> {row.title} </h6>
                                            <p className='place'> {row.location} </p>

                                            <p className='course'>{row.course}</p>
                                            <p className='fees'>Fees Per Year: <span>₹ {row.fees} </span></p>
                                        </div>
                                    </div>
                                    <div className="department_footer">
                                        <div className="cta_buttons">
                                            <a href={row.view_all_courses_link} className="brochure_btn text-decoration-none"><input type="button" value="View All Courses" /> &nbsp; <IoIosArrowDropright /></a>
                                            <div className="applynow_btn"><input type="button" value="Apply Now" /> &nbsp; <HiOutlineDownload /></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* 2nd section */}
                <div className="website_rating">
                    <h5>How likely are you to recommend Siksha-helpline.com to a friend or a colleague?</h5>

                    <div className="likely">
                        <div className='number'>
                            <span>1</span>
                            <p>Not so likely</p>
                        </div>
                        <div className='number'>
                            <span>2</span>
                        </div>
                        <div className='number'>
                            <span>3</span>
                        </div>
                        <div className='number'>
                            <span>4</span>
                        </div>
                        <div className='number'>
                            <span>5</span>
                        </div>
                        <div className='number'>
                            <span>6</span>
                        </div>
                        <div className='number'>
                            <span>7</span>
                        </div>
                        <div className='number'>
                            <span>8</span>
                        </div>
                        <div className='number'>
                            <span>9</span>
                        </div>
                        <div className='number'>
                            <span>10</span>
                            <p>Highly likely</p>
                        </div>
                    </div>
                </div>

                {/* 3rd section */}
                <div className="answered_ques">
                    <div className="answered_ques_wrapper">
                        <div className="qna_page_link">
                            <h5> {collegeName}: {count} Answered Questions </h5>
                            <NavLink to={collegeName}>View All</NavLink>
                        </div>

                        <div className="question_wrapper">
                            {
                                questions.map((question) => (
                                    <div key={question.id} className="question_card">
                                        <div className="question_card_header">
                                            <h6>{question.title}</h6>
                                            <button className="ml-5" onClick={() => toggleReadMore(question.id)}> {/*// Passing the specific card ID */}
                                                {expandedCards[question.id] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                            </button>
                                        </div>
                                        <div style={{ display: expandedCards[question.id] ? "none" : "block" }}>
                                            <small>
                                                <img src={question.imgSrc} alt="user" />
                                                <b>{question.author}</b>&nbsp; {question.author_desc}
                                            </small>
                                            <p>{question.description}</p>
                                            <div className="icons_div">
                                                <NavLink to={question.read_more_link}>...Read More</NavLink>
                                                <div className="l_d_s">
                                                    <div className="like">
                                                        <NavLink><span><BiSolidLike /></span> {question.likes}</NavLink>
                                                    </div>
                                                    <div className="dislike">
                                                        <NavLink><span><BiSolidDislike /></span> {question.dislikes}</NavLink>
                                                    </div>
                                                    <div className="share">
                                                        <NavLink><span><MdOutlineShare /></span></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepartmentDynamic
