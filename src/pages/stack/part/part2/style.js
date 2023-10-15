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

export const ImgFlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > div {
    width: 25%;
    display: flex;
    flex-direction: column;

    > img {
      width: 100%;
      object-fit: cover;
      height: 12.5rem;
    }
    > p {
      font-size: 0.875rem;
      padding-bottom: 0.375rem;
    }
  }
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
  font-weight: 400;
  word-break: keep-all;
  letter-spacing: -1px;
  line-height: 1.8;
  margin-bottom: 3rem;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 60%;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 18.75rem;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const Video = styled.video`
  width: 40%;

  @media ${device.mobile} {
    width: 100%;
    height: 31.25rem;
  }
`;

export const SubDesc = styled.p`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #333;
  font-weight: 400;

  > span {
    color: #1d7fbe;
    font-weight: 500;
  }
`;
