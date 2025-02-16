import React from 'react';

const CollegeCard = ({ college }) => {
  const { name, image, courses } = college;

  return (
    <div className="college_card">
      <div className="college_card_content">
        <img src={image} alt={name} />
        <div className="college_details">
          <h4 className='college_title'>{name}</h4>
          {/* <h4>Courses Offered:</h4> */}
          <ul className='mt-3'>
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
