import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Admissions = (props) => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const  collegeName =props.collegeName
    const [datas, setData] = useState([])
    const today = new Date();
    const filterSelection = (filter) => {
        setFilter(filter);
    };

    const handleCutOffFilterChange = (e) => {
        setSearchQuery(e.target.value.toUpperCase());
    };



    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const srver = process.env.REACT_APP_SERVER;
    //             const response = await axios.get(`${srver}:5000/api/admissions`)
    //             setData(response.data)

    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()

    // }, []);

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('/api/admission?name=' + collegeName);
          const result = await res.json();
          if (result.success) {
            setData(result.data);
          }
        };
    
        fetchData();
      }, [collegeName]);

    

    return (
        <div className="admission_section">
            <div className="upcoming_application">
                <div className="upcoming_application_wrapper">
                    <h5>{collegeName} Upcoming Application Dates {today.getFullYear()}</h5>

                    <div id="filterBtnWrapper" >

                        <button

                            className={`btn ${filter === "All" ? 'active' : ''}`}
                            onClick={() => filterSelection('all')}
                        >
                            All
                        </button>

                        {datas.map(info => (
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
                        {datas.map(item => (
                            <div
                                key={item.id}
                                className={`filterDiv ${item.className.split(' ').some(c => filter === 'all' || filter === c) ? 'show' : ''}`}
                            >
                                <h5 className='mt-4'>Important Events</h5>
                                <div className="table_wrapper width_50">
                                    {item.importantEventsTableData && (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Events</th>
                                                    <th>Dates</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.importantEventsTableData.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>{row.event_name}</td>
                                                        <td>
                                                            <div className={`upcoming ${row.event_tag === 'Upcoming' ? 'upcoming' : row.event_tag === 'Ongoing' ? 'ongoing' : 'tentative'}`}>
                                                                <small>{row.event_tag}</small>
                                                            </div>
                                                            <p>{row.event_date}</p>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>

                                <h5 className='mt-4'>Expired Events</h5>
                                <div className="table_wrapper width_50">
                                    {item.expiredEventsTableData && (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Events</th>
                                                    <th>Dates</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.expiredEventsTableData.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>{row.event_name}</td>
                                                        <td>
                                                            <p>{row.event_date}</p>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>

                                <div className="cut_off">
                                    <div className="cut_off_wrapper">
                                        <h5>IIT Kharagpur Cutoff 2024</h5>

                                        {/* search filter */}
                                        <div className="cut_off_search">
                                            <div className="search_input">
                                                <span><FaSearch /></span>
                                                <input
                                                    type="text"
                                                    id="myInput"
                                                    onChange={handleCutOffFilterChange}
                                                    placeholder="Search College Cutoff..."
                                                    title="Type in a name"
                                                />
                                            </div>
                                            <ul id="myUL">
                                                <div className="cut_off_card_container">
                                                    {item.cutOffData.length > 0 ? (
                                                        item.cutOffData.filter(cutoff => cutoff.title.toUpperCase().includes(searchQuery)).map((cutoff, index) => (
                                                            <li key={index} className="cut_off_card">
                                                                <h5>{cutoff.title}</h5>
                                                                <div className="cut_off_card_content">
                                                                    <p>{cutoff.para}</p>

                                                                    {/* table */}
                                                                    <div className="table_wrapper">
                                                                        {item.expiredEventsTableData && (
                                                                            <table>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Courses</th>
                                                                                        <th>2023</th>
                                                                                        <th>2022</th>
                                                                                        <th>2021</th>
                                                                                        <th>2020</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    {cutoff.cutOffDataTable.map((row, index) => (
                                                                                        <tr key={index}>
                                                                                            <td>
                                                                                                {row.courses}
                                                                                                <div className="compare_div">
                                                                                                    <input type="button" value="Comapre" />
                                                                                                    <img src='/assets/images/decision.png' alt="" />
                                                                                                </div>
                                                                                            </td>
                                                                                            <td>{row.cutoff_year1}</td>
                                                                                            <td>{row.cutoff_year2}</td>
                                                                                            <td>{row.cutoff_year3}</td>
                                                                                            <td>{row.cutoff_year4}</td>
                                                                                        </tr>
                                                                                    ))}
                                                                                </tbody>
                                                                            </table>
                                                                        )}
                                                                    </div>
                                                                    <div className="view_exam_btn">
                                                                        <input type="button" value={`View ${cutoff.exam_name} ${cutoff.year} Cutoff`} />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <div className="no_results_message">No results found.</div>
                                                    )}
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Admissions;
