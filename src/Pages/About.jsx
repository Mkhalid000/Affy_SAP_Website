import "../App.css";
import React, { useEffect , useRef } from 'react';
import { TopNavbar } from '../Componants/TopNavbar';
import { Navbar } from '../Componants/Navbar';
import { Aboutus } from '../Componants/Aboutus';
import { Footer } from '../Componants/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const About = () => {
    const tech = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            tech.current,
            { scale: 0.8 },
            {
                scale: 1,
                duration: 2,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: tech.current,
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
                    <div className="row py-4">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-5 text-white animated zoomIn">About Us</h1>
                            <a className="h5 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h5 text-white">About</a>
                            <h4 className="text-white animated zoomIn mt-3">Transforming enterprises
                                <span className="text-info"> At a whole new level</span></h4>
                            <p className="animated mt-3">From strategy to outcomes, and from edge to core,
                                we leverage SAP and Affy Cloud Solutions at a global scale.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid" >
                <div class="container py-3">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '750px' }}>
                        <h1 class="mb-4" >Some of our Statistics</h1>
                        <p className='text-white mb-3 text-center lead'>AFFY CLOUD Solutions is a boutique SAP Solutions company helping global customers in their digital transformation journey.</p>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-6 col-md-6  zoomIn1" >
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon bg-white">
                                    <i class="bi bi-people-fill"></i>
                                </div>
                                <h4 class="mb-3">Standard Global SAP Practices</h4>
                                <p class="m-0 ">Standard Global SAP Practices are well-known ways of doing things that help keep SAP solutions relevant and efficient. At Affy Cloud Solutions, we focus on providing reliable solutions to our clients.</p>

                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6  zoomIn1">
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon bg-white">
                                    <i class="bi bi-person-plus-fill"></i>
                                </div>
                                <h4 class="mb-3">Rich Industry Experience</h4>
                                <p class="m-0">We provide profitable outcome to businesses in every industry whether it is IT, Food, Healthcare, Manufacturing, and many more. We aim not only profitability but also success and growth our clients.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6  zoomIn1">
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon bg-white">
                                    <i class="bi bi-phone-vibrate-fill"></i>
                                </div>
                                <h4 class="mb-3">Endless Support</h4>
                                <p class="m-0">Our company will provide you 24/7 support. If you have any issue our dedicated team will be available anytime to give you solution. we will give you reliable support and ensure smooth functioning of our client's system.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6  zoomIn1">
                            <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon  bg-white">
                                    <i class="bi bi-rss"></i>
                                </div>
                                <h4 class="mb-3">Hi-end Technology</h4>
                                <p class="m-0">We have a wide range of technology that are vast and unique. These help our customers turns their problem into business oppourtunities. We are experts in artificial intelligence, cloud computing and keeping the data secure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Aboutus />
            <div className="container box">
                <div className="col">
                    <div className="row mt-5 mb-5" style={{ boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                        <div class="section-title text-center position-relative pb-3 mb-4  mt-3 mx-auto" style={{ maxWidth: '900px' }}>
                            <h1 class="mb-0">Who we are</h1>
                        </div>
                        <p className='text-white mb-4 text-center lead'>
                            Welcome to AFFY Cloud Solution! We are a global IT company that focuses on business software and modern technology. We are highly dedicated to provide top-notch employee experiences using SAP and other technology. Our main goal is to help reach higher levels of client's business with the help of our technology. We will build good relationships and bond with our clients and put their needs first. Join us, we will work together to create new innovative products and we will achieve success together.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid  aboutback wow fadeInUp">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7" style={{ minHeight: '300px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn aboutus-image" ref={tech} data-wow-delay="0.9s" src="https://drexel.edu/news/~/media/Drexel/Core-Site-Group/News/Images/v2/story-images/2023/March/Key-partnerships/key-partnerships_16x9.jpg" alt='' style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h2 className="mb-0 heading-hover" >We partner with firms to bring clarity to their brand</h2>
                            </div>
                            <p className="mb-4">We are highly dedicated to helping global customers streamline their operations and embrace the power of digital transformation.</p>
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-check-circle-fill fs-4 text-info me-2"></i>
                                <h4 class="mb-0">Our Mission</h4>
                            </div>
                            <p>To innovate and collaborate every business process to enhance your customer and employee experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
