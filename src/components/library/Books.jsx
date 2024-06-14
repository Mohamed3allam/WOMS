import React, { useEffect, useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

    
const Books = ({ images }) => {
    const [books, setBooks] = useState('')
    const [loadingBooks,setLoadingBooks] = useState(true)

    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState('')

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {

                setLoadingBooks(true)
                const response = await fetch('http://localhost:4000/books', {
                    method:'GET'
                })
                const json = await response.json()
                if (response.ok) {
                    setBooks(json)
                    setLoadingBooks(false)
                }
                if (!response.ok) {
                    console.log(`Error! status: ${response.status}`);
                    setSearchResult('')
                    // throw Error('Network')
                }
            } catch (error) {
                console.log("Fetch error : ", error)
            }
        }
        fetchAllBooks()
    }, [])

    const fireSearch = (searchQuery) => {
        if (searchQuery.length === 0 || searchQuery === ' ') {
            return 0
        }
        setLoadingBooks(true)
        setBooks('')
        setSearchResult('')
        
        setTimeout(async () => {
            const response = await fetch('http://localhost:4000/books?q=' + searchQuery)
            const json = await response.json()
            if (response.ok) {
                setSearchResult(json)
                setLoadingBooks(false)
            }
        }, 1000)
    }
  return (
    <>
        <Helmet>
            <title>Our Library</title>
        </Helmet>
        <MDBInputGroup className='p-5 h-25'>
            <MDBInput onInput={(e) => fireSearch(e.target.value)} onChange={(e) => fireSearch(e.target.value)} className='m-0' label='Search' />
            {/* <MDBBtn rippleColor='dark'>
                <MDBIcon icon='search' />
            </MDBBtn> */}
        </MDBInputGroup>
        <br />
        {
            loadingBooks && <div className='text-center h1'>Loading</div>
        }
        {
            books && books.map((book) => (
                <div className="row justify-content-center mb-3">
                    <div className="col-md-12">
                        <div className="card shadow-0 border rounded-3 mb-0" style={{minHeight:'fit-content'}}>
                        <div className="card-body">
                            <div className="row g-0">
                            <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                                <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                                <img src={book.image} className="w-100" />
                                <Link to="#">
                                    <div className="hover-overlay">
                                    <div className="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
                                    </div>
                                </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-5 col-sm-7">
                                <h3>{book.title}</h3>
                                <div className="d-flex flex-row">
                                <div className="text-warning mb-1 me-2">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span className="ms-1">
                                    {book.rating}
                                    </span>
                                </div>
                                    <span className="text-muted">{book.order_number} orders</span>
                                </div>

                                <p className="text mb-4 mb-md-0">
                                    {book.desc}
                                </p>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
        }
        {
            searchResult && searchResult.map((book) => (
                <div className="row justify-content-center mb-3">
                    <div className="col-md-12">
                        <div className="card shadow-0 border rounded-3">
                        <div className="card-body">
                            <div className="row g-0">
                            <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                                <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                                <img src={book.image} className="w-100" />
                                <Link to="#">
                                    <div className="hover-overlay">
                                    <div className="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
                                    </div>
                                </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-5 col-sm-7">
                                <h3>{book.title}</h3>
                                <div className="d-flex flex-row">
                                <div className="text-warning mb-1 me-2">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span className="ms-1">
                                    {book.rating}
                                    </span>
                                </div>
                                    <span className="text-muted">{book.order_number} orders</span>
                                </div>

                                <p className="text mb-4 mb-md-0">
                                    {book.desc}
                                </p>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
        }
        {
            searchResult && searchResult.length === 0 && <div className='text-center h1'>No results</div>
        }
        

        <hr />

        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
          <ul className="pagination">
            <li className="page-item disabled">
              <Link className="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
            <li className="page-item"><Link className="page-link" to="#">5</Link></li>
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
</>
  )
}

export default Books