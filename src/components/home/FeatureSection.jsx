import React from 'react'
import { Link } from 'react-router-dom'

export default function FeatureSection({ images }) {
    return (
        <section className="feature-section padding-tb bg-color">
            <div className="container">
                <div className="feature-section-wrapper">
                    <div className="section-header wow fadeInUp" data-wow-delay="" data-wow-duration="1s">
                        <h2><span style={{color:'#042c45'}}>Our Services</span> </h2>
                        {/* <h2> Orthopedics To Meet Your Needs</h2> */}
                    </div>
                    <div className="section-content">
                        <div className="row justify-content-center" style={{color:'#042c45'}}>
                            <Link className="col-xl-3 col-lg-4 col-md-6 col-12 link-click-parent" to="services">
                            <div className='link-click'>
                                <div className="lab-item feature-item wow fadeInLeft" style={{borderRadius:'10px'}} data-wow-delay=".2s" data-wow-duration="1s">
                                    <div className="lab-inner">
                                        <div className="lab-content d-flex flex-column gap-3">
                                            <img src={images['services-2.jpeg']} alt="team-1" style={{borderRadius:'10px'}} />
                                            <h4>Professional Services</h4>
                                                <ul>
                                                    <li>Continuing professional training and development.</li>
                                                    <li>Professional supervision.</li>
                                                    <li>Providing professional consultations.</li>
                                                </ul>
                                            {/* <Link href="#" className=""><span>Read More <i
                                                        className="icofont-rounded-double-right"></i></span></Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link className="col-xl-3 col-lg-4 col-md-6 col-12 link-click-parent" to="services">
                            <div className='link-click'>
                                <div className="lab-item feature-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                                    <div className="lab-inner">
                                        <div className="lab-content d-flex flex-column gap-3">
                                            <img src={images['services-3.jpeg']} alt="team-1" style={{borderRadius:'10px'}} />
                                            <h4>Administrative services</h4>
                                                <ul>
                                                    <li>Assistance in establishing clinics and medical centers.</li>
                                                    <li>Providing medical supply services.</li>
                                                    <li>Financial Affairs Administration.</li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link className="col-xl-3 col-lg-4 col-md-6 col-12 link-click-parent" to="services">
                            <div className='link-click'>
                                <div className="lab-item feature-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                                    <div className="lab-inner">
                                        <div className="lab-content d-flex flex-column gap-3">
                                            <img src={images['services-4.jpeg']} alt="team-1" style={{borderRadius:'10px'}} />
                                            <h4>Regulatory services</h4>
                                                <ul>
                                                    <li>Representing doctors to governmental and non-governmental agencies.</li>
                                                    <li>Participation in medical conferences and events.</li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link className="col-xl-3 col-lg-4 col-md-6 col-12 link-click-parent" to="services">
                            <div className='link-click'>
                                <div className="lab-item feature-item wow fadeInRight" data-wow-delay=".2s"
                                    data-wow-duration="1s">
                                    <div className="lab-inner">
                                        <div className="lab-content d-flex flex-column gap-3">
                                            <img src={images['services-5.jpeg']} alt="team-1" style={{borderRadius:'10px'}} />
                                            <h4>Examples of medical organization services for doctors</h4>
                                                <ul>
                                                    <li>Specialized training courses.</li>
                                                    <li>Medical conferences.</li>
                                                    <li>Scientific seminars.</li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
