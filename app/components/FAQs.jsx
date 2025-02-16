import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQs = ({ faqs }) => {
  // Split the FAQs into two columns
  const midIndex = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midIndex);
  const rightColumn = faqs.slice(midIndex);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumn.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumn.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-gray-300 rounded-lg overflow-hidden bg-white"
      data-aos="fade-up"
      data-aos-duration="800"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="cursor-pointer flex justify-start gap-2 items-center p-4 ">
        <span
          className={`border-2 p-2 rounded transform transition-transform duration-1000 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
        <h3 className="font-semibold">{question}</h3>
      </div>
      {isOpen && (
        <div className="p-4 bg-white text-gray-700 border-t border-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQs;
