import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceSection({ images }) {
    return (
        <section className="service-section style-1 padding-tb bg-color">
            <div className="container">
                <div className="section-header wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <h2><span>We Are</span></h2>
                    <h2>Offering Reliable Services</h2>
                </div>
                <div className="section-wrapper">
                    <div className="service-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                        <div className="service-inner">
                            <div className="service-thumb">
                                <img src={images['service-1.jpg']} alt="service" />
                            </div>
                            <div className="service-content">
                                <h4><Link href="#">Family Health Solutions</Link></h4>
                                <p>Proced arrain manu produc rather conve quvat mantan this conven multscplinari testin
                                    motin was procedur aamng proced arrain manu produc rather conve quvat mantan this
                                    convenmultscplinari testiners motin was procedur arraming</p>
                                <Link href="#" className="lab-btn"><span>Read More <i
                                            className="icofont-rounded-double-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-item wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="service-inner">
                            <div className="service-thumb">
                                <img src={images['service-2.jpg']} alt="service" />
                            </div>
                            <div className="service-content">
                                <h4><Link href="#">Eye Care Solutions</Link></h4>
                                <p>Cabor levera then andin the
                                    Qualit bwdh then covae thm
                                    Uabor evera then andin meqe
                                    Any value cordin</p>
                                <Link href="#" className="lab-btn"><span>Read More <i
                                            className="icofont-rounded-double-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-item wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                        <div className="service-inner">
                            <div className="service-thumb">
                                <img src={images['service-3.jpg']} alt="service" />
                            </div>
                            <div className="service-content">
                                <h4><Link href="#">Children’s Health</Link></h4>
                                <p>Cabor levera then andin the
                                    Qualit bwdh then covae thm
                                    Uabor evera then andin meqe
                                    Any value cordin</p>
                                <Link href="#" className="lab-btn"><span>Read More <i
                                            className="icofont-rounded-double-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <div className="service-inner">
                            <div className="service-thumb">
                                <img src={images['service-4.jpg']} alt="service" />
                            </div>
                            <div className="service-content">
                                <h4><Link href="#">Dental Surgery</Link></h4>
                                <p>Proced arrain manu produc rather conve quvat mantan this conven multscplinari testin
                                    motin was procedur aamng proced arrain manu produc rather conve quvat mantan this
                                    convenmultscplinari testiners motin was procedur arraming</p>
                                <Link href="#" className="lab-btn"><span>Read More <i
                                            className="icofont-rounded-double-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
