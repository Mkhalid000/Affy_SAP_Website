import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../App.css"
import chemical from "../img/chemical.png"
import bank from "../img/bank.png"
import health from "../img/healthcare_logo.png"
import info from "../img/information.png"




gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
    const heading = useRef(null);   


    useEffect(() => {
        gsap.fromTo(
            heading.current,
            { scale: 0.7 },
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
    <div class="container-fluid  wow fadeInUp " data-wow-delay="0.1s">
        <div class="container py-3">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '750px' }}>
                <h1 class="mb-4" ref={heading}>Transforming industries to new depths and widths</h1>
                <p className='text-white mb-3 text-center lead'>Get ready for a big change in how industries operate with Affy Cloud Solution leading the way, using SAP SuccessFactors (HCM) to transform how businesses manage their people. Partner with us to unlock new opportunities, drive growth, and stay ahead of the curve. Our commitment to excellence means we're always evolving to meet your needs</p>
            </div>
            <div class="row g-5">
                <div class="col-lg-6 col-md-6  zoomIn1" >
                    <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon bg-white">
                            <img className='w-75 h-75' src={chemical} alt=''/>
                        </div>
                        <h4 class="mb-3">chemical manufacturing</h4>
                        <p class="m-0 ">At Affy Cloud Solution, you are welcomed to transform chemical industry workforce surveillance with SAP Success Factors (HCM). We provide the best customised solutions to drive productivity .</p>
                        
                    </div>
                </div>
                <div class="col-lg-6 col-md-6  zoomIn1">
                    <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon bg-white">
                            <img className='w-75 h-75' src={bank} alt=''/>
                        </div>
                        <h4 class="mb-3">Banking & Finance</h4>
                        <p class="m-0">With SAP SuccessFactors software, Unlock the future of finance and banking workforce management. At Affy Cloud Solution, we are highly dedicated to customise the most efficient solutions .</p>
                       
                    </div>
                </div>
                <div class="col-lg-6 col-md-6  zoomIn1">
                    <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon bg-white">
                            <img className='w-75 h-75 ' src={health} alt=''/>
                        </div>
                        <h4 class="mb-3">Healthcare</h4>
                        <p class="m-0">The tailored solutions at Affy Cloud optimise human capital management, fuels efficient operations and elevates patient care standards. It is a great way to shape your future of healthcare.</p>
                        
                    </div>
                </div>
                <div class="col-lg-6 col-md-6  zoomIn1">
                    <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon  bg-white">
                            <img className='w-75 h-75' src={info} alt=''/>
                        </div>
                        <h4 class="mb-3">Information Technology</h4>
                        <p class="m-0">The Affy Cloud Solution uses the top-notch information technology to transform the workforce management. Our tailored solutions are dedicated to optimise human capital, fostering efficiency and innovation.</p>
                       
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
