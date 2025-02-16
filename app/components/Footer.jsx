import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer_wrapper py-5">
        <div className="footer_body row pt-5">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6">
                <a href="/" className="footer_logo">
                  <img src="/assets/logo-white-box.png" alt="footer-logo" />
                </a>
                <p>
                  Siksha Helpline stands as India's most trusted educational
                  consultancy firm. Our mission is to illuminate the path to
                  higher education with transparency and personalized support.
                </p>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <h6 className="font-medium">Top Colleges</h6>
                <ul>
                  <li>
                    <a href="/collegepage/IIT Madras (IIT-M)">IIT Madras</a>
                  </li>
                  <li>
                    <a href="/collegepage/IIT Kharagpur (IIT-KGP)">
                      IIT Kharagpur
                    </a>
                  </li>
                  <li>
                    <a href="/collegepage/IIT Roorkee (IIT-R)">IIT Roorkee</a>
                  </li>
                  <li>
                    <a href="/collegepage/IIT Bombay (IIT-B)">IIT Bombay</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6">
                <h6 className="font-medium">Top Universities</h6>
                <ul>
                  <li>
                    <a href="">Engineering</a>
                  </li>
                  <li>
                    <a href="">Law</a>
                  </li>
                  <li>
                    <a href="">Management</a>
                  </li>
                  <li>
                    <a href="">Medical</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <h6 className="font-medium">Board Exams</h6>
                <ul>
                  <li>
                    <a href="">CBSE Class 10th</a>
                  </li>
                  <li>
                    <a href="">NCERT Solutions Class 10th Maths</a>
                  </li>
                  <li>
                    <a href="">CBSE Class 12th</a>
                  </li>
                  <li>
                    <a href="">NCERT Solutions Class 12th Physics</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6">
                <h6 className="font-medium">Top Exams</h6>
                <ul>
                  <li>
                    <a href="">CAT</a>
                  </li>
                  <li>
                    <a href="">GATE</a>
                  </li>
                  <li>
                    <a href="">NEET</a>
                  </li>
                  <li>
                    <a href="">JEE MAIN</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <h6 className="font-medium">Top Study Abroad Places</h6>
                <ul>
                  <li>
                    <a href="">Canada</a>
                  </li>
                  <li>
                    <a href="">USA</a>
                  </li>
                  <li>
                    <a href="">New Zealand</a>
                  </li>
                  <li>
                    <a href="">Singapore</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_footer mt-5">
          <div className="footer_buttons">
            <ul className="d-flex justify-content-center align-items-center">
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer_social_media_links d-flex flex-column justify-content-center align-items-start">
            <div className="icons d-flex flex-row justify-content-center align-items-start">
              <span>
                <a
                  href="https://www.facebook.com/profile.php?id=61550767657757&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/company/siksha-helpline/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/siksha_helpline?igsh=MWU3ZXIwbXZzOXhndg=="
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </span>
              <span>
                <a
                  href="https://x.com/Siksha_Helpline?t=trstRpmhjj-gQEetDt9O6w&s=09"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a
                  href="https://www.youtube.com/@Siksha_Helpline"
                  target="_blank"
                >
                  <FaYoutube />
                </a>
              </span>
            </div>
            <div className="copyright mt-3">
              &copy; {currentYear} Siksha-Helpline. All Rights Reserved.
            </div>
            <div className="text-xs text-white mt-2">
              Design & Developed by{" "}
              <a
                href="https://rapiddigitalgrowth.com/"
                className="hover:underline font-semibold"
              >
                Rapid Digital Growth
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
