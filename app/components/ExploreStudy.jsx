import React from "react";

// import StateIMG from '../../assets/images/explorestudy/delhi.webp'
import ExploreStudyCard from "./ExploreStudyCard";
import { FaGraduationCap } from "react-icons/fa6";
import DynamicThemeButton from "./DynamicThemeButton";

const ExploreStudy = () => {
  return (
    <section className="explorestudy">
      <div className="explorestudy_wrapper">
        <video autoPlay loop muted playsInline className="">
          <source src="/assets/videos/college1-crop.mp4" type="video/mp4" />
        </video>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 data-aos="fade-up" className="text-3xl font-semibold mb-2">
            Explore Top Study Places with Siksha Helpline
          </h2>
          <p data-aos="fade-up">
            Creating new benchmarks in learning experiences
          </p>
        </div>
        <div className="explorestudy_body">
          <p data-aos="fade-up">Find all Study Place here</p>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 explore_div">
                  <ExploreStudyCard
                    src="/assets/images/explore-places/delhi.png"
                    name="Delhi"
                  />
                  <ExploreStudyCard
                    src="/assets/images/explore-places/bengalore.png"
                    name="Bangalore"
                  />
                </div>
                <div className="col-md-6 explore_div">
                  <ExploreStudyCard
                    src="/assets/images/explore-places/gateway of india.png"
                    name="Mumbai"
                  />
                  <ExploreStudyCard
                    src="/assets/images/explore-places/West-bengal.png"
                    name="West Bengal"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 explore_div">
                  <ExploreStudyCard
                    src="/assets/images/explore-places/chennai.png"
                    name="Chennai"
                  />
                  <ExploreStudyCard
                    src="/assets/images/explore-places/ahemdabad.png"
                    name="Ahmedabad"
                  />
                </div>
                <div className="col-md-6 explore_div">
                  <ExploreStudyCard
                    src="/assets/images/explore-places/kolakata.png"
                    name="Kolkata"
                  />
                  <ExploreStudyCard
                    src="/assets/images/explore-places/golden-temple.png"
                    name="Punjab"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="text-center mt-4 mb-5"
          >
            <DynamicThemeButton href="/login">View More</DynamicThemeButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreStudy;
