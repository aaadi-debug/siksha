"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react"
import DynamicThemeButton from "./DynamicThemeButton";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 popUpHomePAge">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-[60%] h-[60%] text-center">
            <h2 className="text-xl font-bold mb-4">Welcome!</h2>
            <p className="mb-10">This popup appears 3 seconds after page refresh.</p>
            <button
              className="absolute -top-10 -right-4 mt-4 p-2 bg-prim text-white rounded-full"
              onClick={() => setShowPopup(false)}
            >
              <X />
            </button>
            <DynamicThemeButton href="/apply-now" >Apply Now</DynamicThemeButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
