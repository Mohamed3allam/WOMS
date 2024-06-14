import React from 'react'

export default function Header({ headerFor ,images }) {
    return (
        <section className="page-header-section service-title style-1"
            style={{backgroundImage: `url('${images['pageheader.jpg']}')`}}>
            <div className="page-header-content">
                <div className="container">
                    <div className="page-header-content-inner">
                        <div className="page-title">
                            <h2>{headerFor}</h2>
                        </div>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">{headerFor}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}
