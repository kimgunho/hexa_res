import { useRef, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Slider from "react-slick";

import sample from "../../../../assets/images/main/part4/sample.jpg";

import { H2Title } from "../../../../component/global/h2Title";

import { siteInfo } from "../../../../constant/info";
import {
  Wrapper,
  AbsoluteBottom,
  FlexBox,
  CarouselContainer,
  Img,
  InfoBox,
  ButtonBox,
  Button,
  Title,
  Desc,
  Date,
  MoreLink,
  InfoTop,
  HelpBox,
  HelpDesc,
  HelpTitle,
  MailLink,
} from "./style";

export const Part4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef(null);

  const gotoNext = () => {
    slideRef.current.slickNext();
  };

  const gotoPrev = () => {
    slideRef.current.slickPrev();
  };

  const licenseArr = [
    {
      title: "특허이름 01",
      desc: "특허에 관련된 간략한 소개글을 작성해주시면 해당 글이 수정될 예정입니다.",
      image: sample,
      date: "2022년 09월 12일",
    },
    {
      title: "특허이름 02",
      desc: "특허에 관련된 간략한 소개글을 작성해주시면 해당 글이 수정될 예정입니다.",
      image: sample,
      date: "2022년 19월 22일",
    },
  ];

  return (
    <Wrapper>
      <AbsoluteBottom>
        <H2Title text="특허" color="#fff" />
        <FlexBox>
          <CarouselContainer>
            <Slider
              ref={slideRef}
              arrows={false}
              beforeChange={(current) => {
                setActiveIndex(current);
              }}
            >
              {licenseArr.map((license) => {
                return <Img key={license.title} src={license.image} alt="" />;
              })}
            </Slider>
          </CarouselContainer>
          <InfoBox>
            <InfoTop>
              <ButtonBox>
                <Button type="button" onClick={gotoPrev}>
                  <FiChevronLeft />
                </Button>
                <Button type="button" onClick={gotoNext}>
                  <FiChevronRight />
                </Button>
              </ButtonBox>
              <Title>{licenseArr[activeIndex].title}</Title>
              <Desc>{licenseArr[activeIndex].desc}</Desc>
              <Date>{licenseArr[activeIndex].date}</Date>
              <MoreLink to="/license">
                자세히 보기 <FiChevronRight />
              </MoreLink>
            </InfoTop>
            <HelpBox>
              <HelpTitle>문의 사항</HelpTitle>
              <HelpDesc>
                헥사프로와 AAO 기반 공동연구를 희망하거나
                <br />
                제품 및 구매 관련 문의가 있는 경우
                <br />
                아래 메일로 연락주시기 바랍니다
              </HelpDesc>
              <MailLink href={`mailto:${siteInfo.helpEmail}`}>
                {siteInfo.helpEmail}
              </MailLink>
            </HelpBox>
          </InfoBox>
        </FlexBox>
      </AbsoluteBottom>
    </Wrapper>
  );
};
