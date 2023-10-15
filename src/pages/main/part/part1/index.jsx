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
              AAO 및 AAO로부터 제조되는
              <br /> 응용 소재 개발 전문기업
            </Title>
            <Desc>
              AAO 소재의 독보적 제조방법에 대한 기술력을 바탕으로
              <br />
              필터·센서·템플릿 등 다양한 AAO 응용제품을 연구개발하고 있습니다
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
