import Link from 'next/link'
import React from 'react'
import Team1 from '../../../assets/images/team/01.jpg'
import Team2 from '../../../assets/images/team/02.jpg'
import Team3 from '../../../assets/images/team/03.jpg'
import Team4 from '../../../assets/images/team/04.jpg'

export default function DoctorSection() {
    return (
        <section className="doctor-section style-1 padding-tb pt-lg-110">
            <div className="container">
                <div className="doctor-header d-md-flex justify-content-between align-items-end wow fadeInUp"
                    data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="doctor-header-title">
                        <h2><span>Meet Our</span></h2>
                        <h2>Professional Doctors</h2>
                    </div>
                    <div className="doctor-btn text-center wow fadeInUp d-none d-md-inline-block" data-wow-duration="1s"
                        data-wow-delay=".5s">
                        <Link href="#" className="lab-btn"><span> view all doctors <i
                                    className="icofont-rounded-double-right"></i></span></Link>
                    </div>

                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="doctor-item style-1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                <div className="doctor-inner">
                                    <div className="doctor-thumb">
                                        <img src={Team1.src} alt="doctor" />
                                    </div>
                                    <div className="doctor-content">
                                        <div className="doctor-name">
                                            <h4><Link href="#">Dr. Jason Kovalsky</Link></h4>
                                            <p className="digi">Cardiologist</p>
                                        </div>
                                        <ul className="doctor-contact">
                                            <li><span>Phone :</span> 658 222 127 964</li>
                                            <li><span>Email :</span> admin@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="doctor-item style-1 active wow fadeInUp" data-wow-duration="1s"
                                data-wow-delay=".2s">
                                <div className="doctor-inner">
                                    <div className="doctor-thumb">
                                        <img src={Team2.src} alt="doctor" />
                                    </div>
                                    <div className="doctor-content">
                                        <div className="doctor-name">
                                            <h4><Link href="#">Patricia Mcneel</Link></h4>
                                            <p className="digi">Pediatrist</p>
                                        </div>
                                        <ul className="doctor-contact">
                                            <li><span>Phone :</span> 658 222 127 964</li>
                                            <li><span>Email :</span> admin@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="doctor-item style-1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="doctor-inner">
                                    <div className="doctor-thumb">
                                        <img src={Team3.src} alt="doctor" />
                                    </div>
                                    <div className="doctor-content">
                                        <div className="doctor-name">
                                            <h4><Link href="#">William Khanna</Link></h4>
                                            <p className="digi">Throat Specialist</p>
                                        </div>
                                        <ul className="doctor-contact">
                                            <li><span>Phone :</span> 658 222 127 964</li>
                                            <li><span>Email :</span> admin@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="doctor-item style-1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                <div className="doctor-inner">
                                    <div className="doctor-thumb">
                                        <img src={Team4.src} alt="doctor" />
                                    </div>
                                    <div className="doctor-content">
                                        <div className="doctor-name">
                                            <h4><Link href="#">Eric Patterson</Link></h4>
                                            <p className="digi">Therapy</p>
                                        </div>
                                        <ul className="doctor-contact">
                                            <li><span>Phone :</span> 658 222 127 964</li>
                                            <li><span>Email :</span> admin@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="doctor-btn text-center wow fadeInUp d-md-none" data-wow-duration="1s"
                            data-wow-delay=".5s">
                            <Link href="#" className="lab-btn"><span> view all doctors <i
                                        className="icofont-rounded-double-right"></i></span></Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
