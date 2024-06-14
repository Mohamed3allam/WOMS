import React from 'react'
// import CertificatesHeader from '../../../components/certificates/Header'
import Header from '../../../components/header/Header'
import FindCertificateSearch from '../../../components/certificates/FindCertificateSearch'

const FindYourCertificate = ({ images }) => {
  return (
    <>
        <Header headerFor={'Find Your Certificate'} images={images} />
        <div className='container py-5'>
            <h1 className='h1 text-center'>Find Your Certificate</h1>
            <FindCertificateSearch images={images} />
        </div>
    </>
  )
}

export default FindYourCertificate