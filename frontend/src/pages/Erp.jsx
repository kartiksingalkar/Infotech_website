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
        title: "What is a Custom ERP Solution?",
        content: (<p><hr />Custom ERP Solutions refer to software solutions that are tailored to meet specific business needs, processes and requirements of a company. It provides an integrated view of core business processes to help organizations automate and manage their business operations.</p>),
      },
      {
        title: "Why do businesses need Custom ERP Solutions?",
        content: (<p><hr />Custom ERP Solutions help businesses to streamline their operations, increase efficiency, and reduce operational costs. It provides an integrated view of various business processes, such as finance and accounting, human resources, inventory management, and sales, to help organizations make informed decisions.</p>),
      },
      {
        title: "How long does it take to implement Custom ERP Solutions?",
        content: (<p><hr />The implementation time for Custom ERP Solutions can vary depending on the size of the company and the complexity of the requirements. It can take several months to a year to implement, but the benefits are long-lasting.</p>),
      },
      {
        title: "How does Custom ERP Solutions differ from off-the-shelf ERP solutions?",
        content: (<p><hr />Off-the-shelf ERP solutions are pre-built software solutions that offer a one-size-fits-all solution. Custom ERP Solutions, on the other hand, are tailored to meet the specific business needs and requirements of a company.</p>),
      },
      {
        title: "How secure is Custom ERP Solutions?",
        content: (<p><hr />Custom ERP Solutions are built to provide a high level of security and protection for sensitive business data. The system is designed to provide role-based access control and other security features to ensure the confidentiality, integrity, and availability of business data. The level of security can be customized according to the needs and requirements of the organization.</p>),
      },
    ],
  };
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  const config = {
  };
  return (
    <>
      <div className="digital-marketing-container erp-main-container">
        <div className="digital-marketing-header">
          <div className="digital-marketing-header-services"></div>
          <div className="digital-marketing-title">
            <h3>Custom ERP Solutions</h3>
          </div>
        </div>
        <div className="marketing-heading marketing-heading-mobile">
          <h1>Custom ERP Solutions</h1>
        </div>
        <div id="" className="card-section-container-1 " >
          {(cardData.erp).map((ad) => (
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
