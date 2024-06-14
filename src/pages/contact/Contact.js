import React from 'react'
import ContactForm from '../../components/contact/ContactForm'
import MapLocation from '../../components/contact/MapLocation'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/header/Header'

const Contact = ({ images }) => {
  return (
    <>
    <Helmet>
      <title>Contact</title>
    </Helmet>
      <div>
          <Header headerFor={'Contact Us'} images={ images } />
          <ContactForm images={ images } />
          <MapLocation />
          {/* <SponsorSection /> */}
      </div>
    </>
  )
}

export default Contact