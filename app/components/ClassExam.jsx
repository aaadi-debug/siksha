import { React } from "react";
import { IoIosArrowForward } from "react-icons/io";
<<<<<<< HEAD
=======
import { GoArrowRight } from "react-icons/go";
>>>>>>> second-account/main

const ClassExam = () => {
  const cbseClass10Data = [
    {
      title: "CBSE Class 10th",
      items: [
<<<<<<< HEAD
        { name: "Class 10th", url: "https://www.cbse.gov.in/cbsenew/documents/Class_X_datesheet_2024.pdf" },
        { name: "Class 10th Result 2023", url: "https://resultsarchives.nic.in/cbse/2023/ScoreCard10th/10M" },
        { name: "Class 10th Result 2022", url: "https://resultsarchives.nic.in/cbse/2022/ScoreCard10th/M" },
        { name: "Class 10 Previous Year Papers", url: "https://www.cbse.gov.in/cbsenew/question-paper.html" },
        { name: "Class 10th Syllabus", url: "https://cbseacademic.nic.in/curriculum_2025.html" },
        { name: "Class 10th Admit Card", url: "https://cbseit.in/cbse/web/regn/pvtadmcard.aspx" },
=======
        "CBSE Class 10th",
        "CBSE Class 10th Result",
        "CBSE Class 10 Previous Year Papers",
        "CBSE Class 10th Syllabus",
        "CBSE Class 10th Exam Dates",
        "CBSE Class 10th Admit Card",
        "NCERT Solutions Class 10th Maths",
        "NCERT Solutions Class 10th Science",
>>>>>>> second-account/main
      ],
    },
  ];

  const cbseClass12Data = [
    {
      title: "CBSE Class 12th",
      items: [
<<<<<<< HEAD
        { name: "Class 12th", url: "/cbse-class-12th" },
        { name: "Class 10th Result 2023", url: "https://resultsarchives.nic.in/cbse/2023/ScoreCard12th/12thMain" },
        { name: "Class 10th Result 2022", url: "https://resultsarchives.nic.in/cbse/2022/ScoreCard12th/LXII" },
        { name: "Class 12 Previous Year Papers", url: "https://www.cbse.gov.in/cbsenew/question-paper.html" },
        { name: "Class 10th Syllabus", url: "https://cbseacademic.nic.in/curriculum_2025.html" },
        { name: "Class 10th Admit Card", url: "https://cbseit.in/cbse/web/regn/pvtadmcard.aspx" },
=======
        "CBSE Class 12th",
        "CBSE Class 12th Results",
        "CBSE Class 12th Previous Year Papers",
        "CBSE Class 12th Syllabus",
        "CBSE Class 12th Admit Card",
        "NCERT Solutions Class 12th Physics",
        "NCERT Solutions Class 12th Chemistry",
        "NCERT Solutions Class 12th Biology",
>>>>>>> second-account/main
      ],
    },
  ];

<<<<<<< HEAD
  const renderItems = (items) => {
    return items.map((item, index) => (
      <a 
        href={item.url} 
        target="_blank"
        className="mt-2 flex gap-2 items-center border-2 border-tertiary text-tertiary rounded-full hover:bg-tertiary hover:text-white hover:gap-6 transition duration-300" 
        key={index}
      >
        <span className="bg-tertiary rounded-full text-white p-2">
          <IoIosArrowForward size={16} />
        </span>
        <p>{item.name}</p>
=======
  //   <IoIosArrowForward />
  {
    /* <GoArrowRight /> */
  }

  const renderItems = (items) => {
    return items.map((item, index) => (
      <a href="#" className="mt-2 flex gap-2 items-center border-2 border-tertiary text-tertiary rounded-full hover:bg-tertiary hover:text-white  hover:gap-6 transition duration-300" key={index}>
        <span className="bg-tertiary rounded-full text-white p-2 "><IoIosArrowForward size={16} /></span>
        <p className="">{item}</p>
>>>>>>> second-account/main
      </a>
    ));
  };

  return (
<<<<<<< HEAD
    <section className="pb-5 lg:px-20 py-20 px-6">
      <div>
        <h2 data-aos="fade-up" className="mb-2 text-3xl text-black font-semibold">
          CBSE Class Board Exam
        </h2>
        <div className="grid gap-6 grid-cols-2 max-sm:grid-cols-1">
          <div className=" border shadow-md rounded-lg overflow-hidden p-4 relative">
            <h6 className="font-medium mb-2">CBSE Class 10th Board Exam</h6>
            <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
              {cbseClass10Data.map((data, index) => (
                <div key={index}>{renderItems(data.items)}</div>
              ))}
            </div>
            <div className="absolute -right-40 top-0 h-full w-[50%] text-prim-light rounded-full bg-prim-light flex justify-center items-center">
              CBSE CLASS 10TH
            </div>
          </div>

          <div className=" border shadow-md rounded-lg overflow-hidden p-4 relative">
            <h6 className="second_div_margin_top font-medium mb-2">
              CBSE Class 12th Board Exam
            </h6>
            <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
              {cbseClass12Data.map((data, index) => (
                <div key={index}>{renderItems(data.items)}</div>
              ))}
            </div>
            <div className="absolute -right-40 top-0 h-full w-[50%] text-prim-light rounded-full bg-prim-light flex justify-center items-center">
              CBSE CLASS 12TH
            </div>
=======
    <section className="pb-5 lg:px-20 py-20">
      <div className="">
        <h2
          data-aos="fade-up"
          className="mb-5 text-3xl text-black font-semibold"
        >
          CBSE Class Board Exam
        </h2>
        <div className="row">
          <div className="col-md-6">
            <h6 className="font-medium mb-2">CBSE Class 10th Board Exam</h6>
            <div className="grid grid-cols-2 gap-2">
              {cbseClass10Data.map((data, index) => (
                <div className="" key={index}>
                  {renderItems(data.items)}
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <h6 className="second_div_margin_top font-medium mb-2">
              CBSE Class 12th Board Exam
            </h6>
            <div className="grid grid-cols-2 gap-2">
              {cbseClass12Data.map((data, index) => (
                <div className="" key={index}>
                  {renderItems(data.items)}
                </div>
              ))}
            </div>
>>>>>>> second-account/main
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassExam;
