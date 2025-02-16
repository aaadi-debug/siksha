import React from "react";
import DynamicTable from "../DynamicTable";
import FAQs from "../FAQs";

const Admissions = ({ college }) => {
  const admission = college?.admissions?.admissionContent;

  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4">
          {college?.collegeName} Admissions
        </div>
      </div>

      {/* Admission About */}
      <div
        dangerouslySetInnerHTML={{
          __html: admission?.description,
        }}
        className="dangerousHTML mt-4"
      />

      {/* direct link */}
      {admission?.directLink && (
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-red-500 font-medium">Direct Link:</span>
          <a
            href={admission?.directLink}
            className="text-second hover:underline hover:text-second"
            target="_blank"
          >
            Apply for {college?.collegeName} Admissions
          </a>
        </div>
      )}

      {/* Indexing - table of content */}
      <div className="mb-5 bg-gray-100 p-3 mt-3 rounded-lg">
        <div className="text-lg font-semibold text-gray-500 mb-4">
          Table of Content
        </div>
        <ul className="list-decimal pl-6 text-md">
          {admission?.highlights?.map((highlight, index) => (
            <li key={index}>
              <a
                href={`#highlights-${highlight?.year}`}
                className="text-second hover:underline"
              >
                {college?.collegeName} {highlight?.year} Admission Highlights
              </a>
            </li>
          ))}

          {admission?.admissionSections.map((section, index) => (
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

      {/* Highlights */}
      {admission?.highlights?.map((highlight, index) => (
        <div key={index} id={`highlights-${highlight?.year}`} className="mb-5">
          <div className="text-lg font-semibold text-tertiary mb-4">
            {college?.collegeName} {highlight?.year} Admission Highlights
          </div>
          <DynamicTable
            headers={["Particulars", "Highlights"]}
            rows={highlight?.highlightsTable.map((data) => [
              { content: data?.particulars },
              { content: data?.admHighlights },
            ])}
          />
        </div>
      ))}

      {/* Rest of the sections */}
      {admission?.admissionSections.map((section, index) => (
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
            headers={section?.admissionSectionsTable?.headers}
            rows={section?.admissionSectionsTable?.rows}
          />
        </div>
      ))}

      {/* FAQs */}
      {admission?.admissionFaqs?.length > 0 && (
        <div id="faqs">
          <div className="text-lg font-semibold text-tertiary mb-4">
            {college?.collegeName} Admission FAQs
          </div>
          <FAQs faqs={admission?.admissionFaqs} />
        </div>
      )}
    </>
  );
};

export default Admissions;
