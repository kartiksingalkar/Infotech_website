import React from "react";
import Services from "../components/Services";
import "../styles/marketing.css";
import Faq from "react-faq-component";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { useParams } from "react-router-dom";
import LetsTalk from "../components/LetsTalk";
import Card from "../components/Card"
import { cardData } from "./data"
import VividDreams from "../components/VividDreams"



const Digital = () => {
  const data = {
    rows: [
      {
        title: "What is B2B marketing and why is it important?",
        content: (<p><hr />B2B marketing is the process of promoting your products or services to other businesses. It involves creating targeted marketing strategies that help you reach decision-makers within other companies. B2B marketing is important because it allows you to establish your brand as a thought leader in your industry, build relationships with other businesses, and generate leads that can turn into long-term customers.</p>),
      },
      {
        title: "What are some common B2B marketing tactics?",
        content: (<p><hr />Some common B2B marketing tactics include content marketing, social media marketing, email marketing, search engine optimization, paid advertising, and account-based marketing. Each of these tactics can be tailored to your specific industry and target audience to help you achieve your marketing goals.</p>),
      },
      {
        title: "How can I measure the effectiveness of my B2B marketing campaigns?",
        content: (<p><hr />There are several key metrics that can be used to measure the effectiveness of your B2B marketing campaigns. These may include website traffic, leads generated, conversion rates, engagement rates on social media, and return on investment. By regularly analyzing these metrics, you can determine which marketing tactics are working and which ones may need to be adjusted.</p>),
      },
      {
        title: "What are some best practices for B2B lead generation?",
        content: (<p><hr />Some best practices for B2B lead generation include creating buyer personas, offering valuable content that addresses the pain points of your target audience, using landing pages to capture contact information, optimizing your website for search engines, and nurturing leads with targeted email campaigns. These practices can help you generate high-quality leads that are more likely to turn into paying customers.</p>),
      },
      {
        title: "How can B2B marketing services help my business grow?",
        content: (<p><hr />B2B marketing services can provide your business with the expertise and resources needed to create effective marketing strategies that generate leads and drive growth. By working with a B2B marketing agency, you can access a wide range of marketing services, including market research, branding, content creation, social media management, and more. These services can help you reach your target audience more effectively, increase brand awareness, and ultimately grow your business</p>),
      },
    ],
  };
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  const config = {
  };

  const { id } = useParams()


  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey={id}>
        <div className="digital-marketing-container b2b-solution-bg-cotainer">
          <div className="digital-marketing-header">
            <div className="digital-marketing-header-services">
              <Nav variant="pills" className="flex-column">
                <Nav.Item onLoad="document.body.className += ' loaded';" class="fadein">
                  <Nav.Link eventKey="mils"><h3>MILS MQLS SQLS & SRLS</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item onLoad="document.body.className += ' loaded';" class="fadein1">
                  <Nav.Link eventKey="content_syndication"><h3 >Content Syndication</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item onLoad="document.body.className += ' loaded';" class="fadein2">
                  <Nav.Link eventKey="appointment_generation"> <h3 >Appointment Generation</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item onLoad="document.body.className += ' loaded';" class="fadein3">
                  <Nav.Link eventKey="bant"> <h3 >Bant & Champ Leads</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item onLoad="document.body.className += ' loaded';" class="fadein3">
                  <Nav.Link eventKey="intent_leads"> <h3 >Intent Leads</h3></Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="digital-marketing-title">
              <h3>B2B Marketing Solutions</h3>
            </div>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="mils" className="marketing-heading-container">
              <div className="marketing-heading ">
                <h1>MILS MQLS SQLS & SRLS</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="content_syndication">
              <div className="marketing-heading">
                <h1>Content Syndication</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="appointment_generation">
              <div className="marketing-heading">
                <h1>Appointment Generation</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bant">
              <div className="marketing-heading">
                <h1>Bant & Champ Leads</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="intent_leads">
              <div className="marketing-heading">
                <h1>Intent Leads</h1>
              </div>
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="mils">
              <div id="" className="card-section-container-1 ">
                {(cardData.mils).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
              </div>
            </Tab.Pane>

            {/* div 2 */}
            <Tab.Pane eventKey="content_syndication">

              <div id="" className="card-section-container-1 " >
                {(cardData.content_syndication).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
              </div>
            </Tab.Pane>
            {/* div 3 */}
            <Tab.Pane eventKey="appointment_generation">
              <div id="" className="card-section-container-1 " >

                {(cardData.appointment_generation).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}

              </div>
            </Tab.Pane>
            {/* remaining services buttons */}
            <Tab.Pane eventKey="bant">
              <div id="" className="card-section-container-1 ">
                {(cardData.bant).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="intent_leads">
              <div id="" className="card-section-container-1 ">
                {(cardData.intent_leads).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
              </div>
            </Tab.Pane>

            {/* div section 4 */}
            <Tab.Pane eventKey="fourth">

              <div id="" className="card-section-container-1 " >
                <div className="cards-1">
                  <div className="m-card-head-1">
                    <h3>Social Presence Management</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    officia in dicta praesentium sed, corrupti perferendis aspernatur
                  </p>
                </div>
                <div className="cards-1">
                  <div className="m-card-head-1">
                    <h3>Facebook Paid Marketing</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    officia in dicta praesentium sed, corrupti perferendis aspernatur
                  </p>
                </div>
                <div className="cards-1">
                  <div className="m-card-head-1">
                    <h3>Instagram Paid Marketing</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    officia in dicta praesentium sed, corrupti perferendis aspernatur
                  </p>
                </div>
                <div className="cards-1">
                  <div className="m-card-head-1">
                    <h3>International SEO</h3>
                  </div>
                  <p>Optimize your website or blog to help search engines understand which markets or languages your company should target.</p>
                </div>
                <div className="cards-1">
                  <div className="m-card-head-1">
                    <h3>Local SEO Business Promotions</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    officia in dicta praesentium sed, corrupti perferendis aspernatur
                  </p>
                </div>
                <div className="cards-1">
                  <div className="m-card-head-1">
                    <h3>E- commerce SEO</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    officia in dicta praesentium sed, corrupti perferendis aspernatur
                  </p>
                </div>
                <div className="cards-1">
                  <div className="m-card-head-1">
                    <h3>Affiliate Marketing</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    officia in dicta praesentium sed, corrupti perferendis aspernatur
                  </p>
                </div>
                <div className="cards-1">
                  <div className="m-card-head-1">
                    <h3>Influencer Marketing</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    officia in dicta praesentium sed, corrupti perferendis aspernatur
                  </p>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
          <div className="digital-section-2">
            <h3>
              Want to know more?

            </h3>
            <h4>FAQS</h4>
            <Faq data={data} styles={styles} config={config} />
          </div>

          <VividDreams />

          <div className="digital-section-5">
            <Services />
          </div>
        </div>
      </Tab.Container>
    </>
  );
};

export default Digital;
