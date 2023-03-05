import image01 from "../../../../assets/images/stack/part1/image01.jpg";
import image02 from "../../../../assets/images/stack/part1/image02.jpg";
import image03 from "../../../../assets/images/stack/part1/image03.jpg";

import { Layout } from "../../../../component/layout";

import { Wrapper, Title, List, FlexBox, Left, Right, Img } from "./style";

export const Part1 = () => {
  return (
    <Wrapper>
      <Layout>
        <Title>What is AAO</Title>
        <List>
          <li>
            양극산화알루미늄은 알루미늄을 양극으로 하여 전해 처리함으로써
            인공적으로 산화 피막을 생성시키는 피막 공정을 말함{" "}
          </li>
          <li>
            피막 대상인 알루미늄을 양극으로 하고, 산 용액에서 전기 분해를
            함으로써 알루미늄 표면에 산화 피막을 생성하게 되는데, 이때 산화된
            알루미늄에는 육각형 구조의 미세한 구멍이 생김
          </li>
          <li>
            AAO의 종류는 2가지로 미세한 구멍을 그대로 포함하는 porous type AAO
            와 미세한 구멍에 산화피막이 스며드는 봉공 처리 공정을 추가한 barrier
            type AAO가 있으며, 미세한 구멍에 염료를 추가하면 다양한 색상으로
            제조됨
          </li>
          <li>
            1930년 알루미늄 표면의 anodic alumina film 을 형성하는 기술 개발
          </li>
          <li>
            1974년 출원 등록 US 3850762 -AAO 형성에 대한 원천 특허 (출원인
            Boeing company)
          </li>
        </List>
        <FlexBox>
          <Left>
            <Img src={image01} alt="" />
            <Img src={image02} alt="" />
          </Left>
          <Right>
            <Img src={image03} alt="" />
          </Right>
        </FlexBox>
      </Layout>
    </Wrapper>
  );
};
