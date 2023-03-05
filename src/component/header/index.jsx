import { useState, useEffect } from "react";
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
  const [isScroll, setIsScroll] = useState(window.scrollY);
  const location = useLocation();

  useEffect(() => {
    const handleNavigation = (e) => {
      const window = e.currentTarget;
      setIsScroll(window.scrollY);
    };

    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [isScroll]);

  return (
    <MainHeader isScroll={isScroll > 10} isMain={location.pathname === "/"}>
      <Layout>
        <FlexBox>
          <LogoLink to={"/"}>
            {location.pathname === "/" && (
              <Logo
                src={isScroll <= 10 ? LOGO_WHITE : LOGO_GRAY}
                alt="헥사프로 로고"
              />
            )}
            {location.pathname !== "/" && (
              <Logo src={LOGO_GRAY} alt="헥사프로 로고" />
            )}
          </LogoLink>
          <Gnb color={isScroll < 10 && location.pathname === "/"}>
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
