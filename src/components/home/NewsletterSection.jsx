import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsletterSection() {
    return (
        <section className="newsletter-section style-1" style={{backgroundColor:'#042c45'}}>
            <div className="container">
                <div className="section-wrapper d-flex flex-column text-center">
                    <div className="left wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                        <div className="news-title">
                            <h2 className='text-center'>Join Us Now</h2>
                        </div>
                    </div>
                    <div className="right wow fadeInRight" data-wow-duration="1s" data-wow-delay=".1s">
                        <div className="news-input d-flex justify-content-center">
                            <label htmlFor="text"><i className="icofont-paper-plane"></i></label>
                            <Link to="registration">
                                <button className="" type="submit" value="Submit-Now" name="submit">Register with Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
