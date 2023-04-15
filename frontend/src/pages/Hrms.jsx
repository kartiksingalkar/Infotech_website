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
        title: "What is a custom HRMS solution, and why do I need it?",
        content: (<p><hr />A custom HRMS (Human Resource Management System) solution is a software application that streamlines and automates HR tasks, from hiring to performance management to benefits administration. By having a custom HRMS solution, you can tailor the software to meet your specific needs and workflows, resulting in greater efficiency and productivity for your HR team. You will have a centralized database with real-time updates and visibility into employee data and performance, allowing you to make informed decisions and align your workforce with business goals.</p>),
    },
    {
        title: "How long does it take to implement a custom HRMS solution?",
        content: (<p><hr />The implementation time for a custom HRMS solution can vary depending on the size and complexity of your organization, the extent of customization needed, and the level of data migration required. On average, the implementation process can take from 3 to 6 months, but it could be longer for large, global organizations. During the implementation process, your HR team will work closely with the software vendor to ensure a smooth transition, data migration, and training for users.</p>),
    },
    {
        title: "What are the benefits of using a custom HRMS solution for performance management?",
        content: (<p><hr />A custom HRMS solution can help your organization to manage and measure employee performance more effectively by automating the performance management process, setting performance goals and objectives, monitoring progress, and providing performance feedback. You can set up employee scorecards, self-evaluation forms, and 360-degree feedback tools, all of which can be customized to fit your specific needs. A custom HRMS solution also offers real-time analytics and reports, making it easier to identify high-performing employees, assess the effectiveness of training programs, and identify areas for improvement.</p>),
    },
    {
        title: "Can a custom HRMS solution handle benefits administration?",
        content: (<p><hr />Yes, a custom HRMS solution can handle benefits administration, from open enrollment to claims processing to compliance reporting. You can customize the benefits module to reflect your organization's specific benefits plans and policies, and employees can access the system to enroll in or modify their benefits choices. The HRMS software can also generate reports on benefits costs, employee participation, and other metrics.</p>),
    },
    {
        title: "How secure is my employee data in a custom HRMS solution?",
        content: (<p><hr />A custom HRMS solution is designed to be secure and protect your employee data from unauthorized access, theft, or loss. The software vendor will ensure that the system meets industry standards for data encryption, access controls, and other security measures. You can also set up permissions and access controls to ensure that only authorized personnel can access sensitive employee data. Additionally, you can choose to store your data in the cloud or on-premises, depending on your organization's needs and preferences.</p>),
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
      <div className="digital-marketing-container crm-main-container">
        <div className="digital-marketing-header">
          <div className="digital-marketing-header-services"></div>
          <div className="digital-marketing-title">
            <h3>Custom HRMS Solutions</h3>
          </div>
        </div>
        <div id="" className="card-section-container-1 " >
          {(cardData.hrms).map((ad) => (
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
