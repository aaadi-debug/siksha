"use client";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <>
      <div className="fixed lg:bottom-8 right-8 lg:right-8 whatappButton z-10 bottom-20 max-sm:bottom-20 max-sm:right-4 ">
        <div
          className="p-2 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-400 transition duration-300"
          aria-label="WhatsApp Button"
        >
          <Link href="https://wa.me/+919205230652" target="_blank"><FaWhatsapp size={24} /></Link>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
