import React from 'react'
import { Link } from 'react-router-dom'

export default function CreditsHeader({ images }) {
    return (
        <section className="page-header-section post-title style-1"
            style={{backgroundImage: `url(${images['pageheader.jpg']})`}}>
            <div className="page-header-content">
                <div className="container">
                    <div className="page-header-content-inner">
                        <div className="page-title">
                            <h2>Organzations We're Credited by</h2>
                        </div>
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Credits</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}
