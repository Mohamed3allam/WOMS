import React from 'react'
import Header from '../../../components/header/Header'
import FindMemberShipSearch from '../../../components/memberships/findMembershipSearch/FindMembershipSearch'

const FindYourMembership = ({ images }) => {

    return (
        <>
            <Header headerFor={'Find Your Membership'} images={images} />
            <div className='container py-5'>
                <h1 className='h1 text-center'>Find Your Membership</h1>
                <FindMemberShipSearch images={images} />
        </div>
        </>
    )
}

export default FindYourMembership