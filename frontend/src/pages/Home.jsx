import React from "react";
import { useState,useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Images from "../components/Imgimport";
import { MdOutlineArrowForwardIos } from "react-icons/md";
// import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";
import Transaction from "../components/Transaction.js";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Cube from "../components/Cube";
import What_We_Offer from "../components/What_We_Offer";
import Testimonial from "../components/Testimonial";
import LetsTalk from "../components/LetsTalk";
import { Link } from "react-router-dom";
import AboutCompany from "../components/AboutCompany";
import WhatWeoffer from "../components/WhatWeoffer";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    window.scrollTo(0,0)
  },[])


  const particlesLoaded = useCallback(async (container) => {}, []);

  <Transaction />;

  return (
    <>
      <div className="home-container">
        <div>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: false,
              fps_limit: 50,
              interactivity: {
                detect_on: "canvas",
                events: {
                  onclick: { enable: true, mode: "push" },
                  onhover: {
                    enable: true,
                    mode: "attract",
                    parallax: { enable: false, force: 60, smooth: 10 },
                  },
                  resize: true,
                },
                modes: {
                  push: { quantity: 4 },
                  attract: { distance: 200, duration: 0.4, factor: 20 },
                },
              },
              particles: {
                color: { value: "#282A74", opacity: 0.2 },
                line_linked: {
                  color: "#282A74",
                  distance: 150,
                  enable: true,
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  attract: { enable: false, rotateX: 600, rotateY: 1200 },
                  bounce: false,
                  direction: "none",
                  enable: true,
                  out_mode: "out",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: { enable: true, value_area: 800 },
                  value: 100,
                },
                opacity: {
                  anim: {
                    enable: false,
                    opacity_min: 0.1,
                    speed: 1,
                    sync: false,
                  },
                  random: false,
                  value: 0.5,
                },
                shape: {
                  character: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400",
                  },
                  image: {
                    height: 100,
                    replace_color: true,
                    src: "images/github.svg",
                    width: 100,
                  },
                  polygon: { nb_sides: 5 },
                  stroke: { color: "#000000", width: 0 },
                  type: "circle",
                },
                size: {
                  anim: {
                    enable: false,
                    size_min: 0.1,
                    speed: 40,
                    sync: false,
                  },
                  random: true,
                  value: 5,
                },
              },
              polygon: {
                draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
                move: { radius: 10 },
                scale: 1,
                type: "none",
                url: "",
              },
              retina_detect: true,
            }}
          />
          <div className="home-section1">
            <div className="row col-md-12 col-sm-12 col-12 section-content">
              <div className="col-md-8 col-sm-6 col-6 home-carousel">
                <Carousel>
                  <Carousel.Item interval={3000}>
                    <h1>
                      A B2B Marketing Agency in India. Marketing at its finest
                      (See it to believe it)
                    </h1>
                    <LetsTalk name="Let’s grow your business" />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <h1>
                      Experience IT like never before. IT services for the Bold
                      and Ambitious.
                    </h1>
                    <LetsTalk name="Let’s grow your business" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <h1>Digital Marketing That’s Anything But Ordinary</h1>
                    <LetsTalk name="Let’s grow your business" />
                  </Carousel.Item>
                </Carousel>
              </div>
              <Cube />
            </div>
          </div>
          {/* mobile Header*/}
          <div className="mobile-home-section1">
            <div className=" mobile-section-content">
              <div className=" mobile-home-carousel">
                <Carousel>
                  <Carousel.Item interval={15000}>
                    <h1>
                      A B2B Marketing Agency in India. Marketing at its finest
                      (See it to believe it)
                    </h1>
                    <LetsTalk name="Let’s grow your business" />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                    <h1>
                      Experience IT like never before. IT services for the Bold
                      and Ambitious.
                    </h1>
                    <LetsTalk name="Let’s grow your business" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <h1>Digital Marketing That’s Anything But Ordinary</h1>
                    <LetsTalk name="Let’s grow your business" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          {/* Mobile Header End*/}
        </div>
        <AboutCompany />
        <div className="home-section2">
          <h2>
            Our mission keeps us focused and accountable, our vision propels us,
            and our values determine how successful we are.
          </h2>
          <div className="home-card-container">
            <div className=" section2-card">
              <img src={Images.Card1} alt="" />
              <div>
                <h3>Mission</h3>
                <p>
                  To establish long standing associations with our business
                  partners by committing to deliver excellent stakeholder value
                </p>
              </div>
            </div>
            <div className=" section2-card">
              <img src={Images.Card2} alt="" />
              <div>
                <h3>Vision</h3>
                <p>
                  To revolutionize the marketing and sales industry by
                  leveraging our inhouse expertise and delivering best in class
                  B2B marketing solutions
                </p>
              </div>
            </div>
            <div className=" section2-card">
              <img src={Images.Card3} alt="" />
              <div>
                <h3>Values</h3>
                <p>
                  Learning is our guiding principle. Collaboration and
                  camaraderie are what keep us going. Ellora is home to a group
                  of energetic, youthful, and varied experts who are always
                  pushing the envelope and have your best interests at heart.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <WhatWeoffer />

        {/* Mobile What we offer */}
        <div className="mobile-wwo-container">
          <h2>What we offer</h2>
          <What_We_Offer />
        </div>
        {/* Mobile What we offer */}

        <div className="home-section4">
          <h3>Our Products</h3>
          <div className="col-md-12 col-sm-12 col-12 row flip-card-container">
            <div
              className="col-md-5 col-sm-5 col-5"
              style={{ marginTop: "20px" }}
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={Images.InfotailLogo} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={Images.InfotailLogo}
                      alt=""
                      className="img-fluid"
                    />
                    <h3>Data platform</h3>
                    <p>
                      Think data intelligence, Think Infotail. It's a sales
                      engagement platform that promotes streamlined prospecting
                      and data management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 col-sm-5 col-5"
              style={{ marginTop: "20px" }}
            >
              <div className="flip-card flip-card-right ">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={Images.AvatoLogo} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <img src={Images.AvatoLogo} alt="" className="img-fluid" />
                    <h3>CRM</h3>
                    <p>
                      Our comprehensive customer relationship management (CRM)
                      system, Aviato, manages the entire customer lifecycle and
                      offers real-time data providing exceptional customer
                      experiences from lead through opportunity, sales order,
                      fulfillment, renewal, upsell, and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 col-sm-5 col-5"
              style={{ marginTop: "20px" }}
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={Images.GreenspaceLogo} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={Images.GreenspaceLogo}
                      alt=""
                      className="img-fluid"
                    />
                    <h3>HRMS</h3>
                    <p>
                      Green Space is our HRMS software that encompasses all the
                      facets of HR management right from onboarding to exit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 col-sm-5 col-5"
              style={{ marginTop: "20px" }}
            >
              <div className="flip-card flip-card-right ">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={Images.PipepiperLogo} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={Images.PipepiperLogo}
                      alt=""
                      className="img-fluid"
                    />
                    <h3>ERP</h3>
                    <p>
                      All your business processes integrated into one software
                      platform, Ellora’s ERP software is fully customizable,
                      easy to use, and insightful. Foster increased productivity
                      and skyrocketing revenue with our ERP systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-section5">
          <h3>Why Choose Us ?</h3>
          <div className="col-md-12 col-sm-12 row wcu-container">
            <div className="col-md-3 col-sm-3">
              <div className="section5-cards">
                <img src={Images.Client} alt="" />
                <h4>Client Oriented</h4>
                <p>
                  Your Business is Our Priority. We Don't Just Build Solutions -
                  We Build Relationships
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="section5-cards">
                <img src={Images.Creativity} alt="" />
                <h4>Creativity</h4>
                <p>
                  We Don't Do Boring. We Do Creative. From Imagination to
                  Creation - That's Our Forte
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="section5-cards">
                <img src={Images.Meeting} alt="" />
                <h4>Meeting Deadlines</h4>
                <p>
                  Deadlines are Not Just Dates, They are Commitments. We Deliver
                  Results, On Time Every Time
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="section5-cards">
                <img src={Images.Success} alt="" />
                <h4>A Plan for Success</h4>
                <p>
                  Building Solutions that Propel Your Business Forward. From
                  Concept to Launch - We've Got You Covered
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Section */}
        <div className="home-section6">
          <h3>Some Of Our Clients</h3>
          <div className="col-md-12 col-sm-12 col-12 row hexagon-container">
            <div className="col-md-3 col-sm-3 col-3 hexagon-cards">
              <div className="crossfade">
                <img src={Images.Cisco} alt="" className="img-fluid" />
                <img src={Images.Opentext} alt="" className="img-fluid" />
                <img src={Images.Singlestore} alt="" className="img-fluid" />
                <img src={Images.Sonrai} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-3 hexagon-cards">
              <div className="crossfade">
                <img src={Images.Salesforce} alt="" className="img-fluid" />
                <img src={Images.Zoom} alt="" className="img-fluid" />
                <img src={Images.Adobe} alt="" className="img-fluid" />
                <img src={Images.Sumologic} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-3 hexagon-cards">
              <div className="crossfade">
                <img src={Images.Emplifi} alt="" className="img-fluid" />
                <img src={Images.Paloalto} alt="" className="img-fluid" />
                <img src={Images.Schneider} alt="" className="img-fluid" />
                <img src={Images.Gartner} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-3 hexagon-cards">
              <div className="crossfade">
                <img src={Images.Dremio} alt="" className="img-fluid" />
                <img src={Images.Cortex} alt="" className="img-fluid" />
                <img src={Images.Microsoft} alt="" className="img-fluid" />
                <img src={Images.Rockwell} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-12 row hexagon-container hexagon-container-bottom">
            <div className="col-md-4 col-sm-4 col-4 hexagon-cards  hexagon-cards-left ">
              <div className="crossfade crossfade-left">
                <img src={Images.Baesystem} alt="" className="img-fluid" />
                <img src={Images.Mercer} alt="" className="img-fluid" />
                <img src={Images.Vmware} alt="" className="img-fluid" />
                <img src={Images.Eightx8} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-4 hexagon-cards">
              <div className="crossfade">
                <img src={Images.Globalshop} alt="" className="img-fluid" />
                <img src={Images.Bottomline} alt="" className="img-fluid" />
                <img src={Images.Gala} alt="" className="img-fluid" />
                <img src={Images.Truein} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-4 hexagon-cards hexagon-cards-right">
              <div className="crossfade crossfade-right">
                <img src={Images.Cart} alt="" className="img-fluid" />
                <img src={Images.Gegamartech} alt="" className="img-fluid" />
                <img src={Images.Niit} alt="" className="img-fluid" />
                <img src={Images.Cloudxchange} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="home-section-digital">
          <h3>Digital Expertise</h3>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={Images.instagram} alt="" />
              </div>
              <div className="slide">
                <img src={Images.twitter} alt="" />
              </div>
              <div className="slide">
                <img src={Images.facebook} alt="" />
              </div>
              <div className="slide">
                <img src={Images.glb} alt="" />
              </div>
              <div className="slide">
                <img src={Images.linkedin} alt="" />
              </div>
              <div className="slide">
                <img src={Images.gads} alt="" />
              </div>
              <div className="slide">
                <img src={Images.instagram} alt="" />
              </div>
              <div className="slide">
                <img src={Images.twitter} alt="" />
              </div>
              <div className="slide">
                <img src={Images.facebook} alt="" />
              </div>
              <div className="slide">
                <img src={Images.glb} alt="" />
              </div>
              <div className="slide">
                <img src={Images.linkedin} alt="" />
              </div>
              <div className="slide">
                <img src={Images.gads} alt="" />
              </div>
              <div className="slide">
                <img src={Images.linkedin} alt="" />
              </div>
              <div className="slide">
                <img src={Images.gads} alt="" />
              </div>
              <div className="slide">
                <img src={Images.twitter} alt="" />
              </div>
              <div className="slide">
                <img src={Images.facebook} alt="" />
              </div>
              <div className="slide">
                <img src={Images.glb} alt="" />
              </div>
              <div className="slide">
                <img src={Images.linkedin} alt="" />
              </div>
              <div className="slide">
                <img src={Images.twitter} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}

        <div className="testimonials-container">
          <h3>Testimonials</h3>
          <Testimonial />
        </div>

        {/* Mobile Client Section */}
        <div className="soc-container">
          <h3>Some Of Our Clients</h3>
          <div className="home-section-digital">
            <div className="slider">
              <div className="slide-track">
                <div className="slide mobile-slide">
                  <img src={Images.Cisco} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Opentext} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Singlestore} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Sonrai} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Salesforce} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Zoom} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Adobe} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Sumologic} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Emplifi} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Paloalto} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Schneider} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Gartner} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Dremio} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Cortex} alt="" />
                </div>
                <div className="slide mobile-slide">
                  <img src={Images.Microsoft} alt="" />
                </div>
              </div>
              <div className="slide-track slide-track-revers"></div>
            </div>
          </div>
        </div>

        {/* Testimonials End*/}
        <div>
          {/* <ContactForm section= "home_contact"/> */}
          <Contact section= "home_contact"/>
        </div>
      </div>
    </>
  );
};

export default Home;
