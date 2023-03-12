import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../../styles/common";

import background from "../../../../assets/images/main/part2/background.jpg";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.tablet} {
    padding: 6rem 0;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  width: 30%;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const H3Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  line-height: 2;
  padding-left: 2rem;
`;

export const List = styled.ul`
  list-style: disc;
  padding-left: 2rem;

  > li {
    color: #fff;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const MoreLink = styled(Link)`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1rem;
  > svg {
    font-size: 1.25rem;
  }

  @media ${device.tablet} {
    right: 1rem;
    top: 1rem;
    left: auto;
    bottom: auto;
  }
`;

export const CarouselContainer = styled.div`
  width: 70%;
  position: relative;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ButtonBox = styled.div`
  position: absolute;
  bottom: 1px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
`;

export const Button = styled.button`
  font-size: 1.25rem;
  color: #fff;
  padding: 0.5rem;
`;
