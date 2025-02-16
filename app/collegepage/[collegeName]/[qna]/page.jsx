'use client'
import React, { useState, useEffect } from 'react';
import { debounce, iteratee } from 'lodash';
import { useParams, Link } from 'react-router-dom';

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const mockData = [
  {
    id: 1,
    question: "What is the eligibility for B.Tech in Computer Science?",
    author_img: "https://qph.cf2.quoracdn.net/main-thumb-450706328-200-ltkumdzgrbmdmxnjdfmssxyrxcscufox.jpeg",
    author_name: "Aditya Raj Gupta",
    author_college: "Indian Institute of Management, Ahmedabad",
    date: "July 24, 2024",
    answer: "In 2021, one of my friends attended the IIM Ahmedabad interview. IIM A was the only IIM to conduct in-center interviews last year. Students were required to go to the center give AWT, and attend their interview through video conference. After the identity verification, students were asked to wait in a room for AWT. When the AWT round was over, they were called for an interview. My friend was 3rd in her panel.",
    category: "Eligibility",
    course: "B.Tech",
    college: "College A",
    location: "Delhi"
  },

  
  { id: 2, question: "What are the hostel facilities like?", answer: "Hostel facilities are good with options for single and shared rooms.", category: "Facilities", course: "B.Tech", college: "College B", location: "Mumbai" },
  { id: 3, question: "How is the placement for MBA students?", answer: "Placements are excellent with an average package of 10 LPA.", category: "Placement", course: "MBA", college: "College A", location: "Delhi" },
  { id: 4, question: "Is there any scholarship available for students?", answer: "Yes, there are various scholarships available based on merit and need.", category: "Scholarship", course: "MCA", college: "College C", location: "Bangalore" },
  { id: 5, question: "What is the fee structure for B.Sc?", answer: "The fee structure for B.Sc is around 1 Lakh per annum.", category: "Fee Structure", course: "B.Sc", college: "College D", location: "Pune" },
  { id: 2, question: "What are the hostel facilities like?", answer: "Hostel facilities are good with options for single and shared rooms.", category: "Facilities", course: "B.Tech", college: "College B", location: "Mumbai" },
  { id: 3, question: "How is the placement for MBA students?", answer: "Placements are excellent with an average package of 10 LPA.", category: "Placement", course: "MBA", college: "College A", location: "Delhi" },
  { id: 4, question: "Is there any scholarship available for students?", answer: "Yes, there are various scholarships available based on merit and need.", category: "Scholarship", course: "MCA", college: "College C", location: "Bangalore" },
  { id: 5, question: "What is the fee structure for B.Sc?", answer: "The fee structure for B.Sc is around 1 Lakh per annum.", category: "Fee Structure", course: "B.Sc", college: "College D", location: "Pune" },
  { id: 2, question: "What are the hostel facilities like?", answer: "Hostel facilities are good with options for single and shared rooms.", category: "Facilities", course: "B.Tech", college: "College B", location: "Mumbai" },
  { id: 3, question: "How is the placement for MBA students?", answer: "Placements are excellent with an average package of 10 LPA.", category: "Placement", course: "MBA", college: "College A", location: "Delhi" },
  { id: 4, question: "Is there any scholarship available for students?", answer: "Yes, there are various scholarships available based on merit and need.", category: "Scholarship", course: "MCA", college: "College C", location: "Bangalore" },
  { id: 5, question: "What is the fee structure for B.Sc?", answer: "The fee structure for B.Sc is around 1 Lakh per annum.", category: "Fee Structure", course: "B.Sc", college: "College D", location: "Pune" },
  // Add more mock data as needed
];

const Qna = () => {
  const { collegeName } = useParams();

  const itemsPerPage = 5;
  const [data, setData] = useState(mockData);  // Initialize with mock data
  const [filteredData, setFilteredData] = useState(mockData);  // Initialize with all data
  const [category, setCategory] = useState('');
  const [course, setCourse] = useState('');
  const [college, setCollege] = useState('');
  const [location, setLocation] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(mockData.length / itemsPerPage));  // Calculate total pages initially

  // Debounced filter function
  const applyFilters = debounce(() => {
    let filtered = data.filter((item) => {
      return (
        (category ? item.category === category : true) &&
        (course ? item.course === course : true) &&
        (college ? item.college === college : true) &&
        (location ? item.location === location : true)
      );
    });

    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
    setPage(1); // Reset to the first page
    setFilteredData(filtered);
  }, 300);

  useEffect(() => {
    applyFilters();
  }, [category, course, college, location]); // Apply filters when filter criteria change

  const handlePageChange = (direction) => {
    if (direction === 'next' && page < totalPages) {
      setPage(page + 1);
    } else if (direction === 'prev' && page > 1) {
      setPage(page - 1);
    }
  };

  // Reset filters to show all data
  const handleResetFilters = () => {
    setCategory('');
    setCourse('');
    setCollege('');
    setLocation('');
    setFilteredData(data);
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    setPage(1);
  };

  const displayedData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <div className="qna">
        <Navbar />

        <div className="qna_wrapper bg_reddish">
          <div className="qna_about_us">
            <h2>Anwers to All Your Queries</h2>
          </div>
          <div className="container py-5 lg:px-28">
            <div className="row ">
              <h6 className='mb-4'> Get Answers on Test Preparation, Admissions & Campus Life for <span className="secondary_clr">{collegeName}</span></h6>

              <div className="qna_filters">
                <Filter label="Category" options={[...new Set(data.map((item) => item.category))]} onChange={setCategory} />
                <Filter label="Course" options={[...new Set(data.map((item) => item.course))]} onChange={setCourse} />
                <Filter label="College" options={[...new Set(data.map((item) => item.college))]} onChange={setCollege} />
                <Filter label="Location" options={[...new Set(data.map((item) => item.location))]} onChange={setLocation} />
                <button className="qna-reset-button" onClick={handleResetFilters}>Reset Filters</button>
              </div>
              <div className="qna-filter-results">
                {displayedData.length === 0 ? (
                  <p>No results found</p>
                ) : (
                  displayedData.map((item) => (
                    <div key={item.id} className="qa">
                      <h5>{item.question}</h5>
                      <div className="qna_result_author d-flex justify-content-between mb-3 mt-4">
                        <div className="d-flex">
                          <img src={item.author_img} alt="author-image" />
                          <div className="d-flex flex-column mx-3">
                            <div className="qna_result_author_name">{item.author_name ? item.author_name : 'N/A'}</div>
                            <small className="qna_result_author_college">Studies at {item.author_college ? item.author_college : 'N/A'}</small>
                          </div>
                        </div>
                        <div>Posted on: {item.date ? item.date : 'N/A'}</div>
                      </div>
                      <p>{item.answer ? item.answer : 'N/A'}</p>
                      <div className="d-flex">
                        <p className='mr-3'><strong className='secondary_clr'>Course:</strong> {item.course}</p>
                        <p className='mr-3'><strong className='secondary_clr'>College:</strong> {item.college}</p>
                        <p className='mr-3'><strong className='secondary_clr'>Location:</strong> {item.location}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="pagination mt-5">
                <button onClick={() => handlePageChange('prev')} disabled={page === 1}>Previous</button>
                <span>Page {page} of {totalPages}</span>
                <button onClick={() => handlePageChange('next')} disabled={page === totalPages}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const Filter = ({ label, value, options, onChange }) => {
  return (
    <div className="qna_filter">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Qna
