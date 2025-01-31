"use client";

import { useState, useEffect } from "react";
import DynamicThemeButton from "./DynamicThemeButton";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null; // Don't render if user accepted cookies

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center z-50">
      <p className="text-gray-700 text-sm">
        We use cookies to improve your experience. By continuing, you agree to
        our use of cookies.
      </p>
      <DynamicThemeButton onClick={handleAcceptCookies}>
        Accept Cookies
      </DynamicThemeButton>
      <button
        onClick={handleClose}
        className="absolute -top-2 -right-2 hover:text-gray-700 transition text-white bg-prim p-2 rounded-full"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default CookieConsent;
