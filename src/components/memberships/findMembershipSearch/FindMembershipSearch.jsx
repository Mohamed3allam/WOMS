import { DataGrid } from '@mui/x-data-grid'
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'


const SearchedImage = styled.div`
    
`
const UserListUser = styled.div`
  display: flex;
  align-items: center;
  word-wrap: break-word !important;

`
const UserListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
const UserListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`
const FindMemberShipSearch = ({ images }) => {
  const [major, setMajor] = useState('')
  const searchParams = new URLSearchParams(window.location.search);
  const majorName = searchParams.get('major')

  useEffect(() => {
    if (!searchParams.get('major')) {
      window.location.href = '/choose-major'
    }

  },[])


    const [doctors, setDoctors] = useState('')
    
    
    const [doctorID, setDoctorID] = useState('')
    const [doctorName, setDoctorName] = useState('')
    const [doctorCountry, setdoctorCountry] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(()=>{
        const fetchDoctors = async () => {
            try{
                setLoading(true)
                const response = await fetch(`http://localhost:4002/doctors?major=${majorName}`, {
                    method:'GET'
                })
                const json = await response.json()
                if (response.ok) {
                    setDoctors(json)
                    setLoading(false)
                }
            } catch (error) {
                console.log(error.message)
                setError(error.message)
            }
        }
        fetchDoctors()
    },[])

    const searchDoctor = async (e) => {
        try {
            setError('')
            setDoctors('')
            setLoading(true)
            e.preventDefault()
            const response = await fetch(`http://localhost:4002/doctors?major=${majorName}` + `${doctorID && `doctor_id=${doctorID}&`}${doctorName && `name=${doctorName}&`}${doctorCountry && `country=${doctorCountry}`}`, {
                method:"GET"
            })
            const json = await response.json()
            if (json.length === 0) {
                setError('No Doctors With this data')
            }
            if (!response.ok) {
                setLoading(false)
                throw Error('Server Error')
            }
            if (response.ok) {
                setError('')
                setLoading(false)
                setDoctors(json)
            } else {
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(error)
            console.log(error)
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 130, renderCell: (params) => {
          return (
            <UserListUser style={{fontWeight:'bold',fontSize:12.5}}>
              {params.row.doctor_id}
            </UserListUser>
          )
        } },
        { field: 'Name', headerName: 'Name', width: 250, renderCell: (params)=>{
          return (
            <UserListUser style={{fontWeight:'bold'}}>
              <UserListImg src={params.row.image} alt="" />
              {
                // user.user._id === params.row._id ?
                // 'You' :
                `Dr.${params.row.name}`
              }
            </UserListUser>
          )
        } },
        { field: 'email', headerName: 'Email', width: 220, renderCell: (params) => {
          return (
            <UserListUser>
              {params.row.email}
            </UserListUser>
          )
        } },
        { field: 'country', headerName: 'Country', width: 220, renderCell: (params) => {
            return (
              <UserListUser>
                {params.row.country}
              </UserListUser>
            )
          } },
          { field: 'major', headerName: 'Major', width: 220, renderCell: (params) => {
            return (
              <UserListUser>
                {params.row.major}
              </UserListUser>
            )
          } },
        {field: 'phone', headerName: 'Phone', width: 200, renderCell: (params) => {
          return (
            <UserListUser>
              {params.row.phone}
            </UserListUser>
          )
        }
        },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
              <>
                <div>
                    <Link to={'/doctor/'+ params.row.doctor_id}>
                        <UserListEdit>
                            View Profile
                        </UserListEdit>
                    </Link>
                </div>
              </>
            )
          }
        }
    ];




    return (
        <>
            <div>
                <form>
                    <MDBInputGroup onSubmit={searchDoctor} className='p-5 row'>
                        <MDBInput value={doctorID} onInput={e => setDoctorID(e.target.value)} className='m-0 col-lg-3' label='Doctor ID' />
                        <MDBInput value={doctorName} onInput={e => setDoctorName(e.target.value)} className='m-0 col-lg-3' label='Doctor Name' />
                        <MDBInput value={doctorCountry} onInput={e => setdoctorCountry(e.target.value)} className='m-0 col-lg-3' label='Doctor country' />
                        <MDBBtn disabled={loading} onClick={searchDoctor} className='btn-success col-lg-2' type='submit'>
                            <MDBIcon icon='search' />
                        </MDBBtn>
                    </MDBInputGroup>
                </form>
            </div>
            {
                doctors && (
                        <DataGrid
                          autoHeight
                          rows={doctors}
                          columns={columns}
                          pageSize={20}
                          rowsPerPageOptions={[20]}
                          checkboxSelection
                          disableSelectionOnClick
                          getRowId={(row)=>row.doctor_id}
                        />
                      )
            }
            <div>
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
                {
                    error && (
                        <h2 className='h2'>{error}</h2>
                    )
                }
                
            </div>
        </>
        )
}

export default FindMemberShipSearch