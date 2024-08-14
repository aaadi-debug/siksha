import { React, useEffect } from "react";

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import TopCollectionCard from './TopCollectionCard';




const TopCollection = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const data1 = [
        {
            id: 1,
            college_name: "University of Allahabad",
            noofcoolleges: "323",
            image: '/assets/images/uni/alahabd-uni.png'
        },
        {
            id: 2,
            college_name: "Birla Institute of Technology and Science (BITS)",
            noofcoolleges: "323",
            image: '/assets/images/uni/bits.png'
        },
        {
            id: 3,
            college_name: "Jawaharlal Nehru University (JNU), Delhi",
            noofcoolleges: "323",
            image: '/assets/images/uni/jnu.png'
        },
        {
            id: 4,
            college_name: "Manipal Academy of Higher Education",
            noofcoolleges: "323",
            image: '/assets/images/uni/Untitled design (45).png'
        },
        {
            id: 5,
            college_name: "Banaras Hindu University (BHU)",
            noofcoolleges: "323",
            image: '/assets/images/uni/bhu.png'
        },
        {
            id: 6,
            college_name: "Vellore Institute of Technology (VIT)",
            noofcoolleges: "323",
            image: '/assets/images/uni/vit.png'
        },
        {
            id: 7,
            college_name: "Tata Institute of Fundamental Research (TIFR)",
            noofcoolleges: "323",
            image: '/assets/images/uni/tifr.png'
        },
        {
            id: 8,
            college_name: "Amity University, Noida",
            noofcoolleges: "323",
            image: '/assets/images/uni/amity.png'
        },
        {
            id: 9,
            college_name: "Jadavpur University, Kolkata",
            noofcoolleges: "323",
            image: '/assets/images/uni/jdvpr.png'
        },
        {
            id: 10,
            college_name: "SRM Institute of Science and Technology, Chennai",
            noofcoolleges: "323",
            image: '/assets/images/uni/srm.png'
        },
        {
            id: 11,
            college_name: "Anna University, Chennai",
            noofcoolleges: "323",
            image: '/assets/images/uni/au.png'
        },
        {
            id: 12,
            college_name: "Symbiosis International University, Pune",
            noofcoolleges: "323",
            image: '/assets/images/uni/symbosis.png'
        },
        {
            id: 13,
            college_name: "University of Mumbai",
            noofcoolleges: "323",
            image: '/assets/images/uni/mu.png'
        },
        {
            id: 14,
            college_name: "OP Jindal Global University, Sonipat",
            noofcoolleges: "323",
            image: '/assets/images/uni/op.png'
        },
        {
            id: 15,
            college_name: "Panjab University, Chandigarh",
            noofcoolleges: "323",
            image: '/assets/images/uni/pu.png'
        },
    ]

    const data2 = [
        {
            id: 16,
            college_name: "Kalinga Institute of Industrial Technology (KIIT)",
            noofcoolleges: "323",
            image: '/assets/images/uni/kiit.png'
        },
        {
            id: 17,
            college_name: "University of Calcutta",
            noofcoolleges: "323",
            image: '/assets/images/uni/cu.png'
        },
        {
            id: 18,
            college_name: "Ashoka University, Sonipat",
            noofcoolleges: "323",
            image: '/assets/images/uni/ask-u.png'
        },
        {
            id: 19,
            college_name: "Savitribai Phule Pune University",
            noofcoolleges: "323",
            image: '/assets/images/uni/pukhhrr-.png'
        },
        {
            id: 20,
            college_name: "Shiv Nadar University, Greater Noida",
            noofcoolleges: "323",
            image: '/assets/images/uni/shiv-nadar.png'
        },
        {
            id: 21,
            college_name: "University of Hyderabad",
            noofcoolleges: "323",
            image: '/assets/images/uni/uhyd.png'
        },
        {
            id: 22,
            college_name: "Christ University, Bangalore",
            noofcoolleges: "323",
            image: '/assets/images/uni/christ-u.png'
        },
        {
            id: 23,
            college_name: "Aligarh Muslim University",
            noofcoolleges: "323",
            image: '/assets/images/uni/muslim-uni.png'
        },
        {
            id: 24,
            college_name: "Thapar Institute of Engineering and Technology",
            noofcoolleges: "323",
            image: '/assets/images/uni/thapr.png'
        },
        {
            id: 25,
            college_name: "Jamia Millia Islamia, Delhi",
            noofcoolleges: "323",
            image: '/assets/images/uni/jamia.png'
        },
        {
            id: 26,
            college_name: "Lovely Professional University, Jalandhar",
            noofcoolleges: "323",
            image: '/assets/images/uni/lpu.png'
        },
        {
            id: 27,
            college_name: "Institute of Chemical Technology, Mumbai",
            noofcoolleges: "323",
            image: '/assets/images/uni/ict.png'
        },
        {
            id: 28,
            college_name: "NMIMS University, Mumbai",
            noofcoolleges: "323",
            image: '/assets/images/uni/nmmiss.png'
        },
        {
            id: 29,
            college_name: "University of Delhi",
            noofcoolleges: "323",
            image: '/assets/images/uni/du.png'
        },
        {
            id: 30,
            college_name: "SASTRA University, Thanjavur",
            noofcoolleges: "323",
            image: '/assets/images/uni/sasta.png'
        },
    ]

    return (
        <section className="topcollection pb-5">
            <div className="topcollection_wrapper topcollection_outanimate container lg:px-28">
                <h2 data-aos="fade-up" className='mb-4 text-3xl text-black font-semibold'>Top Collection</h2>
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
                            slidesPerView: 4.6,
                        },
                    }}
                    // navigation={true}
                    //  modules={[Autoplay, Pagination, Navigation]}
                    modules={[Autoplay, Navigation, A11y]}
                    className="swiper-wrapper mx-auto mb-4"
                >
                    {data1.map((value, index) => (
                        <SwiperSlide key={index}>
                            <TopCollectionCard
                                college_name={value.college_name}
                                noofcoolleges={value.noofcoolleges}
                                image={value.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

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
                            slidesPerView: 4.6,
                        },

                    }}
                    // navigation={true}
                    //  modules={[Autoplay, Pagination, Navigation]}
                    modules={[Autoplay, Navigation, A11y]}
                    className="swiper-wrapper mx-auto mb-4"
                >
                    {data2.map((value, index) => (
                        <SwiperSlide key={index}>
                            <TopCollectionCard
                                college_name={value.college_name}
                                noofcoolleges={value.noofcoolleges}
                                image={value.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default TopCollection
