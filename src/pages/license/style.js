import styled from "styled-components";
import { device } from "../../styles/common";

export const Wrapper = styled.section`
  margin-bottom: 6.25rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Box = styled.li`
  width: calc(24% - 1rem);

  @media ${device.tablet} {
    width: calc(50% - 1rem);
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: contain;
`;

export const NoImg = styled.div`
  width: 100%;
  height: 17.5rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
`;

export const Info = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 0 0 1rem 0;
`;

export const Title = styled.strong`
  display: block;
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.6;
  border-bottom: 1px solid #ddd;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.8;
  font-weight: 400;
`;
