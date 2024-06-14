import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function CreditsCompanyCards({ images }) {
    return (
        <>
            <div class="container mx-auto mt-4 py-5">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['uk-gov-logo.jpg']} class="card-img-top px-5 pt-5" style={{width:'80%'}}  alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">United Kingdom Governement</h5>
                                <p class="card-text" style={{fontSize:'19px'}}>A socialist organization registered in London with Odistro license (oc442466).</p>
                                {/* <Link to="https://www.gov.uk/" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['credits-1.png']} class="card-img-top p-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">European Solidarity Corps</h5>
                                <p class="card-text">The European Solidarity Corps programme creates opportunities for young people to engage in solidarity activities abroad or in their country in projects that benefit communities.</p>
                                {/* <Link to="https://youth.europa.eu/solidarity_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['credits-2.png']} class="card-img-top p-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">European Youth Week</h5>
                                <p class="card-text">European Youth Week allows to discuss relevant topics for young people, showcase EU youth opportunities and celebrate success stories. In 2021 tune in from 24 to 30 May!</p>
                                {/* <Link to="https://youth.europa.eu/youthweek_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['credits-3.png']} class="card-img-top p-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">EU Youth Dialogue</h5>
                                <p class="card-text">EU Youth Dialogue is a dialogue mechanism between young people and decision makers taking place in the framework of the EU Youth Strategy.</p>
                                {/* <Link to="https://youth.europa.eu/eu-youth-dialogue_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['credits-4.png']} class="card-img-top p-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">DiscoverEU</h5>
                                <p class="card-text">DiscoverEU is an initiative offering 18 years olds the chance to travel around and discover Europe. Each year the European Union awards selected young people with a travel pass.</p>
                                {/* <Link to="https://youth.europa.eu/discovereu_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['credits-5.png']} class="card-img-top p-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">Erasmus+</h5>
                                <p class="card-text">Erasmus+ is a programme to support education, training, youth and sport in Europe. It creates opportunities for young people to study, do trainings, and gain experience abroad.</p>
                                {/* <Link to="https://ec.europa.eu/programmes/erasmus-plus" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['credits-6.png']} class="card-img-top p-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">Erasmus+ Virtual Exchange</h5>
                                <p class="card-text">Erasmus+ Virtual Exchange is a project enabling youth in Europe and the Southern Mediterranean to engage in meaningful intercultural experiences online, as part of their formal or non-formal education.</p>
                                {/* <Link to="https://youth.europa.eu/erasmusvirtual_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['credits-7.png']} class="card-img-top p-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">Eures</h5>
                                <p class="card-text">Eures is the European Job Mobility Portal which will help you find a job abroad.</p>
                                {/* <Link to="https://ec.europa.eu/eures/public/homepage" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['credits-8.png']} class="card-img-top p-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">SHEU Leads</h5>
                                <p class="card-text">It spotlights girls and young women under 30 that are making a difference in their communities and doing an outstanding work in the fields of Innovation, Research, Education, Youth, Culture and Sport across the EU.</p>
                                {/* <Link to="https://youth.europa.eu/sheuleads_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['european-commission-logo.jpg']} class="card-img-top p-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">European School Education Platform</h5>
                                <p class="card-text">EACEA bridges the gap between diverse individuals united by a passion for growth, creativity, and cultural unity. Through its support of projects across education, culture, and citizen engagement, EACEA ignites innovation and collaboration, ultimately weaving a rich tapestry of European identity.</p>
                                {/* <Link to="https://youth.europa.eu/sheuleads_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['food-literacy.webp']} class="card-img-top px-5 pt-5" style={{width:'80%'}} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">Food Literacy for local food</h5>
                                <p class="card-text">FL4LF project aims to create a community-based learning model that promotes Food Literacy and supports multi-at-risk adults, contributing to social inclusion, sustainable habits and Local Food issues.</p>
                                {/* <Link to="https://youth.europa.eu/sheuleads_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['epale.png']} class="card-img-top px-5 pt-5" style={{width:'80%'}} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">EPALE - Electronic Platform for Adult Learning in Europe</h5>
                                <p class="card-text">EPALE serves as a comprehensive resource and vibrant community hub for anyone involved in or passionate about adult learning across Europe.</p>
                                {/* <Link to="https://youth.europa.eu/sheuleads_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['mooc.png']} class="card-img-top px-5 pt-5" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">MOOCs</h5>
                                <p class="card-text">The Massive Open Online Courses provide free and flexible access to comprehensive knowledge on specific adult learning topics, with added support from the learners community and the opportunity of exchanging opinions and experiences</p>
                                {/* <Link to="https://youth.europa.eu/sheuleads_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={images['vet.jpg']} class="card-img-top px-4 pt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title h5">Community of European VET practitioners</h5>
                                <p class="card-text">By joining this active VET community, you'll connect with colleagues across Europe, tackle shared challenges, and shape the future of skills development. Let's bridge policy and practice together!</p>
                                {/* <Link to="https://youth.europa.eu/sheuleads_en" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}