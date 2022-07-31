import React from 'react'

import { ReactComponent as MailSVG } from '../../../assests/images/icon-mail.svg';

const Subscribe = () => {
  return (
    <div className='subscribe_section'>
        <div className='subscribe_section_inner'>
            <div className='container'>
                <div className='signUp_Heading_Sec'>
                    <p>
                        <MailSVG/>
                    </p>
                    <h2 className='heading_two'>Sign Up & Stay Connected</h2>
                </div>
                <div className='subscriber_content'>
                    <div className='subscribe_para'>
                        <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
                    </div>
                    <div className='subscribeInput'>
                        <input type="text" placeholder='Enter Your Email Address'/>
                        <button className='subscribe_btn'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe