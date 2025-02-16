import { React, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import { ChevronRight } from "lucide-react";

const exams = [
  {
    imgSrc: "/assets/images/TOP exams n signs/neet-exam.png",
    examLogo: "/assets/images/TOP exams n signs/neet.png",
    organization: "Neet",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/bitsat-exam.png",
    examLogo: "/assets/images/TOP exams n signs/cat-symbol.png",
    organization: "Cat",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/jee-adv.png",
    examLogo: "/assets/images/TOP exams n signs/jee-advance-symbol.png",
    organization: "JEE Advance",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/jee mains.png",
    examLogo: "/assets/images/TOP exams n signs/jee-mains-logo.png",
    organization: "JEE Main",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/nmat-exam.png",
    examLogo: "/assets/images/TOP exams n signs/nmat-logo.png",
    organization: "NMAT",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/mat-exam.png",
    examLogo: "/assets/images/TOP exams n signs/mat-logo.png",
    organization: "MAT",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/gate-exam.png",
    examLogo: "/assets/images/TOP exams n signs/gate-logo.png",
    organization: "Gate",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/xat-exam.png",
    examLogo: "/assets/images/TOP exams n signs/xat-symbol.png",
    organization: "XAT",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/bitsat-exam.png",
    examLogo: "/assets/images/TOP exams n signs/bitsat-exam-logo.png",
    organization: "BISAT",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/iitjam.png",
    examLogo: "/assets/images/TOP exams n signs/iitjam-logo.png",
    organization: "IIT JAM",
    link: "#",
  },
  {
    imgSrc: "/assets/images/TOP exams n signs/cuet-exam.png",
    examLogo: "/assets/images/TOP exams n signs/cuet-symbol.png",
    organization: "CUET",
    link: "#",
  },
];

const TopExams = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <section className=" pb-5 lg:px-20 py-20 px-6 bg-prim-light">
      <div className="">
        <h2 className="mb-4 text-black text-3xl font-semibold">Top Exams</h2>

        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: { slidesPerView: 1.4 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 2.8 },
            1024: { slidesPerView: 3.4 },
            1300: { slidesPerView: 4.2 },
            1500: { slidesPerView: 5.4 },
          }}
          modules={[Autoplay, Navigation, A11y]}
          className="swiper-wrapper mx-auto mb-4"
        >
          {exams.map((exam, index) => (
            <SwiperSlide key={index}>
              <a
                href={exam.link}
                className="bg-white rounded-lg relative group"
              >
                <div className="h-50 relative overflow-hidden rounded-t-lg">
                  <img
                    src={exam.imgSrc}
                    alt={exam.organization}
                    className="rounded-t-lg object-cover h-full w-full scale group-hover:scale-125 transition duration-700"
                  />
                  <div className="absolute bottom-0 left-0 bg-second px-2 py-1 text-xs text-white">
                    {exam.organization}
                  </div>
                </div>
                <div className="p-3 text-tertiary bg-white">
                  <div className="flex gap-4 ">
                    <div className="w-2/3 text-sm">Participating Colleges</div>
                    <div className="w-1/3 text-sm">
                      {exam.participating_colleges || "N/A"}
                    </div>
                  </div>
                  <div className="flex gap-4  mt-2">
                    <div className="w-2/3 text-sm">Exam Date</div>
                    <div className="w-1/3 text-sm">9887</div>
                  </div>
                  <div className="flex gap-4  mt-2">
                    <div className="w-2/3 text-sm">Exam Level</div>
                    <div className="w-1/3 text-sm">
                      {exam.exam_level || "N/A"}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2 mt-3 text-sm border-t group">
                    <div className="group-hover:text-prim transition duration-300">
                      Exam Overview
                    </div>
                    <span className="text-black hover:text-primary">
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-white rounded-full w-12 h-12 shadow-md border-2 border-white">
                  <img
                    src={exam.examLogo}
                    alt={exam.organization}
                    className="rounded-full w-full h-full"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopExams;
