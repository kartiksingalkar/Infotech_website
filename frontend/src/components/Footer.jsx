import React, { useState, useEffect } from "react";
import "../styles/components.css";
import { Link } from "react-router-dom";
import Images from "./Imgimport";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Footer = () => {
  const [newsletter, setNewsletter] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handelNewsletter = async (e) => {
    e.preventDefault();
    // const response = await fetch(
    //   "https://mainapi.ellorainfotech.com/api/newsletter",
    //   {
    //     // const response = await fetch('http://localhost:4000/api/newsletter', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ newsletter }),
    //   }
    // );
    // const json = await response.json();

    // if (response.ok) {
    //   setError("");
    //   toast.success(json.msg);
    // }
    // if (!response.ok) {
    //   setError(json.error);
    //   toast.error(json.error);
    // }

    // const url = 'http://localhost/project/infotech/newsletter.php';
    const url = 'https://demoapi.ellorainfotech.com/php/newsletter.php';

            let fData = new FormData();
            fData.append('email', newsletter);

            axios.post(url, fData)
                .then(response => {
                    if (response.data === "Thank you for submitting")
                        toast.success(response.data)
                    else
                        toast.error(response.data)
                    // console.log(response.data)
                })
                .catch(error => toast.error(error));
  };

  return (
    <>
      <footer className="footer">
        <div className="col-md-12 col-sm-12 col-12 row footer-wrapper">
          <div className="col-md-6 col-sm-6 col-6">
            <div className="footer-left-top">
              <Link to="/">
                <img src={Images.footerlogo} />
              </Link>
              <ul>
                <a href="#">
                  <li>
                    <img src={Images.instaicon} />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <img src={Images.fbicon} />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <img src={Images.twittericon} />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <img src={Images.linkedinicon} />
                  </li>
                </a>
              </ul>
            </div>
            <div className="footer-left-bottom row col-md-12">

              <div className="col-md-5 row footer-left-bottom-solution">
                <h3>Marketing Solutions</h3>
                <a href="/digital-marketing">
                  <span>Digital Marketing </span>
                </a>
                <a href="/b2b_marketing">
                  <span>B2B Marketing Solutions </span>
                </a>
                <a href="/event_support">
                  <span>Event Support Services </span>
                </a>
                <a href="/database_services">
                  <span>B2B Database </span>
                </a>
              </div>
              <div className="col-md-4 footer-left-bottom-solution">
                <h3>IT Solutions</h3>
                <a href="/mobile-development">
                  <span>Mobile App Development</span>
                </a>
                <a href="/web-development">
                  <span>Web Development </span>
                </a>
                <a href="/uiux">
                  <span>UI/UX Designing</span>
                </a>
                <a href="/hrms">
                  <span>Custom HRMS Solutions</span>
                </a>
                <a href="/erp">
                  <span>Custom ERP Solutions</span>
                </a>
                <a href="/crm">
                  <span>Custom CRM Solutions</span>
                </a>
              </div>
              <div className="col-md-4 footer-left-bottom-quick-links">
                <h3>Quick Links</h3>
                <a href="/about">
                  <span>About Us</span>
                </a>
                <a href="/market">
                  <span>Marketing Solutions</span>
                </a>
                <a href="/it-solutions">
                  <span>IT Solutions</span>
                </a>
                <a href="/career">
                  <span>Career</span>
                </a>
                <a href="/contactus">
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-6">
            <div className="row col-md-12 col-sm-12 col-12">
              {/* <div className="col-md-4 col-sm-4 col-4 footer-iso">
                <img src={Images.iso1} />
                <img src={Images.iso2} />
              </div> */}
              <div className="col-md-12 col-sm-12 col-12">
                <div className="footer-right-top">
                  <h5>Subscribe to our Newsletters</h5>
                  <form>
                    <input
                      type="email"
                      placeholder="Email Address"
                      onChange={(e) => {
                        setNewsletter(e.target.value);
                      }}
                      value={newsletter}
                    ></input>
                    <button onClick={handelNewsletter}>Subscribe</button>
                  </form>
                  {error && <div style={{ color: "red" }}>{error}</div>}
                  <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div></div>
                    <p>
                      <img src={Images.location} />
                      <span className="span1">
                        IN: Unit 8 & 9, 4th EFC MARISOFT-1, Marigold Premises
                      </span>
                      <br></br>
                      <span className="span2">
                        Kalyani Nagar, Pune, Maharashtra- 411014
                      </span>
                    </p>
                    <p>
                      <img src={Images.call} />
                      <span className="span1">
                        <a href="tel:+919156688817">IN : +91 - 91566 88817</a>
                      </span>
                    </p>
                    <p>
                      <img src={Images.location} />
                      <span className="span1">
                        US: 4049 Carmel View Rd #78 in the
                      </span>
                      <br></br>
                      <span className="span2">
                        City of San Diego, California, 92130
                      </span>
                    </p>
                    <p>
                      <img src={Images.call} />
                      <span className="span1">
                        <a href="tel:+1(315)-688-0681">
                          US : +1 (315)-688-0681
                        </a><span> / </span>
                        <a href="tel:+1 (310) 622-5511">+1 (310) 622-5511</a>
                      </span>
                    </p>
                    <p>
                      <a href="mailto:info@ellorainfotech.com">
                        <img src={Images.emailicon} />
                        <span className="span1">info@ellorainfotech.com</span>
                      </a>
                      <br></br>
                      <a href="mailto:sales@ellorainfotech.com">
                        <span className="span2">
                          sales@ellorainfotech.com
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="footer-credit">
          <p>
            &copy; Ellora Infotech 2023. All right reserved. |{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </footer>

      {/* Tab View footer */}
      <footer className="tab-footer">
        <div className=" row footer-wrapper">
          <div className="col-md-12 col-sm-12 col-12 tab-footer-first-container">
            <div className="col-md-6 col-sm-6 col-6 tab-footer-social">
              <Link to="/">
                <img src={Images.footerlogo} className="footer-tab-logo" />
              </Link>
            </div>
            <div className="col-md-6 col-sm-6 col-6 footer-tab-newsletter">
              <h5>Subscribe to our Newsletters</h5>
              <form>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => {
                      setNewsletter(e.target.value);
                    }}
                    value={newsletter}
                  ></input>
                  <button onClick={handelNewsletter}>Subscribe</button>
                </div>
              </form>
              {error && <div style={{ color: "red" }}>{error}</div>}
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-12 tab-footer-second-container">
            <div className="tab-footer-services">
              <div className="tab-footer-services-inner">
                <div className="tab-services">
                  <h3>Marketing Solutions</h3>
                  <a href="/digital-marketing">
                    <span>Digital Marketing </span>
                  </a>
                  <a href="/b2b_marketing">
                    <span>B2B Marketing Solutions </span>
                  </a>
                  <a href="/event_support">
                    <span>Event Support Services </span>
                  </a>
                  <a href="/database_services">
                    <span>B2B Database </span>
                  </a>
                </div>
                <div className="tab-services">
                  <h3>IT Solutions</h3>
                  <a href="/mobile-development">
                    <span>Mobile App Development</span>
                  </a>
                  <a href="/web-development">
                    <span>Web Development </span>
                  </a>
                  <a href="/uiux">
                    <span>UI/UX Designing</span>
                  </a>
                  <a href="/hrms">
                    <span>Custom HRMS Solutions</span>
                  </a>
                  <a href="/erp">
                    <span>Custom ERP Solutions</span>
                  </a>
                  <a href="/crm">
                    <span>Custom CRM Solutions</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-footer-services tab-footer-ql">
              <h3>Quick Links</h3>
              <div className="mobile-footer-inner-part">
                <div className="tab-footer-ql-inner">
                  <a href="/about">
                    <span>About Us</span>
                  </a>
                  <a href="/solution">
                    <span>Solutions</span>
                  </a>
                  <a href="/casestudies">
                    <span>Case Studies</span>
                  </a>
                  <a href="/career">
                    <span>Career</span>
                  </a>
                  <a href="/blogs">
                    <span>Blogs</span>
                  </a>
                  <a href="/contactus">
                    <span>Contact Us</span>
                  </a>
                </div>
                <div className="mobile-footer-contact-info-container">
                  <h3>Contact Information</h3>
                  <div className="mobile-footer-contact-inner">
                    <div className="mobile-footer-contact-info">
                      <div className="contact-location-info">
                        <div>
                          <img src={Images.location} />
                        </div>
                        <div>
                          <p>
                            Unit 8 & 9, 4th EFC MARISOFT-1, Marigold Premises
                            Kalyani Nagar, Pune, Maharashtra- 411014
                          </p>
                        </div>
                      </div>

                      <div className="contact-location-info">
                        <div>
                          <img src={Images.call} alt="" />
                        </div>
                        <div>
                          <p>
                            <span>
                              <a href="tel:+919156688817">
                                IN : +91 - 91566 88817
                              </a>
                            </span>
                            <br></br>
                          </p>
                        </div>
                      </div>

                      <div className="contact-location-info">
                        <div>
                          <img src={Images.location} />
                        </div>
                        <div>
                          <p>
                            US: 4049 Carmel View Rd #78 in the City of San Diego, California, 92130
                          </p>
                        </div>
                      </div>

                      <div className="contact-location-info">
                        <div>
                          <img src={Images.call} alt="" />
                        </div>
                        <div>
                          <p>
                            <span>
                              <a href="tel:+1 (315)-688-0681">
                                US : +1 (315)-688-0681
                              </a>
                              <br></br>
                              <a href="tel:+1 (310) 622-5511">
                                +1 (310) 622-5511
                              </a>
                            </span>
                            <br></br>

                          </p>
                        </div>
                      </div>


                      <div className="contact-location-info">
                        <div>
                          <img src={Images.emailicon} />
                        </div>
                        <div>
                          <p>
                            <a href="mailto:info@ellorainfotech.com">
                              <span>info@ellorainfotech.com</span>
                            </a>
                            <br></br>
                            <a href="mailto:sales@ellorainfotech.com">
                              <span>sales@ellorainfotech.com</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="footer-mobile-social-icons">
                      <ul>
                        <a href="#">
                          <li>
                            <img src={Images.instaicon} alt="" />
                          </li>
                        </a>
                        <a href="#">
                          <li>
                            <img src={Images.fbicon} alt="" />
                          </li>
                        </a>
                        <a href="#">
                          <li>
                            <img src={Images.twittericon} alt="" />
                          </li>
                        </a>
                        <a href="#">
                          <li>
                            <img src={Images.linkedinicon} alt="" />
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="tab-footer-iso">
              <img src={Images.iso1} alt='' />
              <img src={Images.iso2} alt='' />
            </div> */}
          </div>
          <div className="tab-footer-contact-info-container">
            <h3>Contact Information</h3>
            <div className="tab-footer-contact-inner">
              <div className="tab-footer-contact-info">
                <p>
                  <img src={Images.location} alt="" />
                  <span className="span1">
                    Unit 8 & 9, 4th EFC MARISOFT-1, Marigold Premises
                  </span>
                  <br></br>
                  <span className="span2">
                    Kalyani Nagar, Pune, Maharashtra- 411014
                  </span>
                </p>
                <p>
                  <img src={Images.call} alt="" />
                  <span className="span1">
                    <a href="tel:+919156688817">IN : +91 - 91566 88817</a>
                  </span>
                  <br></br>
                  <span className="span2">
                    <a href="tel:+13156880681">US : +1 (315)-688-0681</a>
                  </span>
                </p>

                <p>
                  <img src={Images.location} alt="" />
                  <span className="span1">
                    US: 4049 Carmel View Rd #78 in the

                  </span>
                  <br></br>
                  <span className="span2">
                    City of San Diego, California, 92130
                  </span>
                </p>

                <p>
                  <img src={Images.call} alt="" />
                  <span className="span1">
                    <a href="tel:+1 (315)-688-0681">US : +1 (315)-688-0681 / </a>
                  </span>
                  <br></br>
                  <span className="span2">
                    <a href="tel:+1 (310) 622-5511">+1 (310) 622-5511</a>
                  </span>
                </p>

                <p>
                  <a href="mailto:info@ellorainfotech.com">
                    <img src={Images.emailicon} />
                    <span className="span1">info@ellorainfotech.com</span>
                  </a>
                </p>
                <p>
                  <a href="mailto:sales@ellorainfotech.com">
                    <span className="span1">sales@ellorainfotech.com</span>
                  </a>
                </p>
              </div>
              <div className="footer-tab-social-icons">
                <ul>
                  <a href="#">
                    <li>
                      <img src={Images.instaicon} alt="" />
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <img src={Images.fbicon} alt="" />
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <img src={Images.twittericon} alt="" />
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <img src={Images.linkedinicon} alt="" />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="tab-footer-copyright">
          <p>
            &copy; Ellora Infotech 2023. All right reserved. |{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </footer>
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

export default Footer;
