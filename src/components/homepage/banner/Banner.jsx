import React from 'react';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sliderone from '../../../assests/images/herosliderone.png'
import slidertwo from '../../../assests/images/heroslidertwo.png'
import sliderthree from '../../../assests/images/herosliderthree.png'

const Banner = () => {
  return (
    <div className='banner_section'>
        <Swiper
        cssMode={true} 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
            clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='slider-section '>
                <img className='sliderImg' src={sliderone} alt="" />
                <div className='container desktop-view '>
                    <div className='slider_content'>
                        <h1 className='common_heading'>Shop New Arrivals</h1>
                        <p className='commen_subHeading'>Our coolest new items are waiting for you!</p>
                        <button className='shop_now_btn shop_black_btn'>SHOP NOW</button>
                    </div>
                </div>                
            </div> 
        </SwiperSlide>
        <SwiperSlide>
            <div className='slider-section slider-section-two '>
                <img className='sliderImg' src={slidertwo} alt="" />
                <div className='container desktop-view'>
                    <div className='slider_content'>
                        <h1 className='common_heading'>Shop new arrivals</h1>
                        <p className='commen_subHeading'>Our coolest new items are waiting for you!</p>
                        <button className='shop_now_btn shop_black_btn'>SHOP NOW</button>
                    </div>
                </div>                
            </div> 
        </SwiperSlide>
        <SwiperSlide>
            <div className='slider-section slider-section-two '>
                <img className='sliderImg' src={sliderthree} alt="" />
                <div className='container desktop-view'>
                    <div className='slider_content'>
                        <h1 className='common_heading'>Men’s Tees</h1>
                        <p className='commen_subHeading'>Find the perfect shirt.</p>
                        <button className='shop_now_btn shop_black_btn'>SHOP NOW</button>
                    </div>
                </div>
            </div> 
        </SwiperSlide>        
      </Swiper>
      <div className='slider-section  mobile-view'>
            <div className='slider_content'>
                <div className='container'>
                        <h1 className='common_heading'>Shop new arrivals</h1>
                        <p className='commen_subHeading'>Our coolest new items are waiting for you!</p>
                        <button className='shop_now_btn shop_black_btn'>SHOP NOW</button>
                    </div>
                </div>                
            </div> 
    </div>
  )
}

export default Banner