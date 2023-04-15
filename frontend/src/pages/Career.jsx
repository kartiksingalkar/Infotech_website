import React, { useState } from "react";
import "../styles/services.css";
import Images from "../components/Imgimport";
import Faq from "react-faq-component";
import { BsCheckSquareFill } from "react-icons/bs";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import HiringForm from "../components/HiringForm";

const Career = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const hiringData = [
    {
      job: "Sales Intern",
      jobType: "Full Time",
    },
    {
      job: "Digital Marketing Executive/Intern",
      jobType: "Full Time",
    },
    {
      job: "Content Writer",
      jobType: "Work From Home",
    },
    {
      job: "BDE - Inside Sales",
      jobType: "Full Time",
    },
  ];

  const style = { color: "#21B8C4", fontSize: "1.5em", paddingRight: "10px" };
  const data = {
    rows: [
      {
        title: "HR Recruiters (B2B & IT Industry)",
        content: (
          <p>
            <hr></hr>Promoting brands using the internet and other types of
            digital communication to interact with potential clients is known as
            digital marketing, sometimes known as online marketing. You need a
            establishing a successful digital marketing job is not difficult.
          </p>
        ),
      },
      {
        title: "DGE & Sr. Demand Generation Executives",
        content: (
          <p>
            <hr></hr>For a successful digital marketing plan, you must:{" "}
            <br></br>
            <br></br>• Define your objectives <br></br>• Establish Your Target
            Market <br></br>• Create Personas <br></br>• Create a Budget "
          </p>
        ),
      },
      {
        title: "Appointment Generation Executives",
        content: (
          <p>
            <hr></hr>Marketing is the key to attracting and getting leads from
            them. Businesses will continue to use traditional advertising the
            quick transition, they have realised that adopting digital is
            companies in India.
          </p>
        ),
      },
      {
        title: "Operation Manager",
        content: (
          <p>
            <hr></hr>The essential advantage of digital marketing is that it
            allows you to contact a specific audience cost-effectively and
            quantifiable. As a marketing channel, this comprises email, social
            the potential to produce social currency.
          </p>
        ),
      },
    ],
  };
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  const config = {};
  return (
    <>
      <div className="career-section-1">
        <div className="career-header">
          <img src={Images.career_banner} alt="" />
        </div>
        <div className="career-header-title">
          <h1>Pursue Your Passion</h1>
        </div>
      </div>
      <div className="">
        <div className="career-section-2  career-container">
          <div className="career-section-join">
          <div className="career-child1">
            <h1>Perks of Working With Us.</h1>
            <p>
              We are constantly looking for skilled, creative, and dedicated
              women who are ready to grow their careers with us. If you wish to
              experience the spirit of a women-based company while benefiting
              from the support of a team-oriented, established company, browse
              our vacant roles.
            </p>
            <h2>Explore A Career At Ellora Infotech</h2>
            
            <h3>So you come work here and you get...</h3>
            <h6>
              <BsCheckSquareFill style={style} />
              To market market-leading and innovative products/services
            </h6>
            <h6>
              <BsCheckSquareFill style={style} />
              To be on a hyper-growth rocket ship with an amazing culture and
              colleagues.
            </h6>
            <h6>
              <BsCheckSquareFill style={style} />
              To work with an almost all Women GTM team!
            </h6>
            <h6>
              <BsCheckSquareFill style={style} />
              To work with an almost all Women GTM team!
            </h6>
            <h6>
              <BsCheckSquareFill style={style} />
              To work with an almost all Women GTM team!
            </h6>
            </div>

            <div className="career-child2">
            <img src={Images.career_2} alt="c1" /> 
            </div>
          
        
          </div>
          
             
        </div>

        <div className="career-section-3 career-container">
          <h3>We Are Hiring!</h3>
          {hiringData.map((data, index) => (
            <div key={index}>
              <div className="carrer-section-hiring">
                <div className="career-content">
                  <h2>{data.job}</h2>
                  <p>{data.jobType}</p>
                </div>

                <Popup
                 open={open} closeOnDocumentClick onClose={closeModal}
                  trigger={
                    <div className="view_apply_btn">
                      <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        className="career-apply-btn"
                      >
                        View Role & Apply
                      </button>
                    </div>
                  }
                  modal
                  nested
                >
                  <a className="close" onClick={closeModal}>
                    &times;
                  </a>
                  <HiringForm />
                </Popup>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>

        <div className="career-section-4 career-container">
          <h1>Let's Work Together</h1>
          <p>
            Our team has 100+ professionals in all the particular fields who
            would be working closely. Kindly share your resume at
            hr@ellorainfotech.com if you are interested to grow your career.
          </p>
        </div>
        <div className="career-section-5">
          <h3>FAQ's</h3>
          <div className="faq">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
