import React from 'react'
import Header from '../../../components/header/Header'

const Doctor = ({ images }) => {
  return (
    <>
      <Header headerFor={'Doctor Name'} images={images} />
      <section className="about-section style-2 padding-tb">
          <div className="container">
              <div className="section-wrapper">
                  <div className="row">
                      <div className="col-xl-6 col-12">
                          <div className="post-thumb">
                              <img src={images['doctor-single.jpg']} alt="doctor-img" className="img-fluid"  />
                          </div>
                      </div>
                      <div className="col-xl-6 col-12">
                          <div className="about-item">
                              <div className="section-heading">
                                  <h3>William Khanna</h3>
                                  <span className="disi">Chief of Medicine</span>
                                  <p>Procedur arrain manu producs rather convenet cuvate mantana this manufcur produc
                                      rather conven cuvatie mantan this conven cuvate multscplinari testin motin was
                                      procedur arramin</p>
                                  <h4>Personal Statement</h4>
                                  <p>Dramatica engae visionary quality vectors throuh top line are oportues Assertive
                                      transfor market-driven converence visextense inteectua capt Intrinsicly drive
                                      premier proceses and traarent metrcs rapdiousl levrae client-based channels via
                                      distinctive leadership skills.</p>
                              </div>
                              <div className="about-content">
                                  <ul>
                                      <li>
                                          <div className="name">
                                              <p>Adress</p>
                                          </div>
                                          <div className="info">
                                              <p>Suite No 02 & 07 New Elephant Road</p>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="name">
                                              <p>Email</p>
                                          </div>
                                          <div className="info">
                                              <p>smith7@gmail.com</p>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="name">
                                              <p>Phone</p>
                                          </div>
                                          <div className="info">
                                              <p>+258 369 147</p>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="name">
                                              <p>Website</p>
                                          </div>
                                          <div className="info">
                                              <p>www.mukti.com</p>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="name">
                                              <p>Interview</p>
                                          </div>
                                          <div className="info">
                                              <p>Read The Interview</p>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="name">
                                              <p>Follow us</p>
                                          </div>
                                          <div className="info">
                                              <p>
                                                  <a href="#">
                                                      <i className="icofont-twitter"></i>
                                                  </a>
                                                  <a href="#">
                                                      <i className="icofont-instagram"></i>
                                                  </a>
                                                  <a href="#">
                                                      <i className="icofont-globe"></i>
                                                  </a>
                                                  <a href="#">
                                                      <i className="icofont-vimeo"></i>
                                                  </a>
                                                  <a href="#">
                                                      <i className="icofont-behance"></i>
                                                  </a>
                                              </p>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="sp-personal-content">
                      <div className="row">
                          <div className="col-12 col-lg-6">
                              <div className="skill-items">
                                  <h5>Personal Skill</h5>
                                  <div className="skill-bar d-flex flex-wrap justify-content-center justify-content-sm-start">
                                      <div className="skill-item">
                                          <div className="pie" data-pie='{ "index": 3, "percent": 96, "colorSlice": "#FF4600", "colorCircle": "#f1f1f1", "fontWeight": 700, "stroke": 7, "size": 90,
                                          "fontSize": "1.125rem","fontColor": "#FF4600" }'></div>
                                          <p>Resilience</p>
                                      </div>
                                      <div className="skill-item">
                                          <div className="pie" data-pie='{ "index": 6, "percent": 95, "colorSlice": "#1ABC80", "colorCircle": "#f1f1f1", "fontWeight": 700, "stroke": 7, "size": 90,
                                          "fontSize": "1.125rem","fontColor": "#1ABC80" }'>
                                          </div>
                                          <p>Ethics</p>
                                      </div>
                                      <div className="skill-item">
                                          <div className="pie" data-pie='{ "index": 4, "percent": 80, "colorSlice": "#1BA1D2", "colorCircle": "#f1f1f1", "fontWeight": 700, "stroke": 7, "size": 90,
                                          "fontSize": "1.125rem","fontColor": "#1BA1D2" }'>
                                          </div>
                                          <p>Compassion</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-12 col-lg-6">
                              <div className="award-items">
                                  <h5>Recognitions Award</h5>
                                  <div className="award-item">
                                      <div className="award-inner text-center col-lg-2">
                                          <div className="award-img">
                                              <img src={images['award-5.png']} alt="Award 2013" className='w-100' />
                                          </div>
                                          <p>Award 2013</p>
                                      </div>
                                      <div className="award-inner text-center col-lg-2">
                                          <div className="award-img">
                                              <img src={images['award-4.png']} alt="Award 2015" className='w-100' />
                                          </div>
                                          <p>Award 2015</p>
                                      </div>
                                      <div className="award-inner text-center col-lg-2">
                                          <div className="award-img">
                                              <img src={images['award-1.png']} alt="Award 2021" className='w-100' />
                                          </div>
                                          <p>Award 2021</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}


// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import Header from '../../../components/header/Header'
// import NotFound from '../../404/404'

// const Certificate = ({ images }) => {
//     const [doctors, setDoctors] = useState('')
//     const [loading, setLoading] = useState(true)
//     const [notFound, setNotFound] = useState(false)
//     const [error, setError] = useState(false)
//     const location = useLocation()

//     useEffect(() => {
//         const fetchDoctor = async () => {
//             try {
//                 setError('')
//                 const response = await fetch(`http://localhost:4001/doctors?doctor_id=${location.pathname.split('/')[2]}`, {
//                     method:"GET"
//                 })
//                 const json = await response.json()
//                 if (json.length === 0) {
//                     setLoading(false)
//                     setError('Error Getting Doctors')
//                     setNotFound(true)
//                 }
//                 if (!response.ok) {
//                     setLoading(false)
//                     throw Error('Server error')
//                 }
//                 if (response.ok) {
//                     setLoading(false)
//                     setCertificate(json[0])
//                 } else {
//                     setLoading(false)
//                 }
//             } catch (error) {
                
//             }
//         }

//         fetchDoctor()
//     },[])
//     return (
//         <>
//             {
//                 loading && <div className='container text-center py-5'><div  className="spinner-border text-success " role="status"></div></div>
//             }
//             {
//                 certificate && (
//                     <>
//                         <Header headerFor={`Doctor ${certificate.name}`} images={images} />
//                         <div className='text-center container'>
//                             <h1 className='h1'>Certificate</h1>
//                             <img src={certificate.image} alt={certificate.name} />
//                             <h1 className='h1'>Name: {certificate.name}</h1>
//                             <h1 className='h1'>Major: {certificate.major}</h1>
//                             <h1 className='h1'>Grade: {certificate.grade}</h1>
//                             <h1 className='h1'>About: {certificate.about}</h1>
//                         </div>
//                     </>
                    
//                 )
//             }
//         </>
//     )
// }
export default Doctor