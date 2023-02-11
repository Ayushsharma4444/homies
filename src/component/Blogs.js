import React from 'react'
import {BsFillCalendarDayFill} from 'react-icons/bs';
const Blogs = () => {
  return (
    <>
            <br/><br/><h1 className='text-center'>Blogs</h1><br/><br/>
    <div className='blog_container'>
        <div className='blog_box'>
            <div className='blog_box_image'><img src='https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/15/2016/10/home-for-sale-in-whiterocks-ut-102516-hero.jpg'/></div>
            <div className='blog_box_text'>
                <div className='author'>
                    <img src='https://www.pngitem.com/pimgs/m/527-5274442_customer-care-girl-png-transparent-png.png'/>
                    <span>Jane<br/><small>by:Admin</small></span>
                    {/* <small>by:Admin</small> */}
                </div>
                <div className='blog_author_text'>
                    <span>The Importance of a thorough Home Inspection Before Buying</span>
                </div>
            </div>
            <hr/>
            <div className='blox_box_readmore text-center'>
                    <small><BsFillCalendarDayFill/> June 24,2021</small><br/>
                    <button>READ MORE</button>
            </div>
        </div>


        <div className='blog_box'>
            <div className='blog_box_image'><img src='http://prod-upp-image-read.ft.com/15da1136-474c-11e3-b4d3-00144feabdc0'/></div>
            <div className='blog_box_text'>
                <div className='author'>
                    <img src='https://frontlogix.com/wp-content/uploads/2022/02/Customer-Girl.jpg'/>
                    <span>Jane<br/><small>by:Admin</small></span>
                    {/* <small>by:Admin</small> */}
                </div><br/>
                <div className='blog_author_text'>
                        <span>Top Five Areas to focus on during a home inspection</span>
                </div>
            </div>
            <hr/>
            <div className='blox_box_readmore text-center'>
                    <small><BsFillCalendarDayFill/> June 24,2021</small><br/>
                    <button>READ MORE</button>
            </div>
        </div>

        <div className='blog_box'>
            <div className='blog_box_image'><img src='https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/15/2016/10/home-for-sale-in-whiterocks-ut-102516-hero.jpg'/></div>
            <div className='blog_box_text'>
                <div className='author'>
                    <img src='https://www.pngitem.com/pimgs/m/527-5274442_customer-care-girl-png-transparent-png.png'/>
                    <span>Jane<br/><small>by:Admin</small></span>
                    {/* <small>by:Admin</small> */}
                </div><br/>
                <div className='blog_author_text'>
                        <span>The benefits of hiring professional Home Inspector</span>
                </div>
            </div>
            <hr/>
            <div className='blox_box_readmore text-center'>
                    <small><BsFillCalendarDayFill/>  June 24,2021</small><br/>
                    <button>READ MORE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blogs