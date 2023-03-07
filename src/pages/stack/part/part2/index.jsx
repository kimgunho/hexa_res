import topImage from "../../../../assets/images/stack/part2/top.png";
import semImage from "../../../../assets/images/stack/part2/sem.jpg";
import tech from "../../../../assets/images/stack/part2/tech01.mp4";

import { Layout } from "../../../../component/layout";

import {
  Wrapper,
  Title,
  Desc,
  FlexBox,
  Left,
  Img,
  Video,
  SubDesc,
} from "./style";
export const Part2 = () => {
  return (
    <Wrapper>
      <Layout>
        <Title>헥사프로의 AAO</Title>
        <Desc>
          Peel off 공정에 의해 랩스케일에서 100*150mm, 200*200mm 면적의 AAO제조
          성공.
          <br /> AAO의 기공 크기 및 기공 균일도가 높고 구부려도 깨지지 유연성
          있는 소재로 확인
        </Desc>

        <FlexBox>
          <Left>
            <Img src={topImage} alt="" />
            <SubDesc>100 * 150 제작 메뉴얼 구축 중</SubDesc>
            <Img src={semImage} alt="" />
            <SubDesc>
              구부려도 깨지지 않는 <span>유연성 확보</span>
            </SubDesc>
          </Left>
          <Video autoPlay={true} muted loop>
            <source src={tech} type="video/mp4" />
          </Video>
        </FlexBox>
      </Layout>
    </Wrapper>
  );
};
