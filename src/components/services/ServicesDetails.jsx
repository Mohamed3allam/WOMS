import React from 'react'

const ServicesDetails = ({ images }) => {
  return (
    <section id="our-services" style={{backgroundImage: `url("${images['services-bg-blue.jpg']}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundPosition: 'top'}}>
        <div className="container p-5">
            <div className="row">

                <div className="display-header text-light d-flex flex-wrap justify-content-between padding-medium">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <h2 className="text-light">Our Best Services</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="text-light">Vitae aliquam vestibulum elit adipiscing massa diam in dignissim. Risus tellus libero
                        elementum aliquam etiam. Lectus adipiscing est auctor mi quisque nunc non viverra est.</p>
                    </div>
                </div>

                <div className="section-content">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="lab-item feature-item wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s"  style={{borderRadius:'10px'}}>
                                <div className="lab-inner">
                                    {/* <div className="lab-thumb">
                                        <img src={images['feature-2.png']} alt="feature img" />
                                    </div> */}
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="lab-item feature-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s"  style={{borderRadius:'10px'}}>
                                <div className="lab-inner">
                                    {/* <div className="lab-thumb">
                                        <img src={images['feature-3.png']} alt="feature img" />
                                    </div> */}
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="lab-item feature-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s"  style={{borderRadius:'10px'}}>
                                <div className="lab-inner">
                                    {/* <div className="lab-thumb">
                                        <img src={images['feature-1.png']} alt="feature img" />
                                    </div> */}
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="lab-item feature-item wow fadeInRight"  style={{borderRadius:'10px'}} data-wow-delay=".2s"
                                data-wow-duration="1s">
                                <div className="lab-inner">
                                    {/* <div className="lab-thumb">
                                        <img src={images['feature-4.png']} alt="feature img" />
                                    </div> */}
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
                    </div>
                </div>

                {/* <div className="col-lg-3 col-md-6 pb-3">
                    <div className="icon-box p-4 bg-light border-radius-10 text-center">
                        <div className="icon-box-icon">
                        <svg className="home-thermometer mt-3 primary-color-500" width="50" height="50">
                            <use xlinkHref="#home-thermometer" />
                        </svg>
                        </div>
                        <div className="icon-box-content">
                        <h3 className="card-title py-2">General Practitioners</h3>
                        <p>Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="icon-box p-4 bg-light border-radius-10 text-center">
                        <div className="icon-box-icon">
                        <svg className="pregnant-woman mt-3 primary-color-500" width="50" height="50">
                            <use xlinkHref="#pregnant-woman" />
                        </svg>
                        </div>
                        <div className="icon-box-content">
                        <h3 className="card-title py-2">Pregnancy Support</h3>
                        <p>Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="icon-box p-4 bg-light border-radius-10 text-center">
                        <div className="icon-box-icon">
                        <svg className="nutrition mt-3 primary-color-500" width="50" height="50">
                            <use xlinkHref="#nutrition" />
                        </svg>
                        </div>
                        <div className="icon-box-content">
                        <h3 className="card-title py-2">Nutritional Support</h3>
                        <p>Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="icon-box p-4 bg-light border-radius-10 text-center">
                        <div className="icon-box-icon">
                        <svg className="local-pharmacy mt-3 primary-color-500" width="50" height="50">
                            <use xlinkHref="#local-pharmacy" />
                        </svg>
                        </div>
                        <div className="icon-box-content">
                        <h3 className="card-title py-2">Pharmaceutical care</h3>
                        <p>Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </section>
  )
}

export default ServicesDetails