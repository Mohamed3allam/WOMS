import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactForm({ images }) {
    return (
        <section className="contact-us padding-tb">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="contact-info">
                                <h2>Contact Information</h2> <br />
                                <ul style={{display:'flex',flexDirection:'column', justifyContent:'center',}}>
                                    <li>
                                        <h4>Address:</h4>
                                        <p>128 City Road, London, United Kingdom, EC1V 2NX</p>
                                    </li>
                                    <li>
                                        <h4>Phone Number:</h4>
                                        <p>+44 7585 885438</p>
                                    </li>
                                    <li>
                                        <h4>Email Address:</h4>
                                        <Link to="mailto:info@woms.uk">info@woms.uk</Link>
                                    </li>
                                    <li>
                                        <h4>Website Address:</h4>
                                        <Link to="https://woms.uk/">https://woms.uk</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="here-form">
                                <h3>We Love To Hear From You</h3>
                                <img style={{borderRadius:'5px',boxShadow:'0px 0px 10px 1px #cbcbcb'}} width="500" src={images['contact.jpg']} alt="contact us" />
                                {/* <form action="/">
                                    <input type="text" id="fname" name="firstname" placeholder="Your Name" />
                                    <select id="country" name="country">
                                        <option value="1">Select Departments</option>
                                        <option value="2">Dental</option>
                                        <option value="3">U.C</option>
                                    </select>
                                    <input type="text" id="lname" name="lastname" placeholder="Phone Number" />
                                    <input type="date" value="2021-03-05" />
                                    <button className="lab-btn" type="submit"><span>Appointment Now <i
                                                className="icofont-double-right"></i></span></button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
