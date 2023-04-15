import React from "react";
import Services from "../components/Services";
import "../styles/marketing.css";
import Faq from "react-faq-component";
import LetsTalk from "../components/LetsTalk";
import Card from "../components/Card"
import { cardData } from "./data"

const WebDev = () => {
  const data = {
    rows: [
      {
        title: "What is web development and why do I need it?",
        content: (<p><hr />Web development is the process of creating websites and web applications. It involves designing and building a website from scratch or enhancing an existing website. You need web development services to establish your online presence, promote your brand, engage with your target audience, and increase your business revenue.</p>),
      },
      {
        title: "What are the different types of web development services?",
        content: (<p><hr />There are various types of web development services, including front-end development, back-end development, full-stack development, e-commerce website development, content management system (CMS) development, and custom web application development. Front-end development involves creating the user interface and user experience (UI/UX) design. Back-end development involves working on the server-side of the website, handling databases, and integrating third-party services. Full-stack development combines both front-end and back-end development. E-commerce website development focuses on creating online stores. CMS development involves creating websites with content management systems like WordPress, Drupal, and Joomla. Custom web application development involves creating tailor-made web applications that cater to specific business requirements.</p>),
      },
      {
        title: "How long does it take to develop a website?",
        content: (<p><hr />The timeline for web development depends on the scope of the project, the complexity of the design, the features and functionalities you need, and the experience of the web development company. A simple website with a basic design and minimal features can take around 4-6 weeks to develop. A complex website with a custom design, advanced features, and integrations can take several months to complete.</p>),
      },
      {
        title: "What are the benefits of having a custom-built website?",
        content: (<p><hr />Having a custom-built website can provide several benefits, such as a unique design that accurately reflects your brand's identity and message, improved functionality that is tailored to your specific business needs, and better search engine optimization (SEO) to increase visibility and traffic to your site. Additionally, a custom-built website can provide better security, scalability, and flexibility for future updates and enhancements.</p>),
      },
      {
        title: "Can you help me with website maintenance and updates?",
        content: (<p><hr />Yes, we offer website maintenance and support services to ensure that your website stays up-to-date, secure, and functioning properly. Our team can help you with content updates, software updates, security patches, performance optimization, and more, depending on your specific needs. We also offer ongoing support and consulting to help you make the most of your website and keep it running smoothly.</p>),
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
      <div className="digital-marketing-container web-dev-container">
        <div className="digital-marketing-header">
          <div className="digital-marketing-header-services"></div>
          <div className="digital-marketing-title">
            <h3>Web Development</h3>
          </div>
        </div>
        <div className="marketing-heading marketing-heading-mobile">
          <h1>Web Development</h1>
        </div>
        <div className='card-section-container-1'>
          {(cardData.wd).map((ad) => (
            <div className="cards-1" key={ad.title}>
              <Card {...ad} />
            </div>
          ))}
        </div>
        <div className="digital-section-2">
          <h3>
            Want to know more?
            <LetsTalk name="Lets Talk" />
          </h3>
          <h4>FAQS</h4>
          <Faq data={data} styles={styles} config={config} />
        </div>

        <div className="digital-section-4">
          <h3>How to create a</h3>
          <h4>Digital marketing strategy</h4>
          <p>
            a blend of performance with creativity to offer a plethora of
            services that make us the best digital marketing service in Pune.
          </p>
          <a href="#">GET A CALL BACK</a>
        </div>
        <div className="digital-section-5">
          <Services />
        </div>
      </div>
    </>
  );
};

export default WebDev;
