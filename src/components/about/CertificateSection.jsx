import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Section = styled.section`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
`
export default function CertificateSection({ images }) {
    return (
        <Section className="certificat-section py-5" style={{backgroundImage:`url('${images['certificate-bg.jpg']}')`}}>
            <div className="container  wow fadeInLeft" data-wow-delay=".1s" data-wow-duration="1s">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="certificate-content" >
                            <h2 style={{color:'#042c45'}}><span>Diplomas And Сertificates </span></h2>
                            <h2 style={{color:'#042c45'}}>Of Our Professional Doctors</h2>
                            <p>World Organization for Medical Science provides British accreditation for all certificates granted to each of the available memberships.
                            </p>
                            {/* <Link to="certificates" className="lab-btn">
                                <span>More About Our Certificates 
                                    <i
                                        className="icofont-double-right"></i>
                                </span>
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="certificats-site">
                            <div className="row no-gutters">
                                <div className="col-12">
                                    <div className="">
                                        <div className=" d-flex flex-row justify-content-center">
                                            <img src={images['certificate-12.jpg']} style={{borderRadius:'5px', width:'500px',}} alt="certificat" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
