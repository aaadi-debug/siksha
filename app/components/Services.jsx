import React from "react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Admission Guidance",
      description: "Personalized counseling for informed decisions",
      themeIcon: "/assets/icons/guidance-theme.png",
      whiteIcon: "/assets/icons/guidance-white.png",
    },
    {
      id: 2,
      title: "Educational Loan Assistance",
      description: "Funding your dreams made easier",
      themeIcon: "/assets/icons/loan-theme.png",
      whiteIcon: "/assets/icons/loan-white.png",
    },
    {
      id: 3,
      title: "Internship Opportunities",
      description: "Gain hands-on experience",
      themeIcon: "/assets/icons/internship-theme.png",
      whiteIcon: "/assets/icons/internship-white.png",
    },
    {
      id: 4,
      title: "Placement Assistance",
      description: "Start your career with top companies",
      themeIcon: "/assets/icons/placement-theme.png",
      whiteIcon: "/assets/icons/placement-white.png",
    },
    {
      id: 5,
      title: "Rewards on Reviews",
      description: "Share your experience and get rewarded",
      themeIcon: "/assets/icons/review-theme.png",
      whiteIcon: "/assets/icons/review-white.png",
    },
    {
      id: 6,
      title: "Personal Counseling",
      description: "Tailored guidance for every student",
      themeIcon: "/assets/icons/counselling-theme.png",
      whiteIcon: "/assets/icons/counselling-white.png",
    },
    {
      id: 7,
      title: "College Selection",
      description: "Expert recommendations to match your goals",
      themeIcon: "/assets/icons/college-selection-theme.png",
      whiteIcon: "/assets/icons/college-selection-white.png",
    },
    {
      id: 8,
      title: "Form Filling Assistance",
      description: "Simplifying the application process",
      themeIcon: "/assets/icons/form-assistance-theme.png",
      whiteIcon: "/assets/icons/form-assistance-white.png",
    },
  ];

  return (
    <section className="lg:px-10 px-6 py-10">
      <div className="mt-10">
        <div className="text-4xl max-sm:text-3xl text-black font-semibold text-center">
          Our Services
        </div>
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 mt-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-lg p-4 py-5 flex flex-col justify-center items-center text-center animatedBorderBox shadow-sm group"
            >
              <div className="rounded-full border h-20 w-20 bg-second/20 flex justify-center items-center animatedBorderBoxImg">
                <div className="flex justify-center items-center p-2">
                  <img
                    src={service.themeIcon}
                    alt={service.title}
                    className="w-10 h-10 group-hover:hidden"
                  />
                  <img
                    src={service.whiteIcon}
                    alt={service.title}
                    className="w-10 h-10 hidden group-hover:block"
                  />
                </div>
              </div>
              <h3 className="text-black font-semibold text-2xl mt-3">
                {service.title}
              </h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
