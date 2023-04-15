import React ,{useEffect}from "react";
import "../styles/homenew.css";
import Images from "./Imgimport";
import { Link } from "react-router-dom";

const WhatWeoffer = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className="whatwe-container">
        <p className="whatwe-para-main">What We Offer !</p>

        <div className="whatWe-cards">
          <div className="card-1">
            <Link to="/digital-marketing" replace>
              <div className="card-1-flex">
                <img
                  className="card-icon1"
                  src={Images.icon1}
                  alt="icon not found"
                />
                <span className="card-para1">Digital Marketing</span>
              </div>
            </Link>
          </div>
          <div className="card-1">
            <Link to="/mobile-development">
              <div className="card-1-flex">
                <img
                  className="card-icon1"
                  src={Images.icon2}
                  alt="icon not found"
                />
                <span className="card-para1">Mobile App</span>
              </div>
            </Link>
          </div>
          <div className="card-1">
            <Link to="/web-development">
              <div className="card-1-flex">
                <img
                  className="card-icon1"
                  src={Images.icon3}
                  alt="icon not found"
                />
                <span className="card-para1">Web Development</span>
              </div>
            </Link>
          </div>
          <div className="card-1">
            <Link to="/uiux">
              <div className="card-1-flex">
                <img
                  className="card-icon1"
                  src={Images.icon4}
                  alt="icon not found"
                />
                <span className="card-para1">UI / UX Designing</span>
              </div>
            </Link>
          </div>
          <div className="card-1">
          <Link to="/hrms">
            <div className="card-1-flex">
              <img
                className="card-icon1"
                src={Images.icon5}
                alt="icon not found"
              />
              <span className="card-para5">Custom HRMS Solution</span>
            </div>
            </Link>
          </div>
          <div className="card-1">
          <Link to="/erp">
            <div className="card-1-flex">
              <img
                className="card-icon1"
                src={Images.icon6}
                alt="icon not found"
              />
              <span className="card-para5">Custom ERP Solution</span>
            </div>
            </Link>
          </div>
          <div className="card-1">
          <Link to="/crm">
            <div className="card-1-flex">
              <img
                className="card-icon1"
                src={Images.icon7}
                alt="icon not found"
              />
              <span className="card-para5">Custom CRM Solution</span>
            </div>
            </Link>
          </div>
          <div className="card-1">
          <Link to="/b2b_marketing">
            <div className="card-1-flex">
              <img
                className="card-icon1"
                src={Images.icon8}
                alt="icon not found"
              />
              <span className="card-para5">B2B Solutions Marketing</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeoffer;
