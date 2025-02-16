"use client";
import React, { useState } from "react";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="pt-20 max-sm:pt-16">
        <div
          className="border-red-500 bg-cover bg-center bg-no-repeat  text-white lg:px-10 px-6 py-10"
          style={{
            backgroundImage: `url('/assets/images/hero-contact-us.jpg')`,
          }}
        >
          <Breadcrumbs2
            breadcrumbs={[{ title: "Contact Us", link: "" }]}
            linkColor="text-white"
            activeColor="text-white/70"
          />
          {/* <!-- Content inside your hero section --> */}
          <h2 className="text-4xl font-bold pt-10 pb-16 text-center">
            Contact Us
          </h2>
        </div>
      </div>

      <ContactForm />
      <div className="map_integration" id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.745170448307!2d84.89910807543062!3d26.656640376800702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399334fe4f532959%3A0x458a73d1414465df!2sGreen%20City%20Apartment!5e0!3m2!1sen!2sin!4v1720241751952!5m2!1sen!2sin"
          width="600"wh
          height="450"
          // style="border:0;"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* <div className="contact_us">
        <div className="contact_us_wrapper">
          <div className="container py-5 lg:px-32">
            <div className="row contact_us_main">
              <div className="contact_form col-md-6 col-lg-6 col-sm">
                <h3 className="text-3xl font-semibold">Get in Touch</h3>
                <p className="mb-3 mt-2">
                  We are here for you! How can we help?
                </p>

                <form onSubmit={handleSubmit} className="form">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile no."
                      required
                    />
                  </div>

                  <div className="form-group mb-2">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Go ahead, we are listening..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit">Submit</button>

                  {formStatus && <p className="form-status">{formStatus}</p>}
                </form>
              </div>
              <div className="contact_details col-md-6 col-lg-6 col-sm">
                <figure>
                  <img src="/assets/images/contact.svg" alt="contact-svg" />
                </figure>
                <div className="details mt-5">
                  <div className="items">
                    <span>
                      {" "}
                      <FaLocationDot />{" "}
                    </span>
                    <p>
                      <a href="#map">
                        Siksha HELPLINE Unit-02 Greencity Apartment Chandmari
                        Near MS College Motihari, East Champaran, Bihar, 845401
                      </a>
                    </p>
                  </div>
                  <div className="items">
                    <span>
                      {" "}
                      <IoCall />{" "}
                    </span>
                    <p>
                      <a href="tel:+918298262156" target="_blank">
                        +91 8298262156
                      </a>
                    </p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      {" "}
                      <RiWhatsappFill />{" "}
                    </span>
                    <p>
                      <a href="https://wa.me/+919205230652" target="_blank">
                        +91 9205230652
                      </a>
                    </p>
                  </div>

                  <div className="items">
                    <span>
                      {" "}
                      <IoIosMail />{" "}
                    </span>
                    <p>
                      <a href="mailto:contact@sikshahelpline.com">
                        contact@sikshahelpline.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="map_integration" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.745170448307!2d84.89910807543062!3d26.656640376800702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399334fe4f532959%3A0x458a73d1414465df!2sGreen%20City%20Apartment!5e0!3m2!1sen!2sin!4v1720241751952!5m2!1sen!2sin"
              width="600"
              height="450"
              // style="border:0;"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
