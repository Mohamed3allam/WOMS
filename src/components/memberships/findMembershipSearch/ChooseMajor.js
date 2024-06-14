import React from 'react'
import { Link } from 'react-router-dom'

const ChooseMajor = ({ images }) => {
    const majors = [
        {
            name:"Pharmaceutics",
            image:"depart-icon-1.png"
        },
        {
            name:'Nutrition',
            image:'depart-icon-2.png'
        },
        {
            name:'Genetics',
            image:'depart-icon-3.png'
        },
        {
            name:'Neurology ',
            image:'depart-icon-4.png'
        },
        {
            name:'Vascular',
            image:'depart-icon-5.png'
        },
        {
            name:'AMS',
            image:'depart-icon-6.png'
        },
        {
            name:'Internal Medicine',
            image:'depart-icon-7.png'
        },
        {
            name:'Dentistry',
            image:'depart-icon-8.png'
        },
        {
            name:'Nursery',
            image:'depart-icon-9.png'
        },
        {
            name:'Pediatrics',
            image:'depart-icon-11.png'
        },
        {
            name:"Pharmaceutics",
            image:"depart-icon-1.png"
        },
        {
            name:'Nutrition',
            image:'depart-icon-2.png'
        },
        {
            name:'Genetics',
            image:'depart-icon-3.png'
        },
        {
            name:'Neurology ',
            image:'depart-icon-4.png'
        },
        {
            name:'Vascular',
            image:'depart-icon-5.png'
        },
        {
            name:'AMS',
            image:'depart-icon-6.png'
        },
        {
            name:'Internal Medicine',
            image:'depart-icon-7.png'
        },
        {
            name:'Dentistry',
            image:'depart-icon-8.png'
        },
        {
            name:'Nursery',
            image:'depart-icon-9.png'
        },
        {
            name:'Pediatrics',
            image:'depart-icon-11.png'
        },
        
      ]
  return (
    <>
        <div className='container py-5'>

            {
                majors.map((major) => (
                    <Link to={{pathname:`/memberships/find-your-membership?major=${major.name}`, data:major.name}}>
                        <button className='btn'>{major.name}</button>
                    </Link>
                ))
            }
        </div>
    </>
  )
}

export default ChooseMajor