import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../App.css";
import about0 from "../img/about0.jpg"
import about1 from "../img/about1.jpg"

gsap.registerPlugin(ScrollTrigger);

export const Aboutus = () => {
    const imageRef = useRef(null);
    const imageRef1 = useRef(null);

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
            imageRef1.current,
            { scale: 0.8 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: imageRef1.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1,
                },
            }
        );

    }, []);

    return (

        <div>
            {/* <!-- Features Start --> */}
            <div class="container-fluid py-3 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 class="mb-0">We Are Here to Grow Your Business Exponentially</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4 ">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn features-item" data-wow-delay="0.2s">
                                    <div class="colorb rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fs-4 fa-cubes text-black"></i>
                                    </div>
                                    <h4>Best In Industry</h4>
                                    <p class="mb-0">Unparalleled excellence, innovative solutions, highest standards, expert craftsmanship, and top-tier performance in the industry.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <div class="colorb rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fs-4 fa-award text-black"></i>
                                    </div>
                                    <h4>Award Winning</h4>
                                    <p class="mb-0">Recognized for excellence, our award-winning team delivers innovative, high-quality solutions that set industry standards.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '400px' }}>
                            <div class="position-relative h-100">
                                <img ref={imageRef1} class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={about0} alt='#' style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div class="col-lg-4 " >
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <div class="colorb rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fs-4 fa-users-cog text-black"></i>
                                    </div>
                                    <h4>Professional Staff</h4>
                                    <p class="mb-0">Highly skilled, experienced professionals delivering exceptional service with dedication, expertise, and attention to detail.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <div class="colorb rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fs-4 fa-phone-alt text-black"></i>
                                    </div>
                                    <h4>24/7 Support</h4>
                                    <p class="mb-0">Reliable, around-the-clock assistance ensuring continuous availability, prompt responses, and comprehensive support anytime, anywhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid  aboutback wow fadeInUp">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h2 className="mb-0 heading-hover">Our Technology </h2>
                            </div>
                            <p className="mb-4">
                                Welcome to Our Technology, where innovation has no bounds and SAP Services is our secret weapon. Our expertise in this groundbreaking technology empowers us to change the game, especially when it comes to managing SAP services. We make things done faster and run smoother. The main goal of our team is all about making things better for our customers.
                                We are dedicated to delivering exceptional results that surpass your expectations. Join us and unleash the full potential of SAP services together.
                            </p>
                            <div className="row g-2 mb-3">
                                <div className="col-sm-6 " >
                                    <p className="mb-3 ">Unlock the power of SAP Content Services with Affy Cloud Solution. Seamlessly manage your content for enhanced productivity and efficiency. So let’s Experience the great journey with us.</p>

                                </div>
                                <div className="col-sm-6" >
                                    <p className="mb-3 ">At Affy Cloud Solution, we’re masters of SAP Content Services. Picture centralized storage and clever features for super-smooth content management. Partner with us for smarter workflows and top-notch data control.</p>

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img ref={imageRef} className="position-absolute w-100 h-100 rounded wow zoomIn aboutus-image" data-wow-delay="0.9s" src={about1} alt='#' style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features Start --> */}
        </div>
    );
};
