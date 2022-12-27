import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import carouselImg1 from "../../../sampleimg/img1.png";
import carouselImg2 from "../../../sampleimg/img2.png";
import carouselImg3 from "../../../sampleimg/img3.png";

export default class SimpleSlider extends Component {
  render() {
    return (
      <div>
        <Slider {...settings}>
          <CarouselBox>
            <CarouselImg src={carouselImg1} />
            {/* <CarouselTitle>1</CarouselTitle>
            <CarouselContent>1번 본문</CarouselContent> */}
          </CarouselBox>
          <CarouselBox>
            <CarouselImg src={carouselImg2} />
            {/* <CarouselTitle>2</CarouselTitle>
            <CarouselContent>2번 본문</CarouselContent> */}
          </CarouselBox>
          <CarouselBox>
            <CarouselImg src={carouselImg3} />
            {/* <CarouselTitle>3</CarouselTitle>
            <CarouselContent>3번 본문</CarouselContent> */}
          </CarouselBox>
        </Slider>
      </div>
    );
  }
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0px",
  centerMode: true,
};

const CarouselBox = styled.div`
  /* border: 2px solid black; */
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 400px;
`;

const CarouselTitle = styled.h3`
  font-size: 25px;
  text-align: center;
`;

const CarouselContent = styled.h3`
  font-size: 16px;
  text-align: center;
`;
