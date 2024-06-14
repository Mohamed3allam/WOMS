import React from 'react'
import { Link } from 'react-router-dom'

const PackageSection = ({ title, description, direction, image, images }) => {
    const silverAdvantagesOnly = [
        'Membership in a British-European organization',
        'Having the doctor’s information on the website',
        'Providing books online',
        'Publishing articles and research',
        'Obtaining a membership card',
        'Obtaining a membership certificate',
        'Membership verification code',
        'Get a personal account on the organization’s website',
      ]
      const goldAdvantagesOnly = [
        'Attending international conferences',
        'Possibility of attending international courses',
        'Attending courses on the website',
        'Attending international practical training',
        'Professional training and development',
        'Professional network',
        'Providing consultations'
      ]
      const goldAdvantages = [...silverAdvantagesOnly, ...goldAdvantagesOnly]
      const diamondAdvantagesOnly = [
        'Participation in decision-making',
        'Professional support from international doctors and consultants',
        'Participation in health awareness services',
        'Volunteering in international medical activities',
        'Access to the organization’s public library',
        'Electronic marketing services',
      ]
      const diamondAdvantages = [...goldAdvantages, ...diamondAdvantagesOnly]
      const VIPAdvantagesOnly = [
        'Get discounts on purchasing medical equipment',
        'Providing discounts on purchasing medical books',
        'Medical insurance for the membership holder and his family',
        'International tourist trips',
        'Providing opportunities to obtain international jobs',
        'Recruitment assistant',
        'Website design services for doctors'
      ]
    const allAdvantages = [...diamondAdvantages, ...VIPAdvantagesOnly]
  return (
    <>
      <div id={title.replace(/\s+/g, '')} className='wow fadeIn' data-wow-delay=".2s" data-wow-duration="1s">
          <div className="blog-wrapper container">
              <div className="post-item">
                  <div className={`post-item-inner vision-section py-5 ${direction === 'rtl' && 'flex-row-reverse'}`} style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                      <div className=" col d-flex justify-content-center">
                          <Link href="blog-single.html"><img style={{borderRadius:'5px',boxShadow:'0px 0px 15px 2px black', width:'500px'}} src={images[image]} alt="blog" /></Link>
                      </div>
                      <div className="col" style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
                          <h2  style={{color:'green', fontWeight:'lighter'}}>{title}</h2>
                          <p>{description}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default PackageSection