import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TermsAndConditions = () => {
    return (
        <>
            <div className="about_us">
                <Navbar />

                <div className="terms_and_conditions py-5">
                    <div className="container lg:px-28">
                        <h1 className='text-4xl font-semibold'>Terms and Conditions</h1>

                        <p>Welcome to Siksha Helpline! These terms and conditions govern your use of Siksha Helpline's services, including counseling and admission assistance. By accessing and using our services, you agree to these terms in full. If you do not agree with any part of these terms, please refrain from using our services.</p>

                        <h2 className='text-3xl font-semibold mt-4 mb-2'>Service Overview</h2>
                        <p>Siksha Helpline provides counseling and admission assistance services to students seeking information and guidance regarding courses, colleges/institutions, placements, and internships. We aim to assist students in making informed decisions about their educational and career paths.</p>

                        <h2 className='text-3xl font-semibold  mt-4 mb-2'>Placement and Internship Assistance</h2>
                        <p>Siksha Helpline offers guidance on placement and internship opportunities, including interview preparation and skill enhancement tips. While we strive to provide comprehensive support, we do not guarantee placement or internship outcomes. We assist students to the best of our abilities, but we cannot be held liable for any loss or damages resulting from unsuccessful placement attempts.</p>

                        <h2 className='text-3xl font-semibold  mt-4 mb-2'>Accuracy of Information
                        </h2>
                        <p>We endeavor to provide genuine and accurate information about colleges and educational opportunities to our service users. However, we do not endorse or guarantee the accuracy of user-generated content or external links provided during counseling sessions or through our services.</p>

                        <h2 className='text-3xl font-semibold  mt-4 mb-2'>Limitation of Liability
                        </h2>
                        <p>Siksha Helpline is not liable for any kind of loss or damages incurred by students or users, whether direct or indirect, arising from the use of our services, including but not limited to, reliance on information provided, placement outcomes, or interactions with colleges/institutions.</p>

                        <h2 className='text-3xl font-semibold  mt-4 mb-2'>Changes to Terms</h2>
                        <p>Siksha Helpline reserves the right to modify these terms and conditions for service users at any time. We encourage you to review these terms periodically for updates.
                        </p>

                        <div className="section">
                            <h2 className='text-3xl font-semibold  mt-4 mb-2'>For any clarification, please contact: </h2>
                            <p><b>Address: </b>Siksha Helpline Pvt. Ltd.
                                Green City, near MS College,
                                Chandmari, Motihari, Bihar 845401</p>
                            <p><b>Email: </b>Email: contact@sikshahelpline.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default TermsAndConditions
