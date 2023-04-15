import React from 'react'
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { AiFillStar } from 'react-icons/ai'
import Images from './Imgimport';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import Slider from "react-slick";
import $ from 'jquery'

const data = {
    rows: [
        {
            title: (<div className='testimonial-card-inner'>
                <div className='testimonial-rating'>
                    <label><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></label>
                    <h4>Kavya Dutt 1</h4>
                </div>
                <div className='testimonial-img'>
                    <img src={Images.Testimonial1} />
                </div>
            </div>),
            content: (
                <p>
                    Ellora Infotech took our business to the next level. Their solutions are tailored to our specific needs and have helped us achieve our business goals. They were able to turn our ideas into reality in a short period of time, without compromising on quality. We are impressed with their professionalism, attention to detail, and exceptional customer service.
                </p>
            ),
        },
        {
            title: (<div className='testimonial-card-inner'>
                <div className='testimonial-rating'>
                    <label><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></label>
                    <h4>Kavya Dutt 2</h4>
                </div>
                <div className='testimonial-img'>
                    <img src={Images.Testimonial1} />
                </div>
            </div>),
            content: (
                <p>
                    We were blown away by Ellora Infotech's commitment to our success. Their team worked tirelessly to create a solution that exceeded our expectations. They kept us informed every step of the way and delivered ahead of schedule. Their communication skills and attention to detail were exceptional, and we couldn't have asked for a better partner.
                </p>
            ),
        },
        {
            title: (<div className='testimonial-card-inner'>
                <div className='testimonial-rating'>
                    <label><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></label>
                    <h4>Kavya Dutt 3</h4>
                </div>
                <div className='testimonial-img'>
                    <img src={Images.Testimonial1} />
                </div>
            </div>),
            content: (
                <p>
                    We were amazed at how quickly Ellora Infotech understood our unique needs and delivered a solution that not only met, but exceeded our expectations. The team was extremely professional and their customer service was unparalleled. They made the entire process seamless and stress-free. We would highly recommend them to anyone looking for high-quality IT solutions.
                </p>
            ),
        },
        {
            title: (<div className='testimonial-card-inner'>
                <div className='testimonial-rating'>
                    <label><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></label>
                    <h4>Kavya Dutt 4</h4>
                </div>
                <div className='testimonial-img'>
                    <img src={Images.Testimonial1} />
                </div>
            </div>),
            content: (
                <p>
                    We are delighted with the service provided by Ellora Infotech. The team was friendly, approachable, and always willing to go the extra mile to ensure our satisfaction. Their solutions have helped us streamline our business processes and increase productivity, which has translated to increased profits. We would definitely recommend Ellora Infotech to anyone looking for reliable B2B solutions.
                </p>
            ),
        },
        {
            title: (<div className='testimonial-card-inner'>
                <div className='testimonial-rating'>
                    <label><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></label>
                    <h4>Kavya Dutt 5</h4>
                </div>
                <div className='testimonial-img'>
                    <img src={Images.Testimonial1} />
                </div>
            </div>),
            content: (
                <p>
                    Working with Ellora Infotech was a game-changer for our business. Their expertise in IT solutions and digital marketing was evident from the beginning. They understood our unique challenges and provided us with a customized solution that has transformed our business. Their team was knowledgeable, responsive, and a pleasure to work with. We would highly recommend them to anyone looking for top notch Digital Marketing Services.
                </p>
            ),
        },
    ],
};


const Testimonial = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="testimonial-arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="testimonial-arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    var slide = 0
    var padding = 0
    if ($(window).width() < 768) {
        slide = 1
        padding = 0
    }
    else if ($(window).width() < 1024) {
        slide = 3
        padding = 0
    }
    else {
        slide = 4
        padding = 190
    }

    const settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: slide,
        centerMode: true,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 3000,
        centerPadding: padding,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };
    return (
        <>
            <div className="testimonial-app">
                <Slider {...settings}>
                    {(data.rows).map((img, idx) => (
                        <div className={idx === imageIndex ? "testimonial-slide activeSlide " : "testimonial-slide"}>
                            <div className="testimonial-cards">
                                {img.content}
                                {img.title}
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Testimonial