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
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="certificate-content">
                            <h2 style={{color:'#042c45'}}>The Organization offers several packages to doctors</h2>
                            <h2 style={{color:'#042c45'}}><span>which can vary depending on the goals and needs of the doctors</span></h2>
                            <p className="lead">
                                Medical organizations offer training packages to doctors, which help them develop their skills and learn about the latest developments in the field of medicine
                            </p>
                            <Link to="/memberships/packages" className="lab-btn"><span>More About Our Packages <i
                                        className="icofont-double-right"></i></span></Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="certificats-site">
                            <div className="row no-gutters">
                                <div className="col-12">
                                    <div className="">
                                        <div className="certificate-thumb d-flex flex-row justify-content-center">
                                            <img src={images['packages-2.jpg']} style={{borderRadius:'5px',width:'500px'}} alt="certificat" />
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

