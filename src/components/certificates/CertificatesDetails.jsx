import { MDBInput, MDBInputGroup } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

const CertificatesDetails = ({ images }) => {
    const [certificate, setCertificate] = useState('')
    
  return (
    <section className="pf-details section py-5">
        <div className="container">
            <div className="row">
                <div className="inner-content">
                    <div className='row'>
                        <div className=''>
                            <img style={{margin:'auto', boxShadow:'0px 0px 10px 2px gray'}} src={images['certificate.jpg']} alt="Certificates" className='img-fluid'/>
                            <div>
                                {
                                    certificate && certificate
                                }
                            </div>
                        </div>
                    </div>
                    <div className="body-text">
                        <h3>CERTIFICATES GAINED BY OUR ORGANIZATION</h3>
                        <ul>
                            <li>
                                <p className='lead fw-bold'>Professional Accreditation Certificate</p>
                                <p>These certificates are granted to doctors who have completed a specialized training program or passed a professional examination. These certificates are used to recognize doctors' professional skills and experience, and may also help improve job opportunities and receive better benefits.</p>
                            </li>
                            <li>
                                <p className='lead fw-bold'>Specialty Certificate</p>
                                <p>These certificates are granted to doctors who have completed a specialized training program in a specific medical field. These certifications are used to recognize doctors' specialized skills and experience, and may also help improve job opportunities and receive better benefits.</p>
                            </li>
                            <li>
                                <p className='lead fw-bold'>Certificate of Professional Excellence</p>
                                <p>These certificates are awarded to doctors who have made outstanding professional achievements. These certificates are used to recognize doctors' professional accomplishments and may also help improve their professional reputation.</p>
                            </li>
                            <li>
                                <p className='lead fw-bold'>Fellowship Certificate</p>
                                <p>This certificate is granted to doctors who have completed a training program of two years or more in a specific medical field.</p>
                            </li>
                            <li>
                                <p className='lead fw-bold'>Board Certification</p>
                                <p>This certificate is granted to doctors who have completed a training program of three years or more in a specific medical field.</p>
                            </li>
                            <li>
                                <p className='lead fw-bold'>Royal College of Physicians Certificate</p>
                                <p>This certificate is awarded to doctors who have completed a training program of four years or more in a specific medical field.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="body-text">
                        <h3>ADVANTAGES OF OUR CERTIFICATES</h3>
                        <ul>
                            <li>
                                <p className='lead fw-bold'>Recognition of specialized skills and experience</p>
                                <p>Professional and specialty certifications recognize doctors' specialized skills and experience, which may help them obtain jobs in certain medical fields or receive better benefits in their current jobs.</p>
                            </li>
                            <li>
                                <p className='lead fw-bold'>Improving job opportunities</p>
                                <p>Professional and specialized certificates can help improve job opportunities for doctors, as they are an indication that the doctor has the skills and experience necessary to practice medicine in a specific field.</p>
                            </li>
                            <li>
                                <p className='lead fw-bold'>Get better benefits</p>
                                <p>Doctors with professional or specialized degrees can receive better benefits in their jobs, such as increased salary, promotion, or training opportunities.</p>
                            </li>
                            <li>
                                <p className='lead fw-bold'>Improving their professional reputation</p>
                                <p>Professional and specialized certificates can help improve a doctor’s professional reputation, which may lead to increased patient confidence in him.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CertificatesDetails