"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <>
      <div className="fixed right-8 whatappButton z-10 bottom-6">
        <div
          className="p-2 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-400 transition duration-300"
          aria-label="WhatsApp Button"
        >
          <a href="https://wa.me/+919205230652" target="_blank"><FaWhatsapp size={24} /></a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
