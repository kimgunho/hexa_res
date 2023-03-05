import background from "../../assets/images/license/subTopBackground.jpg";

import { Layout } from "../../component/layout";
import { SubTop } from "../../component/global/subTop";

import { Wrapper, List, Box, Img, NoImg, Info, Title, Desc } from "./style";

function License() {
  const licenseArr = [
    {
      title:
        "양극산화 알루미늄 기판의 제조 방법 및 이에 의하여 제조된 양극산화 알루미늄 기판",
      image: null,
      desc: "Anisotropic Ceramic Membranes from self",
    },
    {
      title:
        "양극산화 알루미늄 기판의 제조 방법 및 이에 의하여 제조된 양극산화 알루미늄 기판",
      image: null,
      desc: "Anisotropic Ceramic Membranes from self",
    },
    {
      title: "양극산화 알루미늄 기판 및 이의 제조 방법",
      image: null,
      desc: "Anisotropic Ceramic Membranes from self",
    },
    {
      title: "단백질 분리를 위한 양극산화 알루미늄 기판 및 이의 제조 방법",
      image: null,
      desc: "Anisotropic Ceramic Membranes from self",
    },
  ];
  return (
    <Wrapper>
      <SubTop text="특허" image={background} />
      <Layout>
        <List>
          {licenseArr.map((item, index) => (
            <Box key={`${item.title}${index}`}>
              {item.image ? (
                <Img src={item.image} alt="" />
              ) : (
                <NoImg>특허이미지 준비중</NoImg>
              )}
              <Info>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
              </Info>
            </Box>
          ))}
        </List>
      </Layout>
    </Wrapper>
  );
}

export default License;
