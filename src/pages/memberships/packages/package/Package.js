import React from 'react'
import PackageHeader from './PackageHeader'

const Package = ({ single_package, images }) => {

  return (
    <>
        <PackageHeader title_color={single_package.title_color} headerFor={single_package.title} images={images} image={single_package.image} />
        <div className='container py-5'>
            <h2 className='h2 wow fadeInUp'>
                Features And Benefits
            </h2>
            <p className='lead'>Only For</p>
            <h2 className={`h2 ${single_package.title === 'VIP Package' && 'packages-header'} wow fadeInUp text-dark`}>
                <b>${single_package.package_cost}</b>
            </h2>
            <div className='py-3'>
                <ul className='pricingTable-firstTable_table__options packages-features' style={{columns:3,gap:'100px'}}>
                    {
                        single_package.features.map((feature) => (
                            <li className='single-feature fadeInUp' id={feature.replace(/\s+/g, '')} key={feature}>
                                {feature}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        
    </>
  )
}

export default Package