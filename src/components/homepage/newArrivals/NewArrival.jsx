import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,  Autoplay } from "swiper";

import productImg from '../../../assests/images/productImg.png'

const NewArrival = () => {
  return (
    <div className='new_arrival_section'>
        <div className='container'>
            <h1 className='common_heading'>New Arrivals</h1>
            <div className='newarrival_slider'>
                <Swiper
                    cssMode={true}                    
                    navigation={true}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },   
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },               
                    }}
                    modules={[ Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='arrival_product'>
                            <img src={productImg} alt="" />
                            <div className='product_content'>
                                <h4 className='product_title'>Product Title</h4>
                                <p className='product_name'>Women's T-SHIRT</p>
                                <h4 className='product_price'> <span>$</span> 19.99</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='arrival_product'>
                            <img src={productImg} alt="" />
                            <div className='product_content'>
                                <h4 className='product_title'>Product Title</h4>
                                <p className='product_name'>Women's T-SHIRT</p>
                                <h4 className='product_price'><span>$</span> 19.99</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='arrival_product'>
                            <img src={productImg} alt="" />
                            <div className='product_content'>
                                <h4 className='product_title'>Product Title</h4>
                                <p className='product_name'>Women's T-SHIRT</p>
                                <h4 className='product_price'> <span>$</span> 19.99</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='arrival_product'>
                            <img src={productImg} alt="" />
                            <div className='product_content'>
                                <h4 className='product_title'>Product Title</h4>
                                <p className='product_name'>Women's T-SHIRT</p>
                                <h4 className='product_price'><span>$</span>19.99</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default NewArrival
