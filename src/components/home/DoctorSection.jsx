import { MDBInput, MDBInputGroup } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorSection({ images }) {
    return (
        <section className="doctor-section style-1 padding-tb">
            <div className="container">
                <div className="section-header wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <h2><span>Meet Our</span></h2>
                    <h2>WOMS Professional Doctors</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center">
                        <Link to="doctor/test" className='col-xl-3 col-lg-4 col-md-6 col-12'>
                            <div className="">
                                <div className="doctor-item style-1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                    <div className="doctor-inner">
                                        <div className="doctor-thumb">
                                            <img src={images['team-1.jpg']} alt="doctor" />
                                        </div>
                                        <div className="doctor-content">
                                            <div className="doctor-name">
                                                <h4>Dr. Jason Kovalsky</h4>
                                                <p className="digi">Cardiologist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="doctor/test" className='col-xl-3 col-lg-4 col-md-6 col-12'>
                            <div className="">
                                <div className="doctor-item style-1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                    <div className="doctor-inner">
                                        <div className="doctor-thumb">
                                            <img src={images['team-2.jpg']} alt="doctor" />
                                        </div>
                                        <div className="doctor-content">
                                            <div className="doctor-name">
                                                <h4>Patricia Mcneel</h4>
                                                <p className="digi">Pediatrist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="doctor/test" className='col-xl-3 col-lg-4 col-md-6 col-12'>
                            <div className="">
                                <div className="doctor-item style-1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="doctor-inner">
                                        <div className="doctor-thumb">
                                            <img src={images['team-3.jpg']} alt="doctor" />
                                        </div>
                                        <div className="doctor-content">
                                            <div className="doctor-name">
                                                <h4>William Khanna</h4>
                                                <p className="digi">Throat Specialist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="doctor/test" className='col-xl-3 col-lg-4 col-md-6 col-12'>
                            <div className="">
                                <div className="doctor-item style-1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                    <div className="doctor-inner">
                                        <div className="doctor-thumb">
                                            <img src={images['team-4.jpg']} alt="doctor" />
                                        </div>
                                        <div className="doctor-content">
                                            <div className="doctor-name">
                                                <h4>Eric Patterson</h4>
                                                <p className="digi">Therapy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
