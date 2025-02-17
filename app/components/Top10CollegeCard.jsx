import React from 'react'
import Link from 'next/link'

const transformCollegeName = (name) => {
  const match = name.match(/^(.*?) - .*? - \[(.*?)\]$/);
  if (match) {
    const [ , collegeName, abbreviation ] = match;
    return `${collegeName} (${abbreviation.replace(/-/g, '')})`;
  }
  return name; // return original name if it doesn't match the expected format
}

const Top10CollegeCard = (props) => {
  const transformedCollegeName = transformCollegeName(props.college_name);
  return (
    <div data-aos="fade-up" className="top10college_card">
      <img src={props.imgSrc} alt="college-image" />
      <div data-aos="fade-up" className="ranking">
        <span>{props.ranking}</span>
      </div>
      <Link href={`/collegepage/${transformedCollegeName}`} data-aos="fade-up" className="card_body">
        <ul>
          <li data-aos="fade-up">College</li>
          <li data-aos="fade-up">Cut Off</li>
          <li data-aos="fade-up">Application Deadline</li>
          <li data-aos="fade-up">Fees</li>
        </ul>
        <ul>
          <li data-aos="fade-up" className='college_name'>{props.college_name}</li>
          <li data-aos="fade-up" className='cut_offf'>{props.cut_off}</li>
          <li data-aos="fade-up" className='deadline'>{props.deadline}</li>
          <li data-aos="fade-up">
            {props.college_fees}
            <span>1st Year Fees</span>
          </li>
        </ul>
      </Link>
    </div>
  )
}

export default Top10CollegeCard
