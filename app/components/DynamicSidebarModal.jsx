import React, { useState, useRef } from "react";
import { X } from "lucide-react";

const DynamicSidebarModal = ({
  headerText,
  headerIcon,
  triggerText,
  children,
  onClose,
  sidebarWidth, // Default width classes
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (onClose && !isSidebarOpen) onClose(); // Call the `onClose` callback
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    if (onClose) onClose(); // Call the `onClose` callback
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="btn-primary">
        {triggerText}
      </button>
      {/* User Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            ref={sidebarRef}
            className={`fixed inset-y-0 top-0 right-0 sidebarZIndex1 ${sidebarWidth ? sidebarWidth : "lg:w-96 w-72"} p-4 bg-white shadow-l transition-transform transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } duration-700 ease-in-out`}
          >
            <div className="flex items-center justify-between pt-1 pb-2 border-textClr border-b">
              <h2 className="lg:text-2xl text-blackClr font-bold flex items-center gap-2">
                {headerIcon} {headerText} 
              </h2>
              <button
                onClick={closeSidebar}
                className="text-gray-600 hover:text-gray-900"
              >
                <X
                  className="h-10 w-10 rounded-full p-2 transition duration-500 hover:bg-gray-100 hover:text-tertiary"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="py-2 pb-16">{children}</div>
          </div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 sidebarZIndex2"
            onClick={closeSidebar}
          />
        </>
      )}
    </div>
  );
};

export default DynamicSidebarModal;
