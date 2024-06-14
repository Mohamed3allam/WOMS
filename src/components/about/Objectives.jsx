import React from 'react'
import { Link } from 'react-router-dom'

const Objectives = ({ images }) => {
  return (
    <div className='wow fadeIn' data-wow-delay=".2s" data-wow-duration="1s">
        <div className="blog-wrapper container">
            <div className="post-item">
                <div className="post-item-inner vision-section py-5" style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    <div className=" col d-flex justify-content-center">
                        <Link href="blog-single.html"><img style={{borderRadius:'5px',boxShadow:'0px 0px 15px 2px black', width:'500px'}} src={images['objectives.jpg']} alt="blog" /></Link>
                    </div>
                    <div className=" col " style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
                        <h2  style={{color:'green', fontWeight:'lighter'}}>Objectives</h2>
                        <p className='lead'>
                            We always care about developing solid
                            plans to facilitate reaching our goals,
                            which revolve around:
                        </p>
                        <ul>
                            <li>
                                Providing various memberships for doctors and health professionals.
                            </li>
                            <li>
                                Providing educational courses and training programs that enhance skills and medical knowledge.
                            </li>
                            <li>
                                Publishing innovative medical articles and
                                research to increase Awareness and promotion
                                of progress in health care.
                            </li>
                            <li>
                                Enabling our members to attend international
                                conferences To connect with their global colleagues
                                and exchange experiences.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Objectives