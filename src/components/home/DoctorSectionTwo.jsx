import React from 'react'

const DoctorSectionTwo = ({ images }) => {
  return (
    <section className="doctor-section style-2 padding-tb">
        <div className="container">
            <div className="section-header wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <h2><span>Meet Our</span></h2>
                <h2>Mukti Professional Doctors</h2>
            </div>
            <div className="section-wrapper">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="doctor-item style-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="doctor-inner">
                                <div className="doctor-thumb">
                                    <img src={images['team-1.jpg']} alt="doctor" />
                                </div>
                                <div className="doctor-content">
                                    <div className="doctor-name">
                                        <h4><a href="#">Dr. Jason Kovalsky</a></h4>
                                        <p className="digi">Cardiologist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="doctor-item style-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="doctor-inner">
                                <div className="doctor-thumb">
                                    <img src={images['team-1.jpg']} alt="doctor" />
                                </div>
                                <div className="doctor-content">
                                    <div className="doctor-name">
                                        <h4><a href="#">Patricia Mcneel</a></h4>
                                        <p className="digi">Pediatrist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="doctor-item style-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="doctor-inner">
                                <div className="doctor-thumb">
                                    <img src={images['team-1.jpg']} alt="doctor" />
                                </div>
                                <div className="doctor-content">
                                    <div className="doctor-name">
                                        <h4><a href="#">William Khanna</a></h4>
                                        <p className="digi">Throat Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="doctor-item style-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="doctor-inner">
                                <div className="doctor-thumb">
                                    <img src={images['team-1.jpg']} alt="doctor" />
                                </div>
                                <div className="doctor-content">
                                    <div className="doctor-name">
                                        <h4><a href="#">Eric Patterson</a></h4>
                                        <p className="digi">Therapy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="doctor-item style-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="doctor-inner">
                                <div className="doctor-thumb">
                                    <img src={images['team-1.jpg']} alt="doctor" />
                                </div>
                                <div className="doctor-content">
                                    <div className="doctor-name">
                                        <h4><a href="#">Mark Trevor</a></h4>
                                        <p className="digi">Therapy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="doctor-item style-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="doctor-inner">
                                <div className="doctor-thumb">
                                    <img src={images['team-1.jpg']} alt="doctor" />
                                </div>
                                <div className="doctor-content">
                                    <div className="doctor-name">
                                        <h4><a href="#">Nolim Smith</a></h4>
                                        <p className="digi">Volunteer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="doctor-item style-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="doctor-inner">
                                <div className="doctor-thumb">
                                    <img src={images['team-1.jpg']} alt="doctor" />
                                </div>
                                <div className="doctor-content">
                                    <div className="doctor-name">
                                        <h4><a href="#">Jason Kovalsky</a></h4>
                                        <p className="digi">Rehabilitation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="doctor-item style-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="doctor-inner">
                                <div className="doctor-thumb">
                                    <img src={images['team-1.jpg']} alt="doctor" />
                                </div>
                                <div className="doctor-content">
                                    <div className="doctor-name">
                                        <h4><a href="#">Sarah Milles</a></h4>
                                        <p className="digi">Volunteers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="doctor-btn text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                <a href="#" className="lab-btn"><span> view all doctors <i
                            className="icofont-rounded-double-right"></i></span></a>
            </div>
        </div>
    </section>
  )
}

export default DoctorSectionTwo