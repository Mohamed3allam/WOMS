import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from '../../../components/header/Header'
import NotFound from '../../404/404'

const Certificate = ({ images }) => {
    const [certificate, setCertificate] = useState('')
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const [error, setError] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const fetchCertificate = async () => {
            try {
                setError('')
                const response = await fetch(`http://localhost:4001/certificates?certificate_code=${location.pathname.split('/')[2]}`, {
                    method:"GET"
                })
                const json = await response.json()
                if (json.length === 0) {
                    setLoading(false)
                    setError('Error Getting this Certificate')
                    setNotFound(true)
                }
                if (!response.ok) {
                    setLoading(false)
                    throw Error('Server error')
                }
                if (response.ok) {
                    setLoading(false)
                    setCertificate(json[0])
                } else {
                    setLoading(false)
                }
            } catch (error) {
                
            }
        }

        fetchCertificate()
    },[])
    return (
        <>
            {
                loading && <div className='container text-center py-5'><div  className="spinner-border text-success " role="status"></div></div>
            }
            {
                certificate && (
                    <>
                        <Header headerFor={`Doctor ${certificate.name}`} images={images} />
                        <div className='text-center container'>
                            <h1 className='h1'>Certificate</h1>
                            <img src={certificate.image} alt={certificate.name} />
                            <h1 className='h1'>Name: {certificate.name}</h1>
                            <h1 className='h1'>Major: {certificate.major}</h1>
                            <h1 className='h1'>Grade: {certificate.grade}</h1>
                            <h1 className='h1'>About: {certificate.about}</h1>
                        </div>
                    </>
                    
                )
            }
            {
                notFound && (<NotFound />)
            }
        </>
    )
}

export default Certificate