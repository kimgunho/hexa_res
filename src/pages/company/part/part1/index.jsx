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
            대면적이면서 안정적인 AAO 소재를 경제적으로 제조하는 독보적인 기술을
            확보, 필터, 센서, CNT 등 AAO 소재 기반 응용 제품에 대한 연구 개발을
            통해 첨단 소재 산업의 새로운 지평을 열고자 합니다
          </IntroDesc>
        </IntroBox>

        <HistoryBox>
          <HistoryList>
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
                key={license.title}
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
