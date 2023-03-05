import background from "../../assets/images/license/subTopBackground.jpg";

import { Layout } from "../../component/layout";
import { SubTop } from "../../component/global/subTop";

import { Wrapper, List, Box, Img, NoImg, Info, Title, Desc } from "./style";

function License() {
  const licenseArr = [
    {
      title: "특허01",
      image: null,
      desc: "Anisotropic Ceramic Membranes from self",
    },
    {
      title: "특허02",
      image: null,
      desc: "Anisotropic Ceramic Membranes from self",
    },
    {
      title: "특허03",
      image: null,
      desc: "Anisotropic Ceramic Membranes from self",
    },
    {
      title: "특허04",
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
            <Box key={item.title}>
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
