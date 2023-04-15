import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/marketing.css";
import {link} from "../components/link"
const BlogsView = () => {
  const [postInfo, setPostInfo] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        fetch(`${link[0].blog}/post/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo)
            })
        })
    }, [postInfo])

    if (!postInfo) return '';
  return (
    <>
      <div className="blogs-view-section-1-banner">
        <img src={`${link[0].root}${postInfo[0].cover}`} alt="" />
      </div>
      <div className="blogs-view-section-banner">
        <h1>{postInfo[0].title}</h1>
      </div>
      <div className="blogs-view-section-1">

      <div className="content" dangerouslySetInnerHTML={{ __html: postInfo[0].content }} />



        {/* <div className="blogs-view-section-1-container">
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
      <div className="blogs-view-section-2">
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
        <div className="blogs-view-section-3">
          <h1>Results</h1>
          <p>
            Optimized Irrigation planning which reduced water wastage by 30%.
            Tree data analysis and real time insights on tree requirements with
            respect to water, fertilizer and health, and other attribute this
            data provided agility to the system which in return helped in making
            decisions on actionable in real time. Total production increase by
            40% and the quality of the dates also improved.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default BlogsView;
