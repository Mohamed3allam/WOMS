import React from 'react'
export default function CounterSection({ images }) {

    
    return (
        <div className="counter-section style-1 padding-60" style={{backgroundColor:'#042c45'}}>
            <div className="container">
                <div className="section-wrapper">
                    
                    <div className="counter-item wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="counter-item-inner">
                            <div className="counter-thumb">
                                <img src={images['counter-2.png']} alt="counter" />
                            </div>
                            <div className="counter-content">
                                <h3 className="number"><span className="counter">+400</span></h3>
                                <p className="post-content">Qualified Doctors</p>
                            </div>
                        </div>
                    </div>
                    <div className="counter-item wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                        <div className="counter-item-inner">
                            <div className="counter-thumb">
                                <img src={images['counter-5.png']} alt="counter" />
                            </div>
                            <div className="counter-content">
                                <h3 className="number"><span className="counter">+500</span></h3>
                                <p className="post-content">Members</p>
                            </div>
                        </div>
                    </div>
                    <div className="counter-item wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                        <div className="counter-item-inner">
                            <div className="counter-thumb">
                                <img src={images['counter-6.png']} alt="counter" />
                            </div>
                            <div className="counter-content">
                                <h3 className="number"><span className="counter">+25</span></h3>
                                <p className="post-content">Countries</p>
                            </div>
                        </div>
                    </div>
                    <div className="counter-item wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                        <div className="counter-item-inner">
                            <div className="counter-thumb">
                                <img src={images['counter-7.png']} alt="counter" />
                            </div>
                            <div className="counter-content">
                                <h3 className="number"><span className="counter">+250</span></h3>
                                <p className="post-content">Researches</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
