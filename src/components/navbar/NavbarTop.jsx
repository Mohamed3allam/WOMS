import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { MailLock, MailOutline, Place, RoomOutlined } from '@mui/icons-material';

export default function NavbarTop({ images }) {
    const [openNavColor, setOpenNavColor] = useState(false);
    return (
        <MDBNavbar expand='lg' light className='p-0 wow fadeInDown' data-wow-duration="1s" data-wow-delay=".1s">
            <MDBContainer>
                <MDBNavbarBrand className='p-0 d-flex align-items-center justify-content-center gap-3' href='#'>
                        <img src={images['logo.png']} width='100' alt="World Organization for Medical Science" className='img-fluid m-0'/>
                        <h6>
                            <span style={{color:'#042c45'}}>WORLD ORGANIZATION</span> <br/> <span style={{color:'#67bb00'}}>FOR MEDICAL SCIENCE</span>
                        </h6>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavColor(!openNavColor)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse open={openNavColor} navbar>
                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center gap-4'>
                        <MDBNavbarItem>
                            <div style={{display:'flex',alignItems:'center'}} className='gap-2'>
                                <PhoneIphoneIcon style={{width:'40px', height:'40px'}} />
                                <div className='nav-icons-contact' style={{display:'flex',flexDirection:'column'}}>
                                    <b>Number :</b>
                                    <span>+44 7585 885438</span>
                                </div>
                            </div>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <div style={{display:'flex',alignItems:'center'}} className='gap-2'>
                                <MailOutline style={{width:'40px', height:'40px'}} />
                                <div className='nav-icons-contact' style={{display:'flex',flexDirection:'column'}}>
                                    <b>Email :</b>
                                    <span>info@woms.org</span>
                                </div>
                            </div>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <div style={{display:'flex',alignItems:'center'}} className='gap-2'>
                                <RoomOutlined style={{width:'40px', height:'40px'}} />
                                <div className='nav-icons-contact' style={{display:'flex',flexDirection:'column'}}>
                                    <b>Address :</b>
                                    <span style={{fontSize:'13px'}}>128 City Road, London,<br/> United Kingdom, EC1V 2NX</span>
                                </div>
                            </div>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}
