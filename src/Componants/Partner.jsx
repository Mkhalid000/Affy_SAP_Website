import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../App.css"
import sap from "../img/SAP.jpg"
import res from "../img/res.png"
import plan from "../img/plan.png"
import salesforce from "../img/salesforce.jpg"
import srrg from "../img/srrg.jpg"
import al from "../img/almarai.png"
import hal from "../img/hail.png"
import mofaic from "../img/mofaic.png"
import mit from "../img/mit.png"
import onex from "../img/onex.png"
import slide1 from "../img/slide1.png"

gsap.registerPlugin(ScrollTrigger);
export const Partner = () => {
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
    return (
        <section>
            <div class="container mt-3">
                <div class="row justify-content-md-center">
                    <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 class="mb-4 display-5 text-center" ref={heading}>Our Partners</h2>
                        {/* <p class="fs-5 text-secondary mb-5 text-center">Our clients are our top priority, and we are committed to providing them with the highest level of service.</p> */}
                        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </div>

            <div class="container overflow-hidden">
                <div class="row gy-4 mb-4 ">
                    <div className="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={sap} width="100%" height="100" alt=''/>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={res} width="100%" height="100" alt=''/>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img className='mt-2' src={plan} width="80%" height="80%" alt=''/>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={salesforce} width="100%" height="100" alt=''/>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={srrg} width="60%" height="65" className='mt-3' alt=''/>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3 text-center">
                        <div className="text-secondary bg-light part" style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h2 className='text-primary' style={{ textAlign: 'center' }}>Cloud Brisk</h2>
                        </div>
                    </div>

                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={al} width="60%" height="65" className='mt-3' alt='' />
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={hal} width="70%" height="100" alt=''/>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={mofaic} width="100%" height="100" alt=''/>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={mit} width="85%" height="100" alt=''/>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={onex} width="80%" height="100" alt=''/>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-xl-3 text-center">
                        <div class="text-secondary bg-light part" style={{ height: '100px' }}>
                            <img src={slide1} width="90%" height="100" alt=''/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
