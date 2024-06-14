import React from 'react'
import CreditsCompanyCards from '../../components/credits/CreditsCompanyCards'
import Header from '../../components/header/Header'

const Credits = ({ images }) => {
  return (
    <>
        <Header headerFor={'Organizations We are Credited By'} images={images} />
        <div className='container'>
            <CreditsCompanyCards images={images} />
        </div>
    </>
  )
}

export default Credits