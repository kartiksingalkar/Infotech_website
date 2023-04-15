import Services from "../components/Services";
import "../styles/marketing.css";
import Faq from "react-faq-component";
import 'react-tabs/style/react-tabs.css';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { useParams } from "react-router-dom";
import LetsTalk from "../components/LetsTalk";
import Card from "../components/Card"
import { cardData } from "./data"
import { faqData } from "./data_faq"
import VividDreams from "../components/VividDreams"

const Digital = () => {
  // console.log(cardData.searchEngineMarketing)
  console.log(faqData.dm)
  const data = {
    rows: [
      {
        title: "What is digital marketing and how does it work?",
        content: (<p><hr />Digital marketing is a set of techniques used to promote and sell products or services through digital channels. These channels include search engines, social media platforms, email, and mobile apps. Digital marketing works by using various tactics to reach and engage with potential customers online, and to drive them to take specific actions, such as making a purchase or filling out a form.</p>),
      },
      {
        title: "How can digital marketing help my business?",
        content: (<p><hr />Digital marketing can help your business in several ways, such as increasing brand awareness, driving website traffic, generating leads, and boosting sales. By leveraging the power of digital channels, you can reach a wider audience and connect with customers where they spend most of their time - online. Digital marketing also allows for better targeting, measurement, and analysis of your marketing efforts, helping you make data-driven decisions to improve your campaigns.</p>),
      },
      {
        title: "What are the different types of digital marketing services?",
        content: (<p><hr />Digital marketing services include a range of techniques, such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, influencer marketing, and more. Each type of digital marketing has its own unique benefits and can be used to achieve different goals, depending on your business needs and target audience.</p>),
      },
      {
        title: "How do I know if my digital marketing campaigns are successful?",
        content: (<p><hr />The success of your digital marketing campaigns can be measured through various metrics, such as website traffic, click-through rates (CTR), conversion rates, and return on investment (ROI). By setting specific goals and tracking these metrics over time, you can determine the effectiveness of your campaigns and make data-driven decisions to optimize them for better performance.</p>),
      },
      {
        title: "How long does it take to see results from digital marketing?",
        content: (<p><hr />The time it takes to see results from digital marketing can vary depending on several factors, such as your industry, competition, target audience, and the specific tactics you're using. Some tactics, such as pay-per-click (PPC) advertising, can yield immediate results, while others, such as search engine optimization (SEO), may take several months to see significant improvements. It's important to have a long-term approach to digital marketing and to set realistic expectations based on your goals and timeline</p>),
      },


    ],
  };
  const rows = [faqData[0]]
  // console.log("rows = ",rows)
  console.log(faqData.dm)
  console.log("data = ", data)

  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  const config = {
  };

  window.onload = function () {
    document.body.className += " loaded";
  }

  const { id } = useParams()

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey={id} variant="pills">
        <div className="digital-marketing-container digital-marketing-bg-cotainer">
          <div className="digital-marketing-header">
            <div className="digital-marketing-header-services">
              <Nav variant="pills" className="flex-column">
                <Nav.Item onLoad="document.body.className += ' loaded';" className="fadein ">
                  <Nav.Link eventKey="sem" to="/digital-marketing/smm"><h3>Search Engine Marketing</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item onLoad="document.body.className += ' loaded';" className="fadein3">
                  <Nav.Link eventKey="seo" to="/digital-marketing/seo"><h3 >Search Engine Optimization</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item onLoad="document.body.className += ' loaded';" className="fadein1">
                  <Nav.Link eventKey="smm" to="/digital-marketing/sem"><h3 >Social Media Marketing</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item onLoad="document.body.className += ' loaded';" className="fadein3">
                  <Nav.Link eventKey="smo" to="/digital-marketing/smo"><h3 >Social Media  Optimization</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item onLoad="document.body.className += ' loaded';" className="fadein3">
                  <Nav.Link eventKey="sms_marketing" to="/digital-marketing/sms_marketing"><h3 >SMS Marketing</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item onLoad="document.body.className += ' loaded';" className="fadein2">
                  <Nav.Link eventKey="em" to="/digital-marketing/em"> <h3 >Email Marketing</h3></Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            {/* <div className="curve-div"></div> */}
            <div className="digital-marketing-title">
              <h3>Digital Marketing</h3>
            </div>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="smm" className="marketing-heading-container">
              <div className="marketing-heading ">
                <h1>Social Media Marketing</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="sem">
              <div className="marketing-heading">
                <h1>Search Engine Marketing</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="em">
              <div className="marketing-heading">
                <h1>Email Marketing</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="seo">
              <div className="marketing-heading">
                <h1>Search Engine Optimization</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="smo">
              <div className="marketing-heading">
                <h1>Social Media  Optimization</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="sms_marketing">
              <div className="marketing-heading">
                <h1>SMS Marketing</h1>
              </div>
            </Tab.Pane>
            
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="sem" id='search-engine-marketing'>
              <div id="" className="card-section-container-1 ">
                {(cardData.sem).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
              </div>
            </Tab.Pane>

            {/* div 2 */}
            <Tab.Pane eventKey="smm" id='social-media-marketing'>
              <div id="" className="card-section-container-1 " >
                {(cardData.smm).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
              </div>
            </Tab.Pane>

            {/* div 3 */}
            <Tab.Pane eventKey="em">
              <div id="" className="card-section-container-1 " >

                {(cardData.em).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}

              </div>
            </Tab.Pane>
            {/* div section 4 */}
            <Tab.Pane eventKey="pm">

              <div id="" className="card-section-container-1 " >
                {(cardData.pm).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="seo">

              <div id="" className="card-section-container-1 " >
                {(cardData.seo).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="smo">

              <div id="" className="card-section-container-1 " >
                {(cardData.smo).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="sms_marketing">

              <div id="" className="card-section-container-1 " >
                {(cardData.smsmarketing).map((ad) => (
                  <div className="cards-1" key={ad.title}>
                    <Card {...ad} />
                  </div>
                ))}
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
