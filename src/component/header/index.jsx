import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

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
  MobileButton,
} from "./style";

export const Header = () => {
  const [isMobileGnbShow, setIsMobileGnbShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileGnbShow(false);
  }, [location.pathname]);

  return (
    <MainHeader isMain={Boolean(location.pathname === "/")}>
      <Layout>
        <FlexBox>
          <LogoLink to={"/"}>
            {Boolean(location.pathname === "/") && (
              <Logo src={LOGO_GRAY} alt="헥사프로 로고" />
            )}
            {location.pathname !== "/" && (
              <Logo src={LOGO_GRAY} alt="헥사프로 로고" />
            )}
          </LogoLink>
          <MobileButton
            type="button"
            onClick={() => {
              setIsMobileGnbShow((prev) => !prev);
            }}
          >
            {isMobileGnbShow ? <RiCloseFill /> : <FiAlignRight />}
          </MobileButton>
          <Gnb isMobile={isMobileGnbShow}>
            <li>
              <GnbLink
                color={location.pathname === "/company" ? "#1d7fbe" : "#333"}
                to="/company"
              >
                회사소개
              </GnbLink>
            </li>
            <li>
              <GnbLink
                color={location.pathname === "/stack" ? "#1d7fbe" : "#333"}
                to="/stack"
              >
                핵심기술
              </GnbLink>
            </li>
            <li>
              <GnbLink
                color={location.pathname === "/product" ? "#1d7fbe" : "#333"}
                to="/product"
              >
                제품
              </GnbLink>
            </li>
            <li>
              <GnbLink
                color={location.pathname === "/license" ? "#1d7fbe" : "#333"}
                to="license"
              >
                특허/연구
              </GnbLink>
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
