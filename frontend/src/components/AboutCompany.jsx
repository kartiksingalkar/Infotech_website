import React from "react";
import "../styles/homenew.css";
import Images from "./Imgimport";
import { Link } from "react-router-dom";

const AboutCompany = () => {

  // const navigate = useNavigate();

  // const redMore = () => {
  //   navigate("/about");
  // };

  return (
    <>
      <div className="aboutCompany-container">
        <div className="abtCompany-flex">
          <p className="abtcompany-para1">About The Company</p>
          <p className="abtcompany-para2">
            We are present in the market for many years with different segments,
            All companies work under the one roof of ELLORA GROUP.
          </p>
        </div>
        <div className="abtCompany-img">
          <div>
            <img src={Images.HomeAbt} alt="img not found" className="abtcompany-homeImg" />
          </div>
          <div>
            <p className="abtcompany-img-para">
              <b>Trust the team your peers trust</b><br/> Ever since its inception, Ellora
              Infotech has been at the top of its game in delivering world
              class, digital-first, data-driven, and result-oriented marketing
              solutions to our cherished and trusted clients. Established in
              Pune, Maharashtra in 2022, Ellora Infotech houses a team of
              dynamic, young, and vibrant working professionals who are
              dedicated towards achieving phenomenal results for our clients all
              year round.
            </p>
            <button   className="abtcompany-readbtn"><Link to="/about">Read More...</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
