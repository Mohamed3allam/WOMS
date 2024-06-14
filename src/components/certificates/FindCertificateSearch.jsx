import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'


const SearchedImage = styled.div`
    
`
const FindCertificateSearch = () => {
    const [searchInput, setSearchInput] = useState('')
    const [certificate, setCertificate] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const searchCertificate = async (e) => {
        try {
            setError('')
            setCertificate('')
            setLoading(true)
            e.preventDefault()
            const response = await fetch(`http://localhost:4001/certificates?certificate_code=${searchInput}`, {
                method:"GET"
            })
            const json = await response.json()
            if (json.length === 0) {
                setError('No Certificates With this Code')
            }
            if (!response.ok) {
                setLoading(false)
                throw Error('Server')
            }
            if (response.ok) {
                setLoading(false)
                setCertificate(json[0])
            } else {
                setLoading(false)
            }
        } catch (error) {
            setError(error)
            console.log(error)
        }
    }
    return (
        <>
            <div>
                <form>
                    <MDBInputGroup onSubmit={searchCertificate} className='p-5'>
                        <MDBInput value={searchInput} onInput={e => setSearchInput(e.target.value)} className='m-0' label='Search' />
                        <MDBBtn disabled={loading} onClick={searchCertificate} className='btn-success' type='submit'>
                            <MDBIcon icon='search' />
                        </MDBBtn>
                    </MDBInputGroup>
                </form>
            </div>
            {
                certificate && (
                    <Link to={`/certificate/${certificate.certificate_code}`} className='wow fadeIn'>
                        <div className="card h-25" style={{minHeight:'unset',overflow:'hidden'}}>
                            <div className="card-header">
                                {certificate.name}
                            </div>
                            <div className='row d-flex align-items-center'>
                                <img src={certificate.image} alt={certificate.name} className='col-2 ' style={{borderRadius:''}}/>
                                <div className="card-body h-25 col-lg-6 " style={{height:'fit-content'}}>
                                    <h5 className="card-title">{certificate.name}</h5>
                                    <p className="card-text">{certificate.about}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            }
            <div>
                {
                    error && (
                        <h2 className='h2'>{error}</h2>
                    )
                }
                {
                    loading && (
                        <>
                            <div className='card p-5' style={{minHeight:'unset'}}>
                                <p className=" text-start placeholder col-6"></p>
                                <p className=" text-start placeholder w-75"></p>
                                <p className=" text-start placeholder" style={{width: '25%'}}></p>
                            </div>
                        </>
                    )
                }
            </div>
        </>
        )
}

export default FindCertificateSearch