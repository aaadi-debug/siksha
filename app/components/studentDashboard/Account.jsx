import React, { useState } from "react";

const Account = () => {
  // State for email and SMS toggles
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle handlers
  const toggleEmail = () => setEmailEnabled(!emailEnabled);
  const toggleSms = () => setSmsEnabled(!smsEnabled);

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Deactivate account handler
  const handleDeactivate = () => {
    console.log("Account deactivated");
    closeModal();
  };

  return (
    <>
      <div className="">
        {/* Heading */}
        <div className="text-2xl font-semibold text-tertiary mb-6">
          Account Settings
        </div>

        {/* Toggle buttons for Email and SMS */}
        <div className="mb-4 p-3">
          <label className="flex items-center space-x-3 mb-4">
            <span className="text-gray-700">Email Communications</span>
            <button
              type="button"
              className={`relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prim ${
                emailEnabled ? "bg-prim" : "bg-gray-200"
              }`}
              aria-pressed={emailEnabled}
              onClick={toggleEmail}
            >
              <span className="sr-only">Enable Email Communications</span>
              <span
                className={`${
                  emailEnabled ? "translate-x-6" : "translate-x-0"
                } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
              />
            </button>
          </label>

          <label className="flex items-center space-x-3">
            <span className="text-gray-700">SMS Communications</span>
            <button
              type="button"
              className={`relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prim ${
                smsEnabled ? "bg-prim" : "bg-gray-200"
              }`}
              aria-pressed={smsEnabled}
              onClick={toggleSms}
            >
              <span className="sr-only">Enable SMS Communications</span>
              <span
                className={`${
                  smsEnabled ? "translate-x-6" : "translate-x-0"
                } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
              />
            </button>
          </label>
        </div>

        {/* Deactivate Account Button */}
        <div className="mt-6">
          <button
            onClick={openModal}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Deactivate Account
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to deactivate your account?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                No
              </button>
              <button
                onClick={handleDeactivate}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;