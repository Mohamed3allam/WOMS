import React from 'react'
import FeatureSection from '../../components/home/FeatureSection'
import AppointmentSection from '../../components/home/AppointmentSection'
import CounterSection from '../../components/home/CounterSection'
import DoctorSection from '../../components/home/DoctorSection'
import CertificateSection from '../../components/about/CertificateSection'
import AboutSection from '../../components/about/AboutSection'
import Vision from '../../components/about/Vision'
import Message from '../../components/about/Message'
import WhoWeAre from '../../components/about/WhoWeAre'
import Objectives from '../../components/about/Objectives'
import Values from '../../components/about/Values'
import Principles from '../../components/about/Principles'
import Header from '../../components/header/Header'

const About = ({ images }) => {
  return (
    <div>
        <Header headerFor={'About Us'} images={images} />
        <WhoWeAre images={images} />
        <Vision images={images} />
        <Message images={images} />
        <Objectives images={images} />
        <Values images={images} />
        <Principles images={images} />
        <FeatureSection images={images} />
        <AppointmentSection images={images} />
        <AboutSection images={images} />
        <CounterSection images={images} />
        <DoctorSection images={images} />
        <CertificateSection images={images} />
    </div>
  )
}

export default About