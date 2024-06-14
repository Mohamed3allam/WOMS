import React from 'react'

export default function AppointmentSection({ images }) {
    return (
        <section className="appointment-section style-1">
            <div className="container">
                <div className="section-wrapper">
                    <div className="appointment-left wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                        <div className="time-info">
                            <div className="al-title">
                                <h2><span>24 Hours </span></h2>
                                <h2>Opening Our Services</h2>
                            </div>
                            <div className="dep-item">
                                <div className="dep-item-inner">
                                    <div className="day-name">Satarday</div>
                                    <div className="day-time">8:00 am-10:00 pm</div>
                                </div>
                            </div>
                            <div className="dep-item">
                                <div className="dep-item-inner">
                                    <div className="day-name">Sunday</div>
                                    <div className="day-time">6:00 am-8:00 pm</div>
                                </div>
                            </div>
                            <div className="dep-item">
                                <div className="dep-item-inner">
                                    <div className="day-name">Monday</div>
                                    <div className="day-time">6:00 am-2:00 pm</div>
                                </div>
                            </div>
                            <div className="dep-item">
                                <div className="dep-item-inner">
                                    <div className="day-name">Tuesday</div>
                                    <div className="day-time">7:00 am-9:00 pm</div>
                                </div>
                            </div>
                            <div className="dep-item">
                                <div className="dep-item-inner">
                                    <div className="day-name">Widnessday</div>
                                    <div className="day-time">10:00 am-12:00 pm</div>
                                </div>
                            </div>
                            <div className="dep-item">
                                <div className="dep-item-inner">
                                    <div className="day-name">Thirsday</div>
                                    <div className="day-time">2:00 am-6:00 pm</div>
                                </div>
                            </div>
                            <div className="dep-item">
                                <div className="dep-item-inner">
                                    <div className="day-name">Friday</div>
                                    <div className="day-time">Closed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="appointment-right wow fadeInRight" data-wow-duration="1s" data-wow-delay=".1s">
                        <div className="ar-title">
                            <h2><span>Make An</span></h2>
                            <h2>Appointment Now</h2>
                        </div>
                        <form>
                            <input type="text" id="fname" name="firstname" placeholder="Your Name" />
                            <select id="country" name="country">
                                <option value="1">Select Departments</option>
                                <option value="2">Dental</option>
                                <option value="3">U.C</option>
                            </select>
                            <input type="text" id="lname" name="lastname" placeholder="Phone Number" />
                            <input type="date" id="start" name="trip-start" />
                            <button className="lab-btn" type="submit"><span>Appointment Now <i
                                        className="icofont-double-right"></i></span> </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
