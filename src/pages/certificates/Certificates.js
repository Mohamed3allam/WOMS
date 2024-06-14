import React from 'react'
import CertificatesDetails from '../../components/certificates/CertificatesDetails'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/header/Header'

const Certificates = ({ images }) => {
  return (
    <>
    <Helmet>
      <title>W.O.M.S Certificates</title>
    </Helmet>
      <div>
          <Header headerFor={'Cetificates'} images={images} />
          <CertificatesDetails images={images} />
      </div>
    </>
  )
}

export default Certificates