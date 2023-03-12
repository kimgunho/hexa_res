import { FiChevronRight } from "react-icons/fi";

import mainVideo from "../../../../assets/video/main.mp4";

import { Layout } from "../../../../component/layout";

import {
  Wrapper,
  TitleBox,
  Title,
  FlexBox,
  Desc,
  MoreButton,
  Background,
  Video,
} from "./style";
export const Part1 = () => {
  return (
    <Wrapper>
      <Layout>
        <FlexBox>
          <TitleBox>
            <Title>
              We develop a new polymer <br />
              material membrane
            </Title>
            <Desc>
              저희는 기존 고분자 소재 멤브레인의 한계를 극복할 새로운 소재를
              연구 개발 하고 있습니다.
              <br /> 또한, 수입산 고분자 화합물을 대체할 소재 및 멤브레인 제품
              개발에 주력 하고 있습니다.
            </Desc>
            <MoreButton to={"/company"}>
              자세히보기 <FiChevronRight />
            </MoreButton>
          </TitleBox>
        </FlexBox>
      </Layout>
      <Background>
        <Video autoPlay={true} muted loop poster={mainVideo}>
          <source src={mainVideo} type="video/mp4" />
        </Video>
      </Background>
    </Wrapper>
  );
};
