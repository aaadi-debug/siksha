import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div>
      <div data-aos="zoom-in-left" className="testimonial_card">
        <div className="testimonial_body_content">
          {props.feeback}
        </div>
        <div className="testimonial_header mt-4">
          <img src={props.imageUrl} alt={`${props.name} Image`} />
          <div className="testimonial_subheader">
            <div className="name">{props.name}</div>
            <div className="about">{props.about}</div>
            {/* <div className="sub_about">{props.sub_about}</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
