"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar2 from "./components/Navbar2";
import HeroSection from "./components/HeroSection";
import SetYourGoal from "./components/SetYourGoal";
import TopCollection from "./components/TopCollection";
import CollegeRecommendations from "./components/CollegeRecommendations";
import ExploreStudy from "./components/ExploreStudy";
import ClassExam from "./components/ClassExam";
import TopExams from "./components/TopExams";
import LatestNews from "./components/LatestNews";
import StudyAbroad from "./components/StudyAbroad";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Top10Colleges from "./components/Top10Colleges";
import ExploreCourses from "./components/ExploreCourses";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function Home() {
  // const pathname = usePathname();

  // useEffect(() => {
  //   console.log("Current path:", pathname); // Check the current path
  // }, [pathname]);

  return (
    <>
      <Head>
        <title>Siksha Helpline</title>
        <meta
          name="description"
          content="Solve all your education-related queries with Siksha and get admission to the top colleges, institutes, and universities in India. Discover everything you need to know about the best courses and scholarship programs."
        />
      </Head>

      <main>
        <HeroSection />
        <SetYourGoal />
        <TopCollection />
        <CollegeRecommendations />
        <Top10Colleges />
        <ExploreStudy />
        <ExploreCourses />
        <ClassExam />
        <TopExams />
        <LatestNews />
        <StudyAbroad />
        <Testimonials />
      </main>
    </>
  );
}
