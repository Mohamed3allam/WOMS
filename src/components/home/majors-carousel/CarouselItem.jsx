import React from "react";

export default function CarouselItem({ images, imgUrl, imgTitle }) {
  return (
    <div className="carousel-card-major d-flex flex-column justify-content-center align-items-center">
      <img src={images[imgUrl]} alt={imgTitle} />
      <p className="fs-6" style={{color:'#042c45'}}>{imgTitle}</p>
    </div>
  );
}