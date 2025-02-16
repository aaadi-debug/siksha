import React from "react";
import DynamicTable from "../DynamicTable";
import FAQs from "../FAQs";

const Placements = ({ college }) => {
  const placement = college?.placements?.placementContent;

  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4">
          {college?.collegeName} Placements
        </div>
      </div>

      {/* Placement About */}
      <div
        dangerouslySetInnerHTML={{
          __html: placement?.description,
        }}
        className="dangerousHTML mt-4"
      />

      {/* Indexing - table of content */}
      <div className="mb-5 bg-gray-100 p-3 mt-3 rounded-lg">
        <div className="text-lg font-semibold text-gray-500 mb-4">
          Table of Content
        </div>
        <ul className="list-decimal pl-6 text-md">
          {placement?.highlights?.map((highlight, index) => (
            <li key={index}>
              <a
                href={`#highlights-${highlight?.year}`}
                className="text-second hover:underline"
              >
                {college?.collegeName} {highlight?.year} Placement Highlights
              </a>
            </li>
          ))}

          {placement?.placementSections.map((section, index) => (
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
      {placement?.highlights?.map((highlight, index) => (
        <div key={index} id={`highlights-${highlight?.year}`} className="mb-5">
          <div className="text-lg font-semibold text-tertiary mb-4">
            {college?.collegeName} {highlight?.year} Placement Highlights
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
      {placement?.placementSections.map((section, index) => (
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
            headers={section?.placementSectionsTable?.headers}
            rows={section?.placementSectionsTable?.rows}
          />
        </div>
      ))}

      {/* FAQs */}
      {placement?.placementFaqs?.length > 0 && (
        <div id="faqs">
          <div className="text-lg font-semibold text-tertiary mb-4">
            {college?.collegeName} Placement FAQs
          </div>
          <FAQs faqs={placement?.placementFaqs} />
        </div>
      )}
    </>
  );
};

export default Placements;
