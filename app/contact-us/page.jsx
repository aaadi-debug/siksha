'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";


const Contact = () => {

    // / State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // State to hold form submission status
    const [formStatus, setFormStatus] = useState('');

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to validate form data
    const validateForm = () => {
        const { name, email } = formData;

        if (name.length < 3 || name.length > 50) {
            return 'Name must be between 3 and 50 characters.';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return 'Please enter a valid email address ending in .com.';
        }

        return null;
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form
        const error = validateForm();
        if (error) {
            setFormStatus(error);
            return;
        }

        // Log the form data to the console
        console.log('Form Data:', formData);

        // Set form status (for demo purposes)
        setFormStatus('Form submitted successfully!');

        // Clear the form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });

        // Reset the form status after a while
        setTimeout(() => {
            setFormStatus('');
        }, 3000);

        // In a real application, you would send the form data to your backend here
        // Example: await axios.post('/api/form', formData);
    };
    return (
        <>
            <div className="contact_us">
                <Navbar />

                <div className="contact_us_wrapper">
                    <div className="hero_contact_us">
                        <h2 className='text-3xl font-semibold'>Contact Us</h2>
                    </div>
                    <div className="container py-5 lg:px-32">
                        <div className="row contact_us_main">
                            <div className="contact_form col-md-6 col-lg-6 col-sm">
                                <h3 className='text-3xl font-semibold'>Get in Touch</h3>
                                <p className='mb-3 mt-2'>We are here for you! How can we help?</p>

                                <form onSubmit={handleSubmit} className="form">
                                    <div className="form-group mb-3 mb-3">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder='Enter your name'
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
                                            placeholder='Enter your email'
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
                                            placeholder='Enter your mobile no.'
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-2">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder='Go ahead, we are listening...'
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit">Submit</button>

                                    {formStatus && <p className="form-status">{formStatus}</p>}
                                </form>
                            </div>
                            <div className="contact_details col-md-6 col-lg-6 col-sm">
                                <figure>
                                    <img src='/assets/images/contact.svg' alt="contact-svg" />
                                </figure>
                                <div className="details mt-5">
                                    <div className="items">
                                        <span> <FaLocationDot />  </span>
                                        <p>
                                            <a href="#map">Siksha HELPLINE Unit-02 Greencity Apartment Chandmari
                                            Near MS College Motihari, East Champaran,
                                            Bihar, 845401</a>
                                        </p>
                                    </div>
                                    <div className="items">
                                        <span> <IoCall /> </span>
                                        <p>
                                            <a href="tel:+918298262156" target='_blank'>+91 8298262156</a>
                                        </p>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span> <RiWhatsappFill /> </span>
                                        <p>
                                            <a href="https://wa.me/+919205230652" target='_blank'>+91 9205230652</a>
                                        </p>
                                    </div>

                                    <div className="items">
                                        <span> <IoIosMail /> </span>
                                        <p>
                                            <a href="mailto:contact@sikshahelpline.com">contact@sikshahelpline.com</a>
                                        </p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map_integration" id='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.745170448307!2d84.89910807543062!3d26.656640376800702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399334fe4f532959%3A0x458a73d1414465df!2sGreen%20City%20Apartment!5e0!3m2!1sen!2sin!4v1720241751952!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            // style="border:0;"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
    
            <Footer />
        </>
    )
}

export default Contact
