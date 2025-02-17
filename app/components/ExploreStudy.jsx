import React from "react";
import DynamicThemeButton from "./DynamicThemeButton";

const ExploreStudy = () => {
  // Define the data array
  const studyPlaces = [
    { src: "/assets/images/explore-places/delhi.png", name: "Delhi", link: "courses/delhi" },
    { src: "/assets/images/explore-places/bengalore.png", name: "Bangalore", link: "courses/bangalore" },
    { src: "/assets/images/explore-places/gateway of india.png", name: "Mumbai", link: "courses/mumbai" },
    { src: "/assets/images/explore-places/West-bengal.png", name: "West Bengal", link: "courses/west-bengal" },
    { src: "/assets/images/explore-places/chennai.png", name: "Chennai", link: "courses/chennai" },
    { src: "/assets/images/explore-places/ahemdabad.png", name: "Ahmedabad", link: "courses/ahmedabad" },
    { src: "/assets/images/explore-places/kolakata.png", name: "Kolkata", link: "courses/kolkata" },
    { src: "/assets/images/explore-places/golden-temple.png", name: "Punjab", link: "courses/punjab" },
  ];

  return (
    <section className="relative w-full 2xl:h-[75vh] xl:h-[78vh] lg:h-[80vh] md:h-[100vh] h-[100vh] max-sm:h-[135vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/videos/college1-crop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 w-full rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Explore Top Study Places with Siksha Helpline
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Learn more about our top courses and get started today.
        </p>
        <div className="bg-white p-4 2xl:w-[80%] xl:w-[90%] lg:w-[90%] w-[80%] max-sm:w-[100%] rounded-lg">
          <div className="text-2xl font-semibold text-tertiary">
            Find all Study Places here
          </div>
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 mb-6 mt-10 2xl:w-[80%] xl:w-[90%] lg:w-[90%] w-[100%] h-[auto] mx-auto">
            {studyPlaces.map((place, index) => (
              <a
                href={place.link}
                className="border-2 border-prim p-2 rounded flex 2xl:flex-row xl:flex-row lg:flex-col max-sm:flex-col gap-2 justify-start items-center hover:bg-prim transition duration-500 group"
                key={index}
              >
                <img src={place.src} alt={place.name} className="rounded" />
                <div className="text-tertiary 2xl:text-lg xl:text-lg lg:text-base group-hover:text-white">
                  {place.name}
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-4 mb-5">
            <DynamicThemeButton href="/courses/india-colleges">View More</DynamicThemeButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreStudy;
