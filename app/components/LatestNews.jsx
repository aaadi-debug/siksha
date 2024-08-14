import { React, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css'; // Import Swiper CSS
import { Navigation } from 'swiper/modules';
import LatestNewsCard from './LatestNewsCard';

const LatestNews = () => {

  // const [shouldNotSwipe, setShouldNotSwipe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the device width is less than or equal to 768px (tablet size)
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  }

  // Listen to window resize events to update the isMobile state
  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);


  const params = {
    modules: { Navigation },
    slidesPerView: isMobile ? 2.5 : 3.5,
    spaceBetween: isMobile ? 10 : 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 4000, // 3 seconds delay between slides
      disableOnInteraction: false // Enables autoplay even if user interacts with the swiper
    },
    loopfillgroupwithblank: "true",
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    observer: true,
    observeParents: true
  }

  return (
    <section className="setgoalsection latest_news">
      <div className="setgoalsection_wrapper container px-32">
        <h2 data-aos="zoom-in" className='mb-4 text-3xl text-black font-semibold'>Latest News & Notifications</h2>

        {/* <button onClick={toggleSwiping}>Toggle Swiping</button> */}
        {/* Should swipe: {shouldNotSwipe.toString()} */}
        <Swiper {...params}>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg='/assets/images/News/univeristy addmission 2024.png'
              news_title="IP University Admission 2024: Register with your CUET results to apply for PG courses"
              location="New Delhi"
              news_para="IPU Admission 2024: Applicants can now apply to IP University for admission using their CUET PG results. The fee for registration is Rs 2,500, but it is not applicable for the candidates who have secured any seat in any program through National Level Tests, Common Entrance Tests, or Management Quota."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg='/assets/images/News/neet-counselling.png'
              news_title="NEET 2024: MCC will conduct four rounds of counseling for more than one lakh UG seats"
              location="New Delhi"
              news_para="The NEET-UG results were released by the National Testing Agency on June 4, and the updated scorecard on July 26. The Medical Counseling Committee (MCC) of the Directorate General of Health Services (DGHS) released a public notice on July 29th, announcing the counseling dates."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg='/assets/images/News/sslc.png'
              news_title="The 2024 Tamil Nadu SSLC supplemental result is out"
              location="New Delhi"
              news_para="The Tamil Nadu SSLC supplemental exam result 2024 has been made public on the official website by the Directorate of Government Examinations (DGE). Here's how to download and see the results right now.
"
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg='/assets/images/News/ug-admission-2024.png'
              news_title="DU UG Admission 2024: The first phase of application correction against CSAS has started"
              location="New Delhi"
              news_para="Phase I is the application to the University of Delhi; Phase II is the program and college preference form; and Phase III is the allocation/admission phase of the CSAS UG 2024. The 1st phase, i.e., application correction against CSAS, has begun now."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg='/assets/images/News/cbse-warning.png'
              news_title="Concerning Misinformation Regarding Free Teacher's Training, CBSE Issues A Warning"
              location="New Delhi"
              news_para="A warning regarding potential fraud has been sent out by the Central Board of Secondary Education (CBSE) to schools and other relevant parties about the need to take caution while sending sensitive information by email."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg='/assets/images/News/ctet result.png'
              news_title="CTET Results Update (July 2024): Results will be released soon by CBSE on ctet.nic.in (India)"
              location="New Delhi"
              news_para="According to CBSE, the results for CTET will be out on ctet.nic.in shortly. Although there is no official date yet, the results are expected to be released by the 10th of August. To check the CTET Results 2024, candidates can visit the official website at ctet.nic.in."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg='/assets/images/News/ugc-net-update.png'
              news_title="UGC NET Update 2024: Admit cards soon to be released (India)"
              location="New Delhi"
              news_para="UGC NET 2024 admit cards will be released by NTA during the second week of August. After completing the registration process, candidates can get their admit cards by providing their application number and birthdate. The admission cards can be viewed at ugcnet.nta.ac.in, which is the official website of UGC NET."
              read_more_link=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default LatestNews
