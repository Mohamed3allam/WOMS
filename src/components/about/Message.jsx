import React from 'react'
import { Link } from 'react-router-dom'

const Message = ({ images }) => {
  return (
    <div className='wow fadeIn' data-wow-delay=".2s" data-wow-duration="1s">
        <div className="blog-wrapper container">
            <div className="post-item">
                <div className="post-item-inner message-section py-5" style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    <div className=" col " style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
                        <h2  style={{color:'green', fontWeight:'lighter'}}>Message</h2>
                        <p>We seek to provide distinguished medical services to doctors, through:
                            Providing professional and administrative support to doctors, including:
                            Continuing professional training and development
                            Assistance in establishing clinics and medical centers
                            Providing medical supply services
                            Representing doctors to governmental and non-governmental agencies
                            Contributing to improving the quality of health care provided to patients, through:
                            Spreading health awareness among doctors and patients
                            Cooperating with relevant authorities in the field of health care
                            Medical organization services for doctors.</p>
                    </div>
                    <div className=" col d-flex justify-content-center">
                        <Link href="blog-single.html"><img style={{borderRadius:'5px',boxShadow:'0px 0px 15px 2px black', width:'600px'}} src={images['message.jpg']} alt="blog" /></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Message