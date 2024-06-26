import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "../App.css"
import { Aboutus } from '../Componants/Aboutus';
import { Services } from '../Componants/Services';
import { Testimonial } from '../Componants/Testimonial';
import { TopNavbar } from '../Componants/TopNavbar';
import { Navbar } from '../Componants/Navbar';
import { Footer } from '../Componants/Footer';
import { Contactus } from '../Componants/Contactus';
import { Link } from 'react-router-dom';
import craousel1 from "../img/craousel-1 .jpg"
import craousel2 from "../img/crasel3.jpg"
import craousel13 from "../img/crasel2.jpg"
import { Whyaffy } from '../Componants/Whyaffy';
import { Partner } from '../Componants/Partner';
import {Counting}  from "../Componants/Counting"

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
    const heading = useRef(null);
    const heading20 = useRef(null);
    const heading21 = useRef(null);





    useEffect(() => {
        gsap.fromTo(
            heading.current,
            { scale: 0.8 },
            {
                scale: 1.1,
                duration: 1,  // Longer duration for smoother transition
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

    return (
        <div>
            <TopNavbar />
            <div class="container-fluid position-relative p-0">
                <Navbar />
                <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src={craousel1} alt="" />
                            <div class="carousel-caption res_home d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3 " style={{ maxWidth: '900px' }}>
                                    <h5 class="text-white mb-3 animated first_h fs-3 slideInDown">Innovative SAP Technologies</h5>
                                    <h1 class="text-white mb-md-4 home_text animated zoomIn">Revolutionize Your Business</h1>
                                    <h3 class="text-white mb-md-4 third_h animated zoomIn">With SAP Successfactors HXM</h3>
                                    <Link to="/contact" class="btn py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Know More</Link>
                                    <Link to="/contact" class="btn btn-outline-light py-md-3 px-md-5 animated quote_btn1 border rounded-pill slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img class="w-100" src={craousel2} alt="" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3 " style={{ maxWidth: '900px' }}>
                                    <h5 class="text-white mb-3 animated first_h fs-3 slideInDown">Cutting-Edge SAP Solutions</h5>
                                    <h1 class=" text-white mb-md-4 animated home_text zoomIn">Innovative & Intelligent </h1>
                                    <h3 class=" text-white mb-md-4 animated third_h zoomIn">Sustainable Solutions </h3>
                                    <Link to="/contact"><a class="btn  py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Know More</a></Link>
                                    <Link to="/contact"><a class="btn btn-outline-light py-md-3 px-md-5 animated quote_btn1 border rounded-pill slideInRight">Contact Us</a></Link>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src={craousel13} alt="" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3 " style={{ maxWidth: '900px' }}>
                                    <h5 class="text-white mb-3 animated first_h  fs-3 slideInDown">Next-Generation SAP Solutions</h5>
                                    <h1 class=" text-white mb-md-4  home_text animated zoomIn">Revolutionize Your Business</h1>
                                    <h3 class=" text-white mb-md-4  animated third_h zoomIn"> With SAP S/4HANA</h3>
                                    <Link to="/contact"><a class="btn  py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Know More</a></Link>
                                    <Link to="/contact"><a class="btn btn-outline-light py-md-3 px-md-5 animated quote_btn1 border rounded-pill slideInRight">Contact Us</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Counting/>
         
            <Whyaffy />
            <div className="container box">
                <div className="col">
                    <div className="row mt-5 mb-5" style={{ boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                        <div class=" text-center position-relative pb-3 mb-4  mt-3 mx-auto" style={{ maxWidth: '800px' }}>
                            <h1 class="mb-3" ref={heading20}>Our Expertise</h1>
                            <p className='lead' ref={heading21}>Harnessing our wealth of experience with leading organizations, we specialize in optimizing operations for various industries. Our solutions aim to boost productivity, efficiency, and innovation while saving costs and driving revenue growth.</p>
                        </div>
                        <div class='text-white mb-4 lead'>
                            <h4 class='color'>How we transform Our Services</h4>
                            <div class='container'>
                                <div class='row mt-3 px-3'>
                                    <div class='col-12 col-md-6'>
                                        <div class='d-flex align-items-center mb-3'>
                                            <i class="bi bi-check-circle-fill me-3 text-info fs-4"></i>
                                            <p class="mb-0">SAP SuccessFactors (HXM)</p>
                                        </div>
                                        <div class='d-flex align-items-center mb-3'>
                                            <i class="bi bi-check-circle-fill me-3 text-info fs-4"></i>
                                            <p class="mb-0">SAP Customer Experience (CX)</p>
                                        </div>
                                        <div class='d-flex align-items-center mb-3'>
                                            <i class="bi bi-check-circle-fill me-3 text-info fs-4"></i>
                                            <p class="mb-0">SAP S/4 HANA</p>
                                        </div>
                                        <div class='d-flex align-items-center mb-3'>
                                            <i class="bi bi-check-circle-fill me-3 text-info fs-4"></i>
                                            <p class="mb-0">SAP Concur</p>
                                        </div>
                                    </div>
                                    <div class='col-12 col-md-6'>
                                    <div class='d-flex align-items-center mb-3'>
                                            <i class="bi bi-check-circle-fill me-3 text-info fs-4"></i>
                                            <p class="mb-0">SAP SAC</p>
                                        </div>
                                        <div class='d-flex align-items-center mb-3'>
                                            <i class="bi bi-check-circle-fill me-3 text-info fs-4"></i>
                                            <p class="mb-0">SAP BTP, Integration and Abap Factory</p>
                                        </div>
                                        <div class='d-flex align-items-center mb-3'>
                                            <i class="bi bi-check-circle-fill me-3 text-info fs-4"></i>
                                            <p class="mb-0">Digital Transformation – Mobile, Commerce, RPA, IoT, AI & Cloud Migration</p>
                                        </div>
                                        <div class='d-flex align-items-center mb-3'>
                                            <i class="bi bi-check-circle-fill me-3 text-info fs-4"></i>
                                            <p class="mb-0">Specialized Services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Services />
            <Aboutus/>
            <Partner/>
            <div>
                <div className="container-fluid  aboutback fadeInUp" data-wow-delay="0.1s">
                    <div className="container ">
                        <div className="row">
                            <div class="section-title text-center position-relative pb-3 mb-5 mt-5 mx-auto" style={{ maxWidth: '700px' }}>
                                <h1 class="mb-4" ref={heading}>What Clients Say</h1>
                                <p className='text-white mb-3 text-center lead fs-4'>We place huge value on strong relationships and have seen the benefit they
                                    bring to our business. Customer feedback is vital in helping us to get it right.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-title position-relative pb-3 mb-4 ">
                                    <h2 className="mb-0 heading-hover mt-5" >What Our Clients Say About Our SAP Solutions</h2>
                                </div>
                                <p className="mb-4 fw-semibold fs-5">
                                    We place huge value on strong relationships and have seen the benefit they
                                    bring to our business. Customer feedback is vital in helping us to get it right.
                                </p>

                            </div>
                            <div className="col-lg-6 border bg-white" style={{ minHeight: '350px' }}>
                                <div className="position-relative h-100 bg-white">
                                    <Testimonial />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contactus />

            <Footer />


        </div>
    )
}
