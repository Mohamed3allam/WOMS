import React from "react";
import "./autoplaycarousel.scss";
// import { sponsorSection } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel({ title, data, images }) {
  return (
    <div className="container">
      {
        title && (
          <div className="section-header wow fadeInUp pt-5 pb-0" data-wow-delay="" data-wow-duration="1s">
              <h2><span style={{color:'#042c45'}}>{title}</span> </h2>
              {/* <h2> Orthopedics To Meet Your Needs</h2> */}
          </div>
        )
      }
      <div className="carousel-container" style={{height:'200px'}}>
        <div className="carousel-track">
          {Object.keys(data).map((detailKey, index) => {
            return (
              <CarouselItem
              key={index}
                images={images}
                imgUrl={data[detailKey].imgUrl}
                imgTitle={data[detailKey].title}
              ></CarouselItem>
            );
          })}
          {Object.keys(data).map((detailKey, index) => {
            return (
              <CarouselItem
              key={index}
                images={images}
                imgUrl={data[detailKey].imgUrl}
                imgTitle={data[detailKey].title}
              ></CarouselItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}