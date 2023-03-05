import slide01 from "../../../../assets/images/main/part3/card1.png";

import { H2Title } from "../../../../component/global/h2Title";
import { Layout } from "../../../../component/layout";

import {
  Wrapper,
  Container,
  Card,
  CardImg,
  Box,
  Title,
  Desc,
  MoreLink,
  NoImage,
} from "./style";

export const Part3 = () => {
  const itemArr = [
    {
      image: slide01,
      title: "대면적 AAO",
      desc: "Anisotropic Ceramic Membranes from self-organized nanoporous alumina",
      link: "/",
    },
    {
      image: null,
      title: "대기공 AAO",
      desc: "Anisotropic Ceramic Membranes from self-organized nanoporous alumina",
      link: "/",
    },
    {
      image: null,
      title: "ALD 코팅 AAO",
      desc: "Anisotropic Ceramic Membranes from self-organized nanoporous alumina",
      link: "/",
    },
    {
      image: null,
      title: "NANO Material",
      desc: "Anisotropic Ceramic Membranes from self-organized nanoporous alumina",
      link: "/",
    },
  ];

  return (
    <Wrapper>
      <Layout>
        <H2Title text="상세 제품" color="#fff" />
        <Container>
          {itemArr.map((item) => {
            return (
              <Card>
                {item.image ? <CardImg src={item.image} alt="" /> : <NoImage />}

                <Box>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <MoreLink to={item.link}>자세히 보기</MoreLink>
                </Box>
              </Card>
            );
          })}
        </Container>
      </Layout>
    </Wrapper>
  );
};
