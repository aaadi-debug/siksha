"use client"
import React, {useState} from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  X,
} from "lucide-react";
import { FaThreads, FaX } from "react-icons/fa6";

const Footer2 = () => {
  const date = new Date();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // //console.log("Success",email);
      try {
        const response = await axios.post("/api/subscribe", { email: email });
        // //console.log("Succes");
        // alert("Success")

        // //console.log("response",response.data.message)
        showToast(
          "success",
          "Congratulations! You are now subscribed to our newsletter.",
          { autoClose: 3000 }
        );

        //console.log(response);
      } catch (error) {
        showToast("error", error.response.data.message, { autoClose: 3000 });
        // //console.log("response", error.response.data.message);
      }

      // Resetting form fields
      setEmail("");
    } else {
      setErrors(errors);
    }
  };

  const handleInputChange = (field, value) => {
    if (field === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: null }));
    }

    switch (field) {
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    return errors;
  };

  return (
    <footer className="pt-20">
<<<<<<< HEAD
      <div className="grid lg:grid-cols-6 md:grid-cols-3 max-sm:grid-cols-1 gap-8 lg:px-10 px-6 developedByAdityaRajGupta">
=======
      <div className="grid lg:grid-cols-6 md:grid-cols-3 max-sm:grid-cols-1 gap-8 lg:px-10 px-6">
>>>>>>> second-account/main
        <div>
          <div className="text-xl text-white font-semibold">Useful Links</div>
          <ul className="mt-6">
            <li className="mt-2">
              <a
                href="/siksha-helpline"
                className="hover:text-prim transition duration-300"
              >
                Siksha Helpline
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/landing-page"
                className="hover:text-prim transition duration-300"
              >
                Landing Page
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/advertise-with-us"
                className="hover:text-prim transition duration-300"
              >
                Advertise With Us
              </a>
            </li>
            <li className="mt-2">
<<<<<<< HEAD
              <a href="/education-loan" className="hover:text-prim transition duration-300">
=======
              <a href="#" className="hover:text-prim transition duration-300">
>>>>>>> second-account/main
                Education Loan
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xl text-white font-semibold">Quick Links</div>
          <ul className="mt-6">
            <li className="mt-2">
              <a
                href="/about-us"
                className="hover:text-prim transition duration-300"
              >
                About Us
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/contact-us"
                className="hover:text-prim transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/blogs"
                className="hover:text-prim transition duration-300"
              >
                Our Blogs
              </a>
            </li>
            <li className="mt-2">
<<<<<<< HEAD
              <a href="/dashboard" className="hover:text-prim transition duration-300">
=======
              <a href="#" className="hover:text-prim transition duration-300">
>>>>>>> second-account/main
                Your Account
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xl text-white font-semibold">Our Policies</div>
          <ul className="mt-6">
            <li className="mt-2">
              <a
                href="/privacy-policy"
                className="hover:text-prim transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/terms-and-conditions"
                className="hover:text-prim transition duration-300"
              >
                Terms & Conditions
              </a>
            </li>
            <li className="mt-2">
              <a href="/refund-policy" className="hover:text-prim transition duration-300">
                Refund Policy
              </a>
            </li>
<<<<<<< HEAD
            {/* <li className="mt-2">
=======
            <li className="mt-2">
>>>>>>> second-account/main
              <a
                href="/sitemap"
                className="hover:text-prim transition duration-300"
              >
                Sitemap
              </a>
<<<<<<< HEAD
            </li> */}
=======
            </li>
>>>>>>> second-account/main
          </ul>
        </div>

        <div>
          <div className="text-xl text-white font-semibold">Top Courses</div>
          <ul className="mt-6">
            <li className="mt-2">
              <a
                href="/courses/btech-colleges"
                className="hover:text-prim transition duration-300"
              >
                B.Tech
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/courses/bds-colleges"
                className="hover:text-prim transition duration-300"
              >
                Denatl
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/courses/llb-colleges"
                className="hover:text-prim transition duration-300"
              >
                Law
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/courses/bsc-colleges"
                className="hover:text-prim transition duration-300"
              >
                Science
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xl text-white font-semibold">Top Exams</div>
          <ul className="mt-6">
            <li className="mt-2">
              <a
<<<<<<< HEAD
                href="#"
=======
                href="/collegepage/IIT Madras (IIT-M)"
>>>>>>> second-account/main
                className="hover:text-prim transition duration-300"
              >
                CAT
              </a>
            </li>
            <li className="mt-2">
              <a
<<<<<<< HEAD
                href="#"
=======
                href="/collegepage/IIT Kharagpur (IIT-KGP)"
>>>>>>> second-account/main
                className="hover:text-prim transition duration-300"
              >
                GATE
              </a>
            </li>
            <li className="mt-2">
              <a
<<<<<<< HEAD
                href="#"
=======
                href="/collegepage/IIT Roorkee (IIT-R)"
>>>>>>> second-account/main
                className="hover:text-prim transition duration-300"
              >
                NEET
              </a>
            </li>
            <li className="mt-2">
              <a
<<<<<<< HEAD
                href="#"
=======
                href="/collegepage/IIT Bombay (IIT-B)"
>>>>>>> second-account/main
                className="hover:text-prim transition duration-300"
              >
                JEE Mains
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xl text-white font-semibold">
            Top Study Abroad Places
          </div>
          <ul className="mt-6">
            <li className="mt-2">
              <a
<<<<<<< HEAD
                href="/courses-abroad/abroad-colleges"
=======
                href="/collegepage/IIT Madras (IIT-M)"
>>>>>>> second-account/main
                className="hover:text-prim transition duration-300"
              >
                Canada
              </a>
            </li>
            <li className="mt-2">
              <a
<<<<<<< HEAD
                href="/courses-abroad/abroad-colleges"
=======
                href="/collegepage/IIT Kharagpur (IIT-KGP)"
>>>>>>> second-account/main
                className="hover:text-prim transition duration-300"
              >
                USA
              </a>
            </li>
            <li className="mt-2">
              <a
<<<<<<< HEAD
                href="/courses-abroad/abroad-colleges"
=======
                href="/collegepage/IIT Roorkee (IIT-R)"
>>>>>>> second-account/main
                className="hover:text-prim transition duration-300"
              >
                New Zealand
              </a>
            </li>
            <li className="mt-2">
              <a
<<<<<<< HEAD
                href="/courses-abroad/abroad-colleges"
=======
                href="/collegepage/IIT Bombay (IIT-B)"
>>>>>>> second-account/main
                className="hover:text-prim transition duration-300"
              >
                Singapore
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-5 lg:px-10 px-6 bg-black/10 pt-10 pb-20">
        <div className="flex gap-4 justify-between items-center max-sm:flex-col max-sm:items-start">
          <div className="">
            <div>
              <h4 className="text-lg text-white font-semibold">
                Subscribe Our Newsletter
              </h4>
              <form
                onSubmit={handleSubmit}
                className="flex max-sm:flex-col gap-1 items-center mt-2"
              >
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="py-2 px-3 outline-none rounded-3xl w-3/4 text-sm max-sm:w-full"
                />
                {errors?.email && (
                  <p className="error-message">{errors?.email}</p>
                )}
                <button
                  type="submit"
                  className="w-1/4 bg-prim text-sm text-white py-2 px-2 rounded-full max-sm:w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
            {/* <ul className="flex gap-4 mb-4">
              <li className="hover:text-secondary hover:shadow-lg transition duration-500 border p-2 rounded-full hover:border-secondary">
                <a
                  href="https://www.facebook.com/profile.php?id=61550767657757&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <Facebook size={20} />
                </a>
              </li>
              <li className="hover:text-secondary hover:shadow-lg transition duration-500 border p-2 rounded-full hover:border-secondary">
                <a
                  href="https://www.instagram.com/siksha_helpline?igsh=MWU3ZXIwbXZzOXhndg=="
                  target="_blank"
                >
                  <Instagram size={20} />
                </a>
              </li>
              <li className="hover:text-secondary hover:shadow-lg transition duration-500 border p-2 rounded-full hover:border-secondary">
                <a
                  href="https://www.linkedin.com/company/siksha-helpline/"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </a>
              </li>
              <li className="hover:text-secondary hover:shadow-lg transition duration-500 border p-2 rounded-full hover:border-secondary">
                <a
                  href="https://x.com/Siksha_Helpline?t=trstRpmhjj-gQEetDt9O6w&s=09"
                  target="_blank"
                >
                  <FaX size={20} />
                </a>
              </li>
              <li className="hover:text-secondary hover:shadow-lg transition duration-500 border p-2 rounded-full hover:border-secondary">
                <a
                  href="https://www.youtube.com/@Siksha_Helpline"
                  target="_blank"
                >
                  <Youtube size={20} />
                </a>
              </li>
            </ul> */}
            <p className="text-white mt-4">
              2019 - {date.getFullYear()} &copy; Siksha-Helpline . All Rights
              Reserved{" "}
            </p>
            <p className="text-xs text-white mt-2">
              Design & Developed by{" "}
              <a
                href="https://rapiddigitalgrowth.com/"
                className="text-white hover:underline"
                target="_blank"
              >
                Rapid Digital Growth
              </a>
            </p>
          </div>

          <div className="border border-gray-400 rounded-2xl p-3 w-96 max-sm:w-full">
            <a href="/">
              <img
                src="/assets/logos/logo-purple-orange.png"
                alt="Logo"
                className="w-40 max-sm:py-3 bg-white rounded max-sm:w-48"
              />
            </a>
            <p className="text-sm mt-3 text-white">
              Siksha Helpline stands as India's most trusted educational
              consultancy firm. Our mission is to illuminate the path to higher
              education with transparency and personalized support.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
