import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../Componants/Navbar'
import { TopNavbar } from '../Componants/TopNavbar'
import { Footer } from '../Componants/Footer';
import customer from "../img/customer.jpg"

gsap.registerPlugin(ScrollTrigger);
export const Customer = () => {
    const heading = useRef(null);

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
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNavbar />
            <div className="container-fluid position-relative p-0">
                <Navbar />
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '60px' }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h2 className="display-5 text-white animated zoomIn">SAP Customer Experience</h2>
                            <a  className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">SAP Customer Experience</a>
                            <h4 className="text-white animated zoomIn mt-3">Wide range of SAP solutions
                                <span className="text-info"> to address all customer needs</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden mb-2 px-lg-0 ">
                <div className="container feature px-lg-0">
                    <div className="row mx-lg-0">
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight">
                            <div className="position-relative h-100">
                                <img className="img-fluid  d-flex" src={customer} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-4 fadeInUp" data-wow-delay="0.1s">
                            <h1 className="mb-4 mt-3 fw-medium text-info">SAP Customer Experience?</h1>
                            <div className="d-flex mb-2 wow fadeInUp" data-wow-delay="0.3s">
                                <p><span className='color'>Affy’s Customer Experience (CX) </span> frameworkallows you to interact, share, and communicate effectively with your audience. It helps you to reach the right audience through different routes and belonging to different markets.

                                    <br /> <br /><span className='color'>Affy’s Customer Experience (CX) </span> portfolio covers every step in the process, from the first contact a customer has with a company through to when they choose to buy from it. SAP achieves this by integrating various solutions for marketing, sales, and CRM.<br /> <br />Designing and delivering an exceptional, unified digital customer experience can be an arduous task as it requires both organizational change management and technology landscape planning across all functions – from Marketing & Service till Delivery – to work in perfect harmony. We help our clients build a seamless customer journey based on empathy and trust and leveraging our suite of industry-leading customer experience solutions.</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container ">
                    <div className="section-title  text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '800px' }}>
                        <h2 className="mb-4" ref={heading}>SAP Customer Experience (CX)</h2>
                        <p>Explore SAP Customer Experience (CX) solutions, designed to enhance every aspect of your customer interactions:</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-4 zoomIn1">
                            <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ maxHeight: '180px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                                <h4>Learning ( LMS)</h4>
                                <p className="m-0 dec">A software application that helps administer, document, track, report, automate, and deliver educational courses, training programs, or learning and development programs.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 zoomIn1">
                            <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ maxHeight: '180px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                                <h4>Analytics ( WFA)</h4>
                                <p className="m-0 dec">Workforce analytical tool that can be licensed to develop more compensation programmes that align with the neeain depth analytics.It focuses more on assessment and tools used to drive these decisions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 zoomIn1">
                            <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ maxHeight: '180px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                                <h4>SAP Workzone</h4>
                                <p className="m-0 dec">SAP SuccessFactors Work Zone is a collaboration software designed to help businesses connect and share documents with employees, partners and customers.</p>
                            </div>
                        </div>                       
                        
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
