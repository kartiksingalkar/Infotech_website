import React from "react";
import "../styles/marketing.css";
import Images from "../components/Imgimport";
import Card from "../components/Card";
import Faq from "react-faq-component";
import { cardData } from "./data";
import {Link} from 'react-router-dom'

const DigitalMaketingMain = () => {
    const data = {
        rows: [
            {
                title: "What is digital marketing and how does it work?",
                content: (
                    <p>
                        <hr />
                        Digital marketing is a set of techniques used to promote and sell products or services through digital channels. These channels include search engines, social media platforms, email, and mobile apps. Digital marketing works by using various tactics to reach and engage with potential customers online, and to drive them to take specific actions, such as making a purchase or filling out a form.
                    </p>
                ),

            },
            {
                title: "How can digital marketing help my business?",
                content: (
                    <p>
                        <hr />
                        Digital marketing can help your business in several ways, such as increasing brand awareness, driving website traffic, generating leads, and boosting sales. By leveraging the power of digital channels, you can reach a wider audience and connect with customers where they spend most of their time - online. Digital marketing also allows for better targeting, measurement, and analysis of your marketing efforts, helping you make data-driven decisions to improve your campaigns.
                    </p>
                ),
            },
            {
                title: "What are the different types of digital marketing services?",
                content: (
                    <p>
                        <hr />
                        Digital marketing services include a range of techniques, such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, influencer marketing, and more. Each type of digital marketing has its own unique benefits and can be used to achieve different goals, depending on your business needs and target audience.
                    </p>
                ),
            },
            {
                title: "How do I know if my digital marketing campaigns are successful?",
                content: (
                    <p>
                        <hr />
                        The success of your digital marketing campaigns can be measured through various metrics, such as website traffic, click-through rates (CTR), conversion rates, and return on investment (ROI). By setting specific goals and tracking these metrics over time, you can determine the effectiveness of your campaigns and make data-driven decisions to optimize them for better performance.
                    </p>
                ),
            },
            {
                title: "How long does it take to see results from digital marketing?",
                content: (
                    <p>
                        <hr />
                        The time it takes to see results from digital marketing can vary depending on several factors, such as your industry, competition, target audience, and the specific tactics you're using. Some tactics, such as pay-per-click (PPC) advertising, can yield immediate results, while others, such as search engine optimization (SEO), may take several months to see significant improvements. It's important to have a long-term approach to digital marketing and to set realistic expectations based on your goals and timeline
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
                <img src={Images.DigitalMarketingBanner} alt="market_banner" />
            </div>
            <div className="case-view-title">
                <h1>Digital Marketing</h1>
            </div>

            <div className="marketing_card_solutions">
                <div id="" className="card-section-container-1 ">
                    {cardData.digitalMarketingCards.map((ad) => (
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

export default DigitalMaketingMain;