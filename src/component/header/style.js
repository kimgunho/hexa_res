import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid #f0f0f0;
  padding: 1rem 0;
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
    color: #333;
    font-weight: 500;
  }
`;

export const GnbLink = styled(Link)``;

export const MailButton = styled.a``;
