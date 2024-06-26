import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'
import hana from "../img/hana.jpg"

gsap.registerPlugin(ScrollTrigger);

export const HANA = () => {
    const heading2 = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heading2.current,
            { scale: 0.9 },
            {
                scale: 1,
                duration: 2,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading2.current,
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
                <div className="container-fluid  py-5 bg-header" style={{ marginBottom: '40px' }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h2 className="display-5 text-white animated zoomIn">SAP S/4 HANA</h2>
                            <a  className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">SAP S/4 HANA</a>
                            <h4 className="text-white animated zoomIn mt-3">Wide range of SAP solutions
                                <span className="text-info"> to address all customer needs</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden mb-5 px-lg-0 ">
                <div className="container feature px-lg-0">
                    <div className="row mx-lg-0">
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{ maxHeight: '400px' }}>
                            <div className="position-relative  h-100">
                                <img className="position-absolute img-fluid rounded w-100 h-100" src={hana} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp"  data-wow-delay="0.1s">
                            <h1 className="mb-4 fw-medium text-info">SAP S/4 HANA</h1>
                            <div className="d-flex mb-2 wow fadeInUp" data-wow-delay="0.3s">
                                <p>This ERP suite is designed to modernize and simplify your business processes. By leveraging in-memory computing, S/4HANA provides real-time analytics, smooth workflows, and enhanced decision-making capabilities.</p>
                            </div>
                            <div className="d-flex mb-3 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3  text-info'>SAP S4/HANA Cloud, Public Edition</h5>
                                    <p>Built on the same powerful platform as S/4HANA, the public edition offers the added benefits of cloud deployment. With scalability, flexibility, and automatic updates, it provides a cost-effective solution for businesses of all sizes. Plus, its intuitive user interface and integrated functionalities make it easy to implement and use.</p>
                                </div>

                            </div>
                            {/* <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='text-info'>USPs :</h5>
                                    <div className='d-flex align-items-center'>
                                        <i className="bi bi-check-circle-fill me-4 text-info fs-4"></i>
                                        <p className="mb-0">30 days or less</p>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <i className="bi bi-check-circle-fill me-4 text-info fs-4"></i>
                                        <p className="mb-0">for delivery of initial scope</p>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <i className="bi bi-check-circle-fill me-4 text-info fs-4"></i>
                                        <p className="mb-0">50% decrease in implementation cost</p>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <i className="bi bi-check-circle-fill me-4 text-info fs-4"></i>
                                        <p className="mb-0">40-60% quicker time-to-value</p>
                                    </div>
                                </div>

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid  mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container ">
                    <div className="section-title  text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '800px' }}>
                        <h2 className="mb-4" ref={heading2}>Benefits and Features</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-4 zoomIn1">
                            <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ maxHeight: '140px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                                <i class="bi bi-laptop fs-1 text-info"></i>
                                <p className="m-0 dec">Real-time insights with transaction and analytical data in one system .</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 zoomIn1">
                            <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ maxHeight: '140px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                                <i class="bi bi-cpu fs-1 text-info"></i>
                                <p className="m-0 dec">Artificial intelligence to optimize and automate your mission-critical processes</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 zoomIn1">
                            <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ maxHeight: '140px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                                <i class="bi bi-recycle text-info fs-1"></i>
                                <p className="m-0 dec">Up-to-date business processes that support the latest industry requirements</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 zoomIn1">
                            <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ maxHeight: '140px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                                <i class="bi bi-graph-up-arrow text-info fs-1"></i>
                                <p className="m-0 dec">Newly embedded functionality, including central procurement, customer management, and production planning and scheduling</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 zoomIn1">
                            <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ maxHeight: '140px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                                <i className="bi bi-cassette text-info fs-1"></i>
                                <p className="m-0 dec">Out-of-the-box integration with a cohesive user experience, SAP Best Practices, and extensions to connect processes across your business.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
