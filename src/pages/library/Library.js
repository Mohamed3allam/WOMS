import React from 'react'
import Books from '../../components/library/Books'
import Header from '../../components/header/Header'

const Library = ({ images }) => {
  return (
    <>
      <Header headerFor={'WOMS Academy'} images={images} />
      <div className='container py-5'>
          <h1 className=' h1'>
              Library
          </h1>
          <p className=' lead'>
              We have a library of books that will include any of the medical majors you might need
          </p>
          
          <Books images={images} />
      </div>
    </>
  )
}

export default Library