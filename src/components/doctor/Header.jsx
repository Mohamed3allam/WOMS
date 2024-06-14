import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorHeader({ images }) {
    return (
        <section className="page-header-section post-title style-1"
            style={{backgroundImage: `url(${images['pageheader.jpg']})`}}>
            <div className="page-header-content">
                <div className="container">
                    <div className="page-header-content-inner">
                        <div className="page-title">
                            <h2>Our Professional Team</h2>
                        </div>
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">About</li>
                            <li className="active">Doctor Name</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}
