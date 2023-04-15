import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClientCaptcha from "react-client-captcha";
import "react-client-captcha/dist/index.css";
import { FaTimes } from "react-icons/fa";

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
  captcha: "",
};

function PopupMailForm() {
  const [captchaCode, setCaptchaCode] = useState("");
  const [open, setOpen] = useState(false);
  
  const closeModal = () => {
    setOpen(false);
    document.querySelector(".stickyMailPopUp").style.display = "none";
  };

  const handelData = async (values, action) => {
    if (values.captcha === captchaCode) {
      const response = await fetch(
        "https://mainapi.ellorainfotech.com/api/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const json = await response.json();
      if (response.ok) {
        toast.success(json.msg);
        action.resetForm();
      }
      if (!response.ok) {
        toast.error(json.error);
      }
    } else toast.error("Invalid Captcha");
  };
  // Form validation
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        handelData(values, action);
      },
    });

  return (
    <>
      <div
        className="stickyMailPopUp"
        id="stickyMailPopUpID"
        style={{ display: "none" }}
      >
        <div className="home-section-contactus popupmailContainer">
          <div className="popupMailHeadingCont">
            <h3 className="popupMailHeading">
              Let’s Get To <span>Know Each Other</span>
            </h3>
            <FaTimes className="timesIcon" onClick={closeModal} />
          </div>
          <div className="res-contact-form popmailContactform">
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
                      className={
                        errors.fname && touched.fname ? "input-error" : ""
                      }
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
                      className={
                        errors.lname && touched.lname ? "input-error" : ""
                      }
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
                      className={
                        errors.email && touched.email ? "input-error" : ""
                      }
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
                      className={
                        errors.contact && touched.contact ? "input-error" : ""
                      }
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
                      className={
                        errors.comp_name && touched.comp_name
                          ? "input-error"
                          : ""
                      }
                    />
                  </div>
                  <div className="contact-us-inputs">
                    <label>Which service are you looking for?</label>
                    <br></br>
                    <select
                      placeholder="Select which you require"
                      name="service"
                      onChange={handleChange}
                      value={values.service}
                    >
                      <option value="">--Select a option--</option>
                      <option value="B2B">B2B</option>
                      <option value="IT">IT</option>
                    </select>
                  </div>
                </div>
                <div className="res-contact-container4">
                  <div className="res-contact-textarea ">
                    <label className="required">Your Message</label>
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
                  <ClientCaptcha
                    className="popMailCaptcha"
                    captchaCode={setCaptchaCode}
                    charsCount={6}
                    width={200}
                    backgroundColor={"#A6FFDA"}
                  />
                  <input
                    className="popMailCaptchaInput"
                    type="text"
                    name="captcha"
                    onChange={handleChange}
                    value={values.captcha}
                  />
                  <button
                    className="com-submit-btn popMailCaptchaBtn"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div className="contact-us-btn-com"></div>
              </form>
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
      </div>
    </>
  );
}

export default PopupMailForm;
