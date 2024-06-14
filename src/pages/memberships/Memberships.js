import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FindYourMembership from './find-your-membership/FindYourMembership'
import Packages from './packages/Packages'
import { packages } from './packages/packages-data'
import Package from './packages/package/Package'

const Memberships = ({ images }) => {
    return (
        <>
            <Routes>
                <Route exact path='packages' element={<Packages images={images} />} />
                {
                    Object.values(packages).map((single_package) => (
                        <Route exact path={single_package.link} element={<Package single_package={single_package} images={images} />} />
                    ))
                }
                {/* <Route exact path='find-your-membership' element={<FindYourMembership images={images} />} /> */}
            </Routes>
        </>
    )
}

export default Memberships