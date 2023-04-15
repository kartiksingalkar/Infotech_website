import React from "react";
import Images from '../components/Imgimport';
// import ContactForm  from "../components/ContactForm";
import Contact  from "../components/Contact";


const ContactUs = () => {
    return (
        <>
            <div className="contact-container">
                <div className="contact-header">
                    <img src={Images.contactus_banner} alt="" />
                </div>
                <div className="contact-header-title">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-section2">
                    <h3>Get In Touch</h3>
                    <p>Our team has 100+ professionals in all the particular fields who would be working closely.</p>
                    <div className="col-md-12 row get-in-touch-container">
                        <div className="col-md-4 contact-get-in-touch">
                            <img src={Images.Call} alt="call" />
                            <p><a href="tel:+919156688817">IN : +91 - 91566 88817</a></p>
                            <p><a href="tel:+13156880681">US : +1 (315)-688-0681</a></p>
                        </div>
                        <div className="col-md-4 contact-get-in-touch">
                            <img src={Images.Location} alt="location" />
                            <p>Unit-8 & 9, 4th EFC Marisoft-1, Marigold Premises, Kalyani Nagar, Pune, Maharashtra- 411014</p>

                        </div>
                        <div className="col-md-4 contact-get-in-touch">
                            <img src={Images.Email} alt="email" />
                            <p><a href="mailto:info@ellorainfotech.com">info@ellorainfotech.com</a></p>
                        </div>
                    </div>
                </div>
                {/* <ContactForm section="contact"/> */}
                <Contact section="contact"/>
            </div>
        </>
    )
}

export default ContactUs