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
  
export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <SetYourGoal />
      <TopCollection />
      <CollegeRecommendations />
      <Top10Colleges />
      <ExploreStudy />
      <ClassExam />
      <TopExams />
      <LatestNews />
      <StudyAbroad />
      <Testimonials />
      <Footer />
    </main>
  );
}
