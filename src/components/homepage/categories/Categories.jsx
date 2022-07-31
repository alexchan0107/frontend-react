import React from 'react'
import womenimg from '../../../assests/images/women_img.png'
import menimg from '../../../assests/images/men_img.png'
import accessoriesimg from '../../../assests/images/Accessories_Image.png'

const Categories = () => {
  return (
    <div className='categories_section'>
        <div className='container'>
            <div className='categories_cards'>
                <div className='category_card'>
                    <div className='category_inner'>
                        <img src={womenimg} alt="" />
                        <div className='category_content'>
                            <h3 className='category_heading'>Women's</h3>
                        </div>
                    </div>
                    
                </div>
                <div className='category_card'>
                    <div className='category_inner'>
                        <img src={menimg} alt="" />
                        <div className='category_content'>
                            <h3 className='category_heading'>Men's</h3>
                        </div>
                    </div>                    
                </div>
                <div className='category_card card_block'>
                    <div className='category_inner'>
                        <img src={accessoriesimg} alt="" />
                        <div className='category_content'>
                            <h3 className='category_heading'>Accessories</h3>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories