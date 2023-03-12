import styled from "styled-components";
import { device } from "../../../../styles/common";

export const Wrapper = styled.section`
  margin-bottom: 5rem;
`;

export const Title = styled.strong`
  font-size: 2rem;
  color: #333;
  display: block;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  background-color: ${(props) => props.color};
  white-space: nowrap;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.25rem;
  padding: 0.5rem 2rem;
  border-radius: 0.625rem;

  @media ${device.mobile} {
    white-space: normal;
  }
`;

export const Container = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  margin-bottom: 3rem;
`;

export const NoData = styled.div`
  font-size: 1.25rem;
  text-align: center;
  color: #4a4a4a;
  padding: 6.25rem 0;
`;

export const List = styled.ul`
  list-style: disc;
  padding-left: 2rem;
  margin-bottom: 2rem;
  > li {
    font-size: 1.25rem;
    color: #333;
    line-height: 1.8;
    font-weight: 400;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Img = styled.img`
  width: 33.33336%;
  height: 18.75rem;
  object-fit: cover;

  @media ${device.mobile} {
    width: 100%;
    height: 15rem;
  }
`;

export const Video = styled.video`
  width: 100%;
`;
