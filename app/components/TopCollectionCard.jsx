import React from 'react' 

const TopCollectionCard = (props) => {
  return (
    <div className='img_wrapper'>
        <img className='img_wrapper_bg' src={props.image} alt='top-collection-img' />
        {/* <div className="overlay1"></div> */}
        <div className="img_wrapper_container">
            <div className="img_wrapper_body py-2">
                <h5  data-aos="fade-up">{props.college_name}</h5>
                <div data-aos="fade-up" className='small_colleges_icon'>
                    <img src='/assets/images/topcollection/collegelogo1.webp' alt="" />
                    <img src='/assets/images/topcollection/collegelogo2.gif' alt="" />
                    <img src='/assets/images/topcollection/collegelogo3.webp' alt="" />
                    <p>+ {props.noofcoolleges} more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopCollectionCard
