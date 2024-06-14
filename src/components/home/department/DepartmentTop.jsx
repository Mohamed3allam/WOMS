import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export default function DepartmentTop({ images }) {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 2,
        autoPlay:true,
        autoPlaySpeed:3000
      };

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
        <div className="">
            <div className="department-top">
                <ul className="nav dep-tab" role="tablist">
                    <div className="slider-parent-div py-5" style={{backgroundColor:'#f7f8ff', padding:'100px'}}>
                        <Slider {...settings} className="slider-parent">
                            {
                                majors.map((major)=>(
                                    <li className="wow fadeInUp " data-wow-duration="1s" data-wow-delay=".1s">
                                        <Link className="d-flex flex-column justify-content-center align-items-center gap-2" href="#one" role="tab" data-toggle="tab" style={{pointerEvents:'none'}}>
                                            <img src={images[major.image]} alt="depart" style={{width:'50px',height:'50px',objectFit:'cover'}} />
                                            <p className='m-0' style={{fontSize:'15px',color:'#042c45'}}>{major.name}</p>
                                        </Link>
                                    </li>
                                ))
                            }
                        
                        </Slider>
                    </div>
                </ul>
            </div>
        </div>
    )
}
