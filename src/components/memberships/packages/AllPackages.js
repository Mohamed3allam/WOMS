import React from 'react'
import { Link } from 'react-router-dom'
import { packages } from '../../../pages/memberships/packages/packages-data'

export default function AllPackages({ images }) {

  // Object.values(packages).map((package_p) => {
  //   console.log(package_p)
  // })
    return (
      <div className=''>
        <div className="pricingTable">
          <h2 className="pricingTable-title">Find a package that's right for you.</h2>        
          <ul className="pricingTable-firstTable d-flex flex-row align-items-start justify-content-start row">
            {
              Object.values(packages).map((single_package) => (
                single_package.title === 'VIP Package' ? 
                (
                  <li className="pricingTable-firstTable_table col" style={{color:'white',width:'100%', backgroundImage:'linear-gradient(to top, #67bb00,#81bd38,#98bd6c, white 100%)'}}>
                    <h1 className="pricingTable-firstTable_table__header">{single_package.title}</h1>
                    <p className="pricingTable-firstTable_table__pricing" style={{color:'gray'}}><span>$</span><span>{single_package.package_cost}</span><span></span></p>
                    <ul className="pricingTable-firstTable_table__options">
                      {
                        single_package.features.map((feature) => (
                          <li><Link className='package-advantage' to={`/package-advantages#${feature.replace(/\s+/g, '')}`}>{feature}</Link></li>
                        ))
                      }
                    </ul>
                    <button className="pricingTable-firstTable_table__getstart">Get Started Now</button>
                  </li>
                ) : (
                  <li className="pricingTable-firstTable_table col">
                    <h1 className="pricingTable-firstTable_table__header">{single_package.title}</h1>
                    <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>{single_package.package_cost}</span><span></span></p>
                    <ul className="pricingTable-firstTable_table__options text-start">
                      {
                        single_package.features.map((feature) => (
                          <li><Link className='package-advantage' to={`/package-feature#${feature.replace(/\s+/g, '')}`}>{feature}</Link></li>
                        ))
                      }
                    </ul>
                    <button className="pricingTable-firstTable_table__getstart">Get Started Now</button>
                  </li>
                )
              ))
            }
          </ul>

          {/* <ul className="pricingTable-firstTable">
            
          </ul> */}
        </div>
      </div>
    )
}
