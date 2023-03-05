import { H2Title } from "../h2Title";
import { Layout } from "../../layout";

import { Wrapper, ImageBox, Img } from "./style";

export const SubTop = ({ text, image }) => {
  return (
    <Wrapper>
      <Layout>
        <H2Title text={text} />
        <ImageBox>
          <Img src={image} alt="" draggable={false} />
        </ImageBox>
      </Layout>
    </Wrapper>
  );
};
