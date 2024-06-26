import React, { useEffect, useRef } from 'react';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import analytic from "../img/analytic.jpg"

gsap.registerPlugin(ScrollTrigger);

export const Analytics = () => {
    const heading20 = useRef(null);
    const heading21 = useRef(null);

    useEffect(() => {    
        gsap.fromTo(
            heading20.current,
            { scale: 0.8 },
            {
                scale: 1,
                duration: 1,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading20.current,
                    start: 'top 80%',  // Adjusting start point
                    end: 'top 20%',  // Adjusting end point
                    scrub: 1,  // Scrub for smoother animation
                },
            }
        );   
        gsap.fromTo(
            heading21.current,
            { scale: 0.8 },
            {
                scale: 1,
                duration: 1,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading21.current,
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
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '40px' }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h2 className="display-5 text-white animated zoomIn">SAP Analytics Cloud</h2>
                            <a className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">SAP Analytics Cloud</a>
                            <h4 className="text-white animated zoomIn mt-3">Wide range of SAP solutions
                                <span className="text-info"> to address all customer needs</span></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container overflow-hidden mb-2 px-lg-0 ">
                <div className="container feature px-lg-0">
                    <div className="row  g-3 mx-lg-0">
                    <div className="col-lg-6 pe-lg-0 wow fadeInRight">
    <div style={{ overflow: 'hidden' }}>
        <img className="img-fluid d-block" src={analytic} alt="" style={{ width: '100%', height: 'auto' }} />
    </div>
</div>

                        <div className="col-lg-6 feature-text px-5 fadeInUp" >
                            <h1 className="mb-4 fw-medium text-info">SAP Analytics Cloud</h1>
                            <div className="d-flex mb-2 wow fadeInUp" >
                                <p>SAP Analytic Cloud is a single solution for business intelligence, enterprise planning and augmented with the power of predictive analytics and machine learning technology</p>
                            </div>
                            <div className="d-flex mb-3  fadeIn">
                                <div>
                                    <h5 className='h3  text-info'>What is SAP Analytics Cloud (SAP SAC)?</h5>
                                    <p>Affy offers a fully comprehensive, cloud-based analytics solution that combines BI, planning and predictive capabilities. Smart data preparation, data discovery, planning, and predictive analysis capability ideal for all industries and organizations. Our next-generation solutions are built from scratch and enables entities to discover, plan, predict, and collaborate with five real-time dashboards in one place .</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                    <h3 class="mb-0" ref={heading20}>All Analytics. All Users. One Product - SAP Analytic Cloud (SAP SAC)</h3>
                </div>
                <div class="row bg-white p-5">
                    <div class="col-sm text-center">
                        <img src="https://www.accely.com/wp-content/uploads/2020/08/ana-3.jpg" class="img-fluid" alt="" />
                        <h2 className='text-secondary mt-2'>Simplify</h2>
                    </div>
                    <div class="col-sm text-center">
                        <img src="https://www.accely.com/wp-content/uploads/2020/08/ana-4.jpg" class="img-fluid" alt="" />
                        <h2 className='text-secondary mt-2'>Experience</h2>
                    </div>
                    <div class="col-sm text-center">
                        <img src="https://www.accely.com/wp-content/uploads/2020/08/ana-5.jpg" class="img-fluid" alt="" />
                        <h2 className='text-secondary mt-2'>Trust</h2>
                    </div>
                </div>
            </div>

            <div className="container-fluid overflow-hidden px-lg-0">
                <div class="section-title text-center position-relative pb-3 mb-5 mt-5 mx-auto" style={{ maxWidth: '700px' }}>
                    <h3 class="mb-0" ref={heading21}>The Right Mix Of Smart Technologies With SAP Analytic Cloud</h3>
                </div>
                <div className="container feature py-3 px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight">
                            <div className="position-relative h-100">
                                <img className="img-fluid mt-5 d-flex" src="https://www.accely.com/wp-content/uploads/2020/08/ana-20.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text wow fadeInUp" >
                            <h3 className="mb-2">Business Intelligence (BI)</h3>
                            <p>Discover data across your business and make smart business decisions with self-service analytics.</p>
                            <div className="d-flex mb-2 mt-5 wow fadeIn" >
                                <div>
                                    <h5 className='color'><i class="bi bi-circle-fill me-2 3"></i>Effective preparation and modelling</h5>
                                    <p>Acquire deeper and refined insights with automated data cleansing. They help you to eliminate errors in data and categorize them.</p>
                                </div>

                            </div>
                            <div className="d-flex mb-1 wow fadeIn" >
                                <div>
                                    <h5 className='color'><i class="bi bi-circle-fill me-2 3"></i>Data examination and visualization</h5>
                                    <p>Irrespective of the data size, you can study the data. This data can be transformed into interactive visualization to motivate audiences.</p>
                                </div>

                            </div>
                            <div className="d-flex mb-1 wow fadeIn" >
                                <div>
                                    <h5 className='color'><i class="bi bi-circle-fill me-2 3"></i>Easy to understand</h5>
                                    <p>The visual data representation is easier to understand and draw conclusions. It helps you to understand your business activities briefly.</p>
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
