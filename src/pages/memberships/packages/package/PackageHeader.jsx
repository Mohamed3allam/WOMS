import React from 'react'
import { Link } from 'react-router-dom'

export default function PackageHeader({ title_color, headerFor, images, image }) {
    return (
        <div>
            <section className="page-header-section service-title style-1" style={{backgroundImage: `url('${images[image]}')`}} >
                <div>
                    <div className="page-header-content">
                        <div className="container">
                            <div className="page-header-content-inner">
                                <div className="page-title">
                                    <h2 style={{color: title_color, letterSpacing:'2px',fontWeight:"900",fontSize:'50px'}} className={`wow fadeInDown ${headerFor === "VIP Package" && 'packages-header'}`}>{headerFor}</h2>
                                </div>
                                <ol className="breadcrumb">
                                    <li><Link className=' text-white wow fadeInDown' to="/">Home</Link></li>
                                    <li className="active text-white wow fadeInDown">{headerFor}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
