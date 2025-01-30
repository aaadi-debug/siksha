import React, { useEffect, useRef } from "react";
import { X } from 'lucide-react';

const DynamicModal = ({ isOpen, toggleModal, children, modalHeading }) => {
  const modalRef = useRef(null);

  // Close modal when clicking outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      toggleModal(false); // Close the modal if clicked outside
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef}
        className="2xl:w-[60%] 2xl:h-[70%] xl:w-[60%] xl:h-[70%] lg:w-[70%] lg:h-[70%] md:w-[80%] md:h-[80%] max-sm:w-[90%] max-sm:h-[70%] bg-white rounded-lg shadow-lg"
      >
        {/* Modal Header */}
        <div className="p-6 text-2xl font-semibold flex justify-between items-start bg-prim-light rounded-t-lg">
          {modalHeading}
          <button
            onClick={() => toggleModal(false)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
          >
            <X />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DynamicModal;