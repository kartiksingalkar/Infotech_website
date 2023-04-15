import React from "react";
import Images from "../components/Imgimport";
// import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";

const CaseStudies = () => {

  let lorem_title = "Lorem ipsum";
  let lorem_text =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,diam nonummy nibh euismod tincidunt ut laoreet dolore magna";

  return (
    <>
      <div className="case-studies-container">
        <div className="case-studies-header">
          <img src={Images.casestudies_banner} alt="" />
        </div>
        <div className="case-studies-title">
          <h1>Case Studies</h1>
        </div>
        <div className="case-study-card-container">
          <div className="col-md-12 row case-study-card-inner">
            <div className="col-md-6 col-lg-4">
              <div className="case-study-card">
                <a href="casestudies-1">
                  <img
                    src={Images.CaseStudyCard}
                    alt="banner"
                    className="img-fluid"
                  />
                </a>
                <h3>{lorem_title}</h3>
                <p>{lorem_text}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="case-study-card">
                <img
                  src={Images.CaseStudyCard}
                  alt="banner"
                  className="img-fluid"
                />
                <h3>{lorem_title}</h3>
                <p>{lorem_text}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="case-study-card">
                <img
                  src={Images.CaseStudyCard}
                  alt="banner"
                  className="img-fluid"
                />
                <h3>{lorem_title}</h3>
                <p>{lorem_text}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="case-study-card">
                <img
                  src={Images.CaseStudyCard}
                  alt="banner"
                  className="img-fluid"
                />
                <h3>{lorem_title}</h3>
                <p>{lorem_text}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="case-study-card">
                <img
                  src={Images.CaseStudyCard}
                  alt="banner"
                  className="img-fluid"
                />
                <h3>{lorem_title}</h3>
                <p>{lorem_text}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="case-study-card">
                <img
                  src={Images.CaseStudyCard}
                  alt="banner"
                  className="img-fluid"
                />
                <h3>{lorem_title}</h3>
                <p>{lorem_text}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="case-study-card">
                <img
                  src={Images.CaseStudyCard}
                  alt="banner"
                  className="img-fluid"
                />
                <h3>{lorem_title}</h3>
                <p>{lorem_text}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="case-study-card">
                <img
                  src={Images.CaseStudyCard}
                  alt="banner"
                  className="img-fluid"
                />
                <h3>{lorem_title}</h3>
                <p>{lorem_text}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="case-study-card">
                <img
                  src={Images.CaseStudyCard}
                  alt="banner"
                  className="img-fluid"
                />
                <h3>{lorem_title}</h3>
                <p>{lorem_text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="case-studies-contactus">
          {/* <ContactForm section="cs_blog"/> */}
          <Contact section="cs_blog"/>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
