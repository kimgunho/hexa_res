import background from "../../assets/images/license/subTopBackground.jpg";
import licenseImage01 from "../../assets/images/license/1.png";
import licenseImage02 from "../../assets/images/license/2.png";
import licenseImage03 from "../../assets/images/license/3.png";
import licenseImage04 from "../../assets/images/license/4.png";
import licenseImage05 from "../../assets/images/license/5.png";
import licenseImage06 from "../../assets/images/license/6.png";
import licenseImage07 from "../../assets/images/license/7.png";

import { Layout } from "../../component/layout";
import { SubTop } from "../../component/global/subTop";

import { Wrapper, List, Box, Img } from "./style";

function License() {
  const licenseArr = [
    {
      image: licenseImage01,
    },
    {
      image: licenseImage02,
    },
    {
      image: licenseImage03,
    },
    {
      image: licenseImage04,
    },
    {
      image: licenseImage05,
    },
    {
      image: licenseImage06,
    },
    {
      image: licenseImage07,
    },
  ];
  return (
    <Wrapper>
      <SubTop text="특허" image={background} />
      <Layout>
        <List>
          {licenseArr.map((item, index) => (
            <Box key={`${item.title}${index}`}>
              <Img src={item.image} alt="" />
            </Box>
          ))}
        </List>
      </Layout>
    </Wrapper>
  );
}

export default License;
