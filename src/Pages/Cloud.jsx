import React, { useEffect } from 'react';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer';
import cloud from "../img/cloud.png"

export const Cloud = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNavbar />
            <div className="container-fluid position-relative p-0">
                <Navbar />
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '50px' }}>
                    <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h2 className="display-5 text-white animated zoomIn">SAP Cloud Platform </h2>
                            <a className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">SAP Cloud Platform</a>
                            <h4 className="text-white animated zoomIn mt-3">Wide range of SAP solutions
                                <span className="text-info"> to address all customer needs</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden mb-2 px-lg-0 ">
                <div className="container feature px-lg-0">
                    <div className="row mx-lg-0">
                        <div className="col-lg-12 feature-text px-5 fadeInUp" data-wow-delay="0.1s">
                            <h1 className="mb-4 fw-medium text-info">What is SAP Cloud platform?</h1>
                            <div className="d-flex mb-2 wow fadeInUp" data-wow-delay="0.3s">
                                <p>Cloud computing has become a trend nowadays! So, keeping up with this trend, SAP came out with the SAP Cloud platform. Launched as an open platform-as-a-service (PaaS), it promises to deliver core platform services and unique in-memory capabilities for building and extending cloud applications that are mobile-enabled.</p>
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
                                <img className="img-fluid  d-flex" src={cloud} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-4 fw-medium text-info mt-3">How is SAP Cloud Platform distinct?</h3>
                            <div className="d-flex mb-2 wow fadeInUp" data-wow-delay="0.3s">
                                <ul>
                                    <li className='mb-3'>
                                        March ahead in the digital world by leveraging intelligent tools and capabilities dealing with <span className='color'>IoT, Big Data, analytics, design thinking and much more</span>.
                                    </li>
                                    <li className='mb-3'>
                                        Smartly integrate your cloud applications with their on-premise counterparts and vice-a-versa using pre-packaged integration content, and orchestrate them as APIs to enhance productivity.
                                    </li>
                                    <li className='mb-3'>
                                        Never compromise on your crucial data! Manage it effectively by gaining insights from live transactional data using <spna className='color'>most advanced in-memory data management technology.</spna>
                                    </li>
                                    <li className='mb-3'>
                                        Expand the scope of your business operations, without affecting the stability of current processes. Extension and innovation under the same roof!
                                    </li>
                                    <li className='mb-3'>
                                        Create and deliver the best of digital experience using SAP Cloud Platform Experience Maker, an exclusive tool built for the purpose.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden mb-5 p-4 px-lg-0 " style={{ boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                <div className="container feature px-lg-0">
                    <div className="row mx-lg-0">
                        <div className="col-lg-12 feature-text px-5 fadeInUp" data-wow-delay="0.1s">
                            <h4 className="mb-4 fw-medium text-info">Affy Solutions Be the Best Bet for Your SAP Cloud Platform Needs –</h4>
                            <div className="d-flex mb-2 wow fadeInUp" data-wow-delay="0.3s">
                                <p>Cloud computing has become a trend nowadays! So, keeping up with this trend, SAP came out with the SAP Cloud platform. Launched as an open platform-as-a-service (PaaS), it promises to deliver core platform services and unique in-memory capabilities for building and extending cloud applications that are mobile-enabled.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
