import React, { useEffect } from 'react';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer';
import Salesforce1 from "../img/saleforce.jpg"

export const Salesforce = () => {

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
                            <h2 className="display-5 text-white animated zoomIn">Salesforce Service Cloud</h2>
                            <a  className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">Salesforce Service Cloud</a>
                            <h4 className="text-white animated zoomIn mt-3">Wide range of SAP solutions
                                <span className="text-info"> to address all customer needs</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden px-lg-0 ">
                <div className="container feature px-lg-0">
                    <div className="row mx-lg-0">
                        <div className="col-lg-12 feature-text px-5">
                            <h1 className="mb-4 fw-medium text-info">What is Salesforce </h1>
                            <div className="d-flex mb-2 wow fadeInUp" >
                                <p>Salesforce helps businesses keep track of customer interactions and sales data. It can manage leads, contacts, opportunities, and cases. Salesforce also offers several features to help businesses automate their sales and marketing processes, such as email marketing, lead capture, and lead scoring.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden mb-2 mt-4 px-lg-0 ">
                <div className="container feature px-lg-0">
                    <div className="row mx-lg-0">
                    <div className="col-lg-6 pe-lg-0 wow fadeInRight">
                            <div className="position-relative h-100">
                                <img className="img-fluid  d-flex" src={Salesforce1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-2 fw-medium text-info mt-3">Salesforce Architecture</h3>
                            <p>This tutorial will now briefly walk you through the Salesforce architecture. Here, you will be acquainted with the different layers of the Salesforce architecture individually.</p>
                            <div className="d-flex mt-4 wow fadeInUp" data-wow-delay="0.3s">
                                <ul>
                                    <li className='mb-3'>
                                    <span className='color fs-5'>Multi-tenant: </span>Salesforce stores data in a single database schema. There can be a single instance of a software server with multiple tenants. Speaking about a multi-tenant architecture, there is a single shared application service to several clients. This makes it cost-effective. On the contrary, in a single-tenant, the development and maintenance cost must be entirely owned by one client. Hence the multi-tenant architecture is a boon.
                                    </li>
                                    <li className='mb-3'>
                                    <spna className='color fs-5'>Metadata: </spna> Salesforce uses a metadata-driven development model. This allows developers to only focus on building the application. This metadata-driven platform makes customization and scaling up easy..
                                    </li>
                                    <li className='mb-3'>
                                    <span className='color fs-5' >API:</span> Salesforce provides a powerful source of APIs. This helps in developing and customizing the Salesforce1 Mobile App. Every feature of the Salesforce design has been planned and implemented precisely. 
                                    </li>
                                    
                                    
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
