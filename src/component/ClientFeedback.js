import React from 'react'

const ClientFeedback = () => {
  return (
    <>
   <br/> <br/><h1 className='text-center'>Client Feedback</h1><br/>
    <div className='feedback_container'>
        <div className='client text-center'>
            <img src='https://media.istockphoto.com/id/532646111/photo/business-woman-customer-service-worker.jpg?s=612x612&w=0&k=20&c=lmP69P-FZOLi8oXjFMS0b0_7yBDYqqmw8sarSYeCr0s='/>
            <div className='client_text'>
            <strong>Jacob Williams</strong><br/>
            <small>Selling Agent</small><br/><br/>
            <span>I recently used House Inspection Services for my home purchase and I was impressed with the level of professionalism and expertise of the inspector. The inspection report was detailed and provided me with a complete understanding of the property's condition. I highly recommend their services to anyone looking for a thorough and objective</span>
            </div>
        </div>


        <div className='client text-center'>
            <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18260060/2022/12/7/4aa0804d-9509-4ac8-9237-0f3bd31306b01670404076307-Mast--Harbour-Men-Navy-Blue-Self-Design-Front-Open-Sweater-1-1.jpg'/>
            <div className='client_text'>
            <strong>Kelian Andreson</strong><br/>
            <small>Selling Agent</small><br/><br/>
            <span>House Inspection Services exceeded my expectations! The inspector was knowledgeable and took the time to explain the results of the inspection in a clear and concise manner. I appreciated the digital photos and recommendations for repairs and maintenance that were included in the report. I would definitely use their services again in the future</span>
            </div>
        </div>


        <div className='client text-center'>
            {/* <img src='https://www.seekpng.com/png/small/263-2637475_customer-care-support-call-center-girls-model.png'/> */}
            <img src='https://st.depositphotos.com/1003989/4006/i/600/depositphotos_40064937-stock-photo-woman-customer-service-worker.jpg'/>
            <div className='client_text'>
            <strong>Adam Joseph</strong><br/>
            <small>Selling Agent</small><br/><br/>
            <span>As a first-time homebuyer, I was nervous about the home inspection process, but the inspector from House Inspection Services put me at ease. He was friendly and
professional, and took the time to answer all of my questions. The inspection report was comprehensive and gave me the confidence I needed to make my purchase.</span>
            </div>
        </div>

    </div>
    </>
  )
}

export default ClientFeedback