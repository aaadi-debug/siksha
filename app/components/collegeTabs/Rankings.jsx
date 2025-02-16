import React from "react";
import DynamicTable from "../DynamicTable";
import FAQs from "../FAQs";

const Rankings = ({ college }) => {
  const ranking = college?.rankings;

  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4">
          {college?.collegeName} Rankings
        </div>
      </div>

      {/* Rannkings About */}
      <div
        dangerouslySetInnerHTML={{
          __html: ranking?.description,
        }}
        className="dangerousHTML mt-4"
      />

      {/* Indexing - table of content */}
      <div className="mb-5 bg-gray-100 p-3 mt-3 rounded-lg">
        <div className="text-lg font-semibold text-gray-500 mb-4">
          Table of Content
        </div>
        <ul className="list-decimal pl-6 text-md">
          {ranking?.highlights?.map((highlight, index) => (
            <li key={index}>
              <a
                href={`#highlights-${highlight?.area}`}
                className="text-second hover:underline"
              >
                {college?.collegeName} {highlight?.area} Ranking Highlights
              </a>
            </li>
          ))}

          {ranking?.rankingSections.map((section, index) => (
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
      {ranking?.highlights?.map((highlight, index) => (
        <div key={index} id={`highlights-${highlight?.area}`} className="mb-5">
          <div className="text-lg font-semibold text-tertiary mb-4">
            {college?.collegeName} {highlight?.area} Ranking Highlights
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
      {ranking?.rankingSections.map((section, index) => (
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
            headers={section?.rankingSectionsTable?.headers}
            rows={section?.rankingSectionsTable?.rows}
          />
        </div>
      ))}

      {/* FAQs */}
      {ranking?.rankingFaqs?.length > 0 && (
        <div id="faqs">
          <div className="text-lg font-semibold text-tertiary mb-4">
            {college?.collegeName} Ranking FAQs
          </div>
          <FAQs faqs={ranking?.rankingFaqs} />
        </div>
      )}
    </>
  );
};

export default Rankings;
