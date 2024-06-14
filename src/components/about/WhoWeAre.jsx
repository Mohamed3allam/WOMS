import React from 'react'

const WhoWeAre = ({ images }) => {
  return (
    <div className='wow fadeIn' data-wow-delay=".2s" data-wow-duration="1s">
        <div className="blog-wrapper container">
            <div className="post-item">
                <div className="post-item-inner vision-section py-5" style={{display:'flex', justifyContent:'space-evenly'}}>
                    <div className=" col " style={{display:'flex',flexDirection:'column'}}>
                        <h2  style={{color:'green',fontWeight:'lighter'}}>Who We Are</h2>
                        <p className='lead' style={{fontSize:'25px'}}>A socialist organization registered in London with Odistro license (oc442466) as a trade union institution towards him and his research in medical and applied sciences. It was also accredited by its Director General for Sports and Cultural Progress in the Soviet Union, No. (E10304384) as its first organizer, a member of the best (Erasmus+) and also a member of the High Commissioner. for football. FIFA and a member of the FIFA Football Game and Bidding (879694553)</p>
                    </div>
                    <div className=" col d-flex justify-content-center">
                        <img style={{borderRadius:'5px',boxShadow:'0px 0px 15px 2px black', width:'500px'}} src={images['who-we-are.jpeg']} alt="blog" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre