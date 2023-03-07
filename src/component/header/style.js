import styled from "styled-components";
import { Link } from "react-router-dom";

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

  > li {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props) => props.color};
  }
`;

export const GnbLink = styled(Link)`
  color: ${(props) => props.color};
`;

export const MailButton = styled.a``;
