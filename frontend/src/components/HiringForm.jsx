import React, { useState } from "react";
import "../styles/components.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

const HiringForm = () => {
  const [file, setFile] = useState("")
  const formik = useFormik({
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(1)
        .max(25)
        .required("Please enter a valid first name"),
      email: Yup.string().email().required("Please enter a valid email"),
      contact: Yup.string()
        .phone()
        .max(10)
        .required("Please enter a valid contact number"),
      post_name: Yup.string().required("Please enter a valid post name"),
      emp_status: Yup.string().required("Please enter a valid employee status"),
      linkedin_url: Yup.string().required("Please enter valid linkedin URL"),
    //  myfile: Yup.mixed().required('A file is required')
    }),

    initialValues: {
      full_name: "",
      email: "",
      contact: "",
      post_name: "",
      emp_status: "",
      linkedin_url: "",
    },
    onSubmit: function (values, action) {
      // console.log(values);
      handleSubmit(values, action);
    },
  });
  const handleSubmit = async (values, action) =>{
    // e.preventDefault()
    const data = new FormData();
    data.set("values", JSON.stringify(values))
    data.set("file", file[0])
    const response = await fetch(`https://mainapi.ellorainfotech.com/api/hiringform`, {
    // const response = await fetch(`http://localhost:4001/api/hiringform`, {
      method: 'POST',
      body: data,
  })
  // console.log(response)
  const json = await response.json()
  if(response.ok)
  {
    toast.success(json.msg)
    action.resetForm();

  }
  else{
    toast.error(json.err)
  }
  //   console.log(json.msg)
  // console.log("json = ",json.msg)
  }
  return (
    <div className="hiring-form-section">
      <div className="hiring-section-1">
        <h2>Full-Time Content Writer (Work From Home).</h2>
        <h4>Job Description :</h4>
        <p>
          Hiring Content Writers across Industries – Product, Fashion and Beauty
          Cosmetics, Manufacturing, Accounting Services, Logistic Services,
          Healthcare, Information Technology, Renewable Energy, Aerospace, EV
          Industries etc.
        </p>
      </div>

      <div className="hiring-section-2">
        <form action="" onSubmit={formik.handleSubmit}>
          <label htmlFor="first-name">First Name*</label>
          <br />
          <input
            type="text"
            name="full_name"
            id="first-name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.full_name && formik.touched.full_name
                ? "hiring-input-error"
                : "hiring-border-input"
            }
          />
          <br />
          <br />
          <label htmlFor="email">Email*</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.email && formik.touched.email
                ? "hiring-input-error"
                : "hiring-border-input"
            }
          />
          <br />
          <br />
          <label htmlFor="contact">Phone*</label>
          <br />
          <input
            type="text"
            id="contact"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.contact && formik.touched.contact
                ? "hiring-input-error"
                : "hiring-border-input"
            }
          />
          <br />
          <br />

          <textarea
            placeholder="Post Applying For"
            name="post_name"
            id="post_name"
            value={formik.values.post_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          <br />
          <br />
          <textarea
            placeholder="Current Employement Status"
            name="emp_status"
            id="emp_status"
            value={formik.values.emp_status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          <br />
          <br />

          <label htmlFor="linked-in">Linkedin Profile URL</label>
          <br />
          <input
            type="text"
            id="linked-in"
            name="linkedin_url"
            value={formik.values.linkedin_url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.linkedin_url && formik.touched.linkedin_url
                ? "hiring-input-error"
                : "hiring-border-input"
            }
          />
          <br />
          <br />

          <label htmlFor="myfile">Upload Resume</label>
          <input type="file" id="myfile" name="myfile" onChange={(e) => setFile(e.target.files)}></input>
          <br />
          <br />

          <button type="submit" className="hiring-btn">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default HiringForm;
