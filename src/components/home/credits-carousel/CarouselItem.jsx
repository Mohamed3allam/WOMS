import React from "react";

export default function CarouselItem({ images, imgUrl, imgTitle }) {
  return (
    <div className="carousel-card">
      <img src={images[imgUrl]} alt={imgTitle} />
    </div>
  );
}