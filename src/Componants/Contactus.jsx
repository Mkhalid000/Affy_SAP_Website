import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {enforceMaxLength, utility} from "../Componants/utility"
import "../App.css"

import one from "../img/one.png"
import two from "../img/two.png"
import three from "../img/three.png"
import four from "../img/four.png"
import five from "../img/five.png"


gsap.registerPlugin(ScrollTrigger);

export const Contactus = () => {
    const heading = useRef(null);


    useEffect(() => {
        gsap.fromTo(
            heading.current,
            { scale: .9 },
            {
                scale: 1,
                duration: 2,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading.current,
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
        <div className="container-fluid py-3 wow fadeInUp" >
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h2 className="mb-0 " ref={heading}>If You Have Any Query, Feel Free To Contact Us</h2>
                </div>
                <div className="row g-5 mb-5  ">
                    <div className="col-lg-4" >
                        <div className="d-flex align-items-center wow fadeIn">
                            <div className="colorb d-flex align-items-center justify-content-center rounded" style={{ width: '55px', height: '55px' }}>
                                <i className="fa fa-phone-alt text-black fs-5"></i>
                            </div>
                            <div className="ps-4">
                                <h6 className="mb-2">Call to ask any question</h6>
                                <h5 className="color mb-0">+91-87703 06617
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" >
                        <div className="d-flex align-items-center wow fadeIn">
                            <div className="colorb d-flex align-items-center justify-content-center rounded" style={{ width: '55px', height: '55px' }}>
                                <i className="fa fa-envelope-open text-black fs-5"></i>
                            </div>
                            <div className="ps-4">
                                <h6 className="mb-2">Email to get free quote</h6>
                                <h5 className="color mb-0">info@affycloudsolution .com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center wow fadeIn" >
                            <div className="colorb d-flex align-items-center justify-content-center rounded" style={{ width: '55px', height: '55px' }}>
                                <i className="fa fa-map-marker-alt text-black fs-5"></i>
                            </div>
                            <div className="ps-4">
                                <h6 className="mb-2">Visit our office</h6>
                                <h5 className="color mb-0"> Koh-e-fiza, Bhopal ,<br /> Madhya Pradesh
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt-3">
                <div className="col-lg-6 wow slideInUp" >
                        <div className="section-title  position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '400px' }}>
                            <h2 className="mb-0 "><span className='color'>Let's </span>Talk</h2>
                        </div>
                        <p className='lead'>We’ve been growing businesses since 2015, let us do it for you!</p>
                        <ul className='list-inline mt-5 d-flex justify-content-center px-3'>
                            <li className='list-inline-item'><img className="w-75 h-100" src={one} alt=''/></li>
                            <li className='list-inline-item'><img className="w-75 h-100" src={two} alt='' /></li>
                            <li className='list-inline-item'><img className="w-75 h-100" src={three} alt=''/></li>
                            <li className='list-inline-item'><img className="w-75 h-100" src={four} alt=''/></li>
                            <li className='list-inline-item'><img className="w-75 h-100" src={five} alt=''/></li>
                        </ul>


                    </div>
                    <div className="col-lg-6 ">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height: '50px' }} />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height: '50px' }} />
                                </div>
                                <div className="col-12">
                                    <input onInput={enforceMaxLength} type="number" className="form-control border-0 bg-light px-4" placeholder="Your Number" style={{ height: '50px' }} />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{ height: '50px' }} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-50 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
