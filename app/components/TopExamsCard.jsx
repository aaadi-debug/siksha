import React from 'react'

const TopExamsCard = (props) => {
  return (
    <div className='img_wrapper topexam_card'>
        <article className="card">
            <header className="card__thumb">
                <a href="#">
                    <img src={props.imgSrc} alt='exam-image' />
                </a>
            </header>
            <div className="card__date">
                <img src={props.examLogo} alt="exam-logo" />
            </div>
            <div className="card__body">
                <div className="card__category"><a href="#">{props.organization}</a></div>
                <ul>
                    <li>
                        <div className="right_side">Participating Colleges</div>
                        <div className="left_side">{props.participating_colleges}</div>
                    </li>
                    <li>
                        <div className="right_side">Exam Date</div>
                        <div className="left_side"> {props.exam_date}</div>
                    </li>
                    <li>
                        <div className="right_side">Exam Level</div>
                        <div className="left_side">{props.exam_level} </div>
                    </li>
                </ul>
                <div className="card__buttons">
                    <a href={props.application_process_link}>Application Process</a>
                    <a href={props.exam_info_link}>Exam Info</a>
                </div>
            </div>
        </article>
    </div>
  )
}

export default TopExamsCard
