import React from "react";
import { Carousel } from "antd";
import "./WeatherCarousel.css";
import weather from "../../data/Weather.json";

const weatherItems = () => {
  let img;
  return weather.map((item, i) => {
    img = "img" + (i + 1);
    return (
      <div className={img}>
        <h3 className="weather-title">
          Temperature for {item.main.day} : {item.main.temp} °C
        </h3>
      </div>
    );
  });
};

const WeatherCarousel = () => (
  <Carousel autoplay className="carousel-layout">
    {weatherItems()}
  </Carousel>
);

export default WeatherCarousel;
