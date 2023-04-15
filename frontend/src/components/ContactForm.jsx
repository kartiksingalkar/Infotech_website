import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClientCaptcha from "react-client-captcha"
import "react-client-captcha/dist/index.css"

// For contact form validation using Yup
const signupSchema = Yup.object({
  fname: Yup.string()
    .min(1)
    .max(25)
    .required("Please enter a valid first name"),
  lname: Yup.string().min(1).max(25).required("Please enter a valid last name"),
  email: Yup.string().email().required("Please enter a valid email"),
  contact: Yup.string()
    .phone()
    .max(10)
    .required("Please enter a valid contact number"),
  comp_name: Yup.string()
    .min(1)
    .max(25)
    .required("Please enter a valid Company name"),
});

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  contact: "",
  comp_name: "",
  message: "",
  service: "B2B",
  captcha: ""
};

const ContactForm = ({ section }) => {
  const [captchaCode, setCaptchaCode] = useState("")
  const [rerender, setRerender] = useState(0)

  const handelData = async (values, action) => {

    if (values.captcha === captchaCode) {
      // const response = await fetch("http://10.10.10.35:4001/api/form", {

      //   method: "POST",
      //   mode: "no-cors",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({values, section}),
      // });
      // const json = await response.json();
      // if (response.ok) {
      //   toast.success(json.msg);
      //   action.resetForm();
      //   window.location.reload(false)
      //   // setRerender((re)=> re+1)

      // }
      // if (!response.ok) {
      //   toast.error(json.error);
      // }


      const response = await fetch("http://localhost/project/infotech/form.php", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ values, section }),
      })
      console.log(response)
      // if(response.ok){
      //   console.log(response.data)
      // }


    }
    else
      toast.error("Invalid Captcha")

  }
  // Form validation
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        handelData(values, action)
      },
    });
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
                    value={values.fname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.fname && touched.fname ? "input-error" : ""}
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
                    value={values.lname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.lname && touched.lname ? "input-error" : ""}
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
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "input-error" : ""}
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
                    value={values.contact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.contact && touched.contact ? "input-error" : ""}
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
                    value={values.comp_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.comp_name && touched.comp_name ? "input-error" : ""}
                  />
                </div>
                <div className="contact-us-inputs">
                  <label>Which service are you looking for?</label>
                  <br></br>
                  <select
                    placeholder="Select which you require"
                    name="service"
                    onChange={handleChange}
                    value={values.service}>
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
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                </div>
              </div>
              <div className="captcha-container">
                <ClientCaptcha captchaCode={(code) => { setCaptchaCode(code); }} retry={true} charsCount={6} width={200} />
                <input
                  type="text"
                  name="captcha"
                  onChange={handleChange}
                  value={values.captcha}
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
  );
};

export default ContactForm;
