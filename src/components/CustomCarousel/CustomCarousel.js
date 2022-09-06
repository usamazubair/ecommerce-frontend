import React from "react";
import Carousel from "react-material-ui-carousel";

export default function CustomCarousel({ items }) {
  return (
    <Carousel navButtonsAlwaysVisible={true} indicators={false}>
      {items.map((item, i) => (
        <div key={i}>
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </Carousel>
  );
}
