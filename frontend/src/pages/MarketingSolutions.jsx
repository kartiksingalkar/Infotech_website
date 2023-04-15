import React from "react";
import "../styles/marketing.css";
import Images from "../components/Imgimport";
import Card from "../components/Card";
import Faq from "react-faq-component";
import { cardData } from "./data";
import {Link} from 'react-router-dom'

export default function MarketingSolutions() {
  const data = {
    rows: [
      {
        title: "What is Digital Marketing?",
        content: (
          <p>
            <hr />
            B2B marketing is the process of promoting your products or services
            to other businesses. It involves creating targeted marketing
            strategies that help you reach decision-makers within other
            companies. B2B marketing is important because it allows you to
            establish your brand as a thought leader in your industry, build
            relationships with other businesses, and generate leads that can
            turn into long-term customers.
          </p>
        ),
        
      },
      {
        title: "How to do digital marketing?",
        content: (
          <p>
            <hr />
            Some common B2B marketing tactics include content marketing, social
            media marketing, email marketing, search engine optimization, paid
            advertising, and account-based marketing. Each of these tactics can
            be tailored to your specific industry and target audience to help
            you achieve your marketing goals.
          </p>
        ),
      },
      {
        title: "Why is digital marketing important?",
        content: (
          <p>
            <hr />
            There are several key metrics that can be used to measure the
            effectiveness of your B2B marketing campaigns. These may include
            website traffic, leads generated, conversion rates, engagement rates
            on social media, and return on investment. By regularly analyzing
            these metrics, you can determine which marketing tactics are working
            and which ones may need to be adjusted.
          </p>
        ),
      },
      {
        title: "What are the impact of digital marketing on business?",
        content: (
          <p>
            <hr />
            Some best practices for B2B lead generation include creating buyer
            personas, offering valuable content that addresses the pain points
            of your target audience, using landing pages to capture contact
            information, optimizing your website for search engines, and
            nurturing leads with targeted email campaigns. These practices can
            help you generate high-quality leads that are more likely to turn
            into paying customers.
          </p>
        ),
      },
      {
        title: "Why digital marketing is important for educational institutes?",
        content: (
          <p>
            <hr />
            B2B marketing services can provide your business with the expertise
            and resources needed to create effective marketing strategies that
            generate leads and drive growth. By working with a B2B marketing
            agency, you can access a wide range of marketing services, including
            market research, branding, content creation, social media
            management, and more. These services can help you reach your target
            audience more effectively, increase brand awareness, and ultimately
            grow your business
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
  console.log(cardData.hrms);
  return (
    <>
      <div className="case-view-section-1-banner">
        <img src={Images.market_banner} alt="market_banner"  />
      </div>
      <div className="case-view-title">
        <h1>Marketing Solutions</h1>
      </div>

      <div className="marketing_card_solutions">
        <div id="" className="card-section-container-1 ">
          {cardData.mrs.map((ad) => (
            <div className="cards-2" key={ad.title}>
              <Card {...ad} />
            </div>
          ))}
        </div>
      </div>

      <div className="market_quetion">
        <div className="digital-section-2">
          <h3>
            Want to know more?
            <Link to='/contactus'><strong className="strong_market"> Let’s talk </strong></Link>
          </h3>
          <h4>FAQS</h4>
          <div className="faq_market">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
      </div>
    </>
  );
}
