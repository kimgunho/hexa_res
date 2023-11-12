import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../../styles/common";

import background from "../../../../assets/images/main/part4/background.jpg";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 50vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 6.25rem;
`;

export const AbsoluteBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 1290px;
  padding: 2rem;

  @media ${device.tablet} {
    /* height: 100%; */
  }
`;

export const FlexBox = styled.div`
  margin-top: 2rem;
  display: flex;
  /* justify-content: center; */

  @media ${device.tablet} {
    flex-direction: column;
    height: 100%;
  }
`;

export const CarouselContainer = styled.div`
  width: 60%;
  border-radius: 1rem;
  overflow: hidden;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Img = styled.img`
  background-color: #fff;
  height: 70vh;
  width: 100%;
  object-fit: cover;

  @media ${device.tablet} {
    height: 25rem;
  }
  @media ${device.mobile} {
    height: 21.25rem;
  }
`;

export const InfoBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 100%;
    padding-left: 0rem;
    padding-top: 3rem;
  }
`;

export const InfoTop = styled.div``;

export const HelpBox = styled.div`
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 3px solid #b1e0fe;

  @media ${device.tablet} {
    margin-top: 3rem;
  }
`;

export const ButtonBox = styled.div`
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  color: #333;
  font-size: 1.25rem;
  width: 2.4rem;
  height: 2.4rem;
`;

export const Title = styled.strong`
  font-size: 2rem;
  color: #fff;
  font-weight: 500;
  margin-bottom: 1rem;
  display: block;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const Date = styled.p`
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const MoreLink = styled(Link)`
  width: fit-content;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: space-between;
  background-color: #1d7fbe;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 1.875rem;
  line-height: 1;

  > svg {
    font-size: 1.25rem;
  }
`;

export const HelpTitle = styled.strong`
  font-size: 1.125rem;
  color: #333;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const HelpDesc = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const MailLink = styled.a`
  background-color: #1d7fbe;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  width: fit-content;
  padding: 0.5rem 1rem;
`;
