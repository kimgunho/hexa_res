import { useState, useRef } from "react";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { Layout } from "../../../../component/layout";

import { siteInfo } from "../../../../constant/info";
import { productArr } from "./product";
import {
  Wrapper,
  GnbButton,
  WaitBox,
  FlexBox,
  CarouselContainer,
  ArrowButtonBox,
  ArrowButton,
  ProductInfoBox,
  Title,
  Desc,
  Option,
  BuyDesc,
  HelpButton,
  DownloadButton,
} from "./style";
export const Part1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef(null);
  const gotoPrev = () => {
    slideRef.current.slickPrev();
  };
  const gotoNext = () => {
    slideRef.current.slickNext();
  };

  return (
    <Wrapper>
      <Layout>
        <FlexBox>
          {productArr.map((item, index) => (
            <GnbButton
              isActive={activeIndex === index}
              key={item.title}
              type="button"
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {item.title}
            </GnbButton>
          ))}
        </FlexBox>

        {productArr[activeIndex].isWaiting && <WaitBox>준비중입니다.</WaitBox>}

        {!productArr[activeIndex].isWaiting && (
          <FlexBox>
            <CarouselContainer>
              <Slider ref={slideRef} arrows={false}>
                {productArr[activeIndex].image.map((image, index) => (
                  <img
                    key={`product${activeIndex}${index}`}
                    src={image}
                    alt=""
                  />
                ))}
              </Slider>
              <ArrowButtonBox>
                <ArrowButton type="button" onClick={gotoPrev}>
                  <FiChevronLeft />
                </ArrowButton>
                <ArrowButton type="button" onClick={gotoNext}>
                  <FiChevronRight />
                </ArrowButton>
              </ArrowButtonBox>
            </CarouselContainer>
            <ProductInfoBox>
              <Title>{productArr[activeIndex].title}</Title>
              <Desc>{productArr[activeIndex].desc}</Desc>
              <Option>
                {productArr[activeIndex].size && (
                  <li>Size : {productArr[activeIndex].size}</li>
                )}
                {productArr[activeIndex].PoreSize && (
                  <li>Pore Size : {productArr[activeIndex].PoreSize}</li>
                )}
                {productArr[activeIndex].thickness && (
                  <li>thickness : {productArr[activeIndex].thickness}</li>
                )}
              </Option>
              <BuyDesc>구매문의</BuyDesc>
              <FlexBox>
                <HelpButton href={`mailto:${siteInfo.helpEmail}`}>
                  {siteInfo.helpEmail}
                </HelpButton>
                {productArr[activeIndex].download && (
                  <DownloadButton
                    download
                    href={productArr[activeIndex].download}
                  >
                    브로셔 다운로드
                  </DownloadButton>
                )}
              </FlexBox>
            </ProductInfoBox>
          </FlexBox>
        )}
      </Layout>
    </Wrapper>
  );
};
