import React from "react";
import Faq from "react-faq-component";
import Services from "../components/Services";
import LetsTalk from "../components/LetsTalk";
import Card from "../components/Card"
import { cardData } from "./data"
import VividDreams from "../components/VividDreams"

const MobileDevelopment = () => {
    const data = {
        rows: [
            {
                title: "What is the process for developing a mobile app?",
                content: (<p><hr />The process for developing a mobile app involves several steps, including ideation, research, wireframing, prototyping, designing, coding, testing, and deployment. Our team works closely with clients to understand their needs and objectives, develop a strategy, and create a comprehensive plan to deliver a high-quality, user-friendly, and scalable mobile app.</p>),
            },
            {
                title: "Which platforms do you develop mobile apps for?",
                content: (<p><hr />Our team has extensive experience developing mobile apps for both iOS and Android platforms, as well as cross-platform solutions. We can recommend the most suitable platform based on your needs, objectives, target audience, and budget, and develop a mobile app that is fully optimized for the chosen platform.</p>),
            },
            {
                title: "How much does it cost to develop a mobile app?",
                content: (<p><hr />The cost of developing a mobile app depends on several factors, including the complexity of the app, the number of features, the chosen platform, and the level of customization. We offer competitive pricing and work closely with clients to develop a customized quote based on their specific requirements and budget.</p>),
            },
            {
                title: "How long does it take to develop a mobile app?",
                content: (<p><hr />The timeline for developing a mobile app varies based on several factors, including the complexity of the app, the number of features, the chosen platform, and the level of customization. We work closely with clients to develop a comprehensive timeline that includes all the necessary steps, milestones, and deadlines to ensure that the project is completed on time and on budget.</p>),
            },
            {
                title: "Do you provide maintenance and support for mobile apps?",
                content: (<p><hr />Yes, we provide comprehensive maintenance and support services for mobile apps to ensure that they are always up-to-date, secure, and fully functional. Our team can also provide regular updates, feature enhancements, and bug fixes to ensure that your mobile app stays relevant and useful to your target audience</p>),
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
            <div className='mobile-development-container '>
                <div className='mobile-development-header'>
                    {/* <div className='mobile-development-header-services'>
                        <h3>B2B Lead Generation</h3>
                        <h3>Event Support Services</h3>
                        <h3>B2B Database</h3>
                    </div> */}
                    <div className='mobile-development-title'>
                        <h3>Mobile App Development</h3>
                    </div>
                </div>
                <div className="marketing-heading marketing-heading-mobile">
                    <h1>Mobile App Development</h1>
                </div>
                <div className='card-section-container-1'>
                    {(cardData.mad).map((ad) => (
                        <div className="cards-1" key={ad.title}>
                            <Card {...ad} />
                        </div>
                    ))}
                </div>
                <div className='mobile-dev-faqs'>
                    <h3>
                        Want to know more?
                    </h3>
                    <h4>FAQS</h4>
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </div>
                <VividDreams />

                <div className="digital-section-5">
                    <Services />
                </div>
            </div>
        </>
    )
}

export default MobileDevelopment