import React, { useState } from 'react'
import Modal from 'react-modal';

import { IoIosArrowDropright } from "react-icons/io";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Departments from './Departments';

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


const CollegeCompare = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const fixedData = [
        {
            id: 1,
            page_title: "Compare Popular Colleges With IIT Kharagpur",
        }
    ]

    const compare_college_card = [
        {
            id: 1,
            src: "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=76.14&w=76.14&mode=stretch",
            college_name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP], Kharagpur",
            ratings: "4.3",
            no_of_reviews: "12",
            fees: "223,600"
        },
        {
            id: 2,
            src: "https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=76.14&w=76.14&mode=stretch",
            college_name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP], Kharagpur",
            ratings: "4.3",
            no_of_reviews: "12",
            fees: "223,600"
        },
        {
            id: 3,
            src: "https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=76.14&w=76.14&mode=stretch",
            college_name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP], Kharagpur",
            ratings: "4.3",
            no_of_reviews: "12",
            fees: "223,600"
        },
        {
            id: 4,
            src: "https://images.collegedunia.com/public/college_data/images/logos/col27828.jpg?h=76.14&w=76.14&mode=stretch",
            college_name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP], Kharagpur",
            ratings: "4.3",
            no_of_reviews: "12",
            fees: "223,600"
        },
        
    ]


    const openModal = () => {   //function to open modal
        setIsOpen(true);
    };

    const closeModal = () => {  //function to close modal
        setIsOpen(false);
    };

    return (
        <div className="college_compare_section">
            <div className="college_compare_section_wrapper">

                {/* 1st section */}
                <div className="college_compare_div">
                    <h5> {fixedData[0].page_title} </h5>

                    <div className="compare_colleges_card_wrapper mt-4">

                        {
                            compare_college_card.map((data) => (
                                <div className="compare_colleges_card">
                                    <span className='colored_bg'></span>
                                    <figure>
                                        <img src={data.src} alt="college-logo" />
                                    </figure>
                                    <div className="compare_colleges_card_content">
                                        <div className="college_name"> {data.college_name} </div>
                                        <div className="rating_div">
                                            {data.ratings} <span><FaStar /></span> ( {data.no_of_reviews} Reviews )
                                        </div>
                                        <div className="fee"> Fees:  <span>₹{data.fees}</span> / Year </div>

                                        <div className="cta_buttons">
                                            <div className="brochure_btn"><input type="button" value="Brochure" onClick={openModal} /> &nbsp; <HiOutlineDownload /></div>
                                            {/* <div className="applynow_btn"><input type="button" value="Apply Now" onClick={openModal} /> &nbsp; <IoIosArrowDropright /></div> */}
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
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="mt-3"></div>

            
            <Departments />
        </div>
    )
}

export default CollegeCompare
