import React from "react";
import DynamicTable from "../DynamicTable";
import FAQs from "../FAQs";

const Scholarships = ({ college }) => {
  const scholarships = college?.scholarships;

  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4">
          {college?.collegeName} Scholarships
        </div>
      </div>

      {/* Scholarships About */}
      <div
        dangerouslySetInnerHTML={{
          __html: scholarships?.description,
        }}
        className="dangerousHTML mt-4"
      />

      {/* Indexing - table of content */}
      <div className="mb-5 bg-gray-100 p-3 mt-3 rounded-lg">
        <div className="text-lg font-semibold text-gray-500 mb-4">
          Table of Content
        </div>
        <ul className="list-decimal pl-6 text-md">
          {scholarships?.scholarshipSections.map((section, index) => (
            <li key={index}>
              <a
                href={`#admission-content-${section.heading}`}
                className="text-second hover:underline"
              >
                {section.heading}
              </a>
            </li>
          ))}
          <li>
            <a href="#faqs" className="text-second hover:underline">
              FAQs
            </a>
          </li>
        </ul>
      </div>

      {/* Rest of the sections */}
      {scholarships?.scholarshipSections.map((section, index) => (
        <div
          key={index}
          id={`admission-content-${section.heading}`}
          className="mb-5"
        >
          <div className="text-lg font-semibold text-tertiary mb-4">
            {section.heading}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: section?.description,
            }}
            className="dangerousHTML mt-4"
          />
          <DynamicTable
            headers={section?.scholarshipSectionsTable?.headers}
            rows={section?.scholarshipSectionsTable?.rows}
          />
        </div>
      ))}

      {/* FAQs */}
      {scholarships?.admissionFaqs?.length > 0 && (
        <div id="faqs">
          <div className="text-lg font-semibold text-tertiary mb-4">
            {college?.collegeName} Ranking FAQs
          </div>
          <FAQs faqs={scholarships?.admissionFaqs} />
        </div>
      )}
    </>
  );
};

export default Scholarships;
