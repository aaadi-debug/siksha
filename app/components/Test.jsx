import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Top10CollegeCard from './Top10CollegeCard';
import axios from 'axios';

const collegeImages = {
    "IIM Calcutta - Indian Institute of Management": '/assets/images/TOP 10 Colleges/iim-calcuta.png',
    "IIM Kozhikode - Indian Institute of Management": '/assets/images/TOP 10 Colleges/iim-kozhikode.png',
    "IIM Lucknow - Indian Institute of Management": '/assets/images/TOP 10 Colleges/iim-lucknow.png',
    "IIMA - Indian Institute of Management": '/assets/images/TOP 10 Colleges/iima.png',
    "IIT BHU - Indian Institute of Technology - [IITBHU]": '/assets/images/TOP 10 Colleges/iit-bhu.png',
    "IIT Bombay - Indian Institute of Technology - [IITB]": '/assets/images/TOP 10 Colleges/iit-bombay.png',
    "IIT Delhi - Indian Institute of Technology [IITD]": '/assets/images/TOP 10 Colleges/iit-delhi.png',
    "IIT Guwahati - Indian Institute of Technology - [IITG]": '/assets/images/TOP 10 Colleges/iit-guwa.png',
    "IIT Hyderabad - Indian Institute of Technology - [IITH]": '/assets/images/TOP 10 Colleges/iit-hyd.png',
    "IIT Kanpur - Indian Institute of Technology [IITK]": '/assets/images/TOP 10 Colleges/iit-kanpur.png',
    "IIT Madras - Indian Institute of Technology - [IITM]": '/assets/images/TOP 10 Colleges/iit-madras.png',
    "IIT Roorkee - Indian Institute of Technology - [IITR]": '/assets/images/TOP 10 Colleges/iit-roorkee.png',
    "IIT Kharagpur - Indian Institute of Technology - [IITKGP]": '/assets/images/TOP 10 Colleges/khrgpr.png'
};

const Test = () => {
    const [tabData, setTabData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/tabdata');
            const result = await res.json();
            if (result.success) {
                setTabData(result.data);
            }
        };

        fetchData();
    }, []);

    return (
        <section className=" top10collegessection">
            <div className="container mx-auto lg:px-28">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Top 10 Colleges</h2>

                <Tabs defaultActiveKey="BE/B.Tech" id="uncontrolled-tab-example" className="mb-6">
                    {tabData.length === 0 ? (
                        <p>No Data</p>
                    ) : (
                        tabData.map((info) => (
                            <Tab key={info._id} eventKey={info.eventkey} title={info.title} className="p-4">
                                {info.colleges.length === 0 ? (
                                    <p>No Data</p>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {info.colleges.map((college, index) => (
                                            <Top10CollegeCard
                                                key={index}
                                                imgSrc={collegeImages[college.college_name] || '/assets/images/college_imgs.jpg'} // Default to CollegeIMG if not found
                                                ranking={college.ranking}
                                                college_name={college.college_name}
                                                cut_off={college.cut_off}
                                                deadline={college.deadline}
                                                college_fees={college.college_fees}
                                            />
                                        ))}
                                    </div>
                                )}
                            </Tab>
                        ))
                    )}
                </Tabs>
            </div>
        </section>
    );
};

export default Test;
