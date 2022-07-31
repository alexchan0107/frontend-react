import React from 'react'
import heroImg from "../../../assests/images/heroimgone.png"

const OurFavTees = () => {
  return (
    <div className='ourFav_section'>
        <div className='ourFav_section_inner'>
            <img src={heroImg} alt="" />
            <div className='container'>
                <div className='ourFav_Content'>
                    <h1 className='common_heading'>Our Favorite Tees</h1>
                    <p className='commen_subHeading'>Everyday tees you need.</p>
                    <button className='shop_now_btn shop_green_btn'>SHOP NOW</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurFavTees