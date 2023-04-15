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
        title: "What is UI/UX design and why is it important?",
        content: (<p><hr />UI/UX design refers to the process of designing the user interface and user experience of a digital product, such as a website or mobile app. It involves designing the visual elements, layout, and flow of the product to create a seamless and enjoyable experience for the user. Good UI/UX design is important because it can greatly impact the success of a product, as users are more likely to engage with and enjoy a product that is easy to use and aesthetically pleasing.</p>),
      },
      {
        title: "How does UI/UX design differ from graphic design?",
        content: (<p><hr />While both UI/UX design and graphic design involve creating visual elements, the focus of UI/UX design is on designing the user interface and experience of a product, whereas graphic design is more focused on creating visual assets such as logos, posters, and marketing materials. UI/UX designers also take into consideration the functionality and usability of a product, as well as user research and testing.</p>),
      },
      {
        title: "What is the design process for UI/UX design services?",
        content: (<p><hr />The design process for UI/UX design services typically involves several stages, including research, design, prototyping, and testing. This process may vary depending on the specific needs of the project, but generally involves conducting user research to understand the target audience, creating wireframes and mockups of the product, and testing the designs with users to gather feedback and make improvements.</p>),
      },
      {
        title: "How do UI/UX designers work with clients to ensure their needs are met?",
        content: (<p><hr />UI/UX designers work closely with clients to understand their needs and ensure that the final product meets their requirements. This typically involves conducting interviews, gathering feedback, and communicating regularly throughout the design process. UI/UX designers may also provide recommendations and best practices based on their experience and expertise in the field.</p>),
      },
      {
        title: "Can UI/UX design services help improve an existing digital product?",
        content: (<p><hr />Yes, UI/UX design services can help improve an existing digital product by conducting user research, identifying pain points in the current design, and making recommendations for improvements. By improving the user interface and experience of a product, it can lead to increased user engagement and satisfaction, as well as potential business growth.</p>),
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
      <div className="digital-marketing-container uiux-main-container">
        <div className="digital-marketing-header">
          <div className="digital-marketing-header-services"></div>
          <div className="digital-marketing-title">
            <h3>UI UX Design</h3>
          </div>
        </div>
        <div className="marketing-heading marketing-heading-mobile ">
          <h1>UI UX Design</h1>
        </div>
        <div className='card-section-container-1'>
          {(cardData.uiux).map((ad) => (
            <div className="cards-1" key={ad.title}>
              <Card {...ad} />
            </div>
          ))}
        </div>
        <div className="digital-section-2">
          <h3>
            Ask Us Anything
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
