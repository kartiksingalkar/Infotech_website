import React from 'react'
import Slider from "react-slick";
import Images from './Imgimport';
const What_We_Offer = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 1000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div>
                <Slider {...settings}>
                    <div className='mobile-wwo-card'>
                        <img src={Images.DigitalMarketing} alt='' className='img-fluid' />
                        <h3>Digital Marketing</h3>
                        <p>Make a splash in the digital world with our Digital Marketing Services. Ellora Infotech is a full-service, adaptable, and dynamic digital marketing business that doesn't rely on deceit to draw in new customers. We rely on our own search engine optimization (SEO) and marketing abilities to bring in new clients instead.</p>
                    </div>
                    <div className='mobile-wwo-card'>
                        <img src={Images.B2bicon} alt='' className='img-fluid' />
                        <h3>B2B Marketing Services</h3>
                        <p>The B2B landscape is constantly evolving, and we stay ahead of the curve with innovative strategies and cutting-edge technologies. Why settle for mediocre B2B marketing when you can work with the best? With our B2B Marketing Services, you can increase brand awareness, generate leads, and ultimately drive revenue growth.</p>
                    </div>
                    <div className='mobile-wwo-card'>
                        <img src={Images.Mobile} alt='' className='img-fluid' />
                        <h3>Mobile App Development</h3>
                        <p>Transform your business with cutting-edge Mobile App Development Services from Ellora Infotech. Our skilled developers craft apps that provide seamless user experience and drive engagement. We offer powerful mobile apps that are focused on the needs of the consumer, revolutionizing marketing tactics and new market trends.</p>
                    </div>
                    <div className='mobile-wwo-card'>
                        <img src={Images.WebDesign} alt='' className='img-fluid' />
                        <h3>Web Development</h3>
                        <p>Custom UX and innovative digital storytelling - We create websites that provide you the ability to outgrow, outperform, and outshine your adversaries. Build a web presence that stands out from the crowd with Ellora Infotech's Web Development Services.</p>
                    </div>
                    <div className='mobile-wwo-card'>
                        <img src={Images.Graphic} alt='' className='img-fluid' />
                        <h3>UI / UX Designing</h3>
                        <p>Experience design at its finest with Ellora Infotech's UI/UX Design Services. There’s no limit to what you can get designed at Ellora Infotech. From spectacular new illustrations to immersive wireframes, you name it and the talented global community of designers at Ellora will make it happen..</p>
                    </div>
                    <div className='mobile-wwo-card'>
                        <img src={Images.Software} alt='' className='img-fluid' />
                        <h3>Custom HRMS Solution</h3>
                        <p> Utilize a single platform to manage your whole workforce using our custom HRMS software, and boost HR efficiency by spending less time on repetitive chores. Our uniquely created packages are tailored to meet your present demands and help your future growth.</p>
                    </div>
                    <div className='mobile-wwo-card'>
                        <img src={Images.Market} alt='' className=' img-fluid' />
                        <h3>Custom ERP Solution</h3>
                        <p>Ellora Infotech's custom ERP software can streamline procedures and improve data exchange and collaboration between organizations. You can modify and adjust the system to better meet your unique business demands thanks to our bespoke ERP solution.</p>
                    </div>
                    <div className='mobile-wwo-card'>
                        <img src={Images.Content} alt='' className=' img-fluid' />
                        <h3>Custom CRM Solution</h3>
                        <p>Boost customer satisfaction and drive growth while Supercharging your customer relations with Ellora Infotech's Custom CRM Solutions. Our expert team designs CRM systems tailored to your business needs, maximizing customer satisfaction and loyalty. </p>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default What_We_Offer