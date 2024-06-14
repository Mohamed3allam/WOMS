import React from 'react'
import RegistrationForm from '../../components/registration/Form'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/header/Header'
import RegistrationFormEntity from '../../components/registration/FormEntity'

const Registration = ({ images }) => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Header headerFor={'Registration'} images={images} />
      <div className='container'>
        <div className='row  d-flex justify-content-center'>
          <RegistrationForm images={images} />
          <RegistrationFormEntity images={images} />

        </div>
      </div>
    </>
  )
}

export default Registration