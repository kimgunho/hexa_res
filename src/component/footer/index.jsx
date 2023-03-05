import LOGO_WHITE from "../../assets/images/global/logo_white.png";
import { Layout } from "../layout";

import {
  MainFooter,
  FlexBox,
  SiteInfo,
  SiteInfoBox,
  FooterLogo,
  CopyRight,
  Customer,
  CustomerLink,
} from "./style";

export const Footer = () => {
  return (
    <MainFooter>
      <Layout>
        <FlexBox>
          <SiteInfoBox>
            <FooterLogo src={LOGO_WHITE} alt="" />
            <SiteInfo>
              대표 : 김태선 | 주소 : 서울광역시 방배동 남동구 12-421 아명빌딩
              <br />
              연락처 : 010-1234-1234 | 팩스 : 82-120124-1212
              <CopyRight>© 2023 HexaPro. All Rights Reserved.</CopyRight>
            </SiteInfo>
          </SiteInfoBox>
          <Customer>
            <CustomerLink href="mailto:mail@naver.com">
              이메일 : mail@hexapro.co.kr
            </CustomerLink>
            <CustomerLink href="tel:01023121234">
              연락처 : 010-1212-1234
            </CustomerLink>
          </Customer>
        </FlexBox>
      </Layout>
    </MainFooter>
  );
};
