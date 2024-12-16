'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
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
  
export default function Home() {
  return (
    <>
    <head>
      <title>sikshahelpline</title>
      <meta name="description" content="Solve all your education-related queries with Siksha and get admission to the top colleges, institutes, and universities in India. Discover everything you need to know about the best courses and scholarship programs." />
      </head>
    
    <main>
      {/* <Navbar /> */}
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
      <Footer />
    </main>
    </>
  );
}
