import React from 'react'
import { Link } from 'react-router-dom'

const Principles = ({ images }) => {
  return (
    <div className='wow fadeIn' data-wow-delay=".2s" data-wow-duration="1s">
        <div className="blog-wrapper container">
            <div className="post-item">
                <div className="post-item-inner vision-section py-5" style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    <div className=" col d-flex justify-content-center">
                        <Link href="blog-single.html"><img style={{borderRadius:'5px',boxShadow:'0px 0px 15px 2px black', width:'500px'}} src={images['principles.jpeg']} alt="blog" /></Link>
                    </div>
                    <div className=" col " style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
                        <h2  style={{color:'green', fontWeight:'lighter'}}>Principles</h2>
                        <ul>
                            <li>
                                <b>Medical Ethics:</b> Physician medical organizations are
                                committed to medical ethics, such as doing no harm to
                                patients and respecting patient autonomy.
                            </li>
                            <li>
                                <b>Compliance with Health Care Laws and Regulations:</b> Physician medical organizations adhere to health care
                                laws and regulations.
                            </li>
                            <li>
                                <b>Participation in health care quality improvement
                                activities:</b> Physician organizations participate in health
                                care quality improvement activities, such as developing
                                health care standards or evaluating health programs.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Principles