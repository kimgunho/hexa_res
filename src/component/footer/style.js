import styled from "styled-components";

export const MainFooter = styled.footer`
  background-color: #121212;
  padding: 3.75rem 0;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const SiteInfoBox = styled.div`
  width: 50%;
  border-right: 1px solid #ddd;
`;

export const FooterLogo = styled.img`
  width: 100%;
  max-width: 11.25rem;
  margin-bottom: 1rem;
`;

export const SiteInfo = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.8;
`;

export const CopyRight = styled.span`
  display: block;
  margin-top: 1rem;
`;

export const Customer = styled.div`
  width: 50%;
  display: flex;
  padding-left: 10%;
  flex-direction: column;
  justify-content: center;
`;

export const CustomerLink = styled.a`
  display: block;
  color: #f0f0f0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
`;
