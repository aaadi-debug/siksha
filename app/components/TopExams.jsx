import { React, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import TopExamsCard from './TopExamsCard';
import AOS from "aos";
import "aos/dist/aos.css";

const TopExams = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <section className="topexam pb-5">
            <div className="topexam_wrapper container lg:px-32">
                <h2 className='mb-4 text-black text-3xl font-semibold'>Top Exams</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.5}
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    // navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        500: {
                            slidesPerView: 2.4,
                        },
                        780: {
                            slidesPerView: 3.8,
                        },
                        1300: {
                            slidesPerView: 3.4,
                        },
                    }}
                    // navigation={true}
                    //  modules={[Autoplay, Pagination, Navigation]}
                    modules={[Autoplay, Navigation, A11y]}
                    className="swiper-wrapper mx-auto mb-4"
                >
                    
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/neet-exam.png'
                            examLogo='/assets/images/TOP exams n signs/neet.png'     
                            organization="Neet"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/bitsat-exam.png'
                            examLogo='/assets/images/TOP exams n signs/cat-symbol.png'
                            organization="Cat"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/jee-adv.png'
                            examLogo='/assets/images/TOP exams n signs/jee-advance-symbol.png'    
                            organization="JEE Advance"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/jee mains.png'
                            examLogo='/assets/images/TOP exams n signs/jee-mains-logo.png'    
                            organization="JEE Main"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/nmat-exam.png'
                            examLogo='/assets/images/TOP exams n signs/nmat-logo.png'    
                            organization="NMAT"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/mat-exam.png'
                            examLogo='/assets/images/TOP exams n signs/mat-logo.png'    
                            organization="MAT"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/gate-exam.png'
                            examLogo='/assets/images/TOP exams n signs/gate-logo.png'    
                            organization="Gate"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/xat-exam.png'
                            examLogo='/assets/images/TOP exams n signs/xat-symbol.png'    
                            organization="XAT"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/bitsat-exam.png'
                            examLogo='/assets/images/TOP exams n signs/bitsat-exam-logo.png'    
                            organization="BISAT"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/iitjam.png'
                            examLogo='/assets/images/TOP exams n signs/iitjam-logo.png'   
                            organization="IIT JAM"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/bitsat-exam.png'
                            examLogo='/assets/images/TOP exams n signs/cat-symbol.png'    
                            organization="Cat"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc='/assets/images/TOP exams n signs/cuet-exam.png'
                            examLogo='/assets/images/TOP exams n signs/cuet-symbol.png'    
                            organization="CUET"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default TopExams
