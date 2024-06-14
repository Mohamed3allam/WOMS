import React from 'react'
// import { Link } from 'react-router-dom'
export default function AboutSection({ images }) {
    return (
        <section className="about-section style-1 padding-tb">
            <div className="container">
                <div className="section-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6 col-12">
                            <div className="about-thumb">
                                <img src={images['about1.jpg']} alt="about" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about-item">
                                <div className="section-heading">
                                    <h4>William Khanna</h4>
                                    <span className="disi">Chief of Medicine</span>
                                    <p>Procedur Arrain Manu Producs Rather Convenet Cuvate Mantana This Manufcur Produc
                                        Rather Conven Cuvatie Mantan This Conven Cuvate Multscplinari Testin Motin Was
                                        Procedur Arramin</p>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="name">
                                                <p>Adress</p>
                                            </div>
                                            <div className="info">
                                                <p>Suite No 02 & 07 New Elephant Road</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">
                                                <p>Email</p>
                                            </div>
                                            <div className="info">
                                                <p>smith7@gmail.com</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">
                                                <p>Phone</p>
                                            </div>
                                            <div className="info">
                                                <p>+258 369 147</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">
                                                <p>Website</p>
                                            </div>
                                            <div className="info">
                                                <p>info@WOMS.com</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">
                                                <p>Interview</p>
                                            </div>
                                            <div className="info">
                                                <p>Read The Interview</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">
                                                <p>Follow us</p>
                                            </div>
                                            {/* <div className="info">
                                                <p>
                                                    <Link href="#">
                                                        <i className="icofont-twitter"></i>
                                                    </Link>
                                                    <Link href="#">
                                                        <i className="icofont-instagram"></i>
                                                    </Link>
                                                    <Link href="#">
                                                        <i className="icofont-globe"></i>
                                                    </Link>
                                                    <Link href="#">
                                                        <i className="icofont-vimeo"></i>
                                                    </Link>
                                                    <Link href="#">
                                                        <i className="icofont-behance"></i>
                                                    </Link>
                                                </p>
                                            </div> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
