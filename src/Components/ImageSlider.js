import React, { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import styled from "styled-components";

const SliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 80%;
  height: 100%;
  margin: auto;
  display: inline;
  object-fit: contain;
  border-radius: 10px;
`;

const Slide = styled.div`
  height: 200px;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition-duration: ${(props) => (props.isActive ? "1s" : "1s ease")};
  transform: ${(props) => (props.isActive ? "scale(1.08)" : "")};
  text-align: center;
`;

const LeftArr = styled(IoIosArrowDropleftCircle)`
  font-size: 40px;
  z-index: 1001;
`;

const RightArr = styled(IoIosArrowDroprightCircle)`
  font-size: 40px;
  z-index: 1001;
`;

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <Slider>
      <LeftArr onClick={prevSlide} />
      {SliderData.map((slide, index) => {
        return (
          <Slide isActive={index === current} key={index}>
            {index === current && (
              <Image src={slide.image} alt="travel image" />
            )}
          </Slide>
        );
      })}
      <RightArr onClick={nextSlide} />
    </Slider>
  );
};

export default ImageSlider;
