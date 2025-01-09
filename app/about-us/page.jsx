"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import AOS from "aos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { LiaUniversitySolid } from "react-icons/lia";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current path:", pathname); // Check the current path
  }, [pathname]);
  return (
    <>
      <div className="about_us">
        <div className="about_us_wrapper bg_reddish">
          <div className="hero_about_us">
            <h2 className="text-3xl font-semibold">About Us</h2>
          </div>

          <div className="mission_vision py-5">
            <div className="m_s_div vision">
              <figure>
                <img src="/assets/images/vision.svg" alt="" />
              </figure>
              <h3 className="text-3xl font-semibold mt-3">Vision</h3>
              <p>
                We envision a world where all parents, teachers, and students
                have access to the tools and support they need to reach their
                greatest potential. We will make it happen by being the premier
                provider of educational support and guidance. We see a day where
                obstacles to education are removed, lifelong learning is valued,
                and everyone has the capacity to succeed academically and
                personally.
              </p>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique illum soluta enim dolore nostrum at, alias quibusdam minus quisquam molestias libero a quasi blanditiis deleniti! Atque explicabo aliquid, mollitia blanditiis provident amet, rerum quae perferendis voluptates quasi vero? Corporis.</p> */}
            </div>
            <div className="siksha_helpline text-center">
              <h2>Welcome to Siksha Helpline</h2>
              <p>
                Founded in 2019, Siksha Helpline is one of the most reputable
                educational consulting companies in India. Our goal is to
                provide clear, individualized guidance on the path to higher
                education. The Siksha Helpline offers professional advice and
                tools to assist you in understanding the complexity of the
                educational system, whether you're looking for aid with exam
                preparation, career counseling, school admissions, or academic
                planning. Our qualified experts give you individualized support,
                address your inquiries, and offer insightful advice to help you
                reach your learning objectives and make wise decisions. For
                everything related to education, the Siksha Helpline is your
                go-to source because of its emphasis on empowerment, clarity,
                and assistance.
              </p>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos totam et in odit ipsum est tempora sint error temporibus blanditiis, reiciendis vel rerum distinctio aut necessitatibus enim numquam iure, omnis dolorum. Placeat, rem ullam doloremque cumque, error, alias quaerat sint deserunt cum voluptas incidunt amet veniam quasi accusantium sit?</p> */}
            </div>
            <div className="m_s_div mission">
              <figure>
                <img src="/assets/images/mission.svg" alt="" />
              </figure>
              <h3 className="text-3xl font-semibold mt-3">Mission</h3>
              <p>
                Our mission is to empower students by providing them with a
                convenient, trustworthy, and comprehensive source of educational
                support through our helpline. Our dedication is to establish a
                friendly and engaging learning environment, offer informed
                guidance, remove educational barriers, and promote lifelong
                learning. Our goal is to create pathways for academic success
                and enhance learning outcomes by offering compassionate and
                customized help.
              </p>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique illum soluta enim dolore nostrum at, alias quibusdam minus quisquam molestias libero a quasi blanditiis deleniti! Atque explicabo aliquid, mollitia blanditiis provident amet, rerum quae perferendis voluptates quasi vero? Corporis.</p> */}
            </div>
          </div>
        </div>

        {/* <div className="bg_reddish">
                    <div className="container about_for">
                        <div className="aobut_for_wrapper gap-4">
                            <div data-aos="zoom-in-right" className="about_for_card bg-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 data-aos="fade-up">Admission Counseling</h4>
                                <h4 data-aos="fade-up">Siksha Helpline for Students</h4>
                                <img data-aos="fade-up" className='mt-4' src={StudentIMG} alt="student-image" />
                                <p data-aos="fade-up" className='mt-3'>Clear, step-by-step guidance through the admission maze.</p>
                            </div>
                            <div className="about_for_card bg-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 data-aos="fade-up">Career Counseling</h4>
                                <h4 data-aos="fade-up">Siksha Helpline for Intitutions</h4>
                                <img data-aos="fade-up" className='mt-4' src={CollegeIMG} alt="institution-image" />
                                <p data-aos="fade-up" className='mt-3'> Align your passions with the right educational path. Placement Assistance: Connect with opportunities that match your qualifications.</p>
                            </div>
                            <div data-aos="zoom-in-left" className="about_for_card bg-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 data-aos="fade-up">Internship Assistance</h4>
                                <h4 data-aos="fade-up">Siksha Helpline for Parents</h4>
                                <img data-aos="fade-up" className='mt-4' src={ParentsIMG} alt="parent-image" />
                                <p data-aos="fade-up" className='mt-3'>Gain practical experience to boost your academic journey. Loan Assistance: Navigate financial options to fund your education.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
        <div className="about_long_way py-4 my-5">
          <h3 data-aos="fade-up" className="text-center text-3xl font-semibold">
            Our Milestones
          </h3>
          <div className="container about_long_way_wrapper mt-4">
            <div className="long_way_card">
              <LiaUniversitySolid size={60} />
              <div className="no_of_colleges  mt-3">25000+</div>
              <div className="title">COLLEGES</div>
            </div>
            <div className="long_way_card">
              <FaBookOpenReader size={60} />
              <div className="no_of_colleges  mt-3">1000+</div>
              <div className="title">EXAMS</div>
            </div>
            <div className="long_way_card">
              <IoIosPeople size={60} />
              <div className="no_of_colleges  mt-3">happy visit</div>
              {/* <div className="title">MONTHLY VISITS</div> */}
            </div>
            <div className="long_way_card">
              <GiCoffeeCup size={60} />
              <div className="no_of_colleges  mt-3">Let's have COFFEE</div>
              <div className="title">and discuss</div>
            </div>
          </div>

          <div className="team_img">
            <h3 data-aos="fade-up" className="text-3xl font-semibold mb-2">
              Why Choose Siksha Helpline?
            </h3>
            <p data-aos="fade-up">
              Thousands of students trust Siksha Helpline for our commitment to
              clarity and personalized service. Our success stories are
              testament to our dedication.
            </p>
          </div>

          <div className="bg_reddish about_advertise py-5">
            <div className="container lg:px-32">
              <h3 data-aos="fade-up" className="text-3xl font-semibold">
                Contact With Us
              </h3>
              <p data-aos="fade-up" className="my-4">
                "Ready to embark on your educational journey? Contact the Siksha
                Helpline today for personalized admission guidance. Enhance the
                webpage with visuals that highlight the journey from admission
                confusion to clarity and success."
              </p>

              <a data-aos="fade-up" href="/contact-us">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
