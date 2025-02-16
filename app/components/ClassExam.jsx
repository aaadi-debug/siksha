import { React } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

const ClassExam = () => {
  const cbseClass10Data = [
    {
      title: "CBSE Class 10th",
      items: [
        "CBSE Class 10th",
        "CBSE Class 10th Result",
        "CBSE Class 10 Previous Year Papers",
        "CBSE Class 10th Syllabus",
        "CBSE Class 10th Exam Dates",
        "CBSE Class 10th Admit Card",
      ],
    },
  ];

  const cbseClass12Data = [
    {
      title: "CBSE Class 12th",
      items: [
        "CBSE Class 12th",
        "CBSE Class 12th Results",
        "CBSE Class 12th Syllabus",
        "CBSE Class 12th Admit Card",
        "NCERT Solutions Class 12th Physics",
        "NCERT Solutions Class 12th Biology",
      ],
    },
  ];

  //   <IoIosArrowForward />
  {
    /* <GoArrowRight /> */
  }

  const renderItems = (items) => {
    return items.map((item, index) => (
      <a href="#" className="mt-2 flex gap-2 items-center border-2 border-tertiary text-tertiary rounded-full hover:bg-tertiary hover:text-white  hover:gap-6 transition duration-300" key={index}>
        <span className="bg-tertiary rounded-full text-white p-2 "><IoIosArrowForward size={16} /></span>
        <p className="">{item}</p>
      </a>
    ));
  };

  return (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassExam;
