import React from 'react'
import ServicesDetails from '../../components/services/ServicesDetails'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/header/Header'

const Services = ({ images }) => {
  return (
    <>
      <Helmet>
        <title>W.O.M.S Services</title>
      </Helmet>

      <div>
        <Header headerFor={'WOMS Services'} images={images} />
        <div className='py-5'>
          <ServicesDetails images={images} />
        </div>
      </div>
    </>
  )
}

export default Services