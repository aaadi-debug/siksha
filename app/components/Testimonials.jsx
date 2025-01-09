import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  // Array of testimonials
  const testimonials = [
    {
      feeback:
        "I finally got admission to one of the best universities in Bangalore (Reva University) and even got a placement. It was only possible with the guidance of the Siksha Helpline.",
      imageUrl: "/assets/images/avtar.png",
      name: "Nandini Vishwakarma",
      about: "Graduated from Reva University (Karnataka)",
    },
    {
      feeback:
        "This is exactly what I was looking for; it was really helpful as I was struggling to find a good college in my locality, and the Siksha Helpline solved all of my queries regarding the admission fees and courses.",
      imageUrl: "/assets/images/avtar.png",
      name: "Kanika Seth",
      about: "Amity University (Noida, Delhi NCR)",
    },
    {
      feeback:
        "I’m from a very small town in Bihar, and I never even thought of studying abroad considering my financial conditions, unless I came across the Siksha Helpline, and with the help of their support, I finally got admission to the University of Melbourne. All thanks to the Siksha Helpline for making my dreams come true.",
      imageUrl: "/assets/images/avtar.png",
      name: "Purav Mishra",
      about: "University of Melbourne (Australia)",
    },
    {
      feeback:
        "The guidance and support of the Siksha Helpline were really helpful, and I'm very pleased with the services they provided.",
      imageUrl: "/assets/images/avtar.png",
      name: "Rakshit Jha",
      about: "Delhi Technological University, DTU",
    },
    {
      feeback:
        "They really did justice to the name “Siksha Helpline” by providing an all-in-one solution for all my Siksha-related queries.",
      imageUrl: "/assets/images/avtar.png",
      name: "Ayesha Kapoor",
      about: "St. Stephen's College",
    },
    {
      feeback:
        "It was very helpful, informative, and reliable. So my overall experience with the Siksha Helpline was great.",
      imageUrl: "/assets/images/avtar.png",
      name: "Keshav Logani",
      about: "Christ University, India",
    },
    {
      feeback:
        "I found the Siksha Helpline to be incredibly user-friendly. Everything was up-to-date and pretty easy to navigate as well.",
      imageUrl: "/assets/images/avtar.png",
      name: "Varun Nath",
      about: "Vivekananda Institute of Professional Studies",
    },
    {
      feeback:
        "Outstanding experience; the well-organized layout made it very easy to understand everything.",
      imageUrl: "/assets/images/avtar.png",
      name: "Roshan Jaiswal",
      about: "Indus Institute of Technology and Management [IITM]",
    },
  ];

  return (
    <div className="testimonials pb-5 pt-16">
      <h2 data-aos="fade-up" className="mb-4 text-black font-semibold text-3xl">
        Student's Feedback
      </h2>
      <div className="testimonials_wrapper">
        <div className="testimonial_body">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  feeback={testimonial.feeback}
                  imageUrl={testimonial.imageUrl}
                  name={testimonial.name}
                  about={testimonial.about}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
