import React from 'react'

const SliderCard = (props) => {
  return (
    <div className='slider'>
        <div className="slider_bg">
            <img src={props.sliderbg} alt="Silder-Bg" />
        </div>
        <div className="slider_main_body">
            <div className="slider_header d-flex flex-column">
                <div data-aos="fade-up" className="silder_head d-flex justify-content-start align-items-center">
                    <img src='/assets/images/engineer-icon.png' alt="slider-icon" />
                    <h5>{props.heading}</h5>
                </div>
                <p data-aos="fade-up" className="no_of_colleges">{props.no_of_colleges} colleges.</p>
            </div>
            <div className="slider_body">   
                <div className="degree_name">{props.degree_name_1}</div>
                <div className="degree_specilaization">{props.specialization}</div>
                <div className="degree_years">{props.degree_name_2}</div>
            </div>
        </div>
    </div>
  )
}

export default SliderCard
