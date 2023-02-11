import React from 'react';
import {TbFileCertificate} from 'react-icons/tb';
import {FaHome} from 'react-icons/fa';
import aboutimg from '../images/about.png';
const About = () => {
  return (
    <>
        <br/><br/><h1 className='text-center'>About Us</h1><br/>
    <div className="about__container">
            <div className='about_image'>
                <img src={aboutimg}/>
            </div>
            <div className='about_right'>
                <div className='about_right_text'>
                    <big>Discover The Expertise</big>
                    <small>Behind House</small>
                    <span>House Inspection Services is a team of experienced and certified inspectors 
                    providing comprehensive home inspection Services to client. We aim to be a trusted partner in the home
                    buying process, offering impartial evaluation and expert advice. </span>
                    
                </div>
                <div className='about_right_icon'> 
                        <div className='box'>
                            <div className='icons'><TbFileCertificate color='white'/></div>
                            <span>Certification</span>
                            <p>Professional certified(CPI)<br/>Registered Home Inspection(RHI)</p>
                        </div>
                        <div className='box'>
                            <div className='icons'><TbFileCertificate color='white'/></div>
                            <span>Hign Ended Equipment</span>
                            <p>Thermal Imaging Camera <br/>Moisture Meter</p>
                        </div>
                        <div className='box'>
                            <div className='icons'><TbFileCertificate color="white" /></div>
                            <span>Certification</span>
                            <p>Professional certified(CPI)<br/>Registered Home Inspection(RHI)</p>
                        </div>
                        <div className='box'>
                            <div className='icons'><FaHome color='white'/></div>
                            <span>High Ended Equipment</span>
                            <p>Professional certified(CPI)<br/>Registered Home Inspection(RHI)</p>
                        </div>
                        
                </div>
            </div>
    </div>

    </>
  )
}

export default About
