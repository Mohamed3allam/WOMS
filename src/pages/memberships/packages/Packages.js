import React from 'react'
// import DoctorSection from '../../components/home/DoctorSection'
import { Helmet } from 'react-helmet-async'
import Header from '../../../components/header/Header'
import AllPackages from '../../../components/memberships/packages/AllPackages'

const Packages = ({ images }) => {
  return (
    <>
    <Helmet>
      <title>Packages</title>
    </Helmet>
      <div>
          <Header headerFor={'Packages'} images={images} />
          <AllPackages images={images} />
      </div>
    </>
  )
}

export default Packages