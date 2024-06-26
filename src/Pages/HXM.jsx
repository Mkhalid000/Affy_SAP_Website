import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TopNavbar } from '../Componants/TopNavbar';
import { Navbar } from '../Componants/Navbar';
import { Footer } from '../Componants/Footer';
import "../App.css"
import hxm1 from "../img/HXM1.webp"

gsap.registerPlugin(ScrollTrigger);

export const HXM = () => {
    const features = [
        "Simple, cloud-based software built for the end user.",
        "It comes with prebuilt integrations across SAP solutions.",
        "Built-in tools to extend or build applications with ease.",
        "Seamlessly embed intelligent technologies, such as machine learning.",
        "Localization frameworks for country and regional regulations."
    ];

    const services = [
        {
            title: "Employee Central (EC)",
            description: "The central hub for all your employee data, ensuring a single source of truth for your workforce information."
        },
        {
            title: "Employee Central (Payroll)",
            description: "Efficient payroll processing with a powerful and secure solution that integrates seamlessly with Employee Central."
        },
        {
            title: "Recruiting (RMK. RCM)",
            description: "Attract top talent with a comprehensive recruiting module that simplifies the hiring process from sourcing to onboarding."
        },
        {
            title: "RMK",
            description: "This module increases sourcing ROI by showing clients which marketing strategies result in the best candidates for the lowest cost."
        },
        {
            title: "RCM",
            description: "The RCM Applicant Tracking System supports the sourcing capability of Recruiting Marketing"
        },
        {
            title: "Onboarding (ONB)",
            description: "Ensure a smooth and positive experience for new hires with a structured onboarding program."
        },
        {
            title: "Performance and Goals ( PMGM)",
            description: "Promote continuous performance improvement with goal setting, performance reviews, and feedback."
        },
        {
            title: "Compensation ( Comp)",
            description: "Manage compensation effectively with a module for salary planning, bonus administration, and more."
        },
        {
            title: "Succession planning ( SPCDP)",
            description: "Develop future leaders and ensure business continuity with robust succession planning tools."
        }
        
    ];

    const imageRef = useRef(null);
    const head1 = useRef(null);
    const head0 = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { scale: 0.8 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1,
                },
            }
        );       
        gsap.fromTo(
            head1.current,
            { scale: 0.8 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: head1.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1,
                },
            }
        );
        gsap.fromTo(
            head0.current,
            { scale: 0.8 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: head0.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1,
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
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '40px' }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h2 className="display-5 text-white animated zoomIn">SAP SuccessFactors (HXM)</h2>
                            <a className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">SAP (HXM)</a>
                            <h4 className="text-white animated zoomIn mt-3">Wide range of SAP solutions
                                <span className="text-info"> to address all customer needs</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid  wow fadeInUp" >
                <div class="container">
                    <div class="section-title  text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '750px' }}>
                        <h1 class="mb-4" ref={head0}>Specialized Services</h1>
                    </div>
                    <div class="row g-5 ">
                        <div class="col-lg-4 col-md-4  zoomIn1" >
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">

                                <h4 class="mb-3">SAP App support, Migration, & Hybrid integration</h4>
                                <p class="m-0 dec ">Get seamless transitions and integration with our SAP App Support, Migration, & Hybrid Integration services. Whether it's migrating your existing systems to SAP or ensuring smooth operation through hybrid integration, our experts are here to guide you at every step. We prioritize your business continuity and growth.</p>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4  zoomIn1">
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <h4 class="mb-3">SAP AMS</h4>
                                <p class="m-0 dec">SAP AMS (Application Management Services) refers to the outsourcing of ongoing support, to keep your operations running smoothly. From troubleshooting to performance optimization, our dedicated team ensures your SAP system operates at peak efficiency, allowing you to focus on your core business objectives.</p>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4  zoomIn1">
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <h4 class="mb-3">SAP HXM Health check</h4>
                                <p class="m-0 dec">A SuccessFactors Health Check adds value to your HXM deployment by resolving high-priority issues and improving past successes. Common scenarios include automating manual processes, re-evaluating configurations and processes, resolving issues not addressed by support, meeting new system requirements, enabling unused functionality, and more.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden  mt-5 px-lg-0">
                <div className="container feature py-3 px-lg-0">
                    <div className="row g-5 mx-lg-0 ">
                        <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="mb-4 fw-medium fontf" >Consulting Services</h1>
                            <h4 className='text-info'>SAP SuccessFactors (HXM)</h4>
                            <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                                <p>Your workforce is your most valuable asset. Ensure their well-being and maximize their potential with our SAP HXM Health Check service. We thoroughly assess your Human Experience Management (HXM) processes to identify areas for improvement and optimization. By prioritizing your employees’ needs and experiences, we help you create a growing workplace culture that drives success.</p>
                            </div>

                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight" r style={{ minHeight: '300px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute rounded img-fluid w-100 h-100" ref={imageRef} src= {hxm1} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container box">
                <div className="col">
                    <div className="row mt-5 mb-5">
                        {features.map((feature, index) => (
                            <div key={index} className='d-flex align-items-center'>
                                <i className="bi bi-check-circle-fill me-4 text-info fs-4"></i>
                                <p className="mb-0">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-fluid  mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-3">
                <div className="section-title  text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '800px' }}>
                    <h1 className="mb-4" ref={head1}>SAP SuccessFactors HXM - Modules</h1>
                    <p>The SAP SuccessFactors HXM Suite isn't a monolithic system – it's a collection of powerful modules designed to work together seamlessly. Here's a quick glimpse at some of the key modules that can transform your HR experience:</p>
                </div>
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-4 zoomIn1">
                            <div className="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ maxHeight: '140px' }}>
                                <h5 className="mb-2">{service.title}</h5>
                                <p className="m-0 dec">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

            <Footer />
        </div>
    );
};
