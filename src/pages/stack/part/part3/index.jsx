import { useState } from "react";

import video from "../../../../assets/images/stack/part3/video.mp4";

import { Layout } from "../../../../component/layout";

import { stackArr } from "./stackArr";
import {
  Wrapper,
  Title,
  Nav,
  Button,
  Container,
  NoData,
  List,
  ImgBox,
  Img,
  Video,
} from "./style";
export const Part3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper>
      <Layout>
        <Title>상세 기술 내역</Title>
        <Nav>
          {stackArr.map((stack, index) => (
            <Button
              type="button"
              key={stack.title}
              color={activeIndex === index ? "#1D7FBE" : "#333"}
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {stack.title}
            </Button>
          ))}
        </Nav>

        <Container>
          {stackArr[activeIndex].isWait && <NoData>준비중 입니다.</NoData>}
          {!stackArr[activeIndex].isWait && (
            <>
              <List>
                {stackArr[activeIndex].list.map((stack) => (
                  <li key={stack}>{stack}</li>
                ))}
              </List>
              <ImgBox>
                {stackArr[activeIndex].image.map((img) => (
                  <Img key={img} src={img} alt="" />
                ))}
              </ImgBox>
            </>
          )}
        </Container>
        <Video autoPlay={true} muted loop>
          <source src={video} type="video/mp4" />
        </Video>
      </Layout>
    </Wrapper>
  );
};
