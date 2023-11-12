import topImage from "../../../../assets/images/stack/part2/top.png";
import semImage from "../../../../assets/images/stack/part2/sem.jpg";
import tech from "../../../../assets/images/stack/part2/tech01.mp4";
import tech2 from "../../../../assets/video/other.mp4";
import TEMP_IMG1 from "../../../../assets/images/stack/part2/img1.png";
import TEMP_IMG2 from "../../../../assets/images/stack/part2/img2.png";
import TEMP_IMG3 from "../../../../assets/images/stack/part2/img3.png";
import TEMP_IMG4 from "../../../../assets/images/stack/part2/img4.png";
import TEMP_IMG5 from "../../../../assets/images/stack/part2/img5.png";
import TEMP_IMG6 from "../../../../assets/images/stack/part2/img6.png";
import TEMP_IMG7 from "../../../../assets/images/stack/part2/img7.png";

import { Layout } from "../../../../component/layout";

import {
  Wrapper,
  Title,
  Desc,
  FlexBox,
  Left,
  Img,
  ImgFlexBox,
  Video,
  VideoBox,
} from "./style";
export const Part2 = () => {
  return (
    <Wrapper>
      <Layout>
        <Title>헥사프로의 AAO</Title>
        <Desc>
          기공 크기 및 기공 균일도가 높고 구부려도 깨지지 유연성 있는 소재로
          확인
        </Desc>

        <FlexBox>
          <Left>
            <Img src={topImage} alt="" />

            <Img src={semImage} alt="" />

            <ImgFlexBox>
              <div>
                <img src={TEMP_IMG1} alt="" />
                <p>기본</p>
              </div>
              <div>
                <img src={TEMP_IMG2} alt="" />
                <p>TOP</p>
              </div>
              <div>
                <img src={TEMP_IMG3} alt="" />
                <p>BOTTOM</p>
              </div>
              <div>
                <img src={TEMP_IMG4} alt="" />
                <p>단면</p>
              </div>
              <div>
                <img src={TEMP_IMG5} alt="" />
                <p>X 150,000</p>
              </div>
              <div>
                <img src={TEMP_IMG6} alt="" />
                <p>X 200,000</p>
              </div>
              <div>
                <img src={TEMP_IMG7} alt="" />
                <p>X 100,000</p>
              </div>
            </ImgFlexBox>
          </Left>
          <VideoBox>
            <Video autoPlay={true} muted loop>
              <source src={tech} type="video/mp4" />
            </Video>
            <Video autoPlay={true} muted loop>
              <source src={tech2} type="video/mp4" />
            </Video>
          </VideoBox>
        </FlexBox>
      </Layout>
    </Wrapper>
  );
};
