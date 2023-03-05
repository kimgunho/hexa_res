import { useRef } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import slide01 from "../../../../assets/images/main/part2/slide1.jpg";

import Slider from "react-slick";
import { H2Title } from "../../../../component/global/h2Title";
import { Layout } from "../../../../component/layout";

import {
  Wrapper,
  FlexBox,
  Info,
  H3Title,
  List,
  MoreLink,
  CarouselContainer,
  Img,
  ButtonBox,
  Button,
} from "./style";
export const Part2 = () => {
  const sliderRef = useRef(null);

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Wrapper>
      <Layout>
        <H2Title text="핵심기술" />
        <FlexBox>
          <Info>
            <H3Title>AAO</H3Title>
            <List>
              <li>What is AAO</li>
              <li>대면적 Flexible AAO</li>
              <li>AAO 제조 기술</li>
              <li>AAO 를 이용한 엑소좀 분리 기술</li>
              <li>AAO 표면 코팅 기술</li>
              <li>AAO 를 templet 으로 사용한 nano material 제조 기술</li>
              <li>AAO 응용분야</li>
            </List>
            <MoreLink to="/stack">
              자세히보기 <FiChevronRight />
            </MoreLink>
          </Info>
          <CarouselContainer>
            <Slider ref={sliderRef} infinite autoplay arrows={false}>
              <Img src={slide01} alt="" />
              <Img src={slide01} alt="" />
              <Img src={slide01} alt="" />
              <Img src={slide01} alt="" />
            </Slider>
            <ButtonBox>
              <Button type="button" onClick={gotoPrev}>
                <FiChevronLeft />
              </Button>
              <Button type="button" onClick={gotoNext}>
                <FiChevronRight />
              </Button>
            </ButtonBox>
          </CarouselContainer>
        </FlexBox>
      </Layout>
    </Wrapper>
  );
};
