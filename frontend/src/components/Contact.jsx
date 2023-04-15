import { ToastContainer, toast, Flip } from 'react-toastify';
import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import ClientCaptcha from "react-client-captcha"
import "react-client-captcha/dist/index.css"
import axios from 'axios';

const Contact = ({ section }) => {
    const [captchaCode, setCaptchaCode] = useState("")

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [comp_name, setComp_name] = useState("")
    const [message, setMessage] = useState("")
    const [service, setService] = useState("B2B")
    const [captcha, setCaptcha] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (captcha === captchaCode) {

            // const url = 'http://localhost/project/infotech/form.php';
            const url = 'https://demoapi.ellorainfotech.com/php/form.php';


            let fData = new FormData();
            fData.append('fname', fname);
            fData.append('lname', lname);
            fData.append('email', email);
            fData.append('contact', contact);
            fData.append('comp_name', comp_name);
            fData.append('message', message);
            fData.append('service', service);
            fData.append('section', section);

            axios.post(url, fData)
                .then(response => {
                    if (response.data === "Thank you for submitting")
                        toast.success(response.data)
                    else
                        toast.error(response.data)
                })
                .catch(error => toast.error(error));

        }
        else
            toast.error("Invalid Captcha")
    }



    return (
        <>
            <div className="home-section-contactus">
                <h3>Contact Us</h3>
                <div className="res-contact-form">
                    <div className="con-left-side">
                        <form onSubmit={handleSubmit}>
                            <div className="res-contact-container1">
                                <div className="contact-us-inputs">
                                    <label className="required">Your First Name</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        autoComplete="off"
                                        placeholder="First Name"
                                        value={fname}
                                        onChange={(e) => setFname(e.target.value)}
                                    />
                                </div>
                                <div className="contact-us-inputs">
                                    <label className="required">Your Last Name</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        name="lname"
                                        id="lname"
                                        placeholder="Last Name"
                                        value={lname}
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="res-contact-conatiner2">
                                <div className="contact-us-inputs">
                                    <label className="required">Your Business Email</label>
                                    <br></br>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="contact-us-inputs">
                                    <label className="required">Your Contact Number</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        name="contact"
                                        id="contact"
                                        placeholder="Contact Number"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="res-contact-conatiner3">
                                <div className="contact-us-inputs">
                                    <label className="required">Your Company Name</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        name="comp_name"
                                        id="comp_name"
                                        placeholder="Company Name"
                                        value={comp_name}
                                        onChange={(e) => setComp_name(e.target.value)}
                                    />
                                </div>
                                <div className="contact-us-inputs">
                                    <label>Which service are you looking for?</label>
                                    <br></br>
                                    <select
                                        placeholder="Select which you require"
                                        name="service"
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                    >
                                        <option value="">--Select a option--</option>
                                        <option value="B2B">B2B</option>
                                        <option value="IT">IT</option>
                                    </select>
                                </div>
                            </div>
                            <div className="res-contact-container4">
                                <div className="res-contact-textarea ">
                                    <label className="required" >Your Message</label>
                                    <textarea
                                        placeholder="Enter Your Message"
                                        name="message"
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="captcha-container">
                                <ClientCaptcha captchaCode={(code) => { setCaptchaCode(code); }} retry={true} charsCount={6} width={200} />
                                <input
                                    type="text"
                                    name="captcha"
                                    value={captcha}
                                    onChange={(e) => setCaptcha(e.target.value)}
                                />
                                <button className="com-submit-btn" type="submit">
                                    Submit
                                </button>
                            </div>
                            <div className="contact-us-btn-com"></div>
                        </form>
                    </div>
                    <div className="con-rightt-side">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.675688465143!2d73.90490531420443!3d18.54355207331231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c141f7a349d5%3A0x369a93c2d7dfa1b7!2sEllora%20Infotech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1672218502519!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            title="Company address"
                        ></iframe>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
                transition={Flip}
            />

        </>
    )
}

export default Contact