import React from 'react'


const ExploreStudyCard = (props) => {
  return (
    <div data-aos="fade-up" className="explorestudy_card mb-2">
        <img data-aos="fade-up" src={props.src} alt="" />
        <h6 data-aos="fade-up">{props.name}</h6>
    </div>
  )
}

export default ExploreStudyCard
