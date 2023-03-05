import LOGO_WHITE from "../../assets/images/global/logo_white.png";
import { Layout } from "../layout";

import { siteInfo } from "../../constant/info";
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
              대표 : {siteInfo.ceo} | 주소 : {siteInfo.address}
              <br />
              연락처 : {siteInfo.telView} | 팩스 : {siteInfo.fax}
              <CopyRight>© 2023 HEXAPRO. All Rights Reserved.</CopyRight>
            </SiteInfo>
          </SiteInfoBox>
          <Customer>
            <CustomerLink href={`mailto:${siteInfo.helpEmail}`}>
              이메일 : {siteInfo.helpEmail}
            </CustomerLink>
            <CustomerLink href={`tel:${siteInfo.tel}`}>
              연락처 : {siteInfo.telView}
            </CustomerLink>
          </Customer>
        </FlexBox>
      </Layout>
    </MainFooter>
  );
};
