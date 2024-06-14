import React from 'react'
import DepartmentTop from './DepartmentTop'
import DepartmentBottom from './DepartmentBottom'
import { majorsSection } from '../credits-carousel/carousel-config'
import AutoplayMajorsCarousel from '../majors-carousel/MajorsCarousel'

export default function Department({ images }) {
    return (
        <section className="department-section padding-tb style-1 py-5">
            <div className="container">
                <div className="department-wrapper">
                    <div className="section-header" >
                        <h2 style={{color:'#042c45'}}><span>We give Memberships  </span></h2>
                        <h2 style={{color:'#042c45'}}>For All Medical Majors</h2>
                    </div>
                    <div className="section-content py-0">
                        <div className="row">
                            <div className="col-12 col-xl-12">
                                <AutoplayMajorsCarousel images={images} data={majorsSection} />
                                {/* <DepartmentTop images={images} /> */}
                                <DepartmentBottom images={images} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
