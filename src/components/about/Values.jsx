import React from 'react'

const Values = ({ images }) => {
  return (
    <div className='wow fadeIn' data-wow-delay=".2s" data-wow-duration="1s">
        <div className="blog-wrapper container">
            <div className="post-item">
                <div className="post-item-inner vision-section py-5" style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    
                    <div className=" col " style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
                        <h2  style={{color:'green', fontWeight:'lighter'}}>Values</h2>
                        <ul>
                            <li>
                                <b>Responsibility:</b> Commitment to responsible and ethical medical practices.
                            </li>
                            <li>
                                <b>Communication:</b> The importance of effective communication between doctors.
                            </li>
                            <li>
                                <b>Continuous Learning:</b> Commitment to keeping medical knowledge and skills up to date.
                            </li>
                            <li>
                                <b>Leadership:</b> Commitment to driving change in the health care system.
                            </li>
                        </ul>
                    </div>
                    <div className=" col d-flex justify-content-center">
                        <img style={{borderRadius:'5px',boxShadow:'0px 0px 15px 2px black', width:'500px'}} src={images['values.jpeg']} alt="blog" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values