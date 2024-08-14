import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    return (
        <section className="testimonials pb-5">
            <div className="testimonials_wrapper container pb-5 lg:px-32">
                <h2 data-aos="fade-up" className='mb-4 text-black font-semibold text-3xl'>Student's Feedback</h2>
                <div className="testimonial_body">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="I finally got admission to one of the best universities in Bangalore (Reva University) and even got a placement. It was only possible with the guidance of the Siksha Helpline."
                                testimonial_img_link='/assets/images/avtar.png'
                                name="Nandini Vishwakarma"
                                about="Graduated from Reva University (Karnataka)"
                                // sub_about="Testimonial Sub About 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="This is exactly what I was looking for; it was really helpful as I was struggling to find a good college in my locality, and the Siksha Helpline solved all of my queries regarding the admission fees and courses."
                                testimonial_img_link='/assets/images/avtar.png'
                                name="Kanika Seth"
                                about="Amity University (Noida, Delhi NCR)"
                                // sub_about="Testimonial Sub About 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="I’m from a very small town in Bihar, and I never even thought of studying abroad considering my financial conditions, unless I came across the Siksha Helpline, and with the help of their support, I finally got admission to the University of Melbourne. All thanks to the Siksha Helpline for making my dreams come true."
                                testimonial_img_link='/assets/images/avtar.png'
                                name="Purav Mishra"
                                about="University of Melbourne (Australia)"
                                // sub_about="Testimonial Sub About 3"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="The guidance and support of the Siksha Helpline were really helpful, and I'm very pleased with the services they provided."
                                testimonial_img_link='/assets/images/avtar.png'
                                name="Rakshit Jha"
                                about="Delhi Technological University, DTU "
                                // sub_about="Testimonial Sub About 4"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="They really did justice to the name “Siksha Helpline” by providing an all-in-one solution for all my Siksha-related queries."
                                testimonial_img_link='/assets/images/avtar.png'
                                name="Ayesha Kapoor"
                                about="St. Stephen's College"
                                // sub_about="Testimonial Sub About 5"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="It was very helpful, informative, and reliable. So my overall experience with the Siksha Helpline was great."
                                testimonial_img_link='/assets/images/avtar.png'
                                name="Keshav Logani"
                                about="Christ University, India"
                                // sub_about="Testimonial Sub About 6"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="I found the Siksha Helpline to be incredibly user-friendly. Everything was up-to-date and pretty easy to navigate as well."
                                testimonial_img_link='/assets/images/avtar.png'
                                name="Varun Nath"
                                about="Vivekananda Institute of Professional Studies"
                                // sub_about="Testimonial Sub About 6"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Outstanding experience; the well-organized layout made it very easy to understand everything. "
                                testimonial_img_link='/assets/images/avtar.png'
                                name="Roshan Jaiswal"
                                about="Indus Institute of Technology and Management [IITM]"
                                // sub_about="Testimonial Sub About 6"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
