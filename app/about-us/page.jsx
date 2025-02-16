"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import AOS from "aos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { LiaUniversitySolid } from "react-icons/lia";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import { FaPlay } from "react-icons/fa6";
import DynamicThemeButton from "../components/DynamicThemeButton";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  const [triggerAnimation, setTriggerAnimation] = useState(false);

  // Trigger animation when section comes into view
  React.useEffect(() => {
    if (inView) {
      setTriggerAnimation(false); // Reset animation
      setTimeout(() => setTriggerAnimation(true), 50); // Trigger animation with a slight delay
    }
  }, [inView]);

  useEffect(() => {
    AOS.init();
  }, []);
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current path:", pathname); // Check the current path
  }, [pathname]);
  
  return (
    <>
      <div className="pt-20 max-sm:pt-16">
        <div
          className="border-red-500 bg-cover bg-center bg-no-repeat developedByAdityaRajGupta  lg:px-10 px-6 py-10"
          style={{
            backgroundImage: `url('https://demos.codexcoder.com/labartisan/html/edukon/assets/images/pageheader/bg/01.jpg')`,
          }}
        >
          <Breadcrumbs2
            breadcrumbs={[{ title: "About us", link: "" }]}
            linkColor="text-tertiary"
            activeColor="text-gray-500"
          />
          {/* <!-- Content inside your hero section --> */}
          <h2 className="text-4xl font-bold pt-10 pb-16 text-center">
            About Us
          </h2>
        </div>
      </div>

      <div className="2xl:px-64 xl:px-48 lg:px-20 px-6 py-20 bg-prim-light">
        <div className="grid gap-4 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1">
          <div className="relative 2xl:h-[600px] xl:h-[600px] lg:h-[600px]">
            <div className="relative 2xl:w-[70%] xl:w-[70%] lg:w-[50%] shadow">
              <img
                loading="lazy"
                src="/assets/images/about/about-person-1.jpg"
                alt="About Us Student 1"
                className="w-full h-full border-8  border-white"
              />
              <div className="absolute bottom-0 left-0 border-8  border-white bg-prim text-white w-40 flex flex-col justify-center items-center text-center p-3">
                <div className="text-5xl font-bold">30+</div>
                <p className="text-lg font-medium">Years Of Experiences</p>
              </div>
            </div>
            <img
              loading="lazy"
              src="/assets/images/about/about-person-2.jpg"
              alt="About Us Student 1"
              className="absolute bottom-0 2xl:right-0 xl:right-0 lg:right-56 right-0 border-8  border-white shadow max-sm:hidden"
            />
          </div>
          <div className="">
            <div className="text-prim font-medium text-2xl uppercase">
              About Siksha Helpline
            </div>
            <p className="pt-3">
              Founded in 2019, Siksha Helpline is one of the most reputable
              educational consulting companies in India. Our goal is to provide
              clear, individualized guidance on the path to higher education.
              The Siksha Helpline offers professional advice and tools to assist
              you in understanding the complexity of the educational system,
              whether you're looking for aid with exam preparation, career
              counseling, school admissions, or academic planning. Our qualified
              experts give you individualized support, address your inquiries,
              and offer insightful advice to help you reach your learning
              objectives and make wise decisions. For everything related to
              education, the Siksha Helpline is your go-to source because of its
              emphasis on empowerment, clarity, and assistance.
            </p>
            <div className="mt-4">
              <div className="flex gap-2">
                <div className="w-20">
                  <img
                    src="/assets/images/about/01.jpg"
                    alt="skilled instructors"
                    className="rounded-full w-full"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold text-tertiary">
                    Skilled Instructors
                  </div>
                  <p className="text-textClr text-md">
                    Distinctively provide acces mutfuncto users whereas
                    communicate leveraged services
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="w-20 ">
                  <img
                    src="/assets/images/about/02.jpg"
                    alt="Get Certificate"
                    className="rounded-full w-full"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold text-tertiary">
                    Get Certificate
                  </div>
                  <p className="text-textClr text-md">
                    Distinctively provide acces mutfuncto users whereas
                    communicate leveraged services
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="w-20 ">
                  <img
                    src="/assets/images/about/03.jpg"
                    alt="Online Classes"
                    className="rounded-full w-full"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold text-tertiary">
                    Online Classes
                  </div>
                  <p className="text-textClr text-md">
                    Distinctively provide acces mutfuncto users whereas
                    communicate leveraged services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="2xl:px-64 xl:px-48 lg:px-20 px-6 py-20 developedByAdityaRajGupta"
        style={{ backgroundImage: "url(/assets/images/about/dotted-bg.png)" }}
      >
        <div className="flex gap-4 justify-center items-center">
          <div className="border-2 border-second w-24"></div>
          <h2 className="text-3xl font-semibold text-black text-center ">
            <span className="text-second">Mission</span> &{" "}
            <span className="text-second">Vision</span>
          </h2>
          <div className="border-2 border-second w-24"></div>
        </div>

        <div className="grid gap-4 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 mt-5">
          <div className="relative flex justify-center items-center">
            <img
              src="/assets/images/about/mv-video.jpg"
              alt="About Us video image"
              className="border-8 border-white shadow rounded"
            />
            <div className="absolute top-[40%] left-[40%] max-sm:top-[35%] max-sm:left-[35%]">
              <a
                href="https://www.youtube.com/@Siksha_Helpline"
                target="_blank"
                className="video-button bg-white rounded-full"
                data-rel="lightcase"
              >
                <FaPlay
                  className="text-prim hover:text-second transition duration-300"
                  size={36}
                />
              </a>
            </div>
          </div>

          <div>
            <div className="rounded shadow-md bg-white p-4">
              <div className="text-2xl font-semibold text-tertiary">
                Mission
              </div>
              <p className="text-textClr">
                Our mission is to empower students by providing them with a
                convenient, trustworthy, and comprehensive source of educational
                support through our helpline. Our dedication is to establish a
                friendly and engaging learning environment, offer informed
                guidance, remove educational barriers, and promote lifelong
                learning. Our goal is to create pathways for academic success
                and enhance learning outcomes by offering compassionate and
                customized help.
              </p>
            </div>
            <div className="rounded shadow-md bg-white p-4 mt-4">
              <div className="text-2xl font-semibold text-tertiary">Vision</div>
              <p className="text-textClr">
                We envision a world where all parents, teachers, and students
                have access to the tools and support they need to reach their
                greatest potential. We will make it happen by being the premier
                provider of educational support and guidance. We see a day where
                obstacles to education are removed, lifelong learning is valued,
                and everyone has the capacity to succeed academically and
                personally.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="2xl:px-64 xl:px-48 lg:px-20 px-6 py-32"
        ref={ref}
        style={{
          backgroundImage: "url(/assets/images/about/about-blurred.png)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="uppercase text-prim text-xl text-center font-medium pb-2">
          START TO SUCCESS
        </div>
        <div className="text-4xl max-sm:text-3xl text-black font-semibold text-center">
          Achieve Your Goals With Siksha Helpline
        </div>
        <div className="grid gap-4 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 mt-4">
          {[
            {
              value: 25000,
              label: "Colleges",
              icon: <LiaUniversitySolid size={48} />,
            },
            {
              value: 1000,
              label: "Exams",
              icon: <FaBookOpenReader size={48} />,
            },
            {
              value: 15000,
              label: "Happy visits",
              icon: <IoIosPeople size={48} />,
            },
            {
              value: 25000,
              label: "Coffee consumed",
              icon: <GiCoffeeCup size={48} />,
            },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex flex-col justify-center items-center py-3 px-3">
                <div>{item.icon}</div>
                <div className="text-4xl font-bold text-tertiary mt-4">
                  {triggerAnimation ? (
                    <>
                      <CountUp end={item.value} duration={2} />+
                    </>
                  ) : (
                    0
                  )}
                </div>
                <p className="text-textClr text-lg pt-2">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="2xl:px-64 xl:px-48 lg:px-20 px-6 py-20 developedByAdityaRajGupta">
        <div className="flex gap-4 justify-center items-center">
          <div className="border-2 border-second w-24"></div>
          <h2 className="text-3xl font-semibold text-black text-center ">
            Why Choose <span className="text-second">Siksha Helpline?</span>
          </h2>
          <div className="border-2 border-second w-24"></div>
        </div>
        <p className="text-textClr text-center pt-2">
          Thousands of students trust Siksha Helpline for our commitment to
          clarity and personalized service. Our success stories are testament to
          our dedication.
        </p>
        <p className="text-textClr text-center pt-2">
          "Ready to embark on your educational journey? Contact the Siksha
          Helpline today for personalized admission guidance. Enhance the
          webpage with visuals that highlight the journey from admission
          confusion to clarity and success."
        </p>
        <div className="flex justify-center items-center pt-4">
          <DynamicThemeButton href="/contact-us">Contact Us</DynamicThemeButton>
        </div>
      </div>
    </>
  );
};

export default About;
