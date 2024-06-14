import React from 'react';
import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';

export default function Navbar({ images }) {
    return (
        <>
            <NavbarTop images={images} />
            <NavbarBottom images={images} />
            
        </>
    );
}