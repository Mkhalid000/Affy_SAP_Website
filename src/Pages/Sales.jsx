import React, { useEffect } from 'react';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'
import sale1 from "../img/sale1.jpeg"
import sale2 from "../img/sale2.png"
import sale3 from "../img/sale-logo1.png"
import sale4 from "../img/sale_logo2.png"
import sale5 from "../img/sale_logo3.png"
import sale6 from "../img/sale_logo4.png"
import sale7 from "../img/sale_logo5.png"
import sale8 from "../img/sale_logo6.png"


export const Sales = () => {
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
                            <h2 className="display-5 text-white animated zoomIn">SAP Sales Cloud</h2>
                            <a className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">SAP Sales Cloud</a>
                            <h4 className="text-white animated zoomIn mt-3">Wide range of SAP solutions
                                <span className="text-info"> to address all customer needs</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight">
                            <div className="position-relative">
                                <img className="img-fluid" src={sale1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-2 color">SAP Sales Cloud</h3>
                            <p>
                                What is SAP Sales Cloud?
                                SAP Sales Cloud helps organizations connect and guide customers throughout their buying journey. Transform your lead to cash process and accelerate sales performance with incentive optimization, sales coaching and learning recommendations – helping sales teams to spend their time on the best deals.</p>
                            <br /> SAP Sales Cloud solutions helps organizations connect, engage and guide customers throughout their buying process. It transform your lead into cash process and smartly convert into cash process . it boost sales performance with incentive optimization, sales coaching and learning recommendations – helping sales teams to spend their time on the best deals.
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid mt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-3">
                    <div class="section-title  text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '750px' }}>
                        <h3 class="mb-4">Key Features of SAP Sales Cloud</h3>
                    </div>
                    <div class="row g-5 ">
                        <div class="col-lg-4 col-md-6  zoomIn1" >
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <img src={sale3} alt='' />
                                <h4>Advanced Intelligence</h4>
                                <p class="m-0 dec mt-3">Determine potential sales with the help of a functional system. Intelligent technologies offer you factual information and help make better decisions.</p>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 zoomIn1" >
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <img src={sale4} alt='' />
                                <h4>Step In The Future</h4>
                                <p class="m-0 dec mt-3">This SAP solution helps you to understand current and future customer needs. You can design a proper and systematic plan of action that brings you actual sales now and also in the future.</p>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6  zoomIn1" >
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <img src={sale5} alt=''/>
                                <h4>Inclusive Collaboration</h4>
                                <p class="m-0 dec mt-3">Ignoring the piling unread mails? Utilize an interactive and easy-to-use platform for easy and swift communication with your team and customers. Share your knowledge and the right facts through this platform.</p>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6  zoomIn1" >
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <img src={sale6} alt='' />
                                <h4>Enhanced Sales Management</h4>
                                <p class="m-0 dec mt-3">The comprehensive collaboration and real-time information offers smooth management. Targeted planning, optimal use of resources, and control over processes improves management.</p>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6  zoomIn1" >
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <img src={sale7} alt=''/>
                                <h4>Real-Time Reporting</h4>
                                <p class="m-0 dec mt-3">Testing waters becomes comparatively easier when you have a smart system and intelligent SAP solution to back you. Real-time reporting opens new market avenues for your business.</p>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6  zoomIn1" >
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <img src={sale8} alt=''/>
                                <h4>Potential of Cross-Selling</h4>
                                <p class="m-0 dec mt-3">Loyal customers are the way to generate improved ROI. Interests, sales history, existing trends, etc. can help you to determine your cross-selling and upselling capabilities.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container overflow-hidden mb-2 mt-5 px-lg-0 ">
                <div className="container feature px-lg-0">
                    <div className="row mx-lg-0">
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight">
                            <div className="position-relative h-100">
                                <img className="img-fluid  d-flex" src={sale2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-4 fw-medium text-info mt-3">How Can SAP Sales Cloud help Your Business?</h3>
                            <div className="d-flex mb-2 wow fadeInUp" data-wow-delay="0.3s">
                                <ul>
                                    <li className='mb-3'>
                                        Seamless and timely availability of all relevant information.
                                    </li>
                                    <li className='mb-3'>
                                        Centralized management of leads, contacts, offers, and opportunities .
                                    </li>
                                    <li className='mb-3'>
                                        Advanced user design with informative user guidance                                    </li>
                                    <li className='mb-3'>
                                        Integration of telephone, calendar, and emails                                    </li>
                                    <li className='mb-3'>Intelligent technology: Determines lucrative leads and opportunities automatically</li>
                                    <li className='mb-3'>Rapid business transactions with intelligent sales management</li>
                                    <li className='mb-3'>Reduced admin workload offers more time to invest in customers</li>
                                    <li className='mb-3'>Smooth participation and communication among the sales team</li>
                                    <li className='mb-3'>Increased ROI with surplus customer support</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
