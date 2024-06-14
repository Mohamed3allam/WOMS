import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ images }) => {
  return (
    <footer className="footer-section style-1 bg-color">
        <div className="container">
            <div className="section-wrapper">
                <div className="footer-top py-5 parallax-window4">
                    <div className="row footer-col">
                        <div className="col-12 col-lg-6 wow fadeInUp order-lg-2 pt-0" data-wow-duration="1s"
                            data-wow-delay=".2s">
                            <div className="footer-about">
                                <div className="top">
                                    <Link href="index.html" className="footer-logo">
                                        <img src={images['logo.png']} alt="footer-bottom" className='img-fluid w-25' />
                                    </Link>
                                    <p style={{textAlign:'justify',textJustify: 'inter-word',fontSize:'15px'}}>A socialist organization registered in London with Odistro license (oc442466) as a trade union institution towards him and his research in medical and applied sciences. It was also accredited by its Director General for Sports and Cultural Progress in the Soviet Union, No. (E10304384) as its first organizer, a member of the best (Erasmus+) and also a member of the High Commissioner. for football. FIFA and a member of the FIFA Football Game and Bidding (879694553)</p>
                                </div>
                                <div className="bottom text-center">
                                    <div className="news-title">
                                        <h3>Subscribe to Our Newsletter</h3>
                                    </div>
                                    <div className="news-input ">
                                        <input type="text" name="email" placeholder="Enter Your Email" />
                                        <button className="btn btn-success" type="submit" value="Submit-Now" name="submit">Subscribe
                                            Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 wow fadeInUp order-lg-1 " data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="contact-info">
                                <h3>Contact Info</h3>
                                <p>You can call us on this phone number or you can email us.</p>
                                <ul className='p-0'>
                                    <li><h5><i className="fa fa-phone"></i>+44 7585 885438</h5></li>
                                    <li><h5><i className="fa fa-message"></i>info@woms.org</h5></li>
                                    <li><h5><i className="fa fa-location"></i>128 City Road, London,United Kingdom, EC1V 2NX</h5></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 wow fadeInUp order-lg-3" data-wow-duration="1s"
                            data-wow-delay=".4s">
                            <div className="time-info">
                                <h3>Memberships</h3>
                                <div className="dep-item">
                                    <div className="dep-item-inner d-flex justify-content-between">
                                        <div className="day-name">Professional Membership</div>
                                        {/* <div className="day-time">8:00 am-10:00 pm</div> */}
                                    </div>
                                </div>
                                <div className="dep-item">
                                    <div className="dep-item-inner d-flex justify-content-between">
                                        <div className="day-name">Scientific Membership</div>
                                        {/* <div className="day-time">6:00 am-8:00 pm</div> */}
                                    </div>
                                </div>
                                <div className="dep-item">
                                    <div className="dep-item-inner d-flex justify-content-between">
                                        <div className="day-name">General Membership</div>
                                        {/* <div className="day-time">6:00 am-2:00 pm</div> */}
                                    </div>
                                </div>
                                <div className="dep-item">
                                    <div className="dep-item-inner d-flex justify-content-between">
                                        <div className="day-name">Medical Advisory Membership</div>
                                        {/* <div className="day-time">7:00 am-9:00 pm</div> */}
                                    </div>
                                </div>
                                <div className="dep-item">
                                    <div className="dep-item-inner d-flex justify-content-between">
                                        <div className="day-name">Honorary Membership</div>
                                        {/* <div className="day-time">10:00 am-12:00 pm</div> */}
                                    </div>
                                </div>
                                <div className="dep-item">
                                    <div className="dep-item-inner d-flex justify-content-between">
                                        <div className="day-name">Social Membership</div>
                                        {/* <div className="day-time">2:00 am-6:00 pm</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copyright text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                        <span>Copyright &copy; 2021 <Link href="index.html">WOMS</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer