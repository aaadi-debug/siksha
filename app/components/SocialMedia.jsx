"use client";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
  FaYoutube,
  FaGraduationCap,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="fixed bottom-4 left-0 whatappButton z-10">
        <div className="flex flex-col gap-3 bg-second text-white p-2 py-3 rounded-tr rounded-br-3xl">
          <Link
            href="https://www.facebook.com/profile.php?id=61550767657757&mibextid=LQQJ4d"
            target="_blank"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaFacebookF size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/siksha-helpline/"
            target="_blank"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaLinkedinIn size={16} />
          </Link>
          <Link
            href="https://www.instagram.com/siksha_helpline?igsh=MWU3ZXIwbXZzOXhndg=="
            target="_blank"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaInstagram size={16} />
          </Link>
          <Link
            href="https://x.com/Siksha_Helpline?t=trstRpmhjj-gQEetDt9O6w&s=09"
            target="_blank"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaTwitter size={16} />
          </Link>
          <Link
            href="https://www.youtube.com/@Siksha_Helpline"
            target="_blank"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaYoutube size={16} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
