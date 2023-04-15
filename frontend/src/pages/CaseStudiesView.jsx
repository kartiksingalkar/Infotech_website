import React from "react";
import Images from "../components/Imgimport";
import "../styles/marketing.css";

const CaseStudiesView = () => {
  return (
    <>
      <div className="case-view-section-1-banner">
        <img src={Images.case_view_banner} alt="" />
      </div>
      <div className="case-view-title">
        <h1>Case studies view</h1>
      </div>
      <div className="case-view-section-1">
        <div className="case-view-section-1-container">
          <h1>The Overview</h1>
          <h3>Introduction</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit,consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna
          </p>
        </div>
      </div>
      <div className="case-view-section-2">
        <h1>Solutions</h1>
        <p>
          Using GIS based survey which consisted of attributes which were
          essential in the production and quality of the date trees, we captured
          GPS location of every tree and marked them with allocated Digital
          codes and geo-tagging them. Details of the farm, cultivator, tree code
          and number were compiled. Details of number of fronds, their average
          length and average birth of the trunk were also captured and stored.
          Each tree had a unique number and was photographed. All the data was
          then stored in a cloud-based Farm ERP system which was integrated with
          the GIS system. From Pesticides, water level to temperature all Data
          was maintained into ERP as each date tree were given different level
          of inputs to measure and find the right combination.
        </p>
        <p>
          The dates who quality was category as premium, their parameters were
          captured and new plantation which was planned using GIS was RESULTS
          done using above parameters and monitored.
        </p>
        <div className="case-view-section-3">
          <h1>Results</h1>
          <p>
            Optimized Irrigation planning which reduced water wastage by 30%.
            Tree data analysis and real time insights on tree requirements with
            respect to water, fertilizer and health, and other attribute this
            data provided agility to the system which in return helped in making
            decisions on actionable in real time. Total production increase by
            40% and the quality of the dates also improved.
          </p>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesView;
