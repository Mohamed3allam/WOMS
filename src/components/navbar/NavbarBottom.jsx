import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";

  
  export default function NavbarBottom({ images }) {
      const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
      useEffect(()=>{

          initMDB({ Dropdown, Ripple });
      },[])
      

    
    return (
        <MDBNavbar sticky style={{backgroundColor:'#042c45',position:'sticky'}} expand='lg' className='py-5 wow fadeInDown' data-wow-duration="1s" data-wow-delay=".3s">
            <MDBContainer>
                <div></div>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
                    className='text-right mr-auto'
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse open={openNavColorSecond} navbar id='navbarColor02'>
                    <MDBNavbarNav className='w-75 mx-auto d-flex justify-content-center fw-bold gap-5'>
                        <MDBNavbarItem className='active'>
                            <Link className='text-light text-decoration-none' aria-current='page' to='/'>
                                Home
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/about'>
                                About Us
                            </Link>
                        </MDBNavbarItem>
                        {/* <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/doctors'>
                                Doctors
                            </Link>
                        </MDBNavbarItem> */}
                        <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/credits'>
                                Credits
                            </Link>
                        </MDBNavbarItem>
                        {/* <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/erasmus'>
                                Erasmus+
                            </Link>
                        </MDBNavbarItem> */}
                        {/* <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/certificates'>
                                Certificates
                            </Link>
                        </MDBNavbarItem> */}
                        {/* <MDBNavbarItem>
                            <div className="dropdown">
                                <button
                                    className="btn btn-transparent shadow-0 dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-dropdown-init
                                    data-mdb-ripple-init
                                    aria-expanded="false"
                                    style={{color:'white',padding:0,textTransform:'capitalize',fontSize:'unset'}}
                                >
                                    Certificates
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><Link className="dropdown-item" to="our-certificates">Our Certificates</Link></li>
                                    <li><Link className="dropdown-item" to="find-your-certificate">Find Your Certificate</Link></li>
                                </ul>
                            </div>
                        </MDBNavbarItem> */}
                        {/* <MDBNavbarItem>
                            <div className="dropdown">
                                <button
                                    className="btn btn-transparent shadow-0 dropdown-toggle"
                                    type="button"
                                    // id="dropdownMenuButton"
                                    data-mdb-dropdown-init
                                    data-mdb-ripple-init
                                    aria-expanded="false"
                                    style={{color:'white',padding:0,textTransform:'capitalize',fontSize:'unset'}}
                                >
                                    Memberships
                                </button>
                                <ul className="dropdown-menu" >
                                    <li><Link className="dropdown-item" to="memberships/packages">Packages</Link></li>
                                    <li><Link className="dropdown-item" to="memberships/find-your-membership">Find Your Membership</Link></li>
                                </ul>
                            </div>
                        </MDBNavbarItem> */}
                        {/* <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/memberships/packages'>
                                Packages
                            </Link>
                        </MDBNavbarItem> */}
                        <MDBNavbarItem>
                            <div className="dropdown">
                                <button
                                    className="btn btn-transparent shadow-0 dropdown-toggle"
                                    type="button"
                                    // id="dropdownMenuButton"
                                    data-mdb-dropdown-init
                                    data-mdb-ripple-init
                                    aria-expanded="false"
                                    style={{color:'white',padding:0,textTransform:'capitalize',fontSize:'unset'}}
                                >
                                    Packages
                                </button>
                                <ul className="dropdown-menu" >
                                    <li style={{backgroundImage:'linear-gradient(45deg, #67bb00, white)'}}><Link className="dropdown-item text-white packages-header fs-6" to="memberships/packages/vip-package">VIP Package</Link></li>
                                    <li><Link className="dropdown-item" to="memberships/packages/diamond-package">Diamond Packages</Link></li>
                                    <li><Link className="dropdown-item" to="memberships/packages/gold-package">Gold Packages</Link></li>
                                    <li><Link className="dropdown-item" to="memberships/packages/silver-package">Silver Packages</Link></li>
                                </ul>
                            </div>
                        </MDBNavbarItem>
                        {/* <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/services'>
                                Services
                            </Link>
                        </MDBNavbarItem> */}
                        <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/services'>
                                Services
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/library'>
                                WOMS Academy
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/contact'>
                                Contact Us
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='text-light text-decoration-none' to='/registration'>
                                Registration
                            </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}
