import styled from "styled-components";
import { device } from "../../../../styles/common";

export const Wrapper = styled.section``;

export const IntroBox = styled.div`
  margin-bottom: 3rem;
`;

export const IntroTitle = styled.strong`
  display: block;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const IntroDesc = styled.p`
  width: 100%;
  max-width: 50rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  color: #4a4a4a;
  word-break: keep-all;
`;

export const HistoryBox = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HistoryList = styled.ul`
  padding-left: 2rem;
  list-style: disc;

  @media ${device.tablet} {
    width: 100%;
  }

  > li {
    font-size: 1.25rem;
    color: #333;
    line-height: 1.8;
  }
`;

export const CompanyLogo = styled.img`
  width: 100%;
  max-width: 25rem;
  object-fit: cover;

  @media ${device.tablet} {
    margin-top: 2rem;
  }
`;

export const LicenseBox = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  width: 14.375rem;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const LicenseTitle = styled.strong`
  display: block;
  font-size: 2rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const LicenseButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  background-color: ${(props) => (props.isActive ? "#1D7FBE" : "#333")};
  color: #fff;
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  @media ${device.tablet} {
    width: fit-content;
  }
`;

export const ImageBox = styled.div`
  width: 50rem;
  /* height: 31.25rem; */

  > img {
    width: 100%;
    height: 31.25rem;
    object-fit: contain;
  }
  /* overflow: hidden; */
  /* overflow-y: scroll; */
  /* border: 5px solid #1d7fbe; */

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
  }
`;

export const LicenseImg = styled.img`
  /* width: 100%; */
`;
