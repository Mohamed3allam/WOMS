import React from 'react'
import { Link } from 'react-router-dom'

const Vision = ({ images }) => {
  return (
    <div className='wow fadeIn' data-wow-delay=".2s" data-wow-duration="1s">
        <div className="blog-wrapper container">
            <div className="post-item">
                <div className="post-item-inner vision-section py-5" style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    <div className=" col d-flex justify-content-center">
                        <Link href="blog-single.html"><img style={{borderRadius:'5px',boxShadow:'0px 0px 15px 2px black', width:'500px'}} src={images['vision.jpg']} alt="blog" /></Link>
                    </div>
                    <div className=" col " style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
                        <h2  style={{color:'green', fontWeight:'lighter'}}>Vision</h2>
                        <p>To be a leading organization in providing distinguished medical services to doctors, by providing them with professional, administrative and organizational support, which contributes to improving the quality of health care provided to patients.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vision