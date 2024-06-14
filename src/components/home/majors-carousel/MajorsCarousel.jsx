import React from "react";
import "./autoplaycarousel.scss";
import CarouselItem from "./CarouselItem";

export default function AutoplayMajorsCarousel({ data, images }) {
  return (
    <div className="container" style={{overflowX:'hidden'}}>
      <div className="carousel-container" style={{height:'200px'}}>
        <div className="carousel-track">
          {Object.keys(data).map((detailKey) => {
            return (
              <CarouselItem
                images={images}
                imgUrl={data[detailKey].imgUrl}
                imgTitle={data[detailKey].title}
              ></CarouselItem>
            );
          })}
          {Object.keys(data).map((detailKey) => {
            return (
              <CarouselItem
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