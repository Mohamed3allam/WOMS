import React from 'react'
import Header from '../../components/header/Header'

const Erasmus = ({ images }) => {
  return (
    <div>
        <Header headerFor={'Erasmus+'} images={images} />
        <h1 className='h2 text-center'>
            Erasmus+ Credits
        </h1>
    </div>
  )
}

export default Erasmus