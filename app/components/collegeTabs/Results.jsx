import React from "react";
import FAQs from "../FAQs";


const Results = ({ college }) => {
  const result = college?.results;

  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-tertiary mb-4">
          {college?.collegeName} Results
        </div>
      </div>

      {/* Results content  */}
      <div
        dangerouslySetInnerHTML={{
          __html: result?.description,
        }}
        className="dangerousHTML mt-4"
      />

      {/* FAQs */}
      {result?.resultFaqs?.length > 0 ? (
        <div id="faqs">
          <div className="text-lg font-semibold text-tertiary mb-4">
            {college?.collegeName} Results FAQs
          </div>
          <FAQs faqs={result?.resultFaqs} />
        </div>
      ) : (
        <div>No results to show.</div>
      )}
    </>
  );
};

export default Results;
