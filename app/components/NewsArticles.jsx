import React, { useEffect, useState } from 'react';

import { FaSearch } from "react-icons/fa";
// import DecisionICON from '../../../../assets/images/decision.png'
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";

const NewsArticles = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');


    const fixedData = [
        {
            id: 1,
            page_title: "IIT Kharagpur News and Article ",
        },
    ]


    const [datas, setData] = useState([])

    const items = [
        {
            id: 1,
            name: 'College',
            className: 'college',         // This classname will be changed according to the button class and filterSelection in all the array
        },

        {
            id: 2,
            name: 'Exam',
            // This classname will be changed according to the button class and filterSelection in all the array
            className: 'exam', // This classname will be changed according to the button class and filterSelection in all the array

        },
    ];

    const newsCard = [
        {
            id: 1,
            src: "",
            title_link: "",
            title: "JoSAA Counselling 2024 Seat Matrix Released; 17,740 Seats Available across 23 IITs",
            date: "June 12, 2024",
            destination: "College"
        },
        {
            id: 2,
            src: "",
            title_link: "",
            title: "JoSAA Matrix Released; 17,740 Seats Available across 23 IITs",
            date: "June 12, 2024",
            destination: "College"
        }
    ]

    const filterSelection = (filter) => {
        setFilter(filter);
    };

    const handleCutOffFilterChange = (e) => {
        setSearchQuery(e.target.value.toUpperCase());
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`/api/productDetail?condition=${urldata}`)
                setData(items)

            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []);

    console.log("data is ", datas)

    return (
        <div className="newsArticles_section">
            <div className="newsArticles_section_wrapper">

                {/* 1st section */}
                <div className="newsArticles_div">
                    <div className="newsArticles_div_wrapper">
                        <h5> {fixedData[0].page_title} </h5>

                        <div id="filterBtnWrapper" >   {/* Button Mapping */}
                            <button

                                className={`btn ${filter === "All" ? 'active' : ''}`}
                                onClick={() => filterSelection('all')}
                            >
                                All
                            </button>

                            {items.map(info => (
                                <button
                                    key={info.id}
                                    className={`btn ${filter === info.className ? 'active' : ''}`}
                                    onClick={() => filterSelection(info.className)}
                                >
                                    {info.name}
                                </button>
                            ))}
                        </div>

                        <div className="filterContentWrapper">
                            {items.map(item => (
                                <div
                                    key={item.id}
                                    className={`filterDiv ${item.className.split(' ').some(c => filter === 'all' || filter === c) ? 'show' : ''}`}
                                >
                                    <div className="news_card_wrapper">
                                        {
                                            newsCard.map((data) => (
                                                <div key={data.id} className="newsArticles_card">
                                                    <img src={data.src} alt="news-image" />
                                                    <div className="news_content">
                                                        <div className="news_title"> <a href={data.title_link}> {data.title} </a> </div>
                                                        <div className="date_div">
                                                            <div className="date">
                                                                <span></span>
                                                                <div className="main_date"><MdOutlineCalendarToday /> {data.date} </div>
                                                            </div>

                                                            <div className="destination"> <LuDot /> {data.destination} </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsArticles
