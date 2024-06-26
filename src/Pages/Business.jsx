import React, { useEffect } from 'react';
import { Navbar } from '../Componants/Navbar'
import { TopNavbar } from '../Componants/TopNavbar';
import { Footer } from '../Componants/Footer';
import laptop from "../img/laptop.png"
import next from "../img/business-technology-platform1.png"
import adva from "../img/advantage.png"

export const Business = () => {

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
                            <h2 className="display-5 text-white animated zoomIn">SAP Business Technology Platform</h2>
                            <a  className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">SAP Business Technology</a>
                            <h4 className="text-white animated zoomIn mt-3">Wide range of SAP solutions
                                <span className="text-info"> to address all customer needs</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature py-3 px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight">
                            <div className="position-relative h-100">
                                <img className="img-fluid  d-flex" src={laptop}alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-2">SAP BPC and Group Reporting</h3>
                            <p>Our SAP BPC and Group Reporting service seamlessly integrates financial planning, budgeting, forecasting, and consolidation. With BPC, businesses gain real-time insights and accuracy, while Group Reporting ensures compliance and consistency in financial reporting across the organization.</p>
                            <div className="d-flex mb-2 mt-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='color'>SAP BTP , Integration and Abap Factory</h5>
                                    <p>Our SAP BTP Integration, and ABAP Factory service empowers businesses to innovate and integrate seamlessly. Leveraging the SAP Business Technology Platform, we connect SAP and non-SAP systems effortlessly and provide a modern development environment with ABAP Factory. <br /> <br />Integration is a key component of SAP BTP, allowing businesses to seamlessly connect their on-premises and cloud applications, data, and processes across different systems and platforms.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature py-3 px-lg-0">
                    <div className="row mx-lg-0">
                        <div className="col-lg-12 pe-lg-0 wow fadeInRight">
                            <div className="position-relativ bg-white">
                                <img className="img-fluid mt-3 d-flex" src={next} alt="" />
                            </div>
                            <p className='mt-4 fs-5'>SAP BTP provides a variety of smart technologies to help optimize your business processes. Examples include Artificial Intelligence (AI), the Internet of Things (IoT), and blockchain. The platform gives SAP communities and developers great freedom for <span className='color '>developing their own applications and solutions.</span></p>
                            <h3 className='mt-5'>Advantages of SAP Business Technology Platform </h3>
                            <h5>SAP Business Technology Platform lets you :</h5>
                            <ul>
                                <li>
                                    Offer a unified view of all your data across a multitude of systems and platforms. Its analytics helps you gain real-time insight and make data driven decisions.
                                </li>
                                <li>
                                    Enable integrating SAP, non-SAP, and third-party solutions. Provides seamless data exchange between all your business processes.
                                </li>
                                <li>
                                    Allow customizing existing applications or developing solutions from scratch; helps tailor all your assets to fit your company needs.
                                </li>
                                <li>
                                    Take advantage of open standards to connect your systems securely so you can share information throughout your enterprise.
                                </li>
                                <li>
                                    Develop new products faster by making better use of data across your organization.
                                </li>
                            </ul>
                            <div className="position-relativ mt-4 mb-4 bg-white">
                                <img className="img-fluid mt-3 d-flex" src={adva}alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}
