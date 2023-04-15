import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components.css";
import Images from "./Imgimport";

const Services = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <div className="services-comp-container">
        <div className="col-md-12 col-lg-12 col-sm-12 col-12 row services-comp-card-section">
          <div className="col-md-3  col-sm-6 col-6 services-comp-card" >
            <Link to='/digital-marketing/smm' replace >
              <img src={(Images.promotion_icon)} alt='' className='img-fluid' />
              <h4>Digital Marketing</h4>
            </Link>
          </div>
          <div className="col-md-3  col-sm-6 col-6 services-comp-card">
            <Link to="/mobile-development" replace >
              <img src={Images.app_dev} alt='' className='img-fluid' />
              <h4>Mobile App Development </h4>
            </Link>
          </div>
          <div className="col-md-3  col-sm-6 col-6 services-comp-card">
            <Link to="/web-development" >
              <img src={Images.web_dev} className='img-fluid' />
              <h4>Web Development </h4>
            </Link>
          </div>
          <div className="col-md-3  col-sm-6 col-6 services-comp-card">
            <Link to="/uiux" >
              <img src={Images.ui_ux} className='img-fluid' />
              <h4>UI UX Designing</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-12 col-lg-12 col-sm-12 col-12 row services-comp-card-section">
          <div className="col-md-3  col-sm-6 col-6 services-comp-card">
            <Link to="/hrms" >
              <img src={Images.Hrms_icon} className='img-fluid' />
              <h4>Custom HRMS Solutions</h4>
            </Link>
          </div>
          <div className="col-md-3  col-sm-6 col-6 services-comp-card">
            <Link to="/crm" >
              <img src={Images.crm_services} className='img-fluid' />
              <h4>Custom CRM Solutions</h4>
            </Link>
          </div>
          <div className="col-md-3  col-sm-6 col-6 services-comp-card">
            <Link to="/erp" >
              <img src={Images.erp_services} className='img-fluid' />
              <h4>Custom ERP Solutions</h4>
            </Link>
          </div>
          <div className="col-md-3  col-sm-6 col-6 services-comp-card">
            <Link to="/b2b/lg" >
              <img src={Images.b2b_services} className='img-fluid' />
              <h4>B2B Solution Marketing</h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
