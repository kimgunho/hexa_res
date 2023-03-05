import { useState } from "react";

import part01Logo from "../../../../assets/images/company/part01_logo.jpg";
import licenseImage01 from "../../../../assets/images/company/license01.jpg";
import licenseImage02 from "../../../../assets/images/company/license02.jpg";
import licenseImage03 from "../../../../assets/images/company/license03.jpg";

import { Layout } from "../../../../component/layout";

import {
  Wrapper,
  IntroBox,
  IntroDesc,
  IntroTitle,
  HistoryBox,
  HistoryList,
  CompanyLogo,
  LicenseBox,
  Info,
  LicenseTitle,
  LicenseButton,
  ImageBox,
  LicenseImg,
} from "./style";
export const Part1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const licenseArr = [
    {
      title: "벤처기업확인서",
      image: licenseImage01,
    },
    {
      title: "기업부설연구소 인정서",
      image: licenseImage02,
    },
    {
      title: "유해화학물질 사용업 허가증",
      image: licenseImage03,
    },
  ];

  return (
    <Wrapper>
      <Layout>
        <IntroBox>
          <IntroTitle>주식회사 헥사프로는</IntroTitle>
          <IntroDesc>
            엑소좀 분리,정제 기술인 분리막(멤브레인)개발에 기반을 둔 회사
            입니다. 고분자 화합물을 재료로 제조된 입자분리를 위한 멤브레인은
            생체 물질 분리과정에서 다양한 문제점이 노출 됩니다. 저희는 기존
            고분자 소재 멤브레인의 한계를 극복할 새로운 소재를 연구 개발 하고
            있습니다. 또한, 수입산 고분자 화합물을 대체할 소재 및 멤브레인 제품
            개발에 주력 하고 있습니다.
          </IntroDesc>
        </IntroBox>

        <HistoryBox>
          <HistoryList>
            <li>헥사프로는 AAO 기반 소재를 개발하는 소부장 스타트업</li>
            <li>2022년 4월 설립</li>
            <li>2022년 8월 팁스 선정</li>
            <li>2022년 8월 벤처기업 확인</li>
            <li>2022년 11월 기업부설연구소 설립</li>
          </HistoryList>
          <CompanyLogo src={part01Logo} alt="" />
        </HistoryBox>

        <LicenseBox>
          <Info>
            <LicenseTitle>인증 및 확인서</LicenseTitle>
            {licenseArr.map((license, index) => (
              <LicenseButton
                isActive={activeIndex === index}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                {license.title}
              </LicenseButton>
            ))}
          </Info>
          <ImageBox>
            <LicenseImg src={licenseArr[activeIndex].image} alt="" />
          </ImageBox>
        </LicenseBox>
      </Layout>
    </Wrapper>
  );
};
