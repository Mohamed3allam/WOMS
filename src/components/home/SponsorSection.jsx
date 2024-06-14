import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SponsorSection({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoPlaySpeed:3000,
    autoPlay:true
  };
  return (
    <>
      <div className="section-header wow fadeInUp pt-5 pb-0" data-wow-delay="" data-wow-duration="1s">
          <h2><span style={{color:'#042c45'}}>Credits</span> </h2>
          {/* <h2> Orthopedics To Meet Your Needs</h2> */}
      </div>
      <ul className="nav dep-tab">
        <div className="slider-parent-div px-5 pb-5 pt-3" style={{backgroundColor:'#f7f8ff', padding:'100px'}}>
            <Slider {...settings} className="slider-parent">
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['credits-1.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['credits-2.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['credits-3.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['credits-4.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['credits-5.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['credits-6.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['credits-7.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['credits-8.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['uk-gov-logo.jpg']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['european-commission-logo.jpg']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['food-literacy.webp']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['epale.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['mooc.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['vet.jpg']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['sponsor-7.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['sponsor-8.png']}/>
              </div>
              <div className=" image-slide-div ">
                <img className="sponsor-image img-fluid" src={images['sponsor-9.png']}/>
              </div>
            </Slider>
        </div>
      </ul>
    </>
  );
}