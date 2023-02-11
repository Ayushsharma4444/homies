import React from 'react';
import {GiBuyCard} from 'react-icons/gi';
import {SiHomeassistant} from 'react-icons/si';
import {GiTechnoHeart} from 'react-icons/gi';
import {TbPool} from 'react-icons/tb';
import {FaChartPie} from 'react-icons/fa';

const Ourservices = () => {
    return (
        <div className='services'>
        <h1 className='text-center'>Our Services</h1><br/><br/>
            <div className='serices_container'>
                <div className='services_icon'>
                    <div className='icon_box'><GiBuyCard color='#1AFF'/></div>
                    <button>Buyer/Seller/Owner</button>
                </div>

                <div className='services_icon'>
                    <div className='icon_box'><SiHomeassistant color='#1AFF'/></div>
                    <button>New Home</button>
                </div>

                <div className='services_icon'>
                    <div className='icon_box'><GiTechnoHeart color='#1AFF'/></div>
                    <button>High Technology</button>
                </div>

                <div className='services_icon'>
                    <div className='icon_box'><TbPool color='#1AFF'/></div>
                    <button>Pool & Spa</button>
                </div>

                <div className='services_icon'>
                    <div className='icon_box'><FaChartPie color='#1AFF'/></div>
                    <button>Commercial</button>
                </div>
            </div>
        </div>

    )
}

export default Ourservices