import React from "react";
import Services from "../components/Services";
import "../styles/marketing.css";
import Faq from "react-faq-component";
import LetsTalk from "../components/LetsTalk";
import Card from "../components/Card"
import { cardData } from "./data"
import VividDreams from "../components/VividDreams"

const WebDev = () => {
  const data = {
    rows: [
      {
        title: "What is a custom CRM solution?",
        content: (<p><hr />A custom CRM solution is a software system designed specifically for a business to manage and analyze their customer interactions and data. It is tailored to the specific needs of the business and its customers, providing a more efficient and effective way to manage customer relationships.</p>),
      },
      {
        title: "What are the benefits of a custom CRM solution?",
        content: (<p><hr />The benefits of a custom CRM solution include improved customer relationship management, streamlined sales processes, enhanced customer service, better analytics and reporting, increased efficiency, and improved customer retention. By customizing the CRM to your specific business needs, you can ensure that your sales and customer service teams have the tools they need to succeed.</p>),
      },
      {
        title: "How is a custom CRM solution different from a pre-built CRM system?",
        content: (<p><hr />A pre-built CRM system is a generic solution that can be used by any business. While it may provide some basic features and functionality, it may not meet the specific needs of your business or industry. A custom CRM solution is tailored to your business, providing the features and functionality you need to succeed.</p>),
      },
      {
        title: "What features can be included in a custom CRM solution?",
        content: (<p><hr />Features of a custom CRM solution can include lead and opportunity management, customer service management, sales forecasting, marketing automation, analytics and reporting, and more. Depending on your business needs, you can tailor the features to create a solution that works best for you.</p>),
      },
      {
        title: "How can a custom CRM solution benefit my business?",
        content: (<p><hr />A custom CRM solution can benefit your business by streamlining your sales and customer service processes, providing better analytics and reporting, improving customer retention and loyalty, and helping you gain a better understanding of your customers' needs and preferences. By automating many of your sales and marketing tasks, you can free up your team to focus on providing exceptional customer service and growing your business.</p>),
      },
    ],
  };
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  const config = {
  };

  const onHandleClick = () => {
    return (
      <LetsTalk />
    )
  }
  return (
    <>
      <div className="digital-marketing-container crm-main-container">
        <div className="digital-marketing-header">
          <div className="digital-marketing-header-services"></div>
          <div className="digital-marketing-title">
            <h3>Custom CRM Solutions</h3>
          </div>
        </div>
        <div className="marketing-heading marketing-heading-mobile">
          <h1>Custom CRM Solutions</h1>
        </div>
        <div id="" className="card-section-container-1 " >
          {(cardData.crm).map((ad) => (
            <div className="cards-1" key={ad.title}>
              <Card {...ad} />
            </div>
          ))}
        </div>
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
    </>
  );
};

export default WebDev;
