import React from 'react'

const LatestNewsCard = (props) => {
  return (
    <div className='slider latestnews_card'>
        <div className="slider_bg">
            <img src={props.sliderbg} alt="Silder-Bg" />
        </div>
        <div className="slider_main_body slider_news">
            <div className="slider_header d-flex flex-column">
                <h5 data-aos="zoom-in">{props.news_title}</h5>
                <p data-aos="zoom-in" className='news_para'>
                    {props.location}: &nbsp;
                    {props.news_para}
                </p>
            </div>
            <div className="slider_body news_read_btn">
                <a href={props.read_more_link}>Read More</a>
            </div>
        </div>
    </div>
  )
}

export default LatestNewsCard
