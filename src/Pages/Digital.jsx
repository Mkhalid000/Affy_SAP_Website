import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer';

import digital1 from "../img/digital1.jpg"
import digital2 from "../img/digital2.jpg"

gsap.registerPlugin(ScrollTrigger);

export const Digital = () => {
    const heading = useRef(null);
    const imageRef2 = useRef(null);

    const imageRefl1 = useRef(null);
    const imageRefr1 = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heading.current,
            { scale: 0.8 },
            {
                scale: 1,
                duration: 2,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading.current,
                    start: 'top 80%',  // Adjusting start point
                    end: 'top 20%',  // Adjusting end point
                    scrub: 1,  // Scrub for smoother animation
                },
            }
        );
        gsap.fromTo(
            imageRef2.current,
            { scale: 0.8 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: imageRef2.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            imageRefl1.current,
            { x: -50 },
            {
                x: 0,
                scrollTrigger: {
                    trigger: imageRefl1.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            imageRefr1.current,
            { x: 50 },
            {
                x: 0,
                scrollTrigger: {
                    trigger: imageRefr1.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                },
            }
        );


    }, []);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNavbar />
            <div className="container-fluid position-relative p-0">
                <Navbar />
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-4 text-white animated zoomIn">Digital Marketing</h1>
                            <a  className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">Digital marketing</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature py-3 px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 feature-text wow fadeInUp" ref={imageRefl1} data-wow-delay="0.1s">
                            <h1 className="mb-4 fw-medium fontf">Digital Marketing</h1>
                            <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                                <h5>Welcome to our digital marketing service! We use creativity and strategy to get real results for your business online. We help you connect with your ideal customers, boost your brand's visibility, and reach your marketing goals in the digital world.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3  fw-medium fontf'>Our Approach</h5>
                                    <h5>At Affy Cloud, we start by understanding your audience and goals. Then, we use data to find the most effective ways to reach them and ensure your marketing efforts bring the best results. In short, we blend creativity with numbers to make your marketing succeed.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight" ref={imageRefr1} style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={digital1} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden mt-5 mb-5 px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" ref={imageRef2} src={digital2} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp" ref={heading} data-wow-delay="0.1s">
                            <h1 className="mb-4 fw-medium fontf">What is Digital Marketing?</h1>
                            <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                                <h5>Digital marketing is all about promoting stuff like products and services online. We use different tools, like making sure your website shows up on Google searches (that's SEO), and using social media to connect with people. Our team knows how to use these digital tools to get people interested in what you offer and turn them into customers.

                                    Our Approach</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3 fw-medium fontf'>Benefits of Digital Marketing</h5>
                                    <h5>Digital marketing helps more people see and recognize your brand, making it trustworthy and well-known in the market. <br /><br />ith targeted messages, digital marketing convinces more people to buy your products or services, giving you better results than traditional ads.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
