import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import almarai from "../img/almarai.png"
import slide1 from "../img/mit.png"
import hal from "../img/onex.png"


export const Testimonial = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col' style={{ textAlign: 'center' }}>
                            <img className=" w-50 h-75 " src={almarai} alt="" />
                        </div>
                    </div>
                    <div className='col'>
                        <div class="stars" style={{ textAlign: 'center' }}>
                            <i class="bi bi-star-half color"/><i class="bi bi-star-half color"/><i class="bi bi-star-half color"/><i class="bi bi-star-half color"/><i class="bi bi-star-half color"/>
                        </div>
                        <p className='text-center mb-5 text-black'>"After the integration of SAP SuccessFactors, Almarai has undergone a profound and notable transformation, marking a significant milestone in its journey."</p>


                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col' style={{ textAlign: 'center' }}>
                            <img className=" w-50 h-75 " src={hal} alt="" />
                        </div>
                    </div>
                    <div className='col'>
                        
                        <div class="stars" style={{ textAlign: 'center' }}>
                            <i class="bi bi-star-half color"/><i class="bi bi-star-half color"/><i class="bi bi-star-half color"/><i class="bi bi-star-half color"/><i class="bi bi-star-half color"/>
                        </div>
                        <p className='text-center mb-5 text-black'>“ A tremendous shift has taken place at ONEX with the implementation of SAP SuccessFactors. Their communication was great, and they listened and catered to our needs.” </p>


                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='container'>
                    <div className='row mt-1'>
                        <div className='col' style={{ textAlign: 'center' }}>
                            <img className=" w-50 h-75 " src={slide1} alt="" />
                        </div>
                    </div>
                    <div className='col'>
                     
                        <div class="stars" style={{ textAlign: 'center' }}>
                            <i class="bi bi-star-half color"/><i class="bi bi-star-half color"/><i class="bi bi-star-half color"/><i class="bi bi-star-half color"/><i class="bi bi-star-half color"/>
                        </div>
                        <p className='text-center mb-5 text-black'>"Since the implementation of SAP SuccessFactors, Mitsubishi Electric has embarked on a transformative journey, witnessing a remarkable evolution in its operations and performance."</p>


                    </div>
                </div>
            </Carousel.Item>
            
        </Carousel>
    );
}
