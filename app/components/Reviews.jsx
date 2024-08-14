'use client'
import React, {useEffect,useState} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { PiGraduationCapFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import axios from 'axios';

const Reviews = () => {
    // State to manage visibility for each section
    const [visibleLikes, setVisibleLikes] = useState({});
    const [visibleDislikes, setVisibleDislikes] = useState({});
    const [reviewsData, setReviewsData] = useState([]);

    const fixedData = [
        {
            id: 1,
            page_title: "Why To Join IIT Kharagpur - Reviews & Rating",
            number: "4.2",
            verified_reviews: "445",
            academic_review: '4.3',
            faculty_review: '4.2',
            infrastructure_review: '4.5',
            social_life_review: '4.3',
            placement_review: '4.3',
        }
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://157.173.221.48:5000/api/reviews`)
                setReviewsData(response.data)

            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, []);

    // Array of progress values for each star rating
    const progressValues = [
        { stars: 5, value: 86 }, // 5-star rating progress
        { stars: 4, value: 40 }, // 4-star rating progress
        { stars: 3, value: 20 },  // 3-star rating progress
        { stars: 2, value: 12 },  // 2-star rating progress
        { stars: 1, value: 10 }   // 1-star rating progress
    ];


    // Function to toggle visibility for specific list of likes
    const toggleLikes = (index) => {
        setVisibleLikes(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };

    // Function to toggle visibility for specific list of dislikes
    const toggleDislikes = (index) => {
        setVisibleDislikes(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };
    
    //  reviewsData = [  // Demo data for likes and dislikes
    //     {
    //         title: "What Students Say?",
    //         title_link: "",
    //         rating: "3.1",
    //         helpful_or_not: "HelpFul",
    //         likes: [
    //             "The campus placement is best as we can apply for internships whenever we want we get a lot of mails to our college mail",
    //             "The best in class faculties and the best environment to study along with like minded people.",
    //             "Best part is that it is fully online, therefore we get a lot of time at our home.",
    //             "Campus life is at the best, u can make or break u r career here",
    //             "The industry interaction talks it offer is one of the best part",
    //             "Greenary, flora and fauna of the campus , weather is great here"
    //         ],
    //         dislikes: [
    //             "Lectures give by faculty are bit boring and some are very lengthy too.",
    //             "The academics are somewhat tough and during exams, students get sleepless nights.",
    //             "Food over is not good for North Indians so they need to find some alternative",
    //             "Research atmosphere is very good professor will show hell lot of interest in it",
    //             "Competition, which makes you feel like you are not talented sometimes"
    //         ]
    //     },
    //     {
    //         title: "What Students Say?",
    //         title_link: "",
    //         rating: "4.1",
    //         helpful_or_not: "Not Helpful",
    //         likes: [
    //             "The campus placement is best as we can apply for internships whenever we want we get a lot of mails to our college mail",
    //             "The best in class faculties and the best environment to study along with like minded people.",
    //             "Best part is that it is fully online, therefore we get a lot of time at our home.",
    //             "Campus life is at the best, u can make or break u r career here",
    //             "The industry interaction talks it offer is one of the best part",
    //             "Research atmosphere is very good professor will show hell lot of interest in it",
    //             "Greenary, flora and fauna of the campus , weather is great here"
    //         ],
    //         dislikes: [
    //             "Lectures give by faculty are bit boring and some are very lengthy too.",
    //             "The academics are somewhat tough and during exams, students get sleepless nights.",
    //             "Food over is not good for North Indians so they need to find some alternative",
    //             "Research atmosphere is very good professor will show hell lot of interest in it",
    //             "Competition, which makes you feel like you are not talented sometimes"
    //         ]
    //     },
    //     // Add more sections if needed
    // ];


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/reviews`)
                setReviewsData(response.data)

            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, []);

    console.log("rewiew is",reviewsData)

    return (
        <div className="reviews_section">
            <div className="reviews_section_wrapper">

                {/* 1st section */}
                <div className="overall_reviews">
                    <h5 className='mb-3'>{fixedData[0].page_title}</h5>
                    <div className="overall_reviews_wrapper">
                        <div className="section1">
                            <div className="overall_reviews_wrapper_1">
                                <div className="rating_div">
                                    <div className="rating">
                                        <div className="number">{fixedData[0].number}</div>
                                        <div className="stars">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <p>
                                        <img src='/assets/images/secure.png' alt="" />
                                        <span>&nbsp; ({fixedData[0].verified_reviews} Verified Reviews)</span>
                                    </p>
                                    <a href="">Write a College Review <IoIosArrowForward /> </a> {/* Review Page Link */}
                                    <p><small>& Win Monthly Prizes Up to â‚¹1 Lakh/-*</small></p>
                                </div>
                            </div>
                            <div className="overall_reviews_wrapper_2 progress_bars_div">              {/* Styling globals.css */}
                                {progressValues.map((progress, index) => (                             // for 5 progress bars
                                    <div className="progress_div" key={index}>
                                        <span>{progress.stars}</span>
                                        <span><FaStar /></span>
                                        <ProgressBar now={progress.value} label={`${progress.value}%`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="section2">
                            <div className="features_div">
                                <span className='feature_icon'> <PiGraduationCapFill /> </span>
                                <p className='feature_name'>Academic</p>
                                <p> {fixedData[0].academic_review} <span> <FaStar /> </span></p>
                            </div>
                            <div className="features_div">
                                <span className='feature_icon'> <GiTeacher /> </span>
                                <p className='feature_name'>Faculty</p>
                                <p> {fixedData[0].faculty_review} <span> <FaStar /> </span></p>
                            </div>
                            <div className="features_div">
                                <span className='feature_icon'> <FaCity /> </span>
                                <p className='feature_name'>Infrastructure</p>
                                <p> {fixedData[0].infrastructure_review}  <span> <FaStar /> </span></p>
                            </div>
                            <div className="features_div">
                                <span className='feature_icon'> <FaHouseChimney /> </span>
                                <p className='feature_name'>Accommodation</p>
                                <p> {fixedData[0].academic_review} <span> <FaStar /> </span></p>
                            </div>
                            <div className="features_div">
                                <span className='feature_icon'> <GiThreeFriends /> </span>
                                <p className='feature_name'>Social Life</p>
                                <p> {fixedData[0].social_life_review} <span> <FaStar /> </span></p>
                            </div>
                            <div className="features_div">
                                <span className='feature_icon'> <MdWork /> </span>
                                <p className='feature_name'>Placement</p>
                                <p> {fixedData[0].placement_review} <span> <FaStar /> </span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd section */}
                {reviewsData.map((section, index) => (
                    <div key={index}>
                        <div className="review_title">
                            <h6 className='mt-3'><a href={section.title_link}>{section.title}</a></h6>
                            <div className="helpful_or_not">
                                <div className="number">{section.rating}</div>
                                <span><FaStar /></span>
                                <span className={section.helpful_or_not === 'Not Helpful' ? 'red_bg' : ''} >{section.helpful_or_not}</span>
                            </div>
                        </div>

                        <div className="like_dislike">
                            <div className="like_div pr-5">
                                <p><span><BiSolidLike /></span> Likes</p>
                                <ul>
                                    {section.likes.slice(0, visibleLikes[index] ? section.likes.length : 2).map((like, likeIndex) => (
                                        <li key={likeIndex}>{like}</li>
                                        ))}
                                    {!visibleLikes[index] && (
                                        <div className="btn_div">
                                            <button onClick={() => toggleLikes(index)}> +{section.likes.length - 2} More <MdKeyboardArrowDown /> </button>
                                        </div>
                                    )}
                                    {visibleLikes[index] && (
                                        <div className="btn_div">
                                            <button onClick={() => toggleLikes(index)}> Hide Likes <MdKeyboardArrowUp /> </button>
                                        </div>
                                    )}
                                </ul>
                            </div>
                            <div className="dislike_div">
                                <p><span><BiSolidDislike /></span> Dislikes</p>
                                <ul>
                                    {section.dislikes.slice(0, visibleDislikes[index] ? section.dislikes.length : 2).map((dislike, dislikeIndex) => (
                                        <li key={dislikeIndex}>{dislike}</li>
                                        ))}
                                    {!visibleDislikes[index] && (
                                        <div className="btn_div">
                                            <button onClick={() => toggleDislikes(index)}> +{section.dislikes.length - 2} More <MdKeyboardArrowDown /> </button>
                                        </div>
                                    )}
                                    {visibleDislikes[index] && (
                                        <div className="btn_div">
                                            <button onClick={() => toggleDislikes(index)}> Hide Dislikes <MdKeyboardArrowUp /> </button>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
    }
    
    export default Reviews
    