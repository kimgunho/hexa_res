import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles/common";

export const MainHeader = styled.header`
  width: 100%;
  position: ${(props) => (props.isMain ? "fixed" : "sticky")};
  border-bottom: ${(props) => (props.isScroll ? "1px solid #ddd" : "none")};
  top: 0;
  left: 0;
  padding: 1rem 0;
  z-index: 50;
  background-color: ${(props) => {
    if (!props.isMain) {
      return "#fff";
    }
    if (props.isScroll) {
      return "#fff";
    }
  }};

  @media ${device.tablet} {
  }
  @media ${device.mobile} {
  }
`;

export const MobileButton = styled.button`
  display: none;

  @media ${device.tablet} {
    display: block;
    font-size: 2.5rem;
    color: #1d7fbe;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  width: 11.25rem;
  display: block;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Gnb = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 46.25rem;

  @media ${device.tablet} {
    display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    position: fixed;
    left: 0;
    width: 80%;
    top: 0;
    bottom: 0;
    background-color: #1d7fbe;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.24);
  }

  > li {
    font-size: 1.25rem;
    font-weight: 500;

    @media ${device.tablet} {
      font-size: 1.5rem;
    }
  }
`;

export const GnbLink = styled(Link)`
  color: ${(props) => props.color};

  @media ${device.tablet} {
    color: #fff;
  }
`;

export const MailButton = styled.a`
  color: #333;

  @media ${device.tablet} {
    color: #fff;
  }
`;
