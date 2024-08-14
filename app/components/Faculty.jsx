import React from 'react'

const FacultyDynamic = () => {

    const fixedData = [
        {
            id: 1,
            page_title: "IIT Kharagpur Faculty Details",
        },
    ]

    const facultyCard = [
        {
            id: 1,
            src: "",
            title: "Associate Professor",
            name: "Arun Ghosh",
            department: "Department Of Electrical Engineering"
        },
        {
            id: 2,
            src: "",
            title: "Professor",
            name: "Arun Kumar Samantaray",
            department: "Department Of Mechanical Engineering"
        },
        {
            id: 3,
            src: "",
            title: "Professor",
            name: "Arun Kumar Samantaray",
            department: "Department Of Mechanical Engineering"
        },
        {
            id: 4,
            src: "",
            title: "Professor",
            name: "Arun Kumar Samantaray",
            department: "Department Of Mechanical Engineering"
        },
    ]

    return (
        <div className="faculty_section">
            <div className="faculty_section_wrapper">

                {/* 1st section */}
                <div className="faculty_div">
                    <h5> {fixedData[0].page_title} </h5>

                    <div className="faculty_div_wrapper py-4">
                        {
                            facultyCard.map((data) => (
                                <div key={data.id} className="faculty_card">
                                    <img src={data.src} alt="faculty-avatar" />
                                    <div className="faculty_title"> {data.title} </div>
                                    <div className="faculty_name"> {data.name} </div>
                                    <div className="faculty_department"> {data.department} </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FacultyDynamic
