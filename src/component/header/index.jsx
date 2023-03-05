import { useLocation } from "react-router-dom";

import LOGO_WHITE from "../../assets/images/global/logo_white.png";
import LOGO_GRAY from "../../assets/images/global/logo_gray.png";

import { Layout } from "../layout";

import { siteInfo } from "../../constant/info";
import {
  MainHeader,
  FlexBox,
  LogoLink,
  Logo,
  Gnb,
  GnbLink,
  MailButton,
} from "./style";

export const Header = () => {
  const location = useLocation();
  return (
    <MainHeader>
      <Layout>
        <FlexBox>
          <LogoLink to={"/"}>
            <Logo
              src={location.pathname === "/" ? LOGO_WHITE : LOGO_GRAY}
              alt="헥사프로 로고"
            />
          </LogoLink>
          <Gnb>
            <li>
              <GnbLink to="/company">회사소개</GnbLink>
            </li>
            <li>
              <GnbLink to="/stack">핵심기술</GnbLink>
            </li>
            <li>
              <GnbLink to="/product">제품</GnbLink>
            </li>
            <li>
              <GnbLink to="license">특허</GnbLink>
            </li>
            <li>
              <MailButton href={`mailto:${siteInfo.helpEmail}`}>
                문의
              </MailButton>
            </li>
          </Gnb>
        </FlexBox>
      </Layout>
    </MainHeader>
  );
};
